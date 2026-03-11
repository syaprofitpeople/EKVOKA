import Database from "better-sqlite3";
const db = new Database("records.db");
console.log(db.prepare("SELECT * FROM records").all());
