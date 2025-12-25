// import axios from "axios"

// const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:4600/api" // default to backend port

// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// })

// export default axiosInstance



import axios from "axios";

const BASE_URL ="https://lastproject-a4rs.onrender.com/api"
  // import.meta.env.VITE_API_BASE_URL ||
  // (import.meta.env.MODE === "development"
  //   ? "http://localhost:4600/api"
  //   : "https://lastproject-a4rs.onrender.com/api");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional debug (shows which URL is active)
console.log("🛰️ Axios Base URL:", BASE_URL);

export default axiosInstance;

