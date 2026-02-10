import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import img1 from "../../assets/ceramic copy.jpg";
import img2 from "../../assets/heat.jpg";
import img22 from '../../assets/image121.png';
import img23 from '../../assets/kjsfhh.png';
import img24 from '../../assets/JHFJSJ.png';
import img3 from '../../assets/SJDJHJJ.png';
import img31 from '../../assets/jjsj.png';
import img32 from '../../assets/kksdjkgk.png';
import img33 from '../../assets/KFGFGKGJD.png';
import img4 from '../../assets/JJFGJSNHJH.png';
import img41 from '../../assets/JJDJHFHGH.png';

const tabs = [
  { id: "ceramic", label: "Ceramic" },
  { id: "thermal", label: "Thermal" },
  { id: "heating", label: "Heating/Magnetic" },
  { id: "lowfreq", label: "Low frequency/electric" },
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Technology = () => {
  const [searchParams] = useSearchParams();
  const tabFromUrl = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState(tabFromUrl || "ceramic");

  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);

  const renderContent = () => {
    switch (activeTab) {
      case "ceramic":
        return (
          <motion.div
            key="ceramic"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
              CERAMIC
            </h2>
            <motion.div variants={scaleIn}>
              <img
                src={img1}
                alt="Ceramic Technology"
                className="w-full h-auto rounded-none shadow-lg"
              />
            </motion.div>
          </motion.div>
        );

      case "thermal":
        return (
          <motion.div
            key="thermal"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
              THERMAL
            </h2>
            <motion.div variants={scaleIn}>
              <img
                src={img22}
                alt="Thermal Technology"
                className="w-full h-auto rounded-none shadow-lg"
              />

              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        What is Radiant Heat?
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        This refers to infrared rays with long wavelengths,
                        while infrared rays with short wavelengths are referred
                        to as near-infrared rays. Generally, rays with short
                        wavelengths are reflected well, while those with long
                        wavelengths are easily absorbed upon reaching objects.
                        Accordingly, the outstanding penetration of far infrared
                        rays will warm up the body more easily upon exposure to
                        irradiation.
                      </p>
                    </div>
                  </div>

                  {/* EFFICACIES OF RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        Efficacies of Radiant Heat
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        Radiant heat is helpful in eliminating pathogens that
                        are the causes of various diseases and in blood
                        circulation and generation of cell tissue by distending
                        capillary vessels in the body. In addition, when it
                        comes in contact with water and protein molecules that
                        compose cells, it activates the cell tissue by minutely
                        shaking the cells at a rate of 2,000 per minute, thereby
                        providing assistance with prevention of various diseases
                        by countering the aging process, promoting metabolism,
                        and relieving chronic fatigue, etc.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <img
                src={img23}
                alt="Thermal Technology"
                className="w-full h-auto rounded-none "
              />

              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        FAR INFRARED RAY IRRADIATION RATE AND ANTI-BACTERIAL
                        TEST PERFORMANCE REPORT
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        This refers to infrared rays with long wavelengths,
                        while infrared rays with short wavelengths are referred
                        to as near-infrared rays. Generally, rays with short
                        wavelengths are reflected well, while those with long
                        wavelengths are easily absorbed upon reaching objects.
                        Accordingly, the outstanding penetration of far infrared
                        rays will warm up the body more easily upon exposure to
                        irradiation.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <img
                src={img24}
                alt="Thermal Technology"
                className="w-full h-auto rounded-none "
              />
            </motion.div>
          </motion.div>
        );

      case "heating":
        return (
          <motion.div
            key="heating"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
              HEATING CABLE/MAGNETIC SHIELDING
            </h2>
            <motion.div variants={scaleIn}>
              <img
                src={img3}
                alt="Heating Cable/Magnetic Shielding"
                className="w-full h-auto rounded-none shadow-lg"
              />
              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        WHAT IS A HEATING CABLE WITHOUT AN ELECTROMEGNETIC FIELD
                        ?
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        When current flows in an electric cable, a magnetic
                        field (electromagnetic waves) is formed in its
                        surroundings. If a current that flows in the opposite
                        direction is applied to this cable, the magnetic fields
                        generated will cancel each other out. A heating cable
                        without an electromagnetic field is used to minimize
                        generation of electromagnetic waves.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>

            <motion.div variants={scaleIn}>
              <img
                src={img31}
                alt="Heating Cable/Magnetic Shielding"
                className="w-full h-auto "
              />
              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        WHAT IS FLAME-RETARDANT MATERIAL?
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        Fiberglass, a special material that does not burn well,
                        is used in the middle of the mat to reduce the risk of
                        fire. Although highly fire-resistant to reduce the
                        risks, it is not a material that does not burn. As such,
                        fire precautions must be taken at all times.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>

            <motion.div variants={scaleIn}>
              <img
                src={img32}
                alt="Heating Cable/Magnetic Shielding"
                className="w-full h-auto "
              />
              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        TEST PERFORMANCE REPORT ON ELECTROMAGNETIC WAVE BLOCKING
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <img
                        src={img33}
                        alt="Heating Cable/Magnetic Shielding"
                        className="w-full h-auto "
                      />
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </motion.div>
        );

      case "lowfreq":
        return (
          <motion.div
            key="lowfreq"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
              LOW FREQUENCY/ELECTRIC POTENTIAL
            </h2>
            <motion.div variants={scaleIn}>
              <img
                src={img4}
                alt="Heating Cable/Magnetic Shielding"
                className="w-full h-auto rounded-none shadow-lg"
              />
              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        What is Low-Frequency EMS?
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        This low-frequency device provides assistance with
                        muscle pain alleviation by means of relaxation of
                        muscles and removal of pain factors etc. By stimulating
                        the skin and muscles using a low frequency. The Hanbit
                        Nano Medical Devices mat enables users to utilize its
                        beneficial functions while lying down comfortably,
                        combining thermal functionality and low-frequency
                        electrical potential function.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <img
                src={img41}
                alt="Heating Cable/Magnetic Shielding"
                className="w-full h-auto rounded-none "
              />

              <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-6 space-y-20">
                  {/* WHAT IS RADIANT HEAT */}
                  <div className="flex items-start gap-6">
                    {/* Check Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold leading-none">
                          ✓
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide">
                        WHAT IS ELECTRICAL POTENTIAL?
                      </h2>

                      <div className="w-12 h-[2px] bg-gray-400 my-4" />

                      <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl">
                        This is a function that improves circulation of blood in
                        the entire body by stimulating the skin's sensory
                        receptors, applying a microcurrent that is appropriate
                        for the human body. It can be used safely by people of
                        all ages and genders. Since a microcurrent is applied,
                        users will not experience any feeling from operation of
                        the electrical potential. However, if contact is made
                        with a non-user, a light static electric shock may be
                        noticed due to the difference in electrical potential
                        between the persons.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-white">
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 py-6 md:py-8 px-4 md:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            TECHNOLOGY
          </h1>
        </div>
      </motion.div>

      {/* Tab Navigation */}
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

      {/* Breadcrumb */}
      <div className="bg-black py-2 md:py-3 px-4 md:px-6">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-2 text-xs md:text-sm text-white flex-wrap">
          <span>Home</span>
          <span>/</span>
          <span>Technology</span>
          <span>/</span>
          <span className="font-semibold">
            {tabs.find((t) => t.id === activeTab)?.label}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white min-h-screen">{renderContent()}</div>
    </section>
  );
};

export default Technology;
