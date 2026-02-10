import React, { useState } from 'react';
import matMain from '../../assets/01 HB CERVICAL PILLOW.jpg';
import thumb1 from '../../assets/02 HB CERVICAL PILLOW.jpg';
import thumb2 from '../../assets/03 HB CERVICAL PILLOW.jpg';
import cushion from '../../assets/HB CUSHION MAT.jpg';
import goldmat from '../../assets/01 HB GOLD MAT.jpg';
import graphenebelt from '../../assets/01 HB GRAPHENE BELT.jpg';
import graphenebelt2 from '../../assets/02 HB GRAPHENE BELT.jpg';
import graphenebel3 from '../../assets/03 HB GRAPHENE BELT.jpg';
import graphenebelt4 from '../../assets/04 HB GRAPHENE BELT.jpg';
import graphenebelt5 from '../../assets/05 HB GRAPHENE BELT.jpg';
import graphenebelt6 from '../../assets/06 HB GRAPHENE BELT.jpg';
import graphenebelt7 from '../../assets/07 HB GRAPHENE BELT.jpg';
import silvermat from '../../assets/01 HB SILVER MAT.jpg';
import slimmingbelt from '../../assets/01 HB SLIMMING BELT.jpg';
import tattum from '../../assets/02 HB TATTUM SITTING THERAPY.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Graphenebelt = () => {
  const [selectedImage, setSelectedImage] = useState(graphenebelt);

  const images = [
    graphenebelt,
    graphenebelt2,
    graphenebel3,
    graphenebelt4,
    graphenebelt5,
    graphenebelt6,
    graphenebelt7,
  ];

  return (
    <>
      {/* PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT – Images */}
          <div>
            {/* Main Image with Zoom */}
            <div className="border rounded-lg p-4 flex justify-center overflow-hidden group">
              <img
                src={selectedImage}
                alt="Magnetic Mat"
                className="max-h-[420px] object-contain transition-transform duration-300 group-hover:scale-125 cursor-zoom-in"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-md p-2 cursor-pointer 
                    ${selectedImage === img ? 'border-black' : 'border-gray-300'}
                    hover:border-black`}
                >
                  <img
                    src={img}
                    alt="thumbnail"
                    className="h-16 w-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – Product Info */}
          <div>
            <p className="text-sm text-gray-500 mb-2">
              Model no . HB GRAPHENE BELT60 A
            </p>

            <h1 className="text-3xl font-semibold mb-4">
              HB Graphene Stones Belt
            </h1>

            <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-6">
              <li>
                Graphene Leather Material for superior heat retention & comfort
              </li>
              <li>Magnetic Stones for targeted pressure point stimulation</li>
              <li>Ceramic Stones for natural therapeutic support</li>
              <li>Flexible & Adjustable Belt Design for a secure fit</li>
              <li>Lightweight & Durable for daily use</li>
              <li>Non-Invasive & Easy to Use</li>
            </ul>

          
          </div>
        </div>
      </div>

      {/* DESCRIPTION & REVIEWS */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-b flex gap-8 text-lg font-medium">
          <button className="border-b-2 border-black pb-3">Description</button>
        </div>

        <div className="mt-8 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>Relieves neck pain, shoulder pain & cervical stiffness.</li>
            <li>Helps reduce stress, fatigue, and muscle tension</li>
            <li>Improves blood circulation in the neck area</li>
            <li>Supports better relaxation after long working hours</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-b flex gap-8 text-lg font-medium">
          <button className="pb-3">Health Benefits</button>
        </div>

        <div className="mt-8 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>Helps relieve back pain, waist pain & muscle pain</li>
            <li>Improves blood circulation in the applied area</li>
            <li>Reduces muscle stiffness and body fatigue</li>
            <li>
              Supports natural pain relief Promotes relaxation and daily comfort
            </li>
            <li>Ideal for long sitting, working hours & home therapy</li>
          </ul>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 mt-20 mb-20">
        <h2 className="text-2xl font-semibold mb-10">Related products</h2>

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
          {[
            { img: matMain, name: 'HB Cervical Stones Heating Pillow' },
            { img: cushion, name: 'HB Cushion Heating Mat' },
            { img: goldmat, name: 'HB Gold Heating Mat' },
            { img: graphenebelt, name: 'HB Graphene Therapy Belt' },
            { img: silvermat, name: 'HB Silver Heating Mat' },
            { img: slimmingbelt, name: 'HB Slimming Therapy Belt' },
            { img: tattum, name: 'HB Tattum Sitting Therapy Device' },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="text-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="mx-auto h-64 object-contain"
                />
                <h3 className="font-medium mt-4">{item.name}</h3>
                <div className="text-gray-400 mt-1">☆☆☆☆☆</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Graphenebelt;
