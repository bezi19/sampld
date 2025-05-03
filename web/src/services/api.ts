import axios from "axios";

const baseURL = "https://localhost:7122/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const statusCode = error.response.status;
      const errorMessage = error.response.data?.message || "An error occurred";

      // Create an error object with status code in the message for easy parsing
      const enhancedError = new Error(`${statusCode}: ${errorMessage}`);

      // Add the original error properties
      enhancedError.name = error.name;
      return Promise.reject(enhancedError);
    }

    return Promise.reject(error);
  }
);

export default api;
