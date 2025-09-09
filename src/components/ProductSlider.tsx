import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const ProductSlider: React.FC = () => {

  return (
    <section id="products" className="w-full py-2 bg-white">
      <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent text-center">
        Our Products
      </h2>
      <p className="text-sm md:text-base lg:text-lg text-gray-500 text-center mb-6 text-gray-900 px-2">Browse our premium products collection from our catalogue.</p>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1.35}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        pagination={{ clickable: true }}
        className="w-full h-[550px] flex justify-center"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/canon.jpeg"
              alt="Canon EOS R5"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Canon EOS R5</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/nikon.jpeg"
              alt="Nikon Z7 II"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Nikon Z7 II</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/nikon2.jpeg"
              alt="Sony Alpha A7"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Sony Alpha A7</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/camera3.jpg"
              alt="Canon EOS 6D"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Canon EOS 6D</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/camera2.jpg"
              alt="Canon EOS 7D"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Canon EOS 7D</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/camera1.jpg"
              alt="Canon EOS 7D mark II"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Canon EOS 7D mark II</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/lens1.jpeg"
              alt="Lens I"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Lens I</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 8 */}
        <SwiperSlide className="flex items-center justify-center cursor-pointer">
          <div className="relative w-[70vw] h-[500px]">
            <img
              src="../../assets/lens2.jpg"
              alt="Lens II"
              className="w-full h-full object-cover rounded-xl shadow-xl"
            />
            <div className="absolute bottom-10 left-10 bg-black/40 p-6 rounded-lg cursor-pointer">
              <h3 className="text-3xl font-bold text-white mb-4">Lens II</h3>
              <button className="px-6 py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ProductSlider;
