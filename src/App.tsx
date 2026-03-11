import React, { useState, useEffect } from "react";
import { GraduationCap, LayoutDashboard, FilePlus, Users, Lock, LogOut } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import AttendanceForm from "./components/AttendanceForm";
import AttendanceList from "./components/AttendanceList";
import StudentManager from "./components/StudentManager";
import { ExamRecord } from "./types";

export default function App() {
  const [records, setRecords] = useState<ExamRecord[]>([]);
  const [activeTab, setActiveTab] = useState<"form" | "list" | "students">("form");
  const [dbError, setDbError] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    return localStorage.getItem("kvAdminAuth") === "true";
  });
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [pendingTab, setPendingTab] = useState<"list" | "students" | null>(null);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded password for now
    if (password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("kvAdminAuth", "true");
      if (pendingTab) {
        setActiveTab(pendingTab);
      }
      setShowLogin(false);
      setPassword("");
      toast.success("Log masuk admin berjaya!");
    } else {
      toast.error("Kata laluan salah!");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("kvAdminAuth");
    setActiveTab("form");
    toast.success("Log keluar berjaya.");
  };

  const handleTabChange = (tab: "form" | "list" | "students") => {
    if (tab === "form") {
      setActiveTab(tab);
      return;
    }

    if (isAdmin) {
      setActiveTab(tab);
    } else {
      setPendingTab(tab);
      setShowLogin(true);
    }
  };

  const fetchRecords = async () => {
    try {
      setDbError(null);
      const res = await fetch(`/api/records?_t=${Date.now()}`);
      if (!res.ok) {
        const errorData = await res.json();
        if (res.status === 500 && errorData.error?.includes("tidak dikonfigurasi")) {
          setDbError(errorData.error);
        }
        throw new Error(errorData.error || "Failed to fetch records");
      }
      const data = await res.json();
      if (Array.isArray(data)) {
        setRecords(data);
      } else {
        setRecords([]);
      }
    } catch (e: any) {
      console.error("Failed to fetch records", e);
      // Only show toast if it's not a config error (which we handle with a UI overlay)
      if (!e.message.includes("tidak dikonfigurasi")) {
        toast.error(`Gagal memanggil data: ${e.message}`);
      }
      setRecords([]);
    }
  };

  // Migrate old local storage records to the database
  useEffect(() => {
    const migrateData = async () => {
      const savedRecords = localStorage.getItem("kvAttendanceRecords");
      if (savedRecords) {
        try {
          const parsed = JSON.parse(savedRecords);
          if (parsed && parsed.length > 0) {
            let successCount = 0;
            for (const record of parsed) {
              const res = await fetch("/api/records", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(record),
              });
              if (res.ok) successCount++;
            }
            if (successCount > 0) {
              localStorage.removeItem("kvAttendanceRecords");
              fetchRecords();
            }
          }
        } catch (e) {
          console.error("Failed to migrate records", e);
        }
      }
    };
    migrateData();
  }, []);

  useEffect(() => {
    fetchRecords();
  }, [activeTab]);

  useEffect(() => {
    const eventSource = new EventSource("/api/notifications");
    
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "NEW_RECORD") {
          toast.success(`Rekod baru ditambah: ${data.record.subjectCode} - ${data.record.collegeName}`, {
            duration: 5000,
            icon: '🔔',
          });
          fetchRecords();
        }
      } catch (e) {
        console.error("Failed to parse notification", e);
      }
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleAddRecord = async (record: ExamRecord) => {
    try {
      await fetch("/api/records", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      alert("Rekod berjaya disimpan!");
      
      fetchRecords();
      setActiveTab("list");
    } catch (e) {
      console.error("Failed to save record", e);
      alert("Ralat semasa menyimpan rekod.");
    }
  };

  const handleDeleteRecord = async (id: string) => {
    try {
      await fetch(`/api/records/${id}`, { method: "DELETE" });
      fetchRecords();
    } catch (e) {
      console.error("Failed to delete record", e);
    }
  };

  const handleUpdateRecord = async (record: ExamRecord) => {
    try {
      await fetch(`/api/records/${record.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      fetchRecords();
    } catch (e) {
      console.error("Failed to update record", e);
      alert("Ralat semasa mengemaskini rekod.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Toaster position="top-right" />
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">
                Sistem Kehadiran KV
              </h1>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                Peperiksaan Kolej Vokasional
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => handleTabChange("form")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "form"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <FilePlus className="w-4 h-4" />
              <span className="hidden sm:inline">Borang Baru</span>
            </button>
            <button
              onClick={() => handleTabChange("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "list"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Senarai Rekod</span>
              {records.length > 0 && (
                <span className="ml-1.5 bg-indigo-100 text-indigo-700 py-0.5 px-2 rounded-full text-xs font-bold">
                  {records.length}
                </span>
              )}
            </button>
            <button
              onClick={() => handleTabChange("students")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "students"
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Urus Pelajar</span>
            </button>
            {isAdmin && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all ml-2"
                title="Log Keluar Admin"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showLogin ? (
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 p-8 animate-in fade-in zoom-in duration-300">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-center text-slate-900 mb-2">Akses Admin Sahaja</h2>
            <p className="text-center text-slate-500 mb-8">
              Sila masukkan kata laluan untuk mengakses bahagian ini.
            </p>
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Kata Laluan
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  autoFocus
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-md shadow-indigo-100 transition-all"
                >
                  Log Masuk
                </button>
              </div>
            </form>
            <p className="text-center text-xs text-slate-400 mt-8 italic">
              Petunjuk: Kata laluan lalai adalah <span className="font-mono font-bold">admin123</span>
            </p>
          </div>
        ) : (
          <div className="transition-all duration-300 ease-in-out">
            {activeTab === "form" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AttendanceForm onSubmit={handleAddRecord} />
              </div>
            ) : activeTab === "list" ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AttendanceList records={records} onDelete={handleDeleteRecord} />
              </div>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <StudentManager records={records} onUpdateRecord={handleUpdateRecord} />
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
