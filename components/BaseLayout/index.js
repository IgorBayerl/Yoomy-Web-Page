// Components
import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

export default function BaseLayout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
