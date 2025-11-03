import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* الصورة */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-200 rounded-2xl blur-3xl opacity-40"></div>
            <img
              src="https://img.freepik.com/free-photo/portrait-handsome-doctor-white-coat_23-2147896187.jpg"
              alt="About us"
              className="relative rounded-2xl shadow-xl w-full max-w-md object-cover border-4 border-white"
            />
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-right"
        >
          <h2 className="text-4xl font-bold text-blue-700 mb-4">من نحن</h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-lg">
            نحن وحدة طبية متكاملة تهدف إلى تقديم أعلى مستويات الرعاية الصحية،
            بخبرة تمتد لأكثر من 10 سنوات في تقديم الخدمات الطبية الحديثة
            والمتميزة.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            نؤمن بأن المريض هو محور اهتمامنا، ونسعى دائمًا لاستخدام أحدث
            التقنيات لضمان تجربة علاجية آمنة ومريحة مع فريق طبي متخصص.
          </p>
          <a
            href="#services"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
          >
            تعرف على خدماتنا
          </a>
        </motion.div>
      </div>
    </section>
  );
}
