import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import herooo from "../../assets/herooo.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 bg-gradient-to-br from-blue-100 via-white to-cyan-50 pt-24"
    >
      {/* النص */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-blue-700 leading-tight mb-4">
          صحتك، <span className="text-cyan-500">أولويتنا</span>
        </h1>
        <p className="text-gray-600 text-lg mb-6 max-w-xl">
          مرحبًا بك في الوحدة الصحية — نقدم رعاية موثوقة، أطباء خبراء، ودعم طبي
          سريع في أي وقت تحتاجه.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          {/* زر حجز موعد */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-blue-700 transition-colors"
            onClick={() =>
              document.getElementById("booking").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            حجز موعد <FiArrowRight />
          </motion.button>

          {/* زر تسجيل الدخول */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-blue-600 hover:text-white transition-colors"
            onClick={() => navigate("/login")}
          >
            تسجيل الدخول
          </motion.button>
        </div>
      </motion.div>

      {/* الصورة */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex-1 mt-10 md:mt-0"
      >
        <div className="relative w-3/4 md:w-full mx-auto my-8 group">
          {/* خلفية gradient خفيفة */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-white to-blue-50 rounded-xl filter blur-xl opacity-50 transition duration-500 group-hover:opacity-70"></div>

          {/* الصورة الرئيسية */}
          <img
            src={herooo} // رابط الصورة الاحترافية
            alt="Doctor illustration"
            className="relative w-full md:w-full mx-auto rounded-xl shadow-2xl object-contain transform transition duration-500 group-hover:scale-105 group-hover:rotate-1"
          />
        </div>
      </motion.div>
    </section>
  );
}
