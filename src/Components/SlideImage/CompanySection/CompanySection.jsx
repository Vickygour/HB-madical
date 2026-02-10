import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ⭐ ADDED
import img1 from '../../../assets/banner03.jpg';
import img2 from '../../../assets/MainImg-CS1JoXJ1.jpg';
import img4 from '../../../assets/banner02.jpg';
import img3 from '../../../assets/banner01.jpg';
import img5 from '../../../assets/ISO.jpg';
import img6 from '../../../assets/banner_square01.jpg';
import img7 from '../../../assets/banner_square02.jpg';
import img8 from '../../../assets/banner_square03.jpg';
import img9 from '../../../assets/banner_square04.jpg';
import img10 from '../../../assets/Product2-DhjdOj4Q.jpg';
import img11 from '../../../assets/Product3-CSZBqCjC.jpg';
import img12 from '../../../assets/Product5-tD8NLp4R.jpg';
import img13 from '../../../assets/product7.jpeg';
import img15 from '../../../assets/new ceo.jpg';

import matMain from '../../../assets/01 HB CERVICAL PILLOW.jpg';
import cushion from '../../../assets/HB CUSHION MAT.jpg';
import goldmat from '../../../assets/01 HB GOLD MAT.jpg';
import graphenebelt from '../../../assets/01 HB GRAPHENE BELT.jpg';
import silvermat from '../../../assets/01 HB SILVER MAT.jpg';
import silvermat2 from '../../../assets/02 HB SILVER MAT copy.jpg';
import slimmingbelt from '../../../assets/01 HB SLIMMING BELT.jpg';
import tattum from '../../../assets/02 HB TATTUM SITTING THERAPY.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const infoCards = [
  { title: 'CEO', subtitle: 'Greetings', image: img15 },
  { title: 'Corporate', subtitle: 'Philosophy', image: img2 },
  { title: 'Patents', subtitle: 'Certificates', image: img3 },
  { title: 'Award', subtitle: 'Details', image: img4 },
];

const categories = [
  { name: 'Ceramic', image: img6 },
  { name: 'Thermal', image: img7 },
  { name: 'Heating cable/Magnetic shielding', image: img8 },
  { name: 'Low frequency/electric potential', image: img9 },
];

// ⭐ RELATED PRODUCTS WITH LINKS
const relatedProducts = [
  {
    img: matMain,
    name: 'HB Cervical Stones Heating Pillow',
    path: '/ProductPage',
  },
  {
    img: cushion,
    name: 'HB Cushion Heating Mat',
    path: '/CushionMat',
  },
  {
    img: goldmat,
    name: 'HB Gold Heating Mat',
    path: '/Goldmat',
  },
  {
    img: graphenebelt,
    name: 'HB Graphene Therapy Belt',
    path: '/Graphenebelt',
  },
  {
    img: silvermat,
    name: 'HB Silver Heating Mat',
    path: '/Silvermat',
  },
  {
    img: slimmingbelt,
    name: 'HB Slimming Therapy Belt',
    path: '/SlimmingBelt',
  },
  {
    img: tattum,
    name: 'HB Tattum Sitting Therapy Device',
    path: '/TattumSitting',
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CompanySection() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <>
      {/* Company Info Section */}
      <section className="bg-white font-sans pb-16">
        {/* Headline and Subtitle */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto py-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            We are creating masterpieces by specialists in all the relevant
            areas
          </h2>
          <div className="mx-auto w-32 border-b-2 border-black mb-3"></div>
          <div className="text-gray-700 font-semibold mb-8">
            Masterpiece: Renowned outstanding work
          </div>
        </motion.div>

        {/* Info Cards with Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 px-6"
        >
          {infoCards.map((c) => (
            <motion.div
              key={c.title}
              variants={scaleIn}
              className="bg-white rounded-none shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-55 bg-gray-100 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="bg-black py-2 flex flex-col items-center">
                <div className="text-white text-2xl font-bold mb-2 tracking-wide">
                  {c.title}
                </div>
                <div className="text-gray-300 text-base mt-1">{c.subtitle}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Three Columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-10 px-6"
        >
          {/* FAQ */}
          <motion.div variants={fadeInUp} className="flex flex-col">
            <div className="flex items-end gap-3">
              <h3 className="text-2xl font-semibold text-black border-b-2 border-black pb-1">
                FAQ
              </h3>
              <span className="text-[#a8445c] text-lg font-medium">
                Question board
              </span>
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="text-gray-400 text-base">
                · Where is SNS shortcut icons
              </div>
              <div className="text-gray-400 text-sm ml-2 mt-1">2020-04-08</div>
            </div>
          </motion.div>

          {/* YouTube */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <button className="mb-2 ml-auto self-end px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded shadow">
              more +
            </button>
            <iframe
              className="w-full aspect-video shadow-lg rounded"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              allowFullScreen
            />
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-3">
            <div className="text-2xl font-semibold text-gray-800">TEL. NO.</div>
            <div className="text-gray-600 font-medium mb-2 text-base">
              We will always provide friendly consultations for your inquiries.
            </div>
            <div className="text-[#a8445c] text-3xl font-bold mb-2 tracking-wide select-all">
              1644-6668
            </div>
            <div className="text-gray-600 text-base">
              Business hours (Kor hour): 09:00 ~ 18:00
            </div>
            <div className="text-gray-600 text-base">
              Lunch break: 12:00 ~ 13:00
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Research Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="relative w-full py-32 px-6 overflow-hidden bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url('${img5}')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide mb-6 drop-shadow-lg">
            Research and development
          </h2>
          <p className="text-white text-2xl md:text-3xl font-light tracking-wide mb-4 drop-shadow-md">
            We will ceaselessly pursue research and development
          </p>
          <p className="text-gray-300 text-lg md:text-xl font-normal tracking-wide drop-shadow-sm">
            in order to manufacture the best products
          </p>
        </div>
      </motion.section>

      {/* Product Info Section */}
      <section className="w-full bg-gray-50 py-16 px-6">
        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="flex justify-center gap-12 md:gap-20 flex-wrap">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                onClick={() => setActiveCategory(idx)}
                className="flex flex-col items-center cursor-pointer group"
              >
                <div
                  className={`w-40 h-40 rounded-full overflow-hidden mb-4 shadow-lg transition-all duration-300 ${
                    activeCategory === idx
                      ? 'ring-4 ring-blue-600 scale-105'
                      : 'ring-2 ring-gray-300 hover:ring-gray-400'
                  }`}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p
                  className={`text-center text-sm md:text-base font-medium transition-colors duration-200 ${
                    activeCategory === idx
                      ? 'text-gray-800 font-semibold'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  {cat.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
            PRODUCT INFO
          </h2>
          <p className="text-gray-600 text-lg font-medium mb-2">
            INTRODUCE OUR PRODUCTS
          </p>
          <div className="mx-auto w-24 border-b-2 border-gray-800"></div>
        </motion.div>

        {/* ⭐ RELATED PRODUCTS WITH LINKS - FIXED */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="px-6 mt-20 mb-20">
            <h2 className="text-2xl font-semibold mb-10 text-center">
              Related products
            </h2>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={4}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {relatedProducts.map((item, i) => (
                <SwiperSlide key={i}>
                  <Link
                    to={item.path}
                    className="block text-center group cursor-pointer hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:bg-blue-50 border border-gray-100">
                      <div className="w-full h-64 flex items-center justify-center mb-4 overflow-hidden rounded-lg">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-48 h-48 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <div className="text-yellow-400 text-xl mb-2">☆☆☆☆☆</div>
                      <div className="text-sm text-gray-500">
                        Click to view details
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
}
