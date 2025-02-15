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