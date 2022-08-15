import Layout from '@/components/mengenal-kami/layout';
import styled from 'styled-components';

const Heading = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.2rem;
`;
const Paragraph = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  line-height: 30px;
  margin: 0;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: .8rem;
  display: block;
`;

const List = styled.ul`
  list-style: numeric;
`;
const ListItem = styled.li`
  font-family: 'Plus Jakarta Sans', sans-serif;
  margin-bottom: .9rem;
`;

const Note = styled.div`
  background-color: var(--primary);
  position: relative;
  padding: 1rem;
  margin: 2rem 0;
  border-radius: 3px;
  > h2 {
    color: var(--dark);
    top: -30px;
    position: absolute;
    background-color: white;
    border-radius: 3px;
    padding: .2rem .4rem;
    border: 1px solid var(--primary);
  }

  > p {
    padding: 0;
    color: white;
    text-align: center;
  }
`;

export default function About() {

  return (
    <Layout breadcrumb="Tentang">
      <Heading>Tentang</Heading>

      <Note>        
        <Heading>Visi</Heading>
        <Paragraph>Ambon yang hamonis, sejatera dan religius</Paragraph>
      </Note>

      <Heading>Misi</Heading>
      <List>
        <ListItem>Memperkuat dan mempererat harmonisasi sosial</ListItem>
        <ListItem>Meningkatkan kualitas sumber daya manusia</ListItem>
        <ListItem>Memberdayakan ekonomi keluarga dan masyarakat menuju kemandirian yang kreatif berbasis sumber daya alam yang tersedia</ListItem>
        <ListItem>Meningkatkan nilai-nilai sprititualitas masyarakat</ListItem>
      </List>
      <Note>
        <Heading>Motto</Heading>
        <Paragraph>Kesejahtera Dari, Oleh dan Untuk Kita</Paragraph>
      </Note>

      <Heading>Makmulat Pelayanan</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/08/maklumat-dinsos.png"/>


      <Heading>Struktur Organisasi</Heading>
      <Image src="https://ambon.go.id/wp-content/uploads/2022/04/22.-Dinsos.png"/>

      {/* <Heading>Budaya Malu Dinas Sosial</Heading> */}
    </Layout>
  );
}