import { useState } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../Components/AuthLayout";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/home");
  };

  const fields = [
    { name: "email", type: "email", placeholder: "Email Address", Icon: EmailOutlinedIcon },
    { name: "password", type: "password", placeholder: "Password", Icon: LockOutlinedIcon },
  ];

  return (
    <AuthLayout
      welcomeTitle="Welcome Back!"
      welcomeText="Login to access the NTF Attendance & Manpower Management System."
      title="Login"
      subtitle="Welcome back, please login to your account"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map(({ name, type, placeholder, Icon }) => (
          <div key={name} className="flex items-center border rounded-lg px-5 h-12">
            <Icon className="text-gray-400" />
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              className="w-full ml-3 outline-none"
            />
          </div>
        ))}

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
    </AuthLayout>
  );
};

export default Login;
