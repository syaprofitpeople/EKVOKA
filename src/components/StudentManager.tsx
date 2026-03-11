import React, { useState } from "react";
import { ExamRecord, AbsentStudent } from "../types";
import { Users, Edit2, Trash2, Check, X } from "lucide-react";

interface StudentManagerProps {
  records: ExamRecord[];
  onUpdateRecord: (record: ExamRecord) => void;
  isAdmin?: boolean;
}

export default function StudentManager({ records, onUpdateRecord, isAdmin = false }: StudentManagerProps) {
  const [editingStudentId, setEditingStudentId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editIcNumber, setEditIcNumber] = useState("");

  // Flatten all absent students with their parent record info
  const allStudents = records.flatMap((record) =>
    record.absentStudents.map((student, index) => ({
      ...student,
      // Ensure student has an ID for editing/deleting
      id: student.id || `legacy-${record.id}-${index}`,
      recordId: record.id,
      collegeName: record.collegeName,
      subjectName: record.subjectName,
      examDate: record.examDate,
      displayIndex: index,
    }))
  );

  const handleEditClick = (student: any) => {
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

    const updatedStudents = record.absentStudents.map((s, index) => {
      const sId = s.id || `legacy-${record.id}-${index}`;
      return sId === studentId ? { ...s, name: editName, icNumber: editIcNumber } : s;
    });

    onUpdateRecord({ ...record, absentStudents: updatedStudents });
    setEditingStudentId(null);
    setEditName("");
    setEditIcNumber("");
  };

  const handleDeleteStudent = (recordId: string, studentId: string, studentName: string) => {
    if (!confirm(`Adakah anda pasti untuk memadam rekod pelajar "${studentName}"?`)) return;

    const record = records.find((r) => r.id === recordId);
    if (!record) return;

    const updatedStudents = record.absentStudents.filter((s, index) => {
      const sId = s.id || `legacy-${record.id}-${index}`;
      return sId !== studentId;
    });
    
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
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 lg:p-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                Pengurusan Pelajar
              </h2>
              <p className="text-slate-500 text-sm mt-1 ml-13">
                Kemaskini atau padam maklumat pelajar yang tidak hadir.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-2xl text-sm font-bold border border-indigo-100 shadow-sm">
              <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
              Jumlah: {allStudents.length} Pelajar
            </div>
          </div>
 
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200">
                    <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs">Maklumat Pelajar</th>
                    <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs">Pusat & Subjek</th>
                    <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs text-right">Tindakan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {allStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        {editingStudentId === student.id ? (
                          <div className="space-y-2 max-w-xs">
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              placeholder="Nama Pelajar"
                              className="w-full px-3 py-2 text-sm rounded-xl border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                              autoFocus
                            />
                            <input
                              type="text"
                              value={editIcNumber}
                              onChange={(e) => setEditIcNumber(e.target.value)}
                              placeholder="No. Kad Pengenalan"
                              className="w-full px-3 py-2 text-sm rounded-xl border border-indigo-300 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm"
                            />
                          </div>
                        ) : (
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{student.name}</span>
                            <span className="text-xs text-slate-500 font-medium mt-0.5">IC: {student.icNumber || "-"}</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-slate-700">{student.collegeName}</span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                            {student.subjectName} • {student.examDate}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {isAdmin && (
                          editingStudentId === student.id ? (
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => handleSaveEdit(student.recordId, student.id)}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-sm shadow-emerald-100"
                              >
                                <Check className="w-3.5 h-3.5" />
                                Simpan
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-bold rounded-xl hover:bg-slate-200 transition-all"
                              >
                                <X className="w-3.5 h-3.5" />
                                Batal
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <button
                                onClick={() => handleEditClick(student)}
                                className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100"
                                title="Kemaskini"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteStudent(student.recordId, student.id, student.name)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                                title="Padam"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          )
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
