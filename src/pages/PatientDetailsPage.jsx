// src/pages/PatientDetailsPage.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PatientDetailsPage() {
  const [patient, setPatient] = useState(null);
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [modalReport, setModalReport] = useState(null);

  // إنشاء Mock Data
  useEffect(() => {
    const mockPatient = {
      name: "محمد علي",
      age: 35,
      gender: "ذكر",
      phone: "0123456789",
      address: "كفر الشيخ، مصر",
    };

    const generateMockReports = (num) => {
      const titles = [
        "تقرير دم",
        "تقرير أشعة",
        "تقرير ضغط الدم",
        "تقرير قلب",
        "تقرير سكر",
      ];
      const reports = [];
      for (let i = 1; i <= num; i++) {
        const randomTitle = titles[Math.floor(Math.random() * titles.length)];
        const randomDate = new Date(
          2025,
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 28) + 1
        );
        reports.push({
          id: i,
          title: `${randomTitle} رقم ${i}`,
          date: randomDate.toISOString().split("T")[0],
          file: `/mock/reports/report-${i}.pdf`,
        });
      }
      return reports;
    };

    const mockReports = generateMockReports(50);

    setTimeout(() => {
      setPatient(mockPatient);
      setReports(mockReports);
      setFilteredReports(mockReports);
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    let filtered = reports;
    if (searchTerm)
      filtered = filtered.filter((r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    if (startDate)
      filtered = filtered.filter(
        (r) => new Date(r.date) >= new Date(startDate)
      );
    if (endDate)
      filtered = filtered.filter((r) => new Date(r.date) <= new Date(endDate));
    if (sortOrder === "asc")
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    else filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    setFilteredReports(filtered);
  }, [searchTerm, startDate, endDate, sortOrder, reports]);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500 animate-pulse">
        جاري التحميل...
      </p>
    );
  if (!patient)
    return <p className="text-center mt-10 text-red-500">المريض غير موجود</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black min-h-screen text-white">
      {/* بيانات المريض */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-2xl rounded-xl p-6 mb-8"
      >
        <h2 className="text-3xl font-bold mb-4">{patient.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
          <p>
            <strong>العمر:</strong> {patient.age}
          </p>
          <p>
            <strong>الجنس:</strong> {patient.gender}
          </p>
          <p>
            <strong>الهاتف:</strong> {patient.phone}
          </p>
          <p>
            <strong>العنوان:</strong> {patient.address}
          </p>
        </div>
      </motion.div>

      {/* فلتر البحث والتاريخ */}
      <div className="mb-6 flex flex-col md:flex-row gap-3 items-center">
        <input
          type="text"
          placeholder="ابحث عن تقرير بالعنوان..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
        />

        <div className="flex flex-col">
          <label className="text-gray-400 text-sm mb-1">من تاريخ:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-400 text-sm mb-1">إلى تاريخ:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
          />
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-600 rounded-lg px-4 py-2 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm"
        >
          <option value="desc">أحدث أولاً</option>
          <option value="asc">أقدم أولاً</option>
        </select>
      </div>

      {/* قائمة التقارير */}
      <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-gray-200">التقارير</h3>
        {filteredReports.length === 0 ? (
          <p className="text-gray-400">لا يوجد تقارير مطابقة للفلترة</p>
        ) : (
          <ul className="space-y-3">
            <AnimatePresence>
              {filteredReports.map((report, idx) => (
                <motion.li
                  key={report.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 hover:shadow-2xl transition cursor-pointer"
                >
                  <div onClick={() => setModalReport(report)}>
                    <p className="font-medium text-gray-200">{report.title}</p>
                    <p className="text-gray-400 text-sm">
                      {new Date(report.date).toLocaleDateString()}
                    </p>
                  </div>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={report.file}
                    download={`${report.title}.pdf`}
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 shadow-md"
                  >
                    تحميل
                  </motion.a>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>

      {/* Modal معاينة + طباعة */}
      <AnimatePresence>
        {modalReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-gray-900 rounded-xl shadow-2xl w-11/12 md:w-4/5 h-4/5 p-4 flex flex-col"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{modalReport.title}</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        modalReport.file,
                        "_blank",
                        "width=800,height=600"
                      )
                    }
                    className="text-white bg-green-600 px-3 py-1 rounded hover:bg-green-700"
                  >
                    طباعة
                  </button>
                  <button
                    onClick={() => setModalReport(null)}
                    className="text-white bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
              <iframe
                src={modalReport.file}
                className="flex-1 w-full rounded-lg border border-gray-600"
                title={modalReport.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
