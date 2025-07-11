import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ComplianceAdmin from "./pages/ComplianceAdmin";
import WorkflowAdmin from "./pages/WorkflowAdmin";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Document Workflow Manager</h1>
      <div className="space-x-4">
        <Link to="/admin" className="text-blue-600 underline">Go to Workflow Setup</Link>
        <Link to="/compliance" className="text-blue-600 underline">Manage Compliance Requirements</Link>
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
