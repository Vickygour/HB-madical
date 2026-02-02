import { useState } from "react";
import { Link } from "react-router-dom"; // Link import kiya

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Is object ko mapping ke liye define kiya taaki routing IDs sahi rahein
  const footerMenus = {
    "Co introduction": {
      path: "/CompanyIntro",
      items: [
        { id: "greetings", label: "Greetings" },
        { id: "corporate", label: "Corporate philosophy" },
        { id: "history", label: "History" },
        { id: "patents", label: "Patents/Certificates" },
        { id: "award", label: "Award details" },
        { id: "howtofind", label: "How to find us" },
      ],
    },
    Technology: {
      path: "/Technology",
      items: [
        { id: "ceramic", label: "Ceramic" },
        { id: "thermal", label: "Thermal" },
        { id: "heating", label: "Heating/Magnetic shielding" },
        { id: "lowfreq", label: "Low frequency/electric potential" },
      ],
    },
    "Product info": {
      path: "/ProductInfo",
      items: [
        { id: "personal-combo", label: "Personal combination stimulator" },
        { id: "thermal-device", label: "Personal thermal device" },
        { id: "health-food", label: "Functional health food" },
      ],
    },
    Contact: {
      path: "/contactUs",
      items: [],
    },
  };

  return (
    <footer className="bg-[#2b2b2b] text-white">
      {/* Top Navigation Menu */}
      <div className="bg-[#333333] py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerMenus).map(([category, data]) => (
            <div key={category}>
              {/* Category Header with Link */}
              <Link to={data.path}>
                <h3 className="text-lg font-semibold mb-2 text-white hover:text-orange-500 transition-colors">
                  {category}
                </h3>
              </Link>
              <ul className="space-y-2">
                {data.items.map((item, idx) => (
                  <li
                    key={idx}
                    onMouseEnter={() => setHoveredItem(`${category}-${idx}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`text-sm cursor-pointer transition-all duration-200 rounded ${
                      hoveredItem === `${category}-${idx}`
                        ? "text-orange-500 bg-gray-700"
                        : "text-gray-400 hover:text-gray-200"
                    }`}
                  >
                    {/* Yahan Link component use kiya hai queries ke saath */}
                    <Link
                      to={`${data.path}?tab=${item.id}`}
                      className="block w-full h-full"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-50 md:h-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.123!2d126.8123!3d37.4856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI5JzA4LjIiTiAxMjbCsDQ4JzQ0LjMiRQ!5e0!3m2!1sen!2skr!4v1625000000000!5m2!1sen!2skr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location"
        />
      </div>

      {/* Bottom Info Section */}
      <div className="bg-[#1f1f1f] py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-6">
            {/* Home Link */}
            <div>
              <Link
                to="/"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </div>

            {/* Information */}
            <div className="flex-1">
              <h4 className="text-base font-bold mb-2 text-white">
                INFORMATION
              </h4>
              <p className="text-sm text-gray-400 mb-1">
                company name :{" "}
                <span className="text-white">HAPPY BIO NANO MEDICAL</span>
              </p>
              <p className="text-sm text-gray-400 mb-1">
                CEO : <span className="text-white">KIM</span>
              </p>
              <p className="text-sm text-gray-400 mb-1">
                address :{" "}
                <span className="text-white">
                  Korea : 2F, 101, Gaejwa-ro, Geumjeong-gu, Busan, Korea
                </span>
              </p>
              <p className="text-sm text-gray-400">
                Tel : <span className="text-white">1644-6668</span>
              </p>
            </div>

            {/* Licence */}
            <div className="flex-1">
              <h4 className="text-base font-bold mb-2 text-white">LICENCE</h4>
              <p className="text-sm text-gray-400">
                corporate registration number :{" "}
                <span className="text-white">123-81-92457</span>
              </p>
            </div>

            {/* Web Master */}
            <div className="flex-1">
              <h4 className="text-base font-bold mb-2 text-white">
                WEB MASTER
              </h4>
              <p className="text-sm text-gray-400">
                e-mail : <span className="text-white">hbnano00@naver.com</span>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-4">
            <p className="text-xs text-red-500 mb-2">
              Unauthorized copying and resale of all contents is prohibited.
            </p>
            <p className="text-xs text-gray-500">
              Copyright(c) 2025 by{" "}
              <span className="text-white font-medium">
                HAPPY BIO NANO MEDICAL
              </span>{" "}
              All Rights Reserved. Designed by hbnano.co.kr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
