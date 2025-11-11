import axios from 'axios';

const API_URL = 'http://localhost:5001/api/items';

// Configure axios to send cookies
axios.defaults.withCredentials = true;

const itemService = {
  // Get all items
  getAllItems: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Get single item
  getItemById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Create new item
  createItem: async (itemData) => {
    const response = await axios.post(API_URL, itemData);
    return response.data;
  },

  // Update item
  updateItem: async (id, itemData) => {
    const response = await axios.put(`${API_URL}/${id}`, itemData);
    return response.data;
  },

  // Delete item
  deleteItem: async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  }
};

export default itemService;
