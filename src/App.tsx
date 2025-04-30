import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './features/home/HomePage';
import CreditMonitoringPage from './features/creditMonitoring/CreditMonitoringPage';
import FintechVerificationPage from './features/fintechVerifier/FintechVerificationPage';
import CallerVerificationPage from './features/callerVerification/CallerVerificationPage';
import SimProtectionPage from './features/simSwapProtection/SimProtectionPage';
import DeepfakeDefensePage from './features/deepfakeDefense/DeepfakeDefensePage';
import IdentityTheftSimulator from './features/assessment/AssessmentPage';
import ContactPage from './features/contact/ContactPage';
const AssessmentPage = IdentityTheftSimulator;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/credit-monitoring" element={<CreditMonitoringPage />} />
          <Route path="/fintech-verification" element={<FintechVerificationPage />} />
          <Route path="/sim-protection" element={<SimProtectionPage />} />
          <Route path="/deepfake-defense" element={<DeepfakeDefensePage />} />
          <Route path="/assessment" element={<AssessmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;