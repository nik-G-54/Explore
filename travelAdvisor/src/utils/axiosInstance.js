import axios from "axios"

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://lastproject-a4rs.onrender.com/api" //  HERE API REQUIRE

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
})

export default axiosInstance
