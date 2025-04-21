import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${formData.email}\nPassword: ${formData.password}`);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
                required
              />
              <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400"
                required
              />
              <FaLock className="absolute left-4 top-4 text-gray-500" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-4 rounded-xl text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          >
            Sign In
          </button>

          {/* Forgot Password & Sign Up Links */}
          <div className="text-center mt-4">
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <p className="text-gray-600 text-center mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
