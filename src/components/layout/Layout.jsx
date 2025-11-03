import React from "react";
import Navbar from "./Navbar";
import { div } from "motion/react-client";

export default function Layout({ children, showNavbar = true }) {
  return (
    <div className="relative min-h-screen flex">
      {/* المحتوى الرئيسي */}
      <div className="flex-1 flex flex-col min-h-screen">
        {" "}
        {/* mr-60 عشان مساحة Sidebar */}
        {showNavbar && <Navbar />}
        <div className={`${showNavbar ? "mt-[73px]" : ""} p-6`}>{children}</div>
        {/* الفوتر */}
        <footer className="bg-blue-700 text-white py-4 text-center mt-auto">
          جميع الحقوق محفوظة © {new Date().getFullYear()} - الوحدة الصحية
        </footer>
      </div>
    </div>
  );
}
