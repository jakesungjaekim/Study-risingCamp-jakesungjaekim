import Hero from '../components/home/Hero'
import Dashboard from '../components/home/Dashboard'
import Carousel from '../components/home/Carousel'
import CategoryImage from '../components/home/CategoryImage'
import CategoryTopic from '../components/home/CategoryTopic'
import Description from '../components/home/Description'
import Footer from '../components/common/Footer'


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />  
      <Dashboard />
      <Carousel />
      <CategoryImage />
      <CategoryTopic />
      <Description />
      <Footer /> 
    </>
  )
}

export default HomePage