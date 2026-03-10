import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import QualityPolicy from './pages/QualityPolicy';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Gallery from './pages/Gallery';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/quality-policy" element={<QualityPolicy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
