import React from "react";

export default function TopBar({ pageTitle, userName, unitName }) {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-40">
      <div>
        <h1 className="text-xl font-bold">{pageTitle}</h1>
        <p className="text-gray-500 text-sm">{unitName}</p>
      </div>
      <div className="text-gray-700 font-medium">{userName}</div>
    </header>
  );
}
