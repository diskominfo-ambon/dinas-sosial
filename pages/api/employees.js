
const employees = [
  {
    "id": 1,
    "name": "dr. NURHAJATI JASIN",
    "employee_role": "KEPALA DINAS ",
    "profile": "/static/pegawai/dinsos/kadis.JPG"
  },
  {
    "id": 2,
    "name": "RICKY . D. SOPACUA, S.Sos. MH",
    "employee_role": "SEKERTARIS DINAS",
    "profile": "/static/pegawai/dinsos/sekdis.JPG"
  },
  {
    "id": 3,
    "name": "ABDUSSAMAD PAYAPO, SST",
    "employee_role": "KEPALA BIDANG PERLINDUNGAN DAN JAMINAN SOSIAL",
    "profile": "/static/pegawai/dinsos/abdusamad.JPG"
  },
  {
    "id": 4,
    "name": "MARIA LEIWAKABESSY, S.Sos, M.Si",
    "employee_role": "KEPALA BIDANG PEMBERDAYAAN SOSIAL DAN PFM",
    "profile": "/static/pegawai/dinsos/maria.JPG"
  },
  {
    "id": 5,
    "name": "RENY TEHUBYULUW, S.Sos",
    "employee_role": "KEPALA BIDANG REHABILITASI SOSIAL",
    "profile": "/static/pegawai/dinsos/reny.JPG"
  },
  {
    "id": 6,
    "name": "Dra. SITTI RACHMAH BANDU",
    "employee_role": "KEPALA SEKSI REHABILITASI TUNA SOSIAL DAN KORBAN PERDAGANGAN ORANG",
    "profile": "/static/pegawai/dinsos/sitti.JPG"
  },
  {
    "id": 7,
    "name": "ANGGANITA PESIWARISSA, S,Sos",
    "employee_role": "KEPALA SEKSI REHABILTASI SOSIAL PENYANDANG DISABILITAS",
    "profile": "/static/pegawai/dinsos/angganita.JPG"
  },
  {
    "id": 8,
    "name": "HASRIYATI, S.Sos",
    "employee_role": "KEPALA SEKSI REHABILITASI SOSIAL ANAK DAN LANJUT USIA",
    "profile": "/static/pegawai/dinsos/hasriyati.JPG"
  },
  {
    "id": 9,
    "name": "Dra. ELVIN MUAL",
    "employee_role": "KESIE PEMBERDAYAAN MASYARAKAT, KELEMBAGAAN DAN RESTORASI SOSIAL",
    "profile": "/static/pegawai/dinsos/elvin.JPG"
  },
  {
    "id": 10,
    "name": "NAGARA TUANKOTTA, S.IP",
    "employee_role": "KEPALA SEKSI JAMINAN SOSIAL",
    "profile": "/static/pegawai/dinsos/nagara.JPG"
  },
  {
    "id": 11,
    "name": "MAXMILLIAN ROBERTH HATTU, MPSSp",
    "employee_role": "KEPALA SEKSI IDENTIFIKASI DAN PENGUATAN KAPASITAS",
    "profile": "/static/pegawai/dinsos/maxmillian.JPG"
  },
  {
    "id": 12,
    "name": "DJUWAIRIAH, S.Sos",
    "employee_role": "KEPALA SEKSI PERLINDUNGAN SOSIAL KORBAN BENCANA ALAM DAN BENCANA SOSIAL",
    "profile": "/static/img/avatar.jpg"
  },
  {
    "id": 13,
    "name": "SUSANA . M.H. TENGKERY, S.Sos",
    "employee_role": "KEPALA SEKSI BANTUAN STIMULAN DAN PENATAAN LINGKUNGAN  ",
    "profile": "/static/pegawai/dinsos/susana.JPG"
  },
  {
    "id": 14,
    "name": "ELIZABETH . M. NANLOHY, A.Md",
    "employee_role": "PENGELOLA BANTUAN SOSIAL DAN HIBAH",
    "profile": "/static/pegawai/dinsos/elizabeth.JPG"
  },
  {
    "id": 15,
    "name": "FITRIAH RAZAK, S.Sos",
    "employee_role": "PENGELOLA DANA BANTUAN SOSIAL",
    "profile": "/static/pegawai/dinsos/fitryah.JPG"
  },
  {
    "id": 16,
    "name": "HASAN KIAT",
    "employee_role": "PEMBUATAN DAFTAR GAJI",
    "profile": "/static/pegawai/dinsos/hasan.JPG"
  },
  {
    "id": 17,
    "name": "BASTIAN CORNELES PESULIMA",
    "employee_role": "ANALIS MASALAH SOSIAL",
    "profile": "/static/pegawai/dinsos/bastian.JPG"
  },
  {
    "id": 18,
    "name": "ADRIANA LELAPARY",
    "employee_role": "PENGADMINISTRASI UMUM",
    "profile": "/static/pegawai/dinsos/adriana.JPG"
  },
  {
    "id": 19,
    "name": "STEFANUS ROMSERY",
    "employee_role": "PENGADMINISTRASI ANAK TERLANTAR",
    "profile": "/static/pegawai/dinsos/stefanus.JPG"
  },
  {
    "id": 20,
    "name": "MERYAM MASBAITUBUN",
    "employee_role": "BENDAHARA",
    "profile": "/static/pegawai/dinsos/meryam.JPG"
  },
  {
    "id": 21,
    "name": "YACOBUS ROBER LAISINA, SE",
    "employee_role": "PENGELOLA PEMANFAATAN BARANG MILIK DAERAH",
    "profile": "/static/pegawai/dinsos/yacobus.JPG"
  },
  {
    "id": 22,
    "name": "HERMAN CORPUTTY",
    "employee_role": "PENGADMINISTRASIAN REHABILITASI PENYANDANG CACAT",
    "profile": "/static/pegawai/dinsos/herman.JPG"
  },
  {
    "id": 23,
    "name": "ALBERTH . R. SOHILAIT, Amd. Kom",
    "employee_role": "ANALIS REHABILITASI MASALAH SOSIAL",
    "profile": "/static/pegawai/dinsos/alberth.JPG"
  },
  {
    "id": 24,
    "name": "THEOPHANI KHARISMA TITALEY, S,Psi",
    "employee_role": "PENYULUH SOSIAL AHLI PERTAMA",
    "profile": "/static/pegawai/dinsos/theophani.JPG"
  },
  {
    "id": 25,
    "name": "VENSCA GRETHILIA MELATAWUN, S,Psi",
    "employee_role": "PENYULUH SOSIAL AHLI PERTAMA",
    "profile": "/static/pegawai/dinsos/vensca.JPG"
  },
  {
    "id": 26,
    "name": "HENDERINA LINDA BATLAJERY, S.Sos",
    "employee_role": "PENGELOLA PERLINDUNGAN SOSIAL",
    "profile": "/static/pegawai/dinsos/henderina.JPG"
  },
  {
    "id": 27,
    "name": "FRANGKLIN ERIEC SALHUTERU, S.Sos",
    "employee_role": "PENGADMINISTRASIAN REHABILITASI MASALAH SOSIAL",
    "profile": "/static/pegawai/dinsos/franklin.JPG"
  },
  {
    "id": 28,
    "name": "ZAINAL ARIFIN MADAMAR, S.Sos",
    "employee_role": "PENGELOLA FASILITAS SOSIAL DAN UMUM",
    "profile": "/static/pegawai/dinsos/zainal.JPG"
  },
  {
    "id": 29,
    "name": "AN ADELINA SAHETAPY",
    "employee_role": "PENGADMINISTRASI KEPEGAWAIAN",
    "profile": "/static/pegawai/dinsos/andelina.JPG"
  },
  {
    "id": 30,
    "name": "THOMYULEX WILLYBROOD MARTHEN",
    "employee_role": "PENGELOLA PERLINDUNGAN SOSIAL",
    "profile": "/static/pegawai/dinsos/thomyulex.JPG"
  },
  {
    "id": 31,
    "name": "FENNY KUSNURIANTI",
    "employee_role": "PENGELOLA PEMBERDAYAAN LEMBAGA SOSIAL ",
    "profile": "/static/pegawai/dinsos/fenny.JPG"
  }
 ]

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: employees,
  });
}
