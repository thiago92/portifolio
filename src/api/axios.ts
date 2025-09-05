import axios from "axios";

const api = axios.create({
  //baseURL: "https://back-node-zr66.onrender.com",
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
