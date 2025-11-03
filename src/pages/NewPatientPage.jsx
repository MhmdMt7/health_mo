import React, { useState } from "react";

export default function NewPatientPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "ذكر",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تسجيل مريض جديد:", formData);
    alert("تم تسجيل المريض بنجاح (Mock)!");
    setFormData({
      name: "",
      age: "",
      gender: "ذكر",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">تسجيل مريض جديد</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="الاسم"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="العمر"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="ذكر">ذكر</option>
          <option value="أنثى">أنثى</option>
        </select>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="رقم الهاتف"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="العنوان"
          className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          تسجيل المريض
        </button>
      </form>
    </div>
  );
}
