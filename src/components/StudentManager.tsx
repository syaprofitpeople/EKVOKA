import React, { useState } from "react";
import { ExamRecord, AbsentStudent } from "../types";
import { Users, Edit2, Trash2, Check, X } from "lucide-react";

interface StudentManagerProps {
  records: ExamRecord[];
  onUpdateRecord: (record: ExamRecord) => void;
}

export default function StudentManager({ records, onUpdateRecord }: StudentManagerProps) {
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editIcNumber, setEditIcNumber] = useState("");

  // Flatten all absent students with their parent record info
  const allStudents = records.flatMap((record) =>
    record.absentStudents.map((student, index) => ({
      ...student,
      recordId: record.id,
      collegeName: record.collegeName,
      subjectName: record.subjectName,
      examDate: record.examDate,
      displayIndex: index,
    }))
  );

  const handleEditClick = (student: AbsentStudent) => {
    setEditingStudentId(student.id);
    setEditName(student.name);
    setEditIcNumber(student.icNumber || "");
  };

  const handleCancelEdit = () => {
    setEditingStudentId(null);
    setEditName("");
    setEditIcNumber("");
  };

  const handleSaveEdit = (recordId: string, studentId: string) => {
    const record = records.find((r) => r.id === recordId);
    if (!record) return;

    const updatedStudents = record.absentStudents.map((s) =>
      s.id === studentId ? { ...s, name: editName, icNumber: editIcNumber } : s
    );

    onUpdateRecord({ ...record, absentStudents: updatedStudents });
    setEditingStudentId(null);
    setEditName("");
    setEditIcNumber("");
  };

  const handleDeleteStudent = (recordId: string, studentId: string) => {
    if (!confirm("Adakah anda pasti untuk memadam pelajar ini?")) return;

    const record = records.find((r) => r.id === recordId);
    if (!record) return;

    const updatedStudents = record.absentStudents.filter((s) => s.id !== studentId);
    
    onUpdateRecord({ 
      ...record, 
      absentStudents: updatedStudents,
      absentCount: updatedStudents.length
    });
  };

  if (allStudents.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-medium text-slate-900">Tiada Pelajar Tidak Hadir</h3>
        <p className="text-slate-500 mt-1">
          Belum ada rekod pelajar tidak hadir yang disimpan.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
          <Users className="w-5 h-5 text-indigo-600" />
          Pengurusan Pelajar Tidak Hadir
        </h2>
        <div className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
          Jumlah: {allStudents.length} Pelajar
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-medium text-slate-500">
                <th className="p-4">Nama Pelajar</th>
                <th className="p-4">No. KP</th>
                <th className="p-4">Kolej</th>
                <th className="p-4">Mata Pelajaran</th>
                <th className="p-4">Tarikh</th>
                <th className="p-4 text-right">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {allStudents.map((student) => (
                <tr key={`${student.recordId}-${student.id || student.displayIndex}`} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-4">
                    {editingStudentId === student.id ? (
                      <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                        autoFocus
                      />
                    ) : (
                      <span className="font-medium text-slate-900">{student.name}</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-slate-600">
                    {editingStudentId === student.id ? (
                      <input
                        type="text"
                        value={editIcNumber}
                        onChange={(e) => setEditIcNumber(e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none"
                      />
                    ) : (
                      <span>{student.icNumber || "-"}</span>
                    )}
                  </td>
                  <td className="p-4 text-sm text-slate-600">{student.collegeName}</td>
                  <td className="p-4 text-sm text-slate-600">{student.subjectName}</td>
                  <td className="p-4 text-sm text-slate-600">{student.examDate}</td>
                  <td className="p-4 text-right">
                    {editingStudentId === student.id ? (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleSaveEdit(student.recordId, student.id)}
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Simpan"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
                          title="Batal"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => handleEditClick(student)}
                          className="p-1.5 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          title="Kemaskini"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteStudent(student.recordId, student.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Padam"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
