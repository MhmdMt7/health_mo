import React from "react";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";
import { FiHeart, FiUser, FiActivity, FiPhone, FiMapPin } from "react-icons/fi";

export default function PublicPage() {
  return (
    <Layout showNavbar={true}>
      <div className="mt-[73px] px-6 md:px-20">
        {/* مقدمة */}
        <section className="text-center mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-blue-700 mb-4"
          >
            مرحبًا بكم في الوحدة الصحية
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            نقدم في وحدتنا الصحية أفضل الخدمات الطبية الأولية والرعاية الوقائية
            للمواطنين في منطقتنا، مع فريق طبي مؤهل يسعى دائمًا لخدمة المجتمع
            وتوفير بيئة صحية آمنة.
          </motion.p>
        </section>

        {/* الخدمات */}
        <section id="services" className="mb-20">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-10">
            خدماتنا
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* خدمة 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-6 text-center border-t-4 border-blue-600"
            >
              <FiUser className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">الكشف الطبي العام</h3>
              <p className="text-gray-600">
                فحص شامل للحالات اليومية ومتابعة الحالات المزمنة.
              </p>
            </motion.div>

            {/* خدمة 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-6 text-center border-t-4 border-green-500"
            >
              <FiActivity className="text-4xl text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                رعاية الأطفال والتطعيمات
              </h3>
              <p className="text-gray-600">
                متابعة صحة الأطفال وإعطاء التطعيمات الدورية.
              </p>
            </motion.div>

            {/* خدمة 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-6 text-center border-t-4 border-pink-500"
            >
              <FiHeart className="text-4xl text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                رعاية الأم والحوامل
              </h3>
              <p className="text-gray-600">
                خدمات متابعة الحمل والفحص الدوري للسيدات.
              </p>
            </motion.div>
          </div>
        </section>

        {/* تواصل معنا */}
        <section id="contact" className="text-center mb-20">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">تواصل معنا</h2>
          <div className="flex flex-col items-center gap-4 text-gray-700">
            <div className="flex items-center gap-2">
              <FiPhone className="text-blue-600" />
              <span>01012345678</span>
            </div>
            <div className="flex items-center gap-2">
              <FiMapPin className="text-blue-600" />
              <span>محافظة كفر الشيخ - الوحدة الصحية بالمتولّي</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
