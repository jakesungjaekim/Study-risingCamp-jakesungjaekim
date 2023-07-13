import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import CoursePage from './pages/CoursePage'


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/course/:id' element={<CoursePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router