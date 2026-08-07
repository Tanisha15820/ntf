import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Attendance from "./Pages/Attendance";
import Requirement from "./Pages/Requirement";
import LMS from "./Pages/LMS";
import L0 from "./Pages/L0";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/requirement" element={<Requirement />} />
        <Route path="/lms" element={<LMS />} />
        <Route path="/lms/l0" element={<L0 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
