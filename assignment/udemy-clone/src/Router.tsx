import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/common/Header'
import App from './App'


const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router