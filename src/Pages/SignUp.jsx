import { useState } from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../Components/AuthLayout";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fields = [
    { name: "name", type: "text", placeholder: "Full Name", Icon: PersonOutlineOutlinedIcon },
    { name: "email", type: "email", placeholder: "Email Address", Icon: EmailOutlinedIcon },
    { name: "password", type: "password", placeholder: "Password", Icon: LockOutlinedIcon },
  ];

  return (
    <AuthLayout
      welcomeTitle="Welcome!"
      welcomeText="Create your account to access the NTF Attendance & Manpower Management System."
      title="Sign Up"
      subtitle="Create your account"
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

        <button
          type="submit"
          className="w-full h-12 rounded-lg bg-gradient-to-r from-primary-light to-primary-dark text-white font-semibold shadow-lg hover:opacity-90 transition"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-8 text-gray-500">
        Already have an account?
        <button
          onClick={() => navigate("/login")}
          className="ml-2 font-semibold text-primary hover:underline"
        >
          Login
        </button>
      </p>
    </AuthLayout>
  );
};

export default SignUp;
