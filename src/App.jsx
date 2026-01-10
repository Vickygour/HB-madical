import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import CompanySection from './Components/SlideImage/CompanySection/CompanySection.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CompanyIntro from './Components/CompanyIntro/CompanyIntro.jsx';
import Technology from './Components/CompanyIntro/Technology.jsx';
import ProductInfo from './Components/CompanyIntro/ProductInfo.jsx';
import ContactUs from './Components/ContactUs/ContactUs.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CompanySection />} />
          <Route path="/CompanyIntro" element={<CompanyIntro />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
