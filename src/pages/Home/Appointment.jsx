import React from "react";
import { motion } from "framer-motion";

export default function Appointment() {
  return (
    <section
      id="appointment"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800"
    >
      <div className="container mx-auto px-6 text-center">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-blue-600 mb-6"
        >
          احجز موعدك الآن
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          احجز موعدك بكل سهولة من خلال تعبئة النموذج التالي، وسنقوم بالتواصل معك
          لتأكيد الحجز في أقرب وقت ممكن.
        </motion.p>

        {/* نموذج الحجز */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-right"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <input
              type="tel"
              placeholder="رقم الهاتف"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            />
            <input
              type="date"
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none"
            />
          </div>
          <select className="w-full mb-6 p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none">
            <option value="">اختر التخصص</option>
            <option>باطنة</option>
            <option>قلب</option>
            <option>أطفال</option>
            <option>جراحة</option>
          </select>
          <textarea
            rows="4"
            placeholder="ملاحظات إضافية"
            className="w-full p-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none mb-6"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            إرسال الطلب
          </button>
        </motion.form>
      </div>
    </section>
  );
}
