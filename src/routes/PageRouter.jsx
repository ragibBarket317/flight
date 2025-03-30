import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Footer from '../components/Common/Footer'
import Header from '../components/Common/Header'

const PageRouter = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default PageRouter
