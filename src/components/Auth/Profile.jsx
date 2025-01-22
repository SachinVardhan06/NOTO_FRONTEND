import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  FaUser,
  FaSignOutAlt,
  FaCrown,
  FaCalendar,
  FaEnvelope,
  FaCheckCircle,
  FaTimesCircle,
  FaCreditCard,
  FaHistory,
} from "react-icons/fa";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "https://noto-server-80j5.onrender.com/api/profile/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error fetching profile");
        if (error.response?.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      toast.success("Logged out successfully");
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-8 px-4 sm:py-12">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with Logout */}
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl">
              <FaUser className="text-white text-4xl sm:text-5xl" />
            </div>
            <div className="text-center sm:text-left flex-1 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-blue-300 flex items-center justify-center sm:justify-start">
                <FaEnvelope className="mr-2" /> {user?.email}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Subscription Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <FaCrown className="mr-2 text-yellow-400" /> Subscription
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-300">Current Plan</label>
                <p className="text-white font-medium text-lg">
                  {user?.subscription?.membership_type || "Free Plan"}
                </p>
              </div>
              {user?.subscription?.end_date && (
                <>
                  <div>
                    <label className="text-sm text-blue-300">Valid Until</label>
                    <p className="text-white font-medium flex items-center">
                      <FaCalendar className="mr-2 text-blue-400" />
                      {new Date(
                        user?.subscription?.end_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-blue-300">Status</label>
                    <p
                      className={`font-medium flex items-center ${
                        new Date(user?.subscription?.end_date) > new Date()
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {new Date(user?.subscription?.end_date) > new Date() ? (
                        <>
                          <FaCheckCircle className="mr-2" /> Active
                        </>
                      ) : (
                        <>
                          <FaTimesCircle className="mr-2" /> Expired
                        </>
                      )}
                    </p>
                  </div>
                </>
              )}
              <button
                onClick={() => navigate("/subscription")}
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
              >
                <FaCreditCard className="inline mr-2" /> Upgrade Plan
              </button>
            </div>
          </motion.div>

          {/* Account Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
              <FaHistory className="mr-2" /> Account Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-300">Full Name</label>
                <p className="text-white font-medium text-lg">
                  {user?.first_name} {user?.last_name || "Not provided"}
                </p>
              </div>
              <div>
                <label className="text-sm text-blue-300">Username</label>
                <p className="text-white font-medium">
                  {user?.username || "Not Provided"}
                </p>
              </div>
              <div>
                <label className="text-sm text-blue-300">Member Since</label>
                <p className="text-white font-medium">
                  {new Date(user?.date_joined).toLocaleDateString()}
                </p>
              </div>
              <div>
                <label className="text-sm text-blue-300">Last Login</label>
                <p className="text-white font-medium">
                  {new Date(
                    user?.last_login || Date.now()
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
