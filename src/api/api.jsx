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

API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error);
  }
);

export const verifyOTPAndRegister = async (data) => {
  try {
    const response = await API.post("verify-otp-register/", data);
    return response;
  } catch (error) {
    throw error;
  }
};

export default API;




API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Question generation endpoint with auth
export const generateQuestions = async (data) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Authentication required');
  }

  try {
    const response = await API.post("generate-questions/", {
      subject: data.subject,
      main_topic: data.mainTopic,
      sub_topic: data.subTopic,
      question_type: data.questionType,
      difficulty: data.difficulty,
      count: data.count || 5
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw error.response?.data || error;
  }
};