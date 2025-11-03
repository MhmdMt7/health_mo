import React from "react";
import { motion } from "framer-motion";
import { FiCalendar, FiUser, FiPhone, FiClock } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

// 🔹 تعريف قواعد التحقق (Validation Schema)
const BookingSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full name is required"),
  phone: Yup.string()
    .matches(/^01[0-9]{9}$/, "Enter a valid Egyptian phone number")
    .required("Phone number is required"),
  date: Yup.string().required("Please select a date"),
  time: Yup.string().required("Please select a time"),
});

export default function Booking() {
  const handleSubmit = (values, { resetForm }) => {
    toast.success(`Appointment booked successfully for ${values.fullName}!`);
    resetForm();
  };

  return (
    <section
      id="booking"
      className="py-20 bg-gradient-to-r from-cyan-100 via-blue-50 to-white"
    >
      <div className="container mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-600 mb-10"
        >
          Book an Appointment
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl"
        >
          <Formik
            initialValues={{
              fullName: "",
              phone: "",
              date: "",
              time: "",
            }}
            validationSchema={BookingSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      errors.fullName && touched.fullName
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <FiUser className="text-blue-500 mr-3" />
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      className="w-full outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      errors.phone && touched.phone
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <FiPhone className="text-blue-500 mr-3" />
                    <Field
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                {/* Date */}
                <div>
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      errors.date && touched.date
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <FiCalendar className="text-blue-500 mr-3" />
                    <Field
                      name="date"
                      type="date"
                      className="w-full outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                {/* Time */}
                <div>
                  <div
                    className={`flex items-center border rounded-lg p-3 ${
                      errors.time && touched.time
                        ? "border-red-400"
                        : "border-gray-200"
                    }`}
                  >
                    <FiClock className="text-blue-500 mr-3" />
                    <Field
                      as="select"
                      name="time"
                      className="w-full outline-none bg-transparent"
                    >
                      <option value="">Select Time</option>
                      <option>09:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>12:00 PM</option>
                      <option>01:00 PM</option>
                    </Field>
                  </div>
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="text-red-500 text-sm mt-1 text-left"
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors font-semibold"
                  >
                    Confirm Appointment
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </section>
  );
}
