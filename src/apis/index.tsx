import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4444/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
