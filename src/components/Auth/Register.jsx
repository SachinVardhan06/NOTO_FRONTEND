// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { registerUser } from "../../api/api";

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     first_name: '',
// //     last_name: ''
// //   });
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //     setError('');
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!formData.email || !formData.password || !formData.first_name || !formData.last_name) {
// //       setError('All fields are required');
// //       return;
// //     }

// //     if (formData.password !== formData.confirmPassword) {
// //       setError('Passwords do not match');
// //       return;
// //     }

// //     setLoading(true);
// //     setError('');

// //     try {
// //       const { confirmPassword, ...registerData } = formData;
// //       const response = await registerUser(registerData);
      
// //       if (response.status === 201 || response.status === 200) {
// //         toast.success('Registration successful! Please login to continue.');
// //         setFormData({
// //           email: '',
// //           password: '',
// //           confirmPassword: '',
// //           first_name: '',
// //           last_name: ''
// //         });
// //         navigate('/login');
// //       }
// //     } catch (error) {
// //       const errorMessage = error.response?.data?.detail || 
// //                           error.response?.data?.message || 
// //                           'Registration failed';
// //       setError(errorMessage);
// //       toast.error(errorMessage);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // ...rest of your existing code...
// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
// //         <div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
// //             Create your account
// //           </h2>
// //           <p className="mt-2 text-center text-sm text-gray-600">
// //             Or{" "}
// //             <Link
// //               to="/login"
// //               className="font-medium text-blue-600 hover:text-blue-500"
// //             >
// //               sign in to your account
// //             </Link>
// //           </p>
// //         </div>

// //         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
// //           {error && (
// //             <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
// //               <p className="text-red-700">{error}</p>
// //             </div>
// //           )}

// //           <div className="rounded-md shadow-sm space-y-4">
// //             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
// //               <div>
// //                 <label
// //                   htmlFor="first_name"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   First Name
// //                 </label>
// //                 <input
// //                   id="first_name"
// //                   name="first_name"
// //                   type="text"
// //                   required
// //                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                   value={formData.first_name}
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //               <div>
// //                 <label
// //                   htmlFor="last_name"
// //                   className="block text-sm font-medium text-gray-700"
// //                 >
// //                   Last Name
// //                 </label>
// //                 <input
// //                   id="last_name"
// //                   name="last_name"
// //                   type="text"
// //                   required
// //                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                   value={formData.last_name}
// //                   onChange={handleChange}
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email address
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <input
// //                 id="password"
// //                 name="password"
// //                 type="password"
// //                 autoComplete="new-password"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 value={formData.password}
// //                 onChange={handleChange}
// //               />
// //             </div>

// //             <div>
// //               <label
// //                 htmlFor="confirmPassword"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Confirm Password
// //               </label>
// //               <input
// //                 id="confirmPassword"
// //                 name="confirmPassword"
// //                 type="password"
// //                 autoComplete="new-password"
// //                 required
// //                 className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
// //                 value={formData.confirmPassword}
// //                 onChange={handleChange}
// //               />
// //             </div>
// //           </div>

// //           <div>
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
// //                 loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
// //               } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
// //             >
// //               {loading ? (
// //                 <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
// //                   <circle
// //                     className="opacity-25"
// //                     cx="12"
// //                     cy="12"
// //                     r="10"
// //                     stroke="currentColor"
// //                     strokeWidth="4"
// //                     fill="none"
// //                   />
// //                   <path
// //                     className="opacity-75"
// //                     fill="currentColor"
// //                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                   />
// //                 </svg>
// //               ) : (
// //                 "Sign up"
// //               )}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState } from 'react';
// import { registerUser } from '../../api/api';
// import { useNavigate, Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';
// import { FaUser, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     first_name: '',
//     last_name: '',
//     email: '',
//     password: '',
//     password2: ''
//   });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     if (formData.password !== formData.password2) {
//       setError('Passwords do not match');
//       setLoading(false);
//       return;
//     }

//     try {
//       await registerUser(formData);
//       toast.success('Registration successful!');
//       navigate('/login');
//     } catch (error) {
//       console.error(error);
//       setError(error.response?.data?.message || 'Registration failed');
//       toast.error('Registration failed');
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
//             Create your account
//           </h2>
//           <p className="mt-2 text-center text-sm text-blue-200">
//             Already have an account?{' '}
//             <Link to="/login" className="font-medium text-blue-400 hover:text-blue-300">
//               Sign in
//             </Link>
//           </p>
//         </div>

//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm space-y-4">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               <div className="relative">
//                 <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//                 <input
//                   type="text"
//                   name="first_name"
//                   required
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white rounded-lg bg-gray-800 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="First Name"
//                 />
//               </div>
//               <div className="relative">
//                 <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//                 <input
//                   type="text"
//                   name="last_name"
//                   required
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white rounded-lg bg-gray-800 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                   placeholder="Last Name"
//                 />
//               </div>
//             </div>

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

//             <div className="relative">
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
//               <input
//                 type="password"
//                 name="password2"
//                 required
//                 value={formData.password2}
//                 onChange={handleChange}
//                 className="appearance-none relative block w-full pl-10 pr-3 py-3 border border-gray-600 placeholder-gray-400 text-white rounded-lg bg-gray-800 bg-opacity-40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
//                 placeholder="Confirm Password"
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
//                 'Create Account'
//               )}
//             </button>
//           </div>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from 'react';
import { registerUser } from '../../api/api';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaSpinner, FaGoogle, FaGithub } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.first_name || !formData.last_name || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.password2) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await registerUser(formData);
      toast.success('🎉 Registration successful! Please login');
      navigate('/login');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 
                         error.response?.data?.detail || 
                         'Registration failed. Please try again.';
      setError(errorMessage);
      toast.error('🚨 ' + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10"
      >
        <div className="text-center mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2"
          >
            Join Our Community
          </motion.h1>
          <p className="text-slate-300 text-sm">Create your account in seconds</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center p-3 bg-red-900/20 rounded-lg"
            >
              ⚠️ {error}
            </motion.div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 group-focus-within:text-blue-400" />
                <input
                  type="text"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200"
                  placeholder="First Name"
                />
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <div className="relative group">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 group-focus-within:text-blue-400" />
                <input
                  type="text"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200"
                  placeholder="Last Name"
                />
              </div>
            </motion.div>
          </div>

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
                placeholder="Email Address"
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

          <motion.div whileHover={{ scale: 1.02 }}>
            <div className="relative group">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-300/80 group-focus-within:text-blue-400" />
              <input
                type="password"
                name="password2"
                required
                value={formData.password2}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200"
                placeholder="Confirm Password"
              />
            </div>
          </motion.div>

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
                <span>Create Account</span>
                <span className="text-white/70">→</span>
              </>
            )}
          </motion.button>

          <div className="my-8 flex items-center space-x-4">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-slate-400 text-sm">Or sign up with</span>
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

          <p className="text-center mt-8 text-slate-400 text-sm">
            By registering, you agree to our{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          </p>
        </form>

        <p className="text-center mt-6 text-slate-400">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
          >
            Sign In
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;