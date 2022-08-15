import styled from 'styled-components';
import Layout from "@/components/mengenal-kami/layout";


const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: .9rem 0;
  text-align: justify;
`;
const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

export default function Tugas() {
  return (
    <Layout breadcrumb="Tugas dan fungsi">
      <Heading>
        TUGAS, FUNGSI DAN STRUKTUR ORGANISASI DINAS
      </Heading>
      <Paragraph>
      Dinas Sosial Kota Ambon dibentuk berdasarkan Peraturan Daerah Kota AmbonNomor 4 Tahun 2016. Secara struktur organisasi dipimpin seorang Kepala Dinas yangberada di bawah dan bertanggung jawab kepada Walikota melalui Sekretaris Daerah.
      </Paragraph>
      <Paragraph>
      Sebagai organsisasi daerah yang diberi hak otonom, dalam membantu Walikotaterhadap tugas penyelenggaraan pemerintah, pelaksanaan pembangunan, pembinaan danpemberdayaan masyarakat, maka Dinas Sosial Kota Ambon mempunyai tugas, yakni
      melaksanakan penyusunan dan pelaksanaan kebijakan di bidang sosial dalam rangkapelaksanaan tugas desentralisasi, tugas pembantuan dan tugas-tugas lain yang diberikanoleh Walikota. Dan untuk menyelenggarakan tugas tersebut di atas, maka Dinas Sosial
      mempunyai fungsi, yakni.
      </Paragraph>
      <Heading>
        Tugas
      </Heading>
      <Paragraph>Membantu Walikota melaksanakan penyusunan dan pelaksanaan  kebijakan di  bidang  komunikasi informatika dan persandian.</Paragraph>

      <List>
        <ListItem>Perumusan Kebijakan Teknis Urusan Pemerintaan di Bidang Sosial</ListItem>
        <ListItem>Pelaksanaan Kebijakan di Bidang Sosial</ListItem>
        <ListItem>Pelaksanaan Evaluasi dan Pelaporan di Bidang Sosial</ListItem>
        <ListItem>Pelaksanaan Administrasi Dinas</ListItem>
        <ListItem>Pelaksanaan Fungsi Lain yang diberikan Walikota terkait Tugas dan Fungsinya</ListItem>
      </List>
    </Layout>
  );
}