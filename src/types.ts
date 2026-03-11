export type AbsentStudent = {
  id: string;
  name: string;
  icNumber: string;
  program: string;
};

export type ExamRecord = {
  id: string;
  kvCode: string;
  state: string;
  collegeName: string;
  subjectCode: string;
  subjectName: string;
  examDate: string;
  examTime: string;
  totalCandidates: number;
  absentCount: number;
  absentStudents: AbsentStudent[];
  createdAt: string;
};
