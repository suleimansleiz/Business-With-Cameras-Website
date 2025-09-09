import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";


const Footer: React.FC = () => {
  return (
    <footer id="contacts" className="bg-gray-100 text-gray-900 py-8 mt-12 px-6">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent text-center">Contact Us</h2>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-white py-6 rounded-lg mb-6 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600">
        {/* Contact Details */}
        <div className="flex flex-col mb-6 md:mb-0 mx-6 items-center">
          <div className="flex items-center bg-white/10 text-white mb-6 px-4 py-5 rounded-full cursor-pointer">
            <FontAwesomeIcon className="text-5xl" icon={faPhone} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white text-center font-bold mb-2 px-2">For calls & Whatsapp</p>
          <p className="text-sm md:text-base lg:text-lg text-white text-center px-2">+255 784 056 574</p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0 mx-6 items-center">
          <div className="flex items-center bg-white/10 text-white mb-6 px-4 py-5 rounded-full cursor-pointer">
            <FontAwesomeIcon className="text-5xl" icon={faEnvelope} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white text-center font-bold mb-2 px-2">Email</p>
          <p className="text-sm md:text-base lg:text-lg text-white text-center px-2">faridamwene@yahoo.com</p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0 mx-6 items-center">
          <div className="flex items-center bg-white/10 text-white mb-6 px-4 py-5 rounded-full cursor-pointer">
            <FontAwesomeIcon className="text-5xl" icon={faLocationPin} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white text-center font-bold mb-2 px-2">Location</p>
          <p className="text-sm md:text-base lg:text-lg text-white text-center px-2">Sinza mori,</p>
          <p className="text-sm md:text-base lg:text-lg text-white text-center px-2">Dar es salaam, Tanzania</p>
        </div>
        <div className="flex flex-col mb-6 md:mb-0 mx-6 items-center">
          <div className="flex items-center bg-white/10 text-white mb-6 px-4 py-5 rounded-full cursor-pointer">
            <FontAwesomeIcon className="text-5xl" icon={faGlobe} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white text-center font-bold mb-2 px-2">Social Medias</p>
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-white text-center px-2">@business_with_cameras</p>
        </div>
      </div>

      <div className="container mx-auto px-4 flex justify-center items-center mt-10">
        <a href="" className="text-sm text-gray-900 px-4">Terms of Use</a>
        <a href="" className="text-sm text-gray-900 px-4">Privacy Policy</a>
      </div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Business with Cameras. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
