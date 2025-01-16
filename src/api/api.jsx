import axios from "axios";

const API = axios.create({
  baseURL: "https://noto-server-80j5.onrender.com/api/", // Replace with your Django backend URL
});

export const registerUser = (data) => API.post("register/", data);
export const loginUser = (data) => API.post("login/", data);
export const getSubscription = (token) =>
  API.get("subscription/", { headers: { Authorization: `Bearer ${token}` } });
export const updateSubscription = (token, data) =>
  API.post("subscription/", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const sendOTP = async (email) => {
  try {
    const response = await API.post("send-otp/", { email });
    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyOTPAndRegister = async (data) => {
  try {
    const response = await API.post("verify-otp-register/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default API;
