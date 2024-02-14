
import Footer from '@components/LandingPage/Footer'
import General from "@components/LandingPage/General"
import Search from "@components/LandingPage/Search"
import Slider from "@components/Slider/Slider"
import Find from "@components/LandingPage/Find"
import Deal from '@components/LandingPage/Deal'
import Ressources from '@components/LandingPage/Ressources'


const Home = () => {
  return (
  <>
  
  <General/>
  <Slider/>
 <Search/>
 <Find/>
 <Deal/>

 <Ressources/>
 <Footer/>

  </>
  )
}

export default Home