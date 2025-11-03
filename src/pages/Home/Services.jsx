import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faAmbulance,
  faStethoscope,
  faSyringe,
  faBaby,
  faFileMedical,
  faUtensils,
  faEarListen,
  faTooth, // عيادة الأسنان
  faDumbbell, // العلاج الطبيعي
  faFlask, // التحاليل المخبرية
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    {
      icon: faHeart,
      title: "أمراض القلب",
      desc: "تشخيص وعلاج متقدم لأمراض القلب بواسطة أطباء متخصصين.",
    },
    {
      icon: faAmbulance,
      title: "الرعاية الطارئة",
      desc: "استجابة طارئة على مدار الساعة وتقديم الرعاية الطبية العاجلة.",
    },
    {
      icon: faStethoscope,
      title: "الفحص العام",
      desc: "تقييم صحي شامل لضمان سلامتك وصحة جسمك.",
    },
    {
      icon: faSyringe,
      title: "التطعيمات الروتينية",
      desc: "تقديم جميع التطعيمات للأطفال والكبار للحماية من الأمراض.",
    },
    {
      icon: faBaby,
      title: " تسجيل المواليد",
      desc: "متابعة نمو الأطفال حديثي الولادة وفحص صحتهم بانتظام.",
    },
    {
      icon: faFileMedical,
      title: "تسجيل الوفيات ومتابعة السجلات الصحية",
      desc: "تسجيل الوفيات والإبلاغ عنها مع إدارة الملفات الطبية بدقة.",
    },
    {
      icon: faUtensils,
      title: "الدعم الغذائي واللبان الصناعية",
      desc: "توفير المشورة والدعم الغذائي للأطفال حديثي الولادة والرضع.",
    },
    {
      icon: faEarListen,
      title: "فحص السمع",
      desc: "تقييم السمع للأطفال والكبار لضمان صحة سمعية سليمة.",
    },
    {
      icon: faTooth,
      title: "عيادة الأسنان",
      desc: "خدمات شاملة لعلاج الأسنان والحفاظ على صحة الفم.",
    },
    {
      icon: faDumbbell,
      title: "العلاج الطبيعي",
      desc: "جلسات علاج طبيعي لإعادة التأهيل وتحسين الحركة والصحة العامة.",
    },
    {
      icon: faFlask,
      title: "التحاليل الطبية",
      desc: "إجراء التحاليل الطبية المختلفة بدقة وموثوقية.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 bg-gradient-to-b from-white to-blue-50 text-center"
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-12">
        خدماتنا
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
          >
            <FontAwesomeIcon
              icon={s.icon}
              className="text-blue-600 text-4xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
