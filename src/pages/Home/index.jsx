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

// Navbar بدون sidebar
function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const links = ["home", "about", "services", "doctors", "booking", "contact"];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);

    const handleActiveSection = () => {
      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 100 && top >= -section.offsetHeight + 100) {
            setActiveSection(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
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
      className={`top-0 left-0 w-full z-50 transition-all duration-500 
        ${scrolled ? "bg-white/90 shadow-md py-2" : "bg-transparent py-4"}
        ${menuOpen ? "relative" : "fixed"} md:fixed
      `}
    >
<<<<<<< HEAD
      <div className="container  mx-auto flex justify-between items-center px-6">
        <h1
          className="  text-2xl font-bold text-blue-600 cursor-pointer"
=======
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1
          className="w-48 text-2xl font-bold text-blue-600 cursor-pointer"
>>>>>>> b6527c00287a3d0fde2dfade7b462dbd1c734f55
          onClick={() => scrollToSection("home")}
        >
          Health Unit
        </h1>

        {/* زر الموبايل */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* روابط Navbar */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 md:items-center w-full md:w-auto overflow-hidden transition-all duration-300 
            ${menuOpen ? "max-h-96 mt-2" : "max-h-0 md:max-h-full"}
          `}
        >
          {links.map((link) => (
            <li key={link} className="md:mx-2">
              <button
                onClick={() => scrollToSection(link)}
                className={`capitalize relative group py-2 px-4 md:px-0 ${
                  activeSection === link
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
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
