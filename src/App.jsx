import { HashRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import CheckoutPage from "./pages/CheckoutPage"
import ProfilePage from "./pages/ProfilePage"
import ShopPage from "./pages/ShopPage"
import SingleProductPage from "./pages/SingleProductPage"
import { Layout } from "./Layout"
import AuthPage from "./pages/AuthPage"
import AboutPage from "./pages/AboutPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
