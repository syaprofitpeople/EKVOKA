export type SubjectInfo = {
  code: string;
  name: string;
  candidates: number;
};

// Sebahagian data mata pelajaran mengikut Kod KV
// Anda boleh menambah data selebihnya mengikut format ini
export const SUBJECT_DATA: Record<string, SubjectInfo[]> = {
  "K01": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 20 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K02": [
    { code: "V0904", name: "KAWALAN PENGELUARAN MAKANAN DAN PENYELIAAN", candidates: 30 },
    { code: "V1004", name: "PEMBUATAN PAKAIAN LANJUTAN 2", candidates: 27 },
    { code: "V1104", name: "RAWATAN MUKA DAN BADAN", candidates: 28 },
    { code: "V1204", name: "OPERASI PASTRY DAN BAKERY", candidates: 29 },
    { code: "V1304", name: "PERKHIDMATAN DAN ASUHAN KANAK-KANAK", candidates: 27 },
    { code: "V3104", name: "PEMBANGUNAN APLIKASI WEB", candidates: 28 },
    { code: "V3304", name: "PENGURUSAN PERNIAGAAN DAN PEMASARAN", candidates: 27 },
    { code: "V3404", name: "PERAKAUNAN KEWANGAN", candidates: 28 }
  ],
  "K03": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 23 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 24 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 23 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 21 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 22 },
    { code: "V2614", name: "CNC KISAR", candidates: 22 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 19 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 25 }
  ],
  "K04": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 26 }
  ],
  "K05": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 24 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 24 }
  ],
  "K06": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K07": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K08": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 25 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 25 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K09": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 26 }
  ],
  "K10": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K11": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K12": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K13": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K14": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 23 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 23 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K15": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K16": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAL ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K17": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K18": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 24 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 26 }
  ],
  "K19": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 27 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K20": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 25 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K21": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 24 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K22": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K23": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K24": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K25": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 24 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K26": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K27": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 27 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 27 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 25 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 23 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K28": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K29": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 26 }
  ],
  "K30": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 25 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 24 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K31": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K32": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K33": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K34": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K35": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K36": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K37": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K38": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K39": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K40": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 24 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 25 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K41": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K42": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 23 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K43": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 26 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 23 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 17 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 26 }
  ],
  "K44": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K45": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K46": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K47": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K48": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K49": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K50": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K51": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K52": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K53": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K54": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K55": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 26 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K56": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K57": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 25 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 22 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K58": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K59": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K60": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K61": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K62": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K63": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 24 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K64": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K65": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 26 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K66": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 27 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K67": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K68": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K69": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K70": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 26 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K71": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K72": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K73": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 27 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 23 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K74": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 29 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K75": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 25 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 26 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 28 }
  ],
  "K76": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 27 }
  ],
  "K77": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 26 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K78": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 26 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 27 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K79": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 28 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K80": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K81": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 29 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K82": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 27 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 27 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 26 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 24 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 26 },
    { code: "V2614", name: "CNC KISAR", candidates: 19 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 17 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 25 }
  ],
  "K83": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 27 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 25 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 25 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K84": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 28 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 27 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K85": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 26 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 27 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 28 },
    { code: "V2614", name: "CNC KISAR", candidates: 28 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 28 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K86": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 28 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K87": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K88": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K89": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K90": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 29 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 29 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K91": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 29 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 30 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 29 }
  ],
  "K92": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 30 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 30 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K93": [
    { code: "V2104", name: "PENGURUSAN PENTADBIRAN LANJUTAN", candidates: 30 },
    { code: "V2214", name: "PENGENDALIAN ELEKTRIK TIGA FASA", candidates: 29 },
    { code: "V2314", name: "PENGESANAN KEROSAKAN KOMPONEN DAN PAPAN ELEKTRONIK", candidates: 30 },
    { code: "V2404", name: "KUALITI KERJA KIMPALAN", candidates: 28 },
    { code: "V2514", name: "CASIS KENDERAAN", candidates: 30 },
    { code: "V2614", name: "CNC KISAR", candidates: 29 },
    { code: "V2714", name: "PENYELENGGARAAN HVAC", candidates: 30 },
    { code: "V2814", name: "KEMASAN BANGUNAN", candidates: 30 }
  ],
  "K94": [
    { code: "V0504", name: "PENYELIAAN DAN PENGURUSAN PEKERJA", candidates: 29 },
    { code: "V0904", name: "KAWALAN PENGELUARAN MAKANAN DAN PENYELIAAN", candidates: 28 },
    { code: "V1104", name: "KAWALAN PEMBUATAN PASTRI DAN INOVASI", candidates: 30 },
    { code: "V1214", name: "PERKHIDMATAN OPERASI SALUN", candidates: 29 },
    { code: "V4404", name: "PENYELIAAN DAN PENGURUSAN LANDSKAP", candidates: 28 }
  ],
  "K95": [
    { code: "V1004", name: "PEMBUATAN PAKAIAN LANJUTAN 2", candidates: 26 },
    { code: "V1214", name: "PERKHIDMATAN OPERASI SALUN", candidates: 28 }
  ],
  "K96": [
    { code: "V0904", name: "KAWALAN PENGELUARAN MAKANAN DAN PENYELIAAN", candidates: 28 },
    { code: "V1104", name: "KAWALAN PEMBUATAN PASTRI DAN INOVASI", candidates: 30 },
    { code: "V1214", name: "PERKHIDMATAN OPERASI SALUN", candidates: 21 },
    { code: "V1304", name: "KHIDMAT PELANGGAN DAN REKREASI", candidates: 25 }
  ]
};
