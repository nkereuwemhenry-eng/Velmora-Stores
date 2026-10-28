import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Featurecard from './components/Featurecard'
import DiscountBanner from './components/DiscountBanner'
import Footer from './components/Footer'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Children from './Pages/Children'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Featurecard />
              <DiscountBanner />
            </>
          }
        />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/children" element={<Children />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
