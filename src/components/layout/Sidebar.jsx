import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiGrid, FiUser, FiPlus } from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { name: "Dashboard", path: "/dashboard", icon: <FiGrid size={20} /> },
    { name: "Patients", path: "/patients", icon: <FiUser size={20} /> },
    { name: "Add Patient", path: "/newPatient", icon: <FiPlus size={20} /> },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-100 shadow-xl min-h-screen p-6 sticky top-0">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center">
          الوحدة الصحية
        </h2>
      </div>
      <ul className="space-y-3">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
                  ${
                    isActive
                      ? "bg-blue-100 text-blue-700 shadow-md font-bold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
                  }`}
              >
                {link.icon}
                <span className="text-lg">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
