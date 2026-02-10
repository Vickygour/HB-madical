import React, { useState } from 'react';
import matMain from '../../assets/01 HB CERVICAL PILLOW.jpg';
import thumb1 from '../../assets/02 HB CERVICAL PILLOW.jpg';
import thumb2 from '../../assets/03 HB CERVICAL PILLOW.jpg';
import cushion from '../../assets/HB CUSHION MAT.jpg';
import goldmat from '../../assets/01 HB GOLD MAT.jpg';
import graphenebelt from '../../assets/01 HB GRAPHENE BELT.jpg';
import silvermat from '../../assets/01 HB SILVER MAT.jpg';
import silvermat2 from '../../assets/02 HB SILVER MAT copy.jpg';
import slimmingbelt from '../../assets/01 HB SLIMMING BELT.jpg';
import slimmingbelt1 from '../../assets/02 HB SLIMMING BELT.jpg';
import slimmingbelt2 from '../../assets/03 HB SLIMMING BELT.jpg';
import tattum from '../../assets/02 HB TATTUM SITTING THERAPY.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SlimmingBelt = () => {
  const [selectedImage, setSelectedImage] = useState(slimmingbelt);

  const images = [slimmingbelt, slimmingbelt1, slimmingbelt2];

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
              Model no . HB SLIMMING BELT 50 A
            </p>

            <h1 className="text-3xl font-semibold mb-4">HB Heating Belt</h1>

            <ul className="list-disc pl-5 space-y-3 text-gray-700 mb-6">
              <li>Nano Ceramic Technology for better heat retention</li>
              <li>Double Layer Stones for deeper therapeutic effect</li>
              <li>TENS Therapy for muscle relaxation and pain relief</li>
              <li>PEMF Therapy for improved body stimulation</li>
              <li>Heating Therapy for soothing warmth</li>
              <li>FIR Therapy for deep tissue comfort</li>
              <li>Adjustable Belt Design for comfortable fit</li>
              <li>Safe & Non-Invasive for regular use</li>
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
            <li>
              The HB Heating Belt is designed with nano ceramic technology and
              double layer therapeutic stones to provide effective pain relief
              and body relaxation. This advanced belt offers TENS Therapy, PEMF
              Therapy, Heating & FIR Therapy, working together to help reduce
              back pain, muscle stiffness, and overall body pain. Regular use
              helps improve blood circulation, relax tight muscles, and support
              body shaping when used along with a healthy lifestyle. Easy to
              wear and ideal for daily home therapy.
            </li>
            <li>Nano ceramic stones qty - 201</li>
            <li>Double Layer Stones qty - 21</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border-b flex gap-8 text-lg font-medium">
          <button className="pb-3">Health Benefits</button>
        </div>

        <div className="mt-8 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>Helps relieve back pain & body pain</li>
            <li>Reduces muscle stiffness and fatigue</li>
            <li>Improves blood circulation</li>
            <li>Supports stress relief and relaxation</li>
            <li>
              Aids in body shaping support when used with exercise & healthy
              routine
            </li>
            <li>Provides natural pain relief </li>
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

export default SlimmingBelt;
