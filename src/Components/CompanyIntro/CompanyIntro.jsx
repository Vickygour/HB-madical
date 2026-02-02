import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img4 from "../../assets/new ceo.jpg";
import img5 from "../../assets/MainImg-CS1JoXJ1.jpg";

// Import certificates
import cert1 from "../../assets/Certificate/certificate1.jpg";
import cert2 from "../../assets/Certificate/certificate2.jpg";
import cert3 from "../../assets/Certificate/certificate3.jpg";
import cert4 from "../../assets/Certificate/certificate4.jpg";
import cert5 from "../../assets/Certificate/certificate5.jpg";
import cert6 from "../../assets/Certificate/certificate6.jpg";
import cert7 from "../../assets/Certificate/certificate7.jpg";
import cert8 from "../../assets/Certificate/certificate8.jpg";
import cert9 from "../../assets/Certificate/certificate9.jpg";
import cert10 from "../../assets/Certificate/certificate10.jpg";
import cert11 from "../../assets/Certificate/certificate11.jpg";
import cert12 from "../../assets/Certificate/certificate12.jpg";
import cert13 from "../../assets/Certificate/certificate13.jpg";
import cert14 from "../../assets/Certificate/certificate14.jpg";
import cert15 from "../../assets/Certificate/certificate15.jpg";
import cert16 from "../../assets/Certificate/certificate16.jpg";
import cert17 from "../../assets/Certificate/certificate17.jpg";
import cert18 from "../../assets/Certificate/certificate18.jpg";
import cert19 from "../../assets/Certificate/certificate19.jpg";
import cert20 from "../../assets/Certificate/certificate20.jpg";
import cert21 from "../../assets/Certificate/certificate21.jpg";
import cert22 from "../../assets/Certificate/certificate22.jpg";
import cert23 from "../../assets/Certificate/certificate23.jpg";
import cert24 from "../../assets/Certificate/certificate24.jpg";
import cert25 from "../../assets/Certificate/certificate25.jpg";
import cert26 from "../../assets/Certificate/certificate26.jpg";
import cert27 from "../../assets/Certificate/certificate27.jpg";
import cert28 from "../../assets/Certificate/certificate28.jpg";
import cert29 from "../../assets/Certificate/certificate29.jpg";
import cert30 from "../../assets/Certificate/certificate30.jpg";
import cert31 from "../../assets/Certificate/certificate31.jpg";

const certificates = [
  { id: 1, image: cert1, title: "Certificate 1" },
  { id: 2, image: cert2, title: "Certificate 2" },
  { id: 3, image: cert3, title: "Certificate 3" },
  { id: 4, image: cert4, title: "Certificate 4" },
  { id: 5, image: cert5, title: "Certificate 5" },
  { id: 6, image: cert6, title: "Certificate 6" },
  { id: 7, image: cert7, title: "Certificate 7" },
  { id: 8, image: cert8, title: "Certificate 8" },
  { id: 9, image: cert9, title: "Certificate 9" },
  { id: 10, image: cert10, title: "Certificate 10" },
  { id: 11, image: cert11, title: "Certificate 11" },
  { id: 12, image: cert12, title: "Certificate 12" },
  { id: 13, image: cert13, title: "Certificate 13" },
  { id: 14, image: cert14, title: "Certificate 14" },
  { id: 15, image: cert15, title: "Certificate 15" },
  { id: 16, image: cert16, title: "Certificate 16" },
  { id: 17, image: cert17, title: "Certificate 17" },
  { id: 18, image: cert18, title: "Certificate 18" },
  { id: 19, image: cert19, title: "Certificate 19" },
  { id: 20, image: cert20, title: "Certificate 20" },
  { id: 21, image: cert21, title: "Certificate 21" },
  { id: 22, image: cert22, title: "Certificate 22" },
  { id: 23, image: cert23, title: "Certificate 23" },
  { id: 24, image: cert24, title: "Certificate 24" },
  { id: 25, image: cert25, title: "Certificate 25" },
  { id: 26, image: cert26, title: "Certificate 26" },
  { id: 27, image: cert27, title: "Certificate 27" },
  { id: 28, image: cert28, title: "Certificate 28" },
  { id: 29, image: cert29, title: "Certificate 29" },
  { id: 30, image: cert30, title: "Certificate 30" },
  { id: 31, image: cert31, title: "Certificate 31" },
];

const CERTIFICATES_PER_PAGE = 10;

