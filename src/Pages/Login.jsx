import React, { useState } from "react";
import logo from "../assets/images/NTF_logo_black.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/images/bg_image.png";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center rounded-r-3xl overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-primary/20"></div>

        <div className="relative z-10 flex flex-col justify-center px-14 text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome Back!</h1>

          <p className="text-lg leading-8 max-w-md text-white/90">
            Login to access the NTF Attendance & Manpower Management System.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex w-full lg:w-1/2 items-center justify-center bg-white px-6">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="logo" className="h-20" />
          </div>

          <h2 className="text-4xl font-bold text-gray-800 mb-2">Login</h2>

          <p className="text-gray-500 mb-8">Welcome back, please login to your account</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="flex items-center border rounded-lg px-5 h-12">
              <EmailOutlinedIcon className="text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full ml-3 outline-none"
              />
            </div>

            {/* Password */}
            <div className="flex items-center border rounded-lg px-5 h-12">
              <LockOutlinedIcon className="text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full ml-3 outline-none"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="text-sm font-medium text-primary hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              onClick={() => navigate("/home")}
              className="w-full h-12 rounded-lg bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-8 text-gray-500">
            Don't have an account?
            <button
              onClick={() => navigate("/")}
              className="ml-2 font-semibold text-primary hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
