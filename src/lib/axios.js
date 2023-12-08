import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Assuming REACT_APP_API_BASE_URL is your environment variable
  headers: {
    "Content-Type": "application/json",
    // Add any other headers if needed
  },
});

export default axiosInstance;
