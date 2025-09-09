import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaRegLightbulb, FaRocket } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";


const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-fixed w-full py-16 bg-cover bg-center"
      style={{ backgroundImage: `url("../../assets/bg-pic.png")` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-100 via-pink-100 to-white bg-clip-text text-transparent text-center mb-12">
          About Business with Cameras
        </h2>

        {/* Cards container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            className="bg-blue-800 rounded-xl shadow-lg flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white w-full h-full p-6 rounded-xl ml-2">
              <FaRegLightbulb className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Who Are We?</h3>
              <p className="text-gray-600">
                We (Business with Cameras) deal with selling used cameras all the way from the United States of America.
              </p>
            </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-blue-800 rounded-xl shadow-lg flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white w-full h-full p-6 rounded-xl ml-2">
              <FaBullseye className="text-4xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Our Mission</h3>
              <p className="text-gray-600">
                To empower individuals and businesses by providing cutting-edge
                photography tools at affordable prices and ensuring customer satisfaction.
              </p>
            </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-blue-800 rounded-xl shadow-lg flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white w-full h-full p-6 rounded-xl ml-2">
              <FaRocket className="text-3xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Delivery Services</h3>
              <p className="text-gray-600">
                We deliver our products to customers from all over the country, with utmost sincerity.
              </p>
            </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-blue-800 rounded-xl shadow-lg flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white w-full h-full p-6 rounded-xl ml-2">
              <FaHandshake className="text-3xl text-blue-700" />
            <div>
              <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Our Promise</h3>
              <p className="text-gray-600">
                Loyalty, customer royalness, and satisfaction is our motto.
              </p>
            </div>
            </div>
          </motion.div>
        </div>
          {/* CEO Card */}
        <motion.div
          className="relative bg-white mt-10 w-full md:w-[400px] mx-auto rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Title */}
          <h3 className="mt-3 text-center text-xl md:text-2xl font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">
            Get to know our CEO
          </h3>

          {/* CEO Image */}
          <img
            src="../../assets/ceo.jpg"
            alt="CEO"
            className="w-full h-[500px] mt-3 rounded-xl object-cover"
          />

          {/* Name and Role */}
          <div className="absolute bottom-0 w-full bg-black/50 text-white py-4 text-center">
            <h4 className="text-lg font-bold">Dr. Farida Mwene</h4>
            <p className="text-sm">Founder & CEO of Business with Cameras</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
