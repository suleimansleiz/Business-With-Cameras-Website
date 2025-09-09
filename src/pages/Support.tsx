import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaEnvelope, FaPhone, FaBook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Support: React.FC = () => {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      q: "How do I know the right camera choice for me?",
      a: "You can that by going through our product catalogue, which shows specifications and explanations about the product. Just click 'Products' then navigate from there.",
    },
    {
      q: "What is your offer advice?",
      a: "Yes, offer advice to our customers for better choices and ensuring that our customers get what they are looking for. All you have to do is ask, click 'Contact Us' below.",
    },
    {
      q: "Do you offer technical support?",
      a: "Yes, we offer technical support via whatsapp chat and phone calls. Just scroll to 'Get Support' below.",
    },
  ];

  return (
    <div
    className="min-h-screen bg-fixed w-full bg-cover bg-center text-gray-900"
    style={{ backgroundImage: `url("../../assets/support-bg.jpg")` }}
    >
      {/* Hero Section */}
      <section className="text-center py-10 mt-[-23px] m-0 bg-black/70 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">We’re Here to Help</h1>
        <p className="text-lg mb-6">Find answers, contact us, or explore our guides.</p>
        <div className="flex justify-center">
          <div className="flex items-center bg-white text-gray-700 rounded-full px-4 py-2 w-full max-w-md">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for help..."
              className="flex-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 max-w-4xl mx-auto px-6 bg-white/70">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow rounded-lg p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-500">{faq.q}</h3>
                <span>{faqOpen === index ? "−" : "+"}</span>
              </div>
              {faqOpen === index && <p className="mt-2 text-gray-600">{faq.a}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 bg-white/70 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Get Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <FaWhatsapp />, title: "Live Chat", desc: "Chat with our support team instantly." },
            { icon: <FaEnvelope />, title: "Email", desc: "Send us an email for assistance." },
            { icon: <FaPhone />, title: "Phone", desc: "Call us directly for urgent help." },
            { icon: <FaBook />, title: "Guides", desc: "Explore our product guides." },
          ].map((option, i) => (
            <motion.div
              key={i}
              className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-3xl text-blue-800 mb-4">{option.icon}</div>
              <h3 className="font-semibold text-gray-500">{option.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{option.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 cursor-pointer">
                {option.title === "Guides" ? "Explore" : "Contact"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 max-w-3xl mx-auto px-6 bg-white/70">
        <h2 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Still Need Help?</h2>
        <form className="bg-white shadow rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:outline-none focus:ring-gray-100"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:outline-none focus:ring-gray-100"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:outline-none focus:ring-gray-100"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:outline-none focus:ring-gray-100"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>

      {/* CTA */}
      <section className="py-8 bg-black/70 text-white text-center">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-800 via-blue-500 to-pink-600 bg-clip-text text-transparent">Didn’t find what you’re looking for?</h2>
        <p className="mb-4">Reach out to our support team directly.</p>
        <button className="px-6 py-3 bg-white text-blue-800 rounded-full hover:bg-gray-200 cursor-pointer">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Support;
