import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import CompanySection from './Components/SlideImage/CompanySection/CompanySection.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CompanyIntro from './Components/CompanyIntro/CompanyIntro.jsx';
import Technology from './Components/CompanyIntro/Technology.jsx';
import ProductInfo from './Components/CompanyIntro/ProductInfo.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';

import CUSHIONMAT from './Components/ProductPage/CUSHIONMAT.jsx';
import Goldmat from './Components/ProductPage/Goldmat.jsx';
import Graphenebelt from './Components/ProductPage/Graphenebelt.jsx';
import Silvermat from './Components/ProductPage/Silvermat.jsx';
import SlimmingBelt from './Components/ProductPage/SlimmingBelt.jsx';
import TattumSitting from './Components/ProductPage/TattumSitting.jsx';
import ProductPage from './Components/ProductPage/ProductPage .jsx';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* 👈 MAGIC LINE */}
      <Header />
      <Routes>
        <Route path="/" element={<CompanySection />} />
        <Route path="/CompanyIntro" element={<CompanyIntro />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/ProductInfo" element={<ProductInfo />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/CushionMat" element={<CUSHIONMAT />} />
        <Route path="/Goldmat" element={<Goldmat />} />
        <Route path="/Graphenebelt" element={<Graphenebelt />} />
        <Route path="/Silvermat" element={<Silvermat />} />
        <Route path="/SlimmingBelt" element={<SlimmingBelt />} />
        <Route path="/TattumSitting" element={<TattumSitting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
