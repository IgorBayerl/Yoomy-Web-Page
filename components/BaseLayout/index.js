// Components
import Header from './Header';
import Footer from './Footer';

export default function BaseLayout({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
