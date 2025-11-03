import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// صفحات عامة
import HomePage from "./pages/Home/index.jsx";
import PublicPage from "./pages/PublicPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

// Layout داخلي
import MainLayout from "./components/layout/MainLayout.jsx";

// صفحات داخلية
import Dashboard from "./pages/Dashboard.jsx";
import PatientsListPage from "./pages/PatientsListPage.jsx";
import PatientDetailsPage from "./pages/PatientDetailsPage.jsx";
import NewPatientPage from "./pages/NewPatientPage.jsx";

// Wrapper لتفعيل AnimatePresence مع كل صفحة
function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation(); // جوا Router

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* صفحات عامة */}
        <Route
          path="/"
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/unit"
          element={
            <AnimatedPage>
              <PublicPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/login"
          element={
            <AnimatedPage>
              <LoginPage />
            </AnimatedPage>
          }
        />

        {/* صفحات داخل MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route
            path="dashboard"
            element={
              <AnimatedPage>
                <Dashboard />
              </AnimatedPage>
            }
          />
          <Route
            path="patients"
            element={
              <AnimatedPage>
                <PatientsListPage />
              </AnimatedPage>
            }
          />
          <Route
            path="patients/:id"
            element={
              <AnimatedPage>
                <PatientDetailsPage />
              </AnimatedPage>
            }
          />
          <Route
            path="newPatient"
            element={
              <AnimatedPage>
                <NewPatientPage />
              </AnimatedPage>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
