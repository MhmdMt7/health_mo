import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-b from-white to-blue-50 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8">
        Contact Us
      </h2>
      <p className="text-gray-600 mb-6">
        Have questions or need help? Get in touch with our team.
      </p>
      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition-colors"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
