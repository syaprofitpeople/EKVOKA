import React, { useState } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import { ExamRecord, AbsentStudent } from "../types";
import { KV_DATA } from "../data/kvData";
import { SUBJECT_DATA } from "../data/subjectData";

const STATES = Object.keys(KV_DATA).sort();

interface AttendanceFormProps {
  onSubmit: (record: ExamRecord) => void;
}

export default function AttendanceForm({ onSubmit }: AttendanceFormProps) {
  const [kvCode, setKvCode] = useState("");
  const [state, setState] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [subjectCode, setSubjectCode] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [examDate, setExamDate] = useState(new Date().toISOString().split('T')[0]);
  const [examTime, setExamTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
  const [totalCandidates, setTotalCandidates] = useState<number | "">("");

  const [absentStudents, setAbsentStudents] = useState<AbsentStudent[]>([]);

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setState(e.target.value);
    setKvCode("");
    setCollegeName("");
    setSubjectCode("");
    setSubjectName("");
    setTotalCandidates("");
  };

  const handleCollegeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    if (!selectedCode) {
      setKvCode("");
      setCollegeName("");
      setSubjectCode("");
      setSubjectName("");
      setTotalCandidates("");
      return;
    }
    
    const collegesInState = KV_DATA[state] || [];
    const selectedCollege = collegesInState.find(c => c.code === selectedCode);
    
    if (selectedCollege) {
      setKvCode(selectedCollege.code);
      setCollegeName(selectedCollege.name);
      setSubjectCode("");
      setSubjectName("");
      setTotalCandidates("");
    }
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    setSubjectCode(selectedCode);
    
    if (!selectedCode) {
      setSubjectName("");
      setTotalCandidates("");
      return;
    }

    const subjects = SUBJECT_DATA[kvCode] || [];
    const selectedSubject = subjects.find(s => s.code === selectedCode);
    
    if (selectedSubject) {
      setSubjectName(selectedSubject.name);
      setTotalCandidates(selectedSubject.candidates);
    } else {
      setSubjectName(selectedCode);
    }
  };

  const handleAddAbsentStudent = () => {
    setAbsentStudents([
      ...absentStudents,
      { id: crypto.randomUUID(), name: "", icNumber: "", program: subjectName },
    ]);
  };

  const handleRemoveAbsentStudent = (id: string) => {
    setAbsentStudents(absentStudents.filter((student) => student.id !== id));
  };

  const handleAbsentStudentChange = (
    id: string,
    field: keyof AbsentStudent,
    value: string,
  ) => {
    setAbsentStudents(
      absentStudents.map((student) =>
        student.id === id ? { ...student, [field]: value } : student,
      ),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const missingFields = [];
    if (!state) missingFields.push("Negeri");
    if (!kvCode) missingFields.push("Kolej Vokasional");
    if (!subjectCode) missingFields.push("Kod Mata Pelajaran");
    if (totalCandidates === "") missingFields.push("Jumlah Calon");

    if (missingFields.length > 0) {
      alert(`Sila lengkapkan maklumat berikut: ${missingFields.join(", ")}`);
      return;
    }

    // Ensure date and time are set if somehow empty
    let finalDate = examDate;
    let finalTime = examTime;
    if (!finalDate || !finalTime) {
      const now = new Date();
      if (!finalDate) finalDate = now.toISOString().split("T")[0];
      if (!finalTime) finalTime = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    }

    // Validate absent students
    const invalidStudents = absentStudents.filter(
      (s) => !s.name.trim() || !s.icNumber.trim() || !s.program.trim(),
    );
    if (invalidStudents.length > 0) {
      alert(
        "Sila lengkapkan Nama, No. KP, dan Program untuk semua pelajar yang tidak hadir dalam senarai.",
      );
      return;
    }

    const newRecord: ExamRecord = {
      id: crypto.randomUUID(),
      kvCode,
      state,
      collegeName,
      subjectCode,
      subjectName,
      examDate: finalDate,
      examTime: finalTime,
      totalCandidates: Number(totalCandidates),
      absentCount: absentStudents.length,
      absentStudents,
      createdAt: new Date().toISOString(),
    };

    onSubmit(newRecord);

    // Reset form
    setKvCode("");
    setState("");
    setCollegeName("");
    setSubjectCode("");
    setSubjectName("");
    setExamDate(new Date().toISOString().split('T')[0]);
    setExamTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    setTotalCandidates("");
    setAbsentStudents([]);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">
          Borang Kehadiran Peperiksaan
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Sila isi maklumat pusat peperiksaan dan senarai ketidakhadiran.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-8">
        {/* Maklumat Pusat Peperiksaan */}
        <div>
          <h3 className="text-sm font-medium text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Maklumat Pusat Peperiksaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Negeri
              </label>
              <select
                required
                value={state}
                onChange={handleStateChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
              >
                <option value="">Pilih Negeri...</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Kolej Vokasional
              </label>
              <select
                required
                value={kvCode}
                onChange={handleCollegeChange}
                disabled={!state}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="">Pilih Kolej...</option>
                {state && KV_DATA[state]?.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} - {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Maklumat Peperiksaan */}
        <div>
          <h3 className="text-sm font-medium text-slate-900 mb-4 pb-2 border-b border-slate-100">
            Maklumat Peperiksaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Kod Mata Pelajaran
              </label>
              {SUBJECT_DATA[kvCode] ? (
                <select
                  required
                  value={subjectCode}
                  onChange={handleSubjectChange}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white"
                >
                  <option value="">Pilih Mata Pelajaran...</option>
                  {SUBJECT_DATA[kvCode].map((s) => (
                    <option key={s.code} value={s.code}>
                      {s.code} - {s.name}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  required
                  value={subjectCode}
                  onChange={(e) => {
                    const val = e.target.value.toUpperCase();
                    setSubjectCode(val);
                    setSubjectName(val);
                  }}
                  placeholder="Cth: MPU2312"
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all uppercase"
                />
              )}
            </div>
            <div className="md:col-span-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Jumlah Calon
              </label>
              <input
                type="number"
                required
                min="1"
                value={totalCandidates}
                onChange={(e) =>
                  setTotalCandidates(
                    e.target.value === "" ? "" : Number(e.target.value),
                  )
                }
                placeholder="Cth: 120"
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                readOnly={!!SUBJECT_DATA[kvCode]}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Tarikh (Auto)
              </label>
              <input
                type="date"
                required
                value={examDate}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed outline-none transition-all"
              />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Waktu (Auto)
              </label>
              <input
                type="time"
                required
                value={examTime}
                readOnly
                className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-slate-50 text-slate-500 cursor-not-allowed outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Maklumat Ketidakhadiran */}
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-medium text-slate-900">
                Maklumat Ketidakhadiran
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bilangan Tidak Hadir:{" "}
                <span className="font-semibold text-slate-700">
                  {absentStudents.length}
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={handleAddAbsentStudent}
              className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Tambah Pelajar
            </button>
          </div>

          {absentStudents.length === 0 ? (
            <div className="text-center py-8 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <p className="text-sm text-slate-500">
                Tiada pelajar yang tidak hadir direkodkan.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Klik "Tambah Pelajar" jika terdapat ketidakhadiran.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {absentStudents.map((student, index) => (
                <div
                  key={student.id || index}
                  className="flex flex-col sm:flex-row gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                >
                  <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Nama Pelajar {index + 1}
                      </label>
                      <input
                        type="text"
                        required
                        value={student.name}
                        onChange={(e) =>
                          handleAbsentStudentChange(
                            student.id,
                            "name",
                            e.target.value,
                          )
                        }
                        placeholder="Nama Penuh"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        No. Kad Pengenalan
                      </label>
                      <input
                        type="text"
                        required
                        value={student.icNumber}
                        onChange={(e) =>
                          handleAbsentStudentChange(
                            student.id,
                            "icNumber",
                            e.target.value,
                          )
                        }
                        placeholder="Cth: 010203-04-0506"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-500 mb-1">
                        Program
                      </label>
                      <input
                        type="text"
                        required
                        value={student.program}
                        onChange={(e) =>
                          handleAbsentStudentChange(
                            student.id,
                            "program",
                            e.target.value,
                          )
                        }
                        placeholder="Cth: Teknologi Automotif"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex items-end justify-end sm:justify-start">
                    <button
                      type="button"
                      onClick={() => handleRemoveAbsentStudent(student.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Buang pelajar"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Save className="w-4 h-4 mr-2" />
            Simpan Rekod
          </button>
        </div>
      </form>
    </div>
  );
}
