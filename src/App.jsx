import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Pages from "./Customer View/Pages";
import AdminDashboard from "./Admin View/AdminDashboard";
import ScheduledPrayersPage from "./Admin View/ScheduledPrayersPage";
import ScriptPage from "./Admin View/ListPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/scheduled-prayers" element={<ScheduledPrayersPage />} />
        <Route path="/admin/list" element={<ScriptPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
