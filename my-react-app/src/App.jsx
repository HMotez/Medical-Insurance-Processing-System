import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClaimForm from "./pages/claimForm.jsx";
import Dashboard from "./pages/dashbord.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Home route */}
        <Route path="/claim-form" element={<ClaimForm />} /> {/* Claim form page */}
      </Routes>
    </Router>
  );
}

export default App;
