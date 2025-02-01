// // import React, { useState } from 'react';
// // import { loginUser } from '../../api/api'; // Importing the API call
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';

// // const Login = () => {
// //   const [formData, setFormData] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError('');

// //     try {
// //       const response = await loginUser(formData);
// //       localStorage.setItem('token', response.data.access);
// //       navigate('/'); // Navigate to homepage
// //       toast.success('Login successful!');
// //     } catch (error) {
// //       console.error(error.response ? error.response.data : error.message);
// //       setError('Invalid credentials.');
// //       toast.error('Login failed.');
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 text-white">
// //       <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-gray-900">
// //         {/* Header */}
// //         <div className="text-center mb-6">
// //           <h1 className="text-4xl font-extrabold text-blue-600">Login</h1>
// //           <p className="text-lg mt-2 text-gray-600">Welcome Back !</p>
// //         </div>

// //         {/* Login Form */}
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-6">
// //             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
// //             <input
// //               id="email"
// //               name="email"
// //               type="email"
// //               placeholder="Your email address"
// //               onChange={handleChange}
// //               value={formData.email}
// //               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //             />
// //           </div>

// //           <div className="mb-6">
// //             <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// //             <input
// //               id="password"
// //               name="password"
// //               type="password"
// //               placeholder="Your password"
// //               onChange={handleChange}
// //               value={formData.password}
// //               className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //             />
// //           </div>

// //           {/* Submit Button */}
// //           <div className="mb-6">
// //             <button
// //               type="submit"
// //               className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //             >
// //               Login
// //             </button>
// //           </div>

// //           {/* Error Message */}
// //           {error && <div className="text-center text-red-500 mb-4">{error}</div>}
// //         </form>

// //         {/* Footer with Terms and Privacy Links */}
// //         <div className="text-center text-sm">
// //           <p className="text-gray-500">
// //             By logging in, you agree to our{' '}
// //             <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a> and{' '}
// //             <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { loginUser } from "../../api/api";
// import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaLock, FaSpinner } from "react-icons/fa";

// const Login = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await loginUser(formData);
//       localStorage.setItem("token", response.data.access);
//       toast.success("Login successful!");
//       navigate("/");
//     } catch (error) {
//       console.error(error.response ? error.response.data : error.message);
//       setError("Invalid credentials.");
//       toast.error("Login failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-md w-full space-y-8 bg-white bg-opacity-10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl"
//       >
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
//             Welcome Back
//           </h2>
//           <p className="mt-2 text-center text-sm text-blue-200">
//             Don't have an account?{" "}
//             <Link
//               to="/register"
//               className="font-medium text-blue-400 hover:text-blue-300"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white rounded-lg bg-gray-800 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Email address"
//               />
//             </div>

//             <div className="relative">
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//               <input
//                 type="password"
//                 name="password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white rounded-lg bg-gray-800 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Password"
//               />
//             </div>
//           </div>

//           {error && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="text-red-400 text-sm text-center"
//             >
//               {error}
//             </motion.div>
//           )}

//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//             >
//               {loading ? (
//                 <FaSpinner className="animate-spin h-5 w-5" />
//               ) : (
//                 "Sign in"
//               )}
//             </button>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//               />
//               <label
//                 htmlFor="remember-me"
//                 className="ml-2 block text-sm text-gray-300"
//               >
//                 Remember me
//               </label>
//             </div>

//             <div className="text-sm">
//               <Link
//                 to="/forgot-password"
//                 className="text-blue-400 hover:text-blue-300"
//               >
//                 Forgot Password?
//               </Link>
//             </div>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { loginUser } from "../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaSpinner, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(formData);
      localStorage.setItem("token", response.data.access);
      toast.success("Welcome back! Login successful!");
      navigate("/");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || "Invalid credentials");
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10"
      >
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
          >
            Welcome Back
          </motion.h1>
          <p className="text-slate-300 text-sm">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 group-focus-within:text-blue-400" />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200"
                  placeholder="Email address"
                />
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="relative group">
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 group-focus-within:text-blue-400" />
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200"
                  placeholder="Password"
                />
              </div>
            </motion.div>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center p-3 bg-red-900/20 rounded-lg"
            >
              ⚠️ {error}
            </motion.div>
          )}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-400 rounded focus:ring-blue-500 border-white/10 bg-white/5"
              />
              <span className="text-slate-300">Remember me</span>
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <FaSpinner className="animate-spin h-5 w-5" />
            ) : (
              <>
                <span>Sign In</span>
                <span className="text-white/70">→</span>
              </>
            )}
          </motion.button>
        </form>

        <div className="my-8 flex items-center space-x-4">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-slate-400 text-sm">Or continue with</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-300">
            <FaGoogle className="text-rose-400" />
            <span>Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-slate-300">
            <FaGithub className="text-purple-400" />
            <span>GitHub</span>
          </button>
        </div>

        <p className="text-center mt-8 text-slate-400">
          New here?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;