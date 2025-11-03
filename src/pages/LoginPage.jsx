import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("بريد غير صالح").required("مطلوب"),
  password: Yup.string().min(4, "قصيرة جدًا").required("مطلوبة"),
});

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Login Data:", values);
    toast.success("تم تسجيل الدخول بنجاح!");
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <Layout showNavbar={false}>
      <Toaster position="top-center" />
      <div className="flex justify-center items-center min-h-[70vh] bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
            تسجيل الدخول
          </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    البريد الإلكتروني
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    كلمة المرور
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
                >
                  {isSubmitting ? "جارٍ التحقق..." : "دخول"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Layout>
  );
}
