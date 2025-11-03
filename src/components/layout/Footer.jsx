import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} الوحدة الصحية - جميع الحقوق محفوظة.
      </p>
    </footer>
  );
}
