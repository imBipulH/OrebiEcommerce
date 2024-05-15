import Advertise from '../Advertise.jsx/Advertise'
import Advertise2 from '../Advertise.jsx/Advertise2'
import AdditonalInfo from '../Banner/AdditonalInfo'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import NewArrivals from '../NewArrivals/NewArrivals'
import SpecialOffers from '../SpecialOffers/SpecialOffers'

const Home = () => {
  return (
    <>
      <Banner />
      <AdditonalInfo />
      <Advertise />
      <NewArrivals />
      <Advertise2 />
      <SpecialOffers />
      <Footer />
    </>
  )
}

export default Home
