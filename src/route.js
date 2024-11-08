import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/dashboardPage';
import JobDetailsPage from './pages/jobDetailPage';
import CandidateDetailsPage from './pages/candidateDetailPage';
import AssessmentPage from './pages/assessmentPage';
import NotFoundPage from './pages/notFoundPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/jobs/:jobId" element={<JobDetailsPage />} />
        <Route path="/candidates/:candidateId" element={<CandidateDetailsPage />} />
        <Route path="/assessments" element={<AssessmentPage />} />
        <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
