import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import HomePage from './pages/HomePage'


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router