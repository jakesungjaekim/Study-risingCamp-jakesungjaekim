import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'

const Router = () => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="rooms/:id" element={<RoomsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router