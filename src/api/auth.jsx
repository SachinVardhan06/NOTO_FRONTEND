import axios from 'axios';

export const refreshToken = async () => {
  try {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) throw new Error('No refresh token');

    const response = await axios.post(
      'https://noto-server-80j5.onrender.com/api/token/refresh/',
      { refresh }
    );

    return response.data.access;
  } catch (error) {
    throw error;
  }
};