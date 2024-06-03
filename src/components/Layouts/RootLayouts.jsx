import Navbar from '../Navbars/Navbar'
import Header from '../Headers/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout
