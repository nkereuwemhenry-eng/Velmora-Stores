import { useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
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
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/', { replace: true })
  }, [navigate])

  return (
    <div>
      <ScrollToTop />
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
        <Route
          path="*"
          element={
            <main className="flex min-h-[50vh] flex-col items-center justify-center px-5 py-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-yellow-700">
                Page unavailable
              </p>
              <h1 className="mt-3 text-3xl font-bold text-gray-900">
                This page isn’t here yet
              </h1>
              <p className="mt-3 max-w-lg text-gray-600">
                That destination may not be available yet. Return to the
                homepage to continue browsing.
              </p>
              <Link
                to="/"
                className="mt-6 rounded-md bg-black px-6 py-3 font-semibold text-white transition hover:bg-yellow-400 hover:text-black"
              >
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
