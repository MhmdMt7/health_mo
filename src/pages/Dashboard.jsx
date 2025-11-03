import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { FaUser, FaMale, FaFemale, FaChild } from "react-icons/fa";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockPatients = [
      { id: 1, name: "محمد سلطان", age: 25, gender: "ذكر" },
      { id: 2, name: "سارة أحمد", age: 16, gender: "أنثى" },
      { id: 3, name: "علي حسن", age: 8, gender: "ذكر" },
      { id: 4, name: "هند محمود", age: 32, gender: "أنثى" },
      { id: 5, name: "محمود سعيد", age: 45, gender: "ذكر" },
    ];
    setPatients(mockPatients);
    setFilteredPatients(mockPatients);
  }, []);

  const totalPatients = patients.length;
  const malePatients = patients.filter((p) => p.gender === "ذكر").length;
  const femalePatients = patients.filter((p) => p.gender === "أنثى").length;
  const childrenPatients = patients.filter((p) => p.age < 18).length;

  const handleSearch = (e) => {
    e.preventDefault();
    const term = search.trim().toLowerCase();
    if (!term) {
      setFilteredPatients(patients);
      return;
    }
    const results = patients.filter(
      (p) => p.name.toLowerCase().includes(term) || String(p.id).includes(term)
    );
    setFilteredPatients(results);
  };

  return (
    <Layout showNavbar={false}>
      <section className="w-full max-w-6xl mx-auto mt-10 px-4">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-12 text-center">
          لوحة التحكم
        </h2>

        {/* كروت الإحصائيات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <FaUser size={36} />,
              count: totalPatients,
              label: "عدد المرضى الكلي",
              gradient: "from-blue-500 to-blue-700",
            },
            {
              icon: <FaMale size={36} />,
              count: malePatients,
              label: "عدد الذكور",
              gradient: "from-green-500 to-green-700",
            },
            {
              icon: <FaFemale size={36} />,
              count: femalePatients,
              label: "عدد الإناث",
              gradient: "from-pink-500 to-pink-700",
            },
            {
              icon: <FaChild size={36} />,
              count: childrenPatients,
              label: "عدد الأطفال",
              gradient: "from-yellow-500 to-yellow-700",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className={`bg-gradient-to-r ${card.gradient} text-white rounded-3xl p-6 shadow-xl flex flex-col items-center hover:scale-105 transition-transform duration-300`}
            >
              {card.icon}
              <p className="text-3xl font-bold mt-2">{card.count}</p>
              <p className="mt-1">{card.label}</p>
            </div>
          ))}
        </div>

        {/* شريط البحث */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
        >
          <input
            type="text"
            placeholder="ابحث باسم المريض أو الرقم القومي..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-xl p-4 w-full md:w-1/2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm transition"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition shadow-lg"
          >
            بحث
          </button>
        </form>

        {/* نتائج البحث */}
        {filteredPatients.length > 0 && (
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-700">
              نتائج البحث
            </h3>
            <ul className="space-y-4">
              {filteredPatients.map((p) => (
                <li
                  key={p.id}
                  className="border p-4 rounded-2xl flex justify-between items-center hover:shadow-2xl transition cursor-pointer bg-white"
                  onClick={() => navigate(`/patients/${p.id}`)}
                >
                  <span className="text-gray-800 font-medium">
                    {p.name} - العمر: {p.age} - الجنس: {p.gender}
                  </span>
                  <span className="text-blue-600 font-semibold hover:underline">
                    عرض التفاصيل
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* أزرار تسجيل وعرض المرضى */}
        {/* <div className="text-center flex flex-col md:flex-row justify-center gap-6">
          <button
            onClick={() => navigate("/newPatient")}
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            تسجيل مريض جديد
          </button>
          <button
            onClick={() => navigate("/patients")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105"
          >
            عرض المرضى
          </button>
        </div> */}
      </section>
    </Layout>
  );
}
