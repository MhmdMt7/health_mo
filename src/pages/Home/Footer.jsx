import React from "react";
import { motion } from "framer-motion";
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";

export default function Footer() {
  const socials = [
    { icon: <FiFacebook />, link: "https://facebook.com" },
    { icon: <FiTwitter />, link: "https://twitter.com" },
    { icon: <FiInstagram />, link: "https://instagram.com" },
    { icon: <FiMail />, link: "mailto:info@healthunit.com" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-blue-700 text-white py-10 px-6 text-center md:text-left"
    >
      <div className="container mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">Health Unit</h2>
          <p className="text-blue-100">
            Providing quality healthcare with compassion and expertise.
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-blue-100">
            <li>
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-white transition">
                Doctors
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-end gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-2xl text-blue-100 hover:text-white transition"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-8 text-blue-200 text-sm border-t border-blue-600 pt-4 text-center">
        © {new Date().getFullYear()} Health Unit. All rights reserved.
      </div>
    </motion.footer>
  );
}
