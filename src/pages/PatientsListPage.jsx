import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PatientsListPage() {
  const [patients, setPatients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const mockPatients = [
      { id: 1, name: "محمد علي", age: 25, gender: "ذكر" },
      { id: 2, name: "سارة أحمد", age: 16, gender: "أنثى" },
      { id: 3, name: "علي حسن", age: 8, gender: "ذكر" },
    ];
    setPatients(mockPatients);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">قائمة المرضى</h2>
      <ul className="space-y-3">
        {patients.map((p) => (
          <li
            key={p.id}
            className="border p-3 rounded-lg flex justify-between items-center hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/patients/${p.id}`)}
          >
            <span>
              {p.name} - العمر: {p.age} - الجنس: {p.gender}
            </span>
            <span className="text-blue-600 font-semibold">عرض التفاصيل</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
