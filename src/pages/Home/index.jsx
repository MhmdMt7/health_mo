import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors";
import Booking from "./Booking";
import Contact from "./Contact";
import Footer from "./Footer";
import { FiArrowUp, FiMenu, FiX } from "react-icons/fi";

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

// ✅ Navbar احترافي وثابت في الأعلى
function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const links = ["home", "about", "services", "doctors", "booking", "contact"];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/40"
      }`}
    >
      {/* الصف العلوي */}
      <div className="flex items-center justify-between px-6 py-3">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Health Unit
        </h1>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>

        {/* روابط الديسكتوب */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className={`capitalize text-base font-medium transition-colors duration-300 ${
                  activeSection === link
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* روابط الموبايل مع أنيميشن */}
      <motion.ul
        initial={false}
        animate={{
          height: menuOpen ? "auto" : 0,
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="md:hidden flex flex-col items-center overflow-hidden bg-blue-50 border-t border-blue-100"
      >
        {links.map((link, index) => (
          <motion.li
            key={link}
            className="w-full text-center border-b border-blue-100"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : -10,
            }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              onClick={() => scrollToSection(link)}
              className={`block w-full py-3 capitalize font-medium transition-colors duration-300 ${
                activeSection === link
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

// ✅ زر العودة لأعلى الصفحة
function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
