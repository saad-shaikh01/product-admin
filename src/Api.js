import axios from 'axios';

const BASE_URL = 'https://kind-lime-bullfrog-veil.cyclic.app/api'; // Replace this with your actual backend URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const Api = {

   // Function to check if the user is authenticated based on token in local storage
   isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token; // Return true if the token exists, false otherwise
  },

  // Function for making authenticated API requests
  authenticatedRequest: async (apiFunction, ...args) => {
    if (Api.isAuthenticated()) {
      return apiFunction(...args);
    } else {
      throw new Error('User is not authenticated');
    }
  },
  // Function for user signup
  signup: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/signup', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Function for user signin
  signin: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/signin', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Function for user signout
  signout: async () => {
    try {
      const response = await axiosInstance.post('/auth/signout');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  testProductForm: async (formData) => {
    try {
      const response = await axiosInstance.post('/testProduct', formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  cpriProductForm: async (formData) => {
    try {
      const response = await axiosInstance.post('/cpriProduct', formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  productForm: async (formData) => {
    try {
      const response = await axiosInstance.post('/product', formData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getAllProducts: async () => {
    try {
      const response = await axiosInstance.get('/products'); // Replace '/products' with your actual endpoint
      return response.data; // Assuming the response contains an array of products
    } catch (error) {
      throw error.response.data;
    }
  },
  getAllTestProducts: async () => {
    try {
      const response = await axiosInstance.get('/testProducts'); // Replace '/products' with your actual endpoint
      return response.data; // Assuming the response contains an array of products
    } catch (error) {
      throw error.response.data;
    }
  },
  getAllCpriProducts: async () => {
    try {
      const response = await axiosInstance.get('/cpriProducts'); // Replace '/products' with your actual endpoint
      return response.data; // Assuming the response contains an array of products
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteProduct: async (productId) => {
    try{
      const response = await axiosInstance.delete(`/product/${productId}`)
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteTestProduct: async (productId) => {
    try{
      const response = await axiosInstance.delete(`/testProduct/${productId}`)
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
  deleteCpriProduct: async (productId) => {
    try{
      const response = await axiosInstance.delete(`/CpriProduct/${productId}`)
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  authenticatedTestProductForm: async (formData) => {
    return Api.authenticatedRequest(Api.testProductForm, formData);
  },

  // Function for making authenticated cpriProductForm API request
  authenticatedCpriProductForm: async (formData) => {
    return Api.authenticatedRequest(Api.cpriProductForm, formData);
  },

  // Function for making authenticated productForm API request
  authenticatedProductForm: async (formData) => {
    return Api.authenticatedRequest(Api.productForm, formData);
  },
  // You can add more functions for other API endpoints as needed
};

export default Api;
