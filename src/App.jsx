// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import ComplianceAdmin from "./pages/ComplianceAdmin";
import WorkflowAdmin from "./pages/WorkflowAdmin";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Document Workflow Manager</h1>
      <div className="space-y-4">
        <p>Please choose an action:</p>
        <div className="space-x-4">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin")}
          >
            Add New Workflow
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={() => navigate("/admin")}
          >
            Modify Existing Workflow
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<WorkflowAdmin />} />
        <Route path="/compliance" element={<ComplianceAdmin />} />
      </Routes>
    </Router>
  );
}