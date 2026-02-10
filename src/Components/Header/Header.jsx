import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import logo from '../../assets/Brand.png';
import img4 from '../../assets/MainImg-CS1JoXJ1.jpg';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const sliderImages = [
  {
    img: img4,
    title: 'QUALITY AND SERVICE',
    desc: 'We will repay the interest and affection of our customers with the best.',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔴 ONLY ProductInfo page pe slider hide
  const hideSliderRoutes = [
    '/ProductPage',
    '/CushionMat',
    '/Goldmat',
    '/Graphenebelt',
    '/Silvermat',
    '/SlimmingBelt',
    '/TattumSitting',
  ];

  const hideSlider = hideSliderRoutes.includes(location.pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ⭐ Dropdown States - FIXED
  const [coIntroDropdownOpen, setCoIntroDropdownOpen] = useState(false);
  const [techDropdownOpen, setTechDropdownOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  // Hover indexes
  const [coIntroHoverIndex, setCoIntroHoverIndex] = useState(null);
  const [techHoverIndex, setTechHoverIndex] = useState(null);
  const [productHoverIndex, setProductHoverIndex] = useState(null);

  // Mobile dropdown states
  const [mobileCoIntroOpen, setMobileCoIntroOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileProductOpen, setMobileProductOpen] = useState(false);

  // Refs for dropdown containers
  const coIntroRef = useRef(null);
  const techRef = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ⭐ FIXED: Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (coIntroRef.current && !coIntroRef.current.contains(event.target)) {
        setCoIntroDropdownOpen(false);
        setCoIntroHoverIndex(null);
      }
      if (techRef.current && !techRef.current.contains(event.target)) {
        setTechDropdownOpen(false);
        setTechHoverIndex(null);
      }
      if (productRef.current && !productRef.current.contains(event.target)) {
        setProductDropdownOpen(false);
        setProductHoverIndex(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dropdown Items Data
  const coIntroDropdownItems = [
    { id: 'greetings', label: 'Greetings' },
    { id: 'corporate', label: 'Corporate philosophy' },
    { id: 'history', label: 'History' },
    { id: 'patents', label: 'Patents/Certificates' },
    { id: 'award', label: 'Award details' },
    { id: 'howtofind', label: 'How to find us' },
  ];

  const technologyDropdownItems = [
    { id: 'ceramic', label: 'Ceramic' },
    { id: 'thermal', label: 'Thermal' },
    { id: 'heating', label: 'Heating/Magnetic' },
    { id: 'lowfreq', label: 'Low frequency/electric' },
  ];

  const productInfoDropdownItems = [
    { id: 'personal-combo', label: 'HB Nano Thermal Device' },
    { id: 'thermal-device', label: 'Personal Massagers' },
    { id: 'health-food', label: 'Functional Cosmatics' },
  ];

  // Handle dropdown item clicks
  const handleCoIntroClick = (tabId) => {
    navigate(`/CompanyIntro?tab=${tabId}`);
    setCoIntroDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleTechClick = (tabId) => {
    navigate(`/Technology?tab=${tabId}`);
    setTechDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const handleProductClick = (tabId) => {
    navigate(`/ProductInfo?tab=${tabId}`);
    setProductDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>

          {/* ⭐ DESKTOP NAVIGATION WITH FIXED HOVER DROPDOWNS */}
          <nav className="hidden lg:flex gap-8 items-center">
            <Link to="/" className="font-medium hover:text-blue-600">
              Home
            </Link>

            {/* ⭐ Co introduction Dropdown - FIXED */}
            <div
              ref={coIntroRef}
              className="relative group"
              onMouseEnter={() => setCoIntroDropdownOpen(true)}
              onMouseLeave={() => {
                setCoIntroDropdownOpen(false);
                setCoIntroHoverIndex(null);
              }}
            >
              <Link
                to="/CompanyIntro"
                className="font-medium hover:text-blue-600 inline-block px-2 py-3"
              >
                Co introduction
              </Link>
              {coIntroDropdownOpen && (
                <div className="absolute top-10 left-0 mt-1 z-50 w-[280px] bg-black/95 backdrop-blur-sm shadow-2xl rounded-xl border border-white/10 overflow-hidden">
                  {coIntroDropdownItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleCoIntroClick(item.id)}
                      onMouseEnter={() => setCoIntroHoverIndex(idx)}
                      className={`w-full text-left px-6 py-4 text-white text-sm font-medium transition-all duration-200 hover:bg-blue-600/80 ${
                        coIntroHoverIndex === idx ? 'bg-blue-600/50' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ⭐ Technology Dropdown - FIXED */}
            <div
              ref={techRef}
              className="relative group"
              onMouseEnter={() => setTechDropdownOpen(true)}
              onMouseLeave={() => {
                setTechDropdownOpen(false);
                setTechHoverIndex(null);
              }}
            >
              <Link
                to="/Technology"
                className="font-medium hover:text-blue-600 inline-block px-2 py-3"
              >
                Technology
              </Link>
              {techDropdownOpen && (
                <div className="absolute top-10 left-0 mt-1 z-50 w-[280px] bg-black/95 backdrop-blur-sm shadow-2xl rounded-xl border border-white/10 overflow-hidden">
                  {technologyDropdownItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleTechClick(item.id)}
                      onMouseEnter={() => setTechHoverIndex(idx)}
                      className={`w-full text-left px-6 py-4 text-white text-sm font-medium transition-all duration-200 hover:bg-blue-600/80 ${
                        techHoverIndex === idx ? 'bg-blue-600/50' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* ⭐ Product info Dropdown - FIXED */}
            <div
              ref={productRef}
              className="relative group"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => {
                setProductDropdownOpen(false);
                setProductHoverIndex(null);
              }}
            >
              <Link
                to="/ProductInfo"
                className="font-medium hover:text-blue-600 inline-block px-2 py-3"
              >
                Product info
              </Link>
              {productDropdownOpen && (
                <div className="absolute top-10 left-0 mt-1 z-50 w-[280px] bg-black/95 backdrop-blur-sm shadow-2xl rounded-xl border border-white/10 overflow-hidden">
                  {productInfoDropdownItems.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => handleProductClick(item.id)}
                      onMouseEnter={() => setProductHoverIndex(idx)}
                      className={`w-full text-left px-6 py-4 text-white text-sm font-medium transition-all duration-200 hover:bg-blue-600/80 ${
                        productHoverIndex === idx ? 'bg-blue-600/50' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/ContactUs" className="font-medium hover:text-blue-600">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ⭐ MOBILE MENU - UNCHANGED */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur border-t border-gray-200 max-h-[70vh] overflow-y-auto">
            <nav className="px-6 py-4 space-y-2">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-blue-50 rounded-lg transition-all"
              >
                Home
              </Link>

              {/* Mobile Co introduction */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileCoIntroOpen(!mobileCoIntroOpen)}
                  className="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                >
                  <span>Co introduction</span>
                  {mobileCoIntroOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {mobileCoIntroOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {coIntroDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleCoIntroClick(item.id)}
                        className="block w-full py-2 px-4 text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Technology */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileTechOpen(!mobileTechOpen)}
                  className="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                >
                  <span>Technology</span>
                  {mobileTechOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {mobileTechOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {technologyDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleTechClick(item.id)}
                        className="block w-full py-2 px-4 text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Product info */}
              <div className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => setMobileProductOpen(!mobileProductOpen)}
                  className="w-full flex justify-between items-center py-3 text-gray-800 font-medium"
                >
                  <span>Product info</span>
                  {mobileProductOpen ? <ChevronUp /> : <ChevronDown />}
                </button>
                {mobileProductOpen && (
                  <div className="mt-2 ml-4 space-y-1">
                    {productInfoDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleProductClick(item.id)}
                        className="block w-full py-2 px-4 text-left text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-all"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/ContactUs"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-800 font-medium hover:bg-blue-50 rounded-lg transition-all"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ===== SLIDER (EXCEPT ProductInfo) - UNCHANGED */}
      {!hideSlider && (
        <section className="w-full h-[90vh] mt-[72px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            className="w-full h-full"
          >
            {sliderImages.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="w-full h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${slide.img})` }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                    <p className="text-lg md:text-2xl mb-3">{slide.desc}</p>
                    <h1 className="text-4xl md:text-6xl font-bold">
                      {slide.title}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </>
  );
};

export default Header;
