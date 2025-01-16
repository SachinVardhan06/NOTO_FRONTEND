import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
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
        console.error("Error fetching user data:", error);
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
    localStorage.removeItem("token");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8 shadow-2xl">
          <div className="flex items-center space-x-8">
            <div className="relative">
              <div className="h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-4xl text-white font-bold">
                  {user?.first_name?.[0]?.toUpperCase() ||
                    user?.email?.[0]?.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {user?.first_name} {user?.last_name}
              </h1>
              <p className="text-blue-300">{user?.email}</p>
              <div className="mt-4 flex space-x-4">
                <span className="px-4 py-2 bg-blue-600 rounded-full text-white text-sm">
                  {user?.subscription?.membership_type || "Free"} Plan
                </span>
                {user?.subscription?.end_date && (
                  <span className="px-4 py-2 bg-green-500 rounded-full text-white text-sm">
                    Valid until{" "}
                    {new Date(
                      user?.subscription?.end_date
                    ).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-6">
              Account Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-300">Name</label>
                <p className="text-white font-medium">
                  {user?.first_name} {user?.last_name}
                </p>
              </div>
              <div>
                <label className="text-sm text-blue-300">Email</label>
                <p className="text-white font-medium">{user?.email}</p>
              </div>
              <div>
                <label className="text-sm text-blue-300">Member Since</label>
                <p className="text-white font-medium">
                  {new Date(user?.date_joined).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-6">
              Subscription Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-blue-300">Current Plan</label>
                <p className="text-white font-medium">
                  {user?.subscription?.membership_type || "Free Plan"}
                </p>
              </div>
              {user?.subscription?.end_date && (
                <>
                  <div>
                    <label className="text-sm text-blue-300">Valid Until</label>
                    <p className="text-white font-medium">
                      {new Date(
                        user?.subscription?.end_date
                      ).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-blue-300">Status</label>
                    <p className="text-white font-medium">
                      {new Date(user?.subscription?.end_date) > new Date()
                        ? "Active"
                        : "Expired"}
                    </p>
                  </div>
                </>
              )}
              <button
                onClick={() => navigate("/subscription")}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
              >
                {user?.subscription?.membership_type
                  ? "Manage Subscription"
                  : "Upgrade Plan"}
              </button>
              <button
                onClick={handleLogout}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