const tabs = [
  { id: "greetings", label: "Greetings" },
  { id: "corporate", label: "Corporate philosophy" },
  { id: "history", label: "History" },
  { id: "patents", label: "Patents/certificates" },
  { id: "award", label: "Award details" },
  { id: "howtofind", label: "How to find us" },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CompanyIntro = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "greetings");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  // Pagination functions
  const totalPages = Math.ceil(certificates.length / CERTIFICATES_PER_PAGE);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "greetings":
        return (
          <motion.div
            key="greetings"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
              GREETING
            </h2>
            <h3 className="text-base md:text-lg font-semibold text-gray-700 mb-4 md:mb-6">
              CEO GREETING
            </h3>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-8"
            >
              <motion.div variants={scaleIn}>
                <img
                  src={img4}
                  alt="CEO"
                  className="w-full h-auto rounded-none shadow-lg"
                />
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 md:space-y-6"
              >
                <p className="text-red-700 text-sm md:text-base leading-relaxed">
                  We became successfully established in Korea on the basis of
                  the trust and affection of our customers and efforts of our
                  staff and executives as well as authorized dealers to become
                  the leader of the thermal medical device industry.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  We will repay the interest and affection of our customers with
                  the best quality and services. Furthermore, we will
                  ceaselessly make efforts to proliferate health and happiness.
                </p>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  As we have done since our establishment, Hanbit Nano Medical
                  Devices shall ceaselessly pursue research and development and
                  repay the affections of our customers with creative products
                  and enhanced quality. As such, we seek your continued interest
                  and support.
                </p>
                <div className="text-right pt-4 md:pt-8">
                  <p className="text-xl md:text-2xl font-bold text-gray-800">
                    CEO KIM
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case "corporate":
        return (
          <motion.div
            key="corporate"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
              CORPORATE PHILOSOPHY
            </h2>

            <motion.div
              variants={scaleIn}
              className="bg-gray-100 border-l-4 border-gray-400 p-4 md:p-6 mb-6 md:mb-8"
            >
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Household medical devices which contribute to blood circulation
                improvement and alleviation of muscle aches.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="space-y-3 md:space-y-4 mb-8 md:mb-12"
            >
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We shall continue to strive to offer fulfillment and
                satisfaction for our customers by providing excellent quality,
                highly reliable products along with thorough customer service.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                The visions and values of Hanbit Nano Medical Devices can be
                evaluated through our management assessment system.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden shadow-lg mb-12 md:mb-16"
            >
              <img
                src={img5}
                alt="Corporate Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/70" />
              <div className="absolute top-1/2 right-4 md:right-12 transform -translate-y-1/2 text-right text-white max-w-xs md:max-w-xl px-4">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 tracking-wide drop-shadow-lg">
                  PHILOSOPHY
                </h3>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-md">
                  We will repay the interest and affection of our customers with
                  the best quality and services. Furthermore, we will
                  ceaselessly make efforts to proliferate health and happiness.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12 md:mb-16">
              <div className="bg-gray-100 py-3 md:py-4 px-4 md:px-6 mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  QUALITY FIRST
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-6 md:mb-8 px-4 md:px-6">
                So that everyone can find their health and enjoy happiness
              </p>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4 md:space-y-6 px-4 md:px-6"
              >
                {[
                  {
                    title: "Respect for human beings",
                    text: "We are implementing a personnel management policy to enable all members of Hanbit to fully demonstrate their respective capabilities and creativity, upholding respect for humans as the foremost value in order for all our customers to restore their health and enjoy happiness in life.",
                  },
                  {
                    title: "Customer Satisfaction",
                    text: "We shall fulfill our corporate obligations by placing the utmost priority on customer satisfaction from the viewpoints of our customers.",
                  },
                  {
                    title: "Quality First",
                    text: "We will make efforts to manufacture products that come ever-closer to perfection, rather than merely striving to sell more products.",
                  },
                ].map((item, idx) => (
                  <motion.div key={idx} variants={scaleIn}>
                    <h4 className="text-base md:text-lg font-bold text-red-700 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gray-100 py-3 md:py-4 px-4 md:px-6 mb-8 md:mb-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                  CREATIVE PRODUCTS
                </h3>
              </div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-6"
              >
                {[
                  {
                    color: "border-blue-600 text-blue-600",
                    text: "Manufacturing\nthe best products through\napplication of new future\ntechnologies",
                  },
                  {
                    color: "border-green-600 text-green-600",
                    text: "A company\nthat grows while\nsetting trends in\nmedical devices",
                  },
                  {
                    color: "border-orange-400 text-orange-500",
                    text: "Services\nthat offer greater\nlife value",
                  },
                ].map((circle, idx) => (
                  <motion.div
                    key={idx}
                    variants={scaleIn}
                    className="flex flex-col items-center"
                  >
                    <div
                      className={`w-52 h-52 md:w-64 md:h-64 rounded-full border-6 md:border-8 ${circle.color} flex items-center justify-center bg-white shadow-lg`}
                    >
                      <p
                        className={`text-center ${circle.color} font-medium px-6 md:px-8 text-sm md:text-base leading-relaxed`}
                        style={{ whiteSpace: "pre-line" }}
                      >
                        {circle.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        );

      case "history":
      case "award":
        return (
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
              {activeTab === "history" ? "HISTORY" : "AWARDS DETAILS"}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 md:mb-12">
              We are ceaselessly pursuing research and development in order to
              manufacture the best products on the basis of expertise and
              patents accumulated over the last 17 years.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-6 md:space-y-10"
              >
                {["2019", "2018", "2016", "2015", "2014", "2013"].map(
                  (year) => (
                    <motion.div
                      key={year}
                      variants={scaleIn}
                      className="border-b border-gray-300 pb-4 md:pb-6"
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                        {year}
                      </h3>
                      <div className="space-y-2 md:space-y-3">
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          <span className="font-semibold">Jul.:</span> Sample
                          event description for {year}
                        </p>
                        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                          <span className="font-semibold">Oct.:</span> Another
                          milestone for {year}
                        </p>
                      </div>
                    </motion.div>
                  ),
                )}
              </motion.div>
              <motion.div
                variants={scaleIn}
                className="flex items-start justify-center"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700"
                  alt="Company Building"
                  className="w-full h-auto rounded-none shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        );

      case "patents":
        const startIndex = (currentPage - 1) * CERTIFICATES_PER_PAGE;
        const endIndex = startIndex + CERTIFICATES_PER_PAGE;
        const currentCertificates = certificates.slice(startIndex, endIndex);

        return (
          <>
            <motion.div
              key="patents"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12 text-center">
                PATENTS/CERTIFICATES
              </h2>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {currentCertificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={scaleIn}
                    className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3 md:p-4 text-center">
                      <p className="text-gray-700 text-xs md:text-sm font-medium">
                        {cert.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-4 mt-8 md:mt-12">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => {
                          setCurrentPage(page);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className={`w-8 h-8 md:w-10 md:h-10 rounded-lg font-semibold transition-colors ${
                          currentPage === page
                            ? "bg-gray-800 text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {page}
                      </button>
                    ),
                  )}
                </div>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-700 transition-colors"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Showing {startIndex + 1} -{" "}
                {Math.min(endIndex, certificates.length)} of{" "}
                {certificates.length} certificates
              </p>
            </motion.div>

            {/* Modal for enlarged certificate view */}
            <AnimatePresence>
              {selectedCert && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedCert(null)}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
                    >
                      <X size={24} className="text-gray-800" />
                    </button>

                    <div className="w-full max-h-[85vh] overflow-auto">
                      <img
                        src={selectedCert.image}
                        alt={selectedCert.title}
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="p-4 md:p-6 bg-gray-50 border-t">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
                        {selectedCert.title}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        );

      case "howtofind":
        return (
          <motion.div
            key="howtofind"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
              MAP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <motion.div variants={scaleIn} className="md:col-span-2">
                <div className="w-full h-64 md:h-96 lg:h-[500px] shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.1234!2d129.110287!3d35.215556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568930499e4b9db%3A0x67a06416181b5e58!2s101%20Gaejwa-ro%2C%20Geumjeong-gu%2C%20Busan%2C%20South%20Korea!5e0!3m2!1sen!2s!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Company Location Map"
                  />
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="space-y-4 md:space-y-6"
              >
                {[
                  { title: "COMPANY NAME", text: "HAPPY BIO NANO MEDICAL" },
                  {
                    title: "ADDRESS",
                    text: "Korea :2F, 101, Gaejwa-ro, Geumjeong-gu, Busan Korea  India : 787/2 2nd Floor, Sant Nagar, Delhi - 110084",
                  },
                  { title: "PARKING", text: "Use of public parking lots" },
                  { title: "BUSINESS", text: "Am:09 ~ Pm:06" },
                ].map((info, idx) => (
                  <motion.div key={idx} variants={scaleIn}>
                    <div className="bg-gray-800 text-white py-2 md:py-3 px-3 md:px-4 mb-2">
                      <h3 className="text-sm md:text-base font-semibold">
                        {info.title}
                      </h3>
                    </div>
                    <div className="bg-white border border-gray-300 py-2 md:py-3 px-3 md:px-4">
                      <p className="text-gray-700 text-xs md:text-sm">
                        {info.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 py-6 md:py-8 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            COMPANY{" "}
            <span className="text-base md:text-lg font-normal text-gray-600">
              INTRODUCE
            </span>
          </h1>
        </div>
      </motion.div>

      <div className="bg-white shadow-sm overflow-x-auto">
        <div className="max-w-7xl mx-auto flex flex-nowrap md:flex-wrap justify-start md:justify-center mb-6 md:mb-10 px-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-black py-2 md:py-3 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-2 text-xs md:text-sm text-white flex-wrap">
          <span>Home</span>
          <span>/</span>
          <span>Company introduction</span>
          <span>/</span>
          <span className="font-semibold">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
      </div>

      <div className="bg-white min-h-screen">{renderContent()}</div>
    </section>
  );
};

export default CompanyIntro;
