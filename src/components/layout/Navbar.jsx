import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();
  const links = ["home", "about", "services", "doctors", "booking", "contact"];

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "dashboard") {
      navigate("/dashboard");
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Health Unit
        </h1>
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className="capitalize text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => navigate("/dashboard")}
              className="capitalize text-gray-700 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
