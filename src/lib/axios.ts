import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1` || "http://localhost:8000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  // If you need to send cookies with requests, uncomment the next line:
  withCredentials: true,
});

// Request interceptor (useful for attaching auth tokens dynamically)
api.interceptors.request.use(
  (config) => {
    // You can retrieve token here (e.g., from localStorage on client side)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor (useful for global error handling or transforming responses)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific status codes globally
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        // Handle unauthorized (e.g., redirect to login or refresh token)
      }
    }
    return Promise.reject(error);
  },
);

export default api;
