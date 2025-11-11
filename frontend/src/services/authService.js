import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

// Configure axios to send cookies
axios.defaults.withCredentials = true;

const authService = {
  // Register new user
  register: async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  },

  // Login user
  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  },

  // Logout user
  logout: async () => {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  },

  // Get current user
  getCurrentUser: async () => {
    const response = await axios.get(`${API_URL}/me`);
    return response.data;
  }
};

export default authService;
