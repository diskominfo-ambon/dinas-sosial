

export default function handler(req, res) {
  res.status(200).json({
    message: "Successfully",
    statusCode: 200,
    data: [
      {
        id: 1,
        title: "Dinas Sosial Kota Ambon Salurkan Bantuan Logistik Tanggap Darurat",
        picture_url: "https://ambon.go.id/wp-content/uploads/2022/07/WhatsApp-Image-2022-07-12-at-16.21.07.jpeg",
        desc: "Informasi terbaru dari Dinas komunikasi, informatika dan persandian kota Ambon",
        desc_short: "Dinas Sosial Kota Ambon, sesuai dengan Tugas pokok dan fungsi (Tupoksi) dalam penganggulangan bencana telah menyalurkan bantuan logistik tanggap darurat kepada korban banjir dan tanah longsor di Ambon....",
        created_at: "12 Juli 2022",
      }
    ]
  })
}
