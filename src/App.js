// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import MainComponent from './components/MainComponent';
import ProductShowcase from './components/ProductShowcase';
import ServiceComponent from './components/ServiceComponent';
import MostSellingBagsComponent from './components/MostSellingBagsComponent';
import ContactComponent from './components/ContactComponent';
import FooterComponent from './components/FooterComponent';
import BagsComponent from './atoms/BagsComponent';

//Import pages from /pages
import ProductPage from './pages/ProductPage';
import BlogPage from './pages/BlogPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PricingPage from './pages/PricingPage';
import CategoryPage from './pages/CategoryPage';

// Components to be rendered initially
const InitialComponents = () => (
  <div>
    <MainComponent />
    <BagsComponent />
    <ProductShowcase />
    <ServiceComponent />
    <MostSellingBagsComponent />
    <ContactComponent />
  </div>
);

function App() {
  return (
    <Router>
      <div>
        <ResponsiveAppBar />
        {/* Route for initially loaded components */}
        <Routes>
          <Route path="/" element={<InitialComponents />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          {/* Add more routes for dynamically created pages later */}
        </Routes>
        <MostSellingBagsComponent />
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;
