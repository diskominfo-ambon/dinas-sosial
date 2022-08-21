import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './container';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LinkDropdown from './link-dropdown';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ContainerFlexRow = styled(Container)`
  display: flex;
  justify-content: space-between;
`;
const Header = styled.header`
  // border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  background-color: var(--primary);
`;
const FormGroup = styled.div`
  border: 1px solid #ddd;
  align-self: center;
  flex: 1;
  overflow: hidden;
  display: flex;
  border-radius: 5px;
`;
const Content = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  width: 100%;
  padding: .6rem .8rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  border: none;
  outline: none;
  font-size: .9rem;

  &::placeholder {
    color: #B7B7B7;
  }
`;
const Submit = styled.button`
  border: none;
  border-left: 1px solid #ddd;
  width: 40px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
  > svg path {
    color: var(--light);
  }
`;


const NavbarBrand = styled(Image)`
  margin: 0;
  display: block;
  filter: saturate(0) brightness(100);
`;
const NavbarCollapse = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 2rem;
`;
const NavbarItem = styled.li`
  display: inline-block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  // padding: .7rem ;
  font-size: .9rem;


  &:first-child {
    // padding: .7rem .9rem .7rem 0;
  }

  > a {
    text-decoration: none;
    position: relative;
    color: white;
    padding: .6rem 1rem;
    border-radius: 4px;

    svg  path {
      fill: white;
    }

    ${
      props => props.active && `
        color: white;
        background-color: red;
        // &::before {
        //   content: '';
        //   display: block;
        //   position: absolute;
        //   width: 100%;
        //   height: 3px;
        //   background-color: white;
        //   top: 1.75rem;
        // }
      `
    }

  }

  &::after {
    // content: '';
    // display: inline-block;
    // height: 20px;
    // width: 1px;
    // background-color: #ddd;
    // position: relative;
    // left: 12px;
    // top: 4px;
  }

  &:last-child::after {
    display: none;
  }
`;

export default function Navbar() {

  const router = useRouter();

  return (
    <Header>
      <ContainerFlexRow>
        <Content>
          <NavbarBrand src="/static/img/logo-sosial.png" height={40} width={40} alt="logo kominfo"/>
          <NavbarCollapse>
            <NavbarItem active={router.pathname === '/'}>
              <Link href="/" passHref>
                Beranda
              </Link>
            </NavbarItem>
            
            <NavbarItem
              active={/mengenal-kami/.test(router.pathname)}
            >
              <LinkDropdown
                text="Mengenal kami"
                menus={[
                  { to: '/mengenal-kami/tentang', text: 'Tentang Kami'},
                  { to: '/mengenal-kami/tugas', text: 'Tugas dan Fungsi'},
                  { to: '/mengenal-kami/pegawai', text: 'Pegawai'},
                ]}
              />
            </NavbarItem>

            <NavbarItem
              active={/perencanaan/.test(router.pathname)}
            >
              <LinkDropdown
                text="Perencanaan"
                menus={[
                  { to: '/perencanaani/rencana-strategi', text: 'Rencana Strategis'},
                  { to: '/perencanaan/rencana-kerja', text: 'Rencana Kerja'},
                  { to: '/perencanaan/lakip', text: 'LAKIP'},
          
                ]}
              />
            </NavbarItem>
            
            <NavbarItem active={/pelayanan/.test(router.pathname)}>
              <LinkDropdown
                text="Pelayanan"
                menus={[
                  { to: 'https://ambon.go.id/wp-content/uploads/2022/07/PRODUK-LAYANAN-DINAS-SOSIAL.xlsx', text: 'PRODUK LAYANAN DINAS SOSIAL' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/SOP-SELEKSI-YAYASAN.pdf', text: 'SOP SELEKSI YAYASAN' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/SOP-SELEKSI-PUTUS-SEKOLAH.pdf', text: 'SOP SELEKSI PUTUS SEKOLAH' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/SOP-PUB.pdf', text: 'SOP PUB' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/SOP-PENGANGKATAN-ANAK.pdf', text: 'SOP PENGANGKATAN ANAK' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/SOP-BPJS.pdf', text: 'SOP BPJS' },
                  { to: 'https://ambon.go.id/wp-content/uploads/2021/06/ALUR-PENGADUAN.pdf', text: 'ALUR PENGADUAN' },
                ]}
              />
            </NavbarItem>
            <NavbarItem  active={router.pathname === '/berita'}>
              <Link href="/informasi/kegiatan" passHref>Kegiatan dan Berita</Link>
            </NavbarItem>
          </NavbarCollapse>
        </Content>
      </ContainerFlexRow>
    </Header>
  );
}