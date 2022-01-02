import Navbarw from './Navbarw'
import Footer from './Footer'
export default function Layout({ children }) {
  return (
    <>
      <Navbarw />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}