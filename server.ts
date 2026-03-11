import express from "express";
import postgres from "postgres";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize PostgreSQL (Supabase/Railway)
const databaseUrl = process.env.DATABASE_URL || "postgresql://postgres:Oj8eHeoEHso1uhLV@db.ygwuprvlftrzmcupqzhr.supabase.co:5432/postgres";

if (!process.env.DATABASE_URL) {
  console.warn("⚠️ DATABASE_URL not found in environment variables, using Supabase fallback.");
}

// Using 'postgres' library which is better for persistent connections
const sql = postgres(databaseUrl, {
  ssl: 'require',
  connect_timeout: 10,
});

// Initialize Database Table
async function initDb() {
  try {
    console.log("⏳ Initializing PostgreSQL database...");
    const dbHost = new URL(databaseUrl).hostname;
    console.log(`🔗 Connecting to database at: ${dbHost}`);
    
    await sql`
      CREATE TABLE IF NOT EXISTS records (
        id TEXT PRIMARY KEY,
        kv_code TEXT,
        college_name TEXT,
        state TEXT,
        subject_code TEXT,
        subject_name TEXT,
        exam_date TEXT,
        exam_time TEXT,
        total_candidates INTEGER,
        absent_count INTEGER,
        absent_students JSONB,
        created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_records_created_at ON records (created_at DESC)`;
    console.log("✅ Database table 'records' and indexes are ready.");
  } catch (err) {
    console.error("❌ Failed to initialize database:", err);
  }
}

// initDb(); // Called inside startServer now

export const app = express();
app.use(express.json());

// Helper to check DB connection
const checkDb = (res: express.Response) => {
  return true;
};

// SSE Clients for Admin Notifications
const clients: express.Response[] = [];

app.get("/api/notifications", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  clients.push(res);

  req.on("close", () => {
    const index = clients.indexOf(res);
    if (index !== -1) {
      clients.splice(index, 1);
    }
  });
});

// API Routes
app.post("/api/records", async (req, res) => {
  if (!checkDb(res)) return;
  try {
    const record = req.body;
    
    // Use the record's createdAt if provided (for migration), otherwise use current time
    const createdAt = record.createdAt || new Date().toISOString();
    
    await sql!`
      INSERT INTO records (
        id, kv_code, college_name, state, subject_code, subject_name, 
        exam_date, exam_time, total_candidates, absent_count, absent_students, created_at
      ) VALUES (
        ${record.id}, ${record.kvCode}, ${record.collegeName}, ${record.state}, 
        ${record.subjectCode}, ${record.subjectName}, ${record.examDate}, 
        ${record.examTime}, ${record.totalCandidates}, ${record.absentCount}, 
        ${JSON.stringify(record.absentStudents)}, ${createdAt}
      )
      ON CONFLICT (id) DO UPDATE SET
        kv_code = EXCLUDED.kv_code,
        college_name = EXCLUDED.college_name,
        state = EXCLUDED.state,
        subject_code = EXCLUDED.subject_code,
        subject_name = EXCLUDED.subject_name,
        exam_date = EXCLUDED.exam_date,
        exam_time = EXCLUDED.exam_time,
        total_candidates = EXCLUDED.total_candidates,
        absent_count = EXCLUDED.absent_count,
        absent_students = EXCLUDED.absent_students,
        created_at = EXCLUDED.created_at
    `;

    // Notify connected admin clients
    const newRecordEvent = {
      type: "NEW_RECORD",
      record: record
    };
    clients.forEach(client => {
      client.write(`data: ${JSON.stringify(newRecordEvent)}\n\n`);
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal menyimpan rekod ke pangkalan data." });
  }
});

app.get("/api/records", async (req, res) => {
  if (!checkDb(res)) return;
  try {
    console.log("⏳ Sedang mengambil data dari database...");

    // Guna sql template literal
    const data = await sql!`
      SELECT * FROM records ORDER BY created_at DESC
    `;

    console.log(`✅ Berjaya fetch! Jumlah rekod ditemui: ${data.length}`);

    const records = data.map((r: any) => ({
      id: r.id,
      kvCode: r.kv_code,
      collegeName: r.college_name,
      state: r.state,
      subjectCode: r.subject_code,
      subjectName: r.subject_name,
      examDate: r.exam_date,
      examTime: r.exam_time,
      totalCandidates: r.total_candidates,
      absentCount: r.absent_count,
      // PENTING: Neon biasanya auto-parse JSONB, jadi kita pastikan ia diurus dengan betul
      absentStudents: typeof r.absent_students === 'string' ? JSON.parse(r.absent_students) : (r.absent_students || []),
      createdAt: r.created_at
    }));

    res.json(records);
  } catch (err: any) {
    console.error("❌ Ralat ketika fetch data:", err);
    
    res.status(500).json({ 
      error: "Gagal memanggil data dari pangkalan data.", 
      details: err.message || "Ralat tidak diketahui" 
    });
  }
});

app.delete("/api/records/:id", async (req, res) => {
  if (!checkDb(res)) return;
  try {
    await sql!`
      DELETE FROM records WHERE id = ${req.params.id}
    `;
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal memadam rekod." });
  }
});

app.put("/api/records/:id", async (req, res) => {
  if (!checkDb(res)) return;
  try {
    const record = req.body;
    await sql!`
      UPDATE records SET
        kv_code = ${record.kvCode},
        college_name = ${record.collegeName},
        state = ${record.state},
        subject_code = ${record.subjectCode},
        subject_name = ${record.subjectName},
        exam_date = ${record.examDate},
        exam_time = ${record.examTime},
        total_candidates = ${record.totalCandidates},
        absent_count = ${record.absentCount},
        absent_students = ${JSON.stringify(record.absentStudents)}
      WHERE id = ${req.params.id}
    `;
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gagal mengemaskini rekod." });
  }
});

// Vite middleware
async function startServer() {
  // Initialize Database Table first
  await initDb();

  if (process.env.NODE_ENV !== "production" && !process.env.NETLIFY) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else if (process.env.NODE_ENV === "production") {
    app.use(express.static("dist"));
  }

  if (!process.env.NETLIFY) {
    app.listen(3000, "0.0.0.0", () => {
      console.log("Server running on http://localhost:3000");
    });
  }
}

if (import.meta.url === `file://${fileURLToPath(import.meta.url)}`) {
  startServer();
}
