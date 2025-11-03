import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors";
import Booking from "./Booking";
import Contact from "./Contact";
import Footer from "./Footer";
import { FiArrowUp } from "react-icons/fi";

export default function Home() {
  return (
    <div className="text-gray-800 bg-gradient-to-b from-blue-50 via-cyan-50 to-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Doctors />
      <Booking />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

// Navbar
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const links = ["home", "about", "services", "doctors", "booking", "contact"];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-blue-600">Health Unit</h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="capitalize text-gray-700 relative group"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

// Scroll To Top Button
function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition-colors z-50"
    >
      <FiArrowUp className="text-xl" />
    </motion.button>
  );
}
