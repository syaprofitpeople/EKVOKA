import React, { useState, useMemo } from "react";
import { toast } from "react-hot-toast";
import { ExamRecord } from "../types";
import {
  FileText,
  Users,
  MapPin,
  Calendar,
  BookOpen,
  AlertCircle,
  Search,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Download,
} from "lucide-react";

interface AttendanceListProps {
  records: ExamRecord[];
  onDelete: (id: string) => void;
  isAdmin?: boolean;
}

export default function AttendanceList({
  records,
  onDelete,
  isAdmin = false,
}: AttendanceListProps) {
  if (records.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-medium text-slate-900">Tiada Rekod</h3>
        <p className="text-slate-500 mt-1">
          Belum ada rekod kehadiran peperiksaan yang disimpan.
        </p>
      </div>
    );
  }

  const [summaryTab, setSummaryTab] = useState<'state' | 'kv' | 'course'>('state');
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  // Pagination for main list
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Pagination for summary tables
  const [summaryPage, setSummaryPage] = useState(1);
  const summaryItemsPerPage = 5;

  const filteredRecords = useMemo(() => {
    let result = records;

    // Date Range Filter
    if (startDate) {
      const start = new Date(startDate);
      start.setHours(0, 0, 0, 0);
      result = result.filter(r => new Date(r.createdAt) >= start);
    }
    if (endDate) {
      const end = new Date(endDate);
      end.setHours(23, 59, 59, 999);
      result = result.filter(r => new Date(r.createdAt) <= end);
    }

    if (!searchTerm.trim()) return result;
    
    const lowerSearch = searchTerm.toLowerCase();
    
    return result.filter(record => {
      // Search in main record details
      const matchMain = 
        record.collegeName.toLowerCase().includes(lowerSearch) ||
        record.kvCode.toLowerCase().includes(lowerSearch) ||
        record.subjectName.toLowerCase().includes(lowerSearch) ||
        record.subjectCode.toLowerCase().includes(lowerSearch) ||
        record.state.toLowerCase().includes(lowerSearch);
        
      if (matchMain) return true;
      
      // Search in absent students details
      const matchStudents = record.absentStudents.some(student => 
        student.name.toLowerCase().includes(lowerSearch) ||
        (student.icNumber && student.icNumber.toLowerCase().includes(lowerSearch)) ||
        student.program.toLowerCase().includes(lowerSearch)
      );
      
      return matchStudents;
    });
  }, [records, searchTerm, startDate, endDate]);

  const statsByState = useMemo(() => filteredRecords.reduce((acc, record) => {
    if (!acc[record.state]) acc[record.state] = { total: 0, present: 0 };
    acc[record.state].total += record.totalCandidates;
    acc[record.state].present += (record.totalCandidates - record.absentCount);
    return acc;
  }, {} as Record<string, { total: number, present: number }>), [filteredRecords]);

  const statsByKV = useMemo(() => filteredRecords.reduce((acc, record) => {
    if (!acc[record.collegeName]) acc[record.collegeName] = { total: 0, present: 0 };
    acc[record.collegeName].total += record.totalCandidates;
    acc[record.collegeName].present += (record.totalCandidates - record.absentCount);
    return acc;
  }, {} as Record<string, { total: number, present: number }>), [filteredRecords]);

  const statsByCourse = useMemo(() => filteredRecords.reduce((acc, record) => {
    const courseName = `${record.subjectCode} - ${record.subjectName}`;
    if (!acc[courseName]) acc[courseName] = { total: 0, present: 0 };
    acc[courseName].total += record.totalCandidates;
    acc[courseName].present += (record.totalCandidates - record.absentCount);
    return acc;
  }, {} as Record<string, { total: number, present: number }>), [filteredRecords]);

  const renderStatsTable = (stats: Record<string, { total: number, present: number }>, title: string) => {
    const entries = Object.entries(stats);
    const totalPages = Math.ceil(entries.length / summaryItemsPerPage);
    const paginatedEntries = entries.slice((summaryPage - 1) * summaryItemsPerPage, summaryPage * summaryItemsPerPage);

    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-500">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs">{title}</th>
                <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs text-center">Statistik Kehadiran</th>
                <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs text-right">Bil. Calon</th>
                <th className="px-6 py-4 font-semibold text-slate-700 uppercase tracking-wider text-xs text-right">Peratusan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedEntries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-slate-400 italic">
                    <div className="flex flex-col items-center gap-2">
                      <Search className="w-8 h-8 opacity-20" />
                      <span>Tiada data untuk dipaparkan</span>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedEntries.map(([name, data]) => {
                  const percentageNum = data.total > 0 ? (data.present / data.total) * 100 : 0;
                  const percentage = percentageNum.toFixed(1);
                  
                  // Color logic for progress bar
                  const barColor = percentageNum >= 95 ? "bg-emerald-500" : 
                                  percentageNum >= 80 ? "bg-indigo-500" : 
                                  percentageNum >= 60 ? "bg-amber-500" : "bg-red-500";
                  
                  const textColor = percentageNum >= 95 ? "text-emerald-700" : 
                                   percentageNum >= 80 ? "text-indigo-700" : 
                                   percentageNum >= 60 ? "text-amber-700" : "text-red-700";

                  const bgColor = percentageNum >= 95 ? "bg-emerald-50" : 
                                 percentageNum >= 80 ? "bg-indigo-50" : 
                                 percentageNum >= 60 ? "bg-amber-50" : "bg-red-50";

                  return (
                    <tr key={name} className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{name}</span>
                          <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5 font-medium">Kategori: {title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 min-w-[200px]">
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-tight">
                            <span className="text-slate-400">Hadir: {data.present}</span>
                            <span className={textColor}>{percentage}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className={`h-full ${barColor} transition-all duration-1000 ease-out shadow-sm`}
                              style={{ width: `${percentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-bold text-slate-700">{data.total}</span>
                          <span className="text-[10px] text-slate-400 font-medium">Calon Terdaftar</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${bgColor} ${textColor} border border-current/10 shadow-sm`}>
                          {percentage}%
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-200 flex items-center justify-between">
            <p className="text-xs font-medium text-slate-500">
              Menunjukkan <span className="text-slate-900">{(summaryPage - 1) * summaryItemsPerPage + 1}</span> - <span className="text-slate-900">{Math.min(summaryPage * summaryItemsPerPage, entries.length)}</span> daripada <span className="text-slate-900">{entries.length}</span> entri
            </p>
            <div className="flex items-center gap-1.5">
              <button
                disabled={summaryPage === 1}
                onClick={() => setSummaryPage(p => p - 1)}
                className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex items-center px-3 py-1 bg-white border border-slate-200 rounded-lg shadow-sm">
                <span className="text-xs font-bold text-indigo-600">{summaryPage}</span>
                <span className="text-xs text-slate-300 mx-1.5">/</span>
                <span className="text-xs font-medium text-slate-500">{totalPages}</span>
              </div>
              <button
                disabled={summaryPage === totalPages}
                onClick={() => setSummaryPage(p => p + 1)}
                className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  const exportToCSV = () => {
    if (filteredRecords.length === 0) {
      toast.error("Tiada data untuk dieksport");
      return;
    }

    const headers = [
      "KV Code",
      "Kolej",
      "Negeri",
      "Kod Subjek",
      "Nama Subjek",
      "Tarikh Peperiksaan",
      "Waktu Peperiksaan",
      "Jumlah Calon",
      "Bilangan Tidak Hadir",
      "Nama Pelajar Tidak Hadir"
    ];

    const csvRows = filteredRecords.map(record => {
      const absentNames = record.absentStudents.map(s => s.name).join("; ");
      return [
        `"${record.kvCode}"`,
        `"${record.collegeName}"`,
        `"${record.state}"`,
        `"${record.subjectCode}"`,
        `"${record.subjectName}"`,
        `"${record.examDate}"`,
        `"${record.examTime}"`,
        record.totalCandidates,
        record.absentCount,
        `"${absentNames}"`
      ].join(",");
    });

    const csvContent = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Rekod_Kehadiran_KV_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Fail CSV berjaya dimuat turun!");
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 lg:p-8 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                Ringkasan Kehadiran
              </h2>
              <p className="text-slate-500 text-sm mt-1 ml-13">
                Analisis data kehadiran berdasarkan kategori yang dipilih.
              </p>
            </div>
          </div>
          
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl mb-8 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <button
              onClick={() => { setSummaryTab('state'); setSummaryPage(1); }}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                summaryTab === 'state' 
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              Mengikut Negeri
            </button>
            <button
              onClick={() => { setSummaryTab('kv'); setSummaryPage(1); }}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                summaryTab === 'kv' 
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              Mengikut KV
            </button>
            <button
              onClick={() => { setSummaryTab('course'); setSummaryPage(1); }}
              className={`flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                summaryTab === 'course' 
                  ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-black/5' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
              }`}
            >
              Mengikut Subjek
            </button>
          </div>

          <div className="transition-all duration-300">
            {summaryTab === 'state' && renderStatsTable(statsByState, 'Negeri')}
            {summaryTab === 'kv' && renderStatsTable(statsByKV, 'Kolej Vokasional')}
            {summaryTab === 'course' && renderStatsTable(statsByCourse, 'Mata Pelajaran')}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-slate-800 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Senarai Rekod Peperiksaan
          </h2>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <button
              onClick={exportToCSV}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 shadow-sm shadow-emerald-100 transition-all"
            >
              <Download className="w-4 h-4" />
              Eksport CSV
            </button>

            {/* Date Range Filters */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-1.5 px-2 text-slate-400">
                <Filter className="w-4 h-4" />
                <span className="text-xs font-medium uppercase tracking-wider">Tarikh:</span>
              </div>
              <input
                type="date"
                value={startDate}
                onChange={(e) => { setStartDate(e.target.value); setCurrentPage(1); }}
                className="text-xs border-none focus:ring-0 p-1 bg-transparent text-slate-600"
              />
              <span className="text-slate-300">-</span>
              <input
                type="date"
                value={endDate}
                onChange={(e) => { setEndDate(e.target.value); setCurrentPage(1); }}
                className="text-xs border-none focus:ring-0 p-1 bg-transparent text-slate-600"
              />
              {(startDate || endDate) && (
                <button 
                  onClick={() => { setStartDate(""); setEndDate(""); setCurrentPage(1); }}
                  className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="relative flex-grow sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Cari kolej, subjek, pelajar..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-sm shadow-sm"
              />
            </div>
          </div>
        </div>

      <div className="grid gap-6">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <p className="text-slate-500 font-medium">Tiada rekod dijumpai</p>
            <p className="text-slate-400 text-sm mt-1">Cuba tukar kata kunci carian atau julat tarikh anda.</p>
          </div>
        ) : (
          <>
            {filteredRecords
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((record) => (
                <div
                  key={record.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md"
                >
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-100">
                  {record.kvCode}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {record.collegeName}
                  </h3>
                  <div className="flex items-center text-xs text-slate-500 mt-0.5 gap-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {record.state}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{" "}
                      {new Date(record.createdAt).toLocaleString("ms-MY", {
                        day: '2-digit',
                        month: '2-digit',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              {isAdmin && (
                <button
                  onClick={() => {
                    if (
                      window.confirm("Adakah anda pasti untuk memadam rekod ini?")
                    ) {
                      onDelete(record.id);
                    }
                  }}
                  className="text-xs font-medium text-red-600 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Padam
                </button>
              )}
            </div>

            <div className="p-5 bg-slate-50/50 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-slate-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Mata Pelajaran
                    </p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">
                      {record.subjectCode} - {record.subjectName}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Waktu Key-in (Auto)
                    </p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">
                      {new Date(record.createdAt).toLocaleDateString("ms-MY")} <span className="text-slate-400 mx-1">|</span> {new Date(record.createdAt).toLocaleTimeString("ms-MY", { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-slate-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Jumlah Calon
                    </p>
                    <p className="text-sm font-medium text-slate-900 mt-0.5">
                      {record.totalCandidates} Orang
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 p-4 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-indigo-500" />
                    Peratusan Kehadiran
                  </p>
                  <span
                    className={`text-xs font-bold px-2 py-1 rounded-md ${record.absentCount > 0 ? "bg-amber-50 text-amber-700" : "bg-emerald-50 text-emerald-700"}`}
                  >
                    {record.totalCandidates > 0 ? (((record.totalCandidates - record.absentCount) / record.totalCandidates) * 100).toFixed(2) : "0.00"}% Hadir
                  </span>
                </div>

                <div className="mt-2 pt-3 border-t border-slate-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">Jumlah Hadir</span>
                    <span className="text-sm font-medium text-slate-900">{record.totalCandidates - record.absentCount} / {record.totalCandidates} Calon</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Show matching absent students if searching */}
            {searchTerm.trim() && record.absentStudents.length > 0 && (
              <div className="px-5 pb-5 bg-slate-50/50">
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Pelajar Tidak Hadir</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {record.absentStudents
                      .filter(s => 
                        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (s.icNumber && s.icNumber.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        s.program.toLowerCase().includes(searchTerm.toLowerCase())
                      )
                      .map((student, idx) => (
                        <div key={`${record.id}-${student.id || idx}`} className="bg-white p-3 rounded-lg border border-slate-200 text-sm">
                          <p className="font-medium text-slate-900">{student.name}</p>
                          <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                            {student.icNumber && <span>IC: {student.icNumber}</span>}
                            <span>{student.program}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Main List Pagination */}
        {filteredRecords.length > itemsPerPage && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
            <p className="text-sm text-slate-500">
              Menunjukkan <span className="font-medium text-slate-900">{(currentPage - 1) * itemsPerPage + 1}</span> hingga <span className="font-medium text-slate-900">{Math.min(currentPage * itemsPerPage, filteredRecords.length)}</span> daripada <span className="font-medium text-slate-900">{filteredRecords.length}</span> rekod
            </p>
            <div className="flex items-center gap-2">
              <button
                disabled={currentPage === 1}
                onClick={() => { setCurrentPage(p => p - 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>
              <div className="flex items-center gap-1">
                {Array.from({ length: Math.ceil(filteredRecords.length / itemsPerPage) }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === Math.ceil(filteredRecords.length / itemsPerPage) || Math.abs(p - currentPage) <= 1)
                  .map((p, i, arr) => (
                    <React.Fragment key={p}>
                      {i > 0 && arr[i-1] !== p - 1 && <span className="px-2 text-slate-400">...</span>}
                      <button
                        onClick={() => { setCurrentPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${currentPage === p ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                      >
                        {p}
                      </button>
                    </React.Fragment>
                  ))
                }
              </div>
              <button
                disabled={currentPage === Math.ceil(filteredRecords.length / itemsPerPage)}
                onClick={() => { setCurrentPage(p => p + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="flex items-center gap-1 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Seterusnya
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </>
    )}
  </div>
</div>
    </div>
  );
}
