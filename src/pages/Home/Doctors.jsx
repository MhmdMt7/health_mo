import React from "react";
import { motion } from "framer-motion";

export default function Doctors() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Dr. Ahmed Ali",
      specialty: "Pediatrician",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140052.png",
    },
    {
      name: "Dr. Emily Brown",
      specialty: "General Practitioner",
      img: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
    },
  ];

  return (
    <motion.section
      id="doctors"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-b from-blue-50 to-white text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
        Meet Our Doctors
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-blue-100"
            />
            <h3 className="text-xl font-semibold text-blue-700">{doc.name}</h3>
            <p className="text-gray-500">{doc.specialty}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
