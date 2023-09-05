
import Footer from '@components/LandingPage/Footer'
import General from "@components/LandingPage/General"
import Search from "@components/LandingPage/Search"
import Slider from "@components/Slider/Slider"
import Find from "@components/LandingPage/Find"
import Deal from '@components/LandingPage/Deal'
import Ressources from '@components/LandingPage/Ressources'
import Stats from '@components/LandingPage/Stats'

const Home = () => {
  return (
  <>
  
  <General/>
  <Slider/>
 <Search/>
 <Find/>
 <Deal/>
 <Stats/>
 <Ressources/>
 <Footer/>

  </>
  )
}

export default Home