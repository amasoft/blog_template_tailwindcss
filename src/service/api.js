import axios from "axios";
const api = axios.create({
  baseURL: "https://amatechblogapi.vercel.app",
});

export default api;
// const BASE_URL = "https://amatechblogbackend.vercel.app/";
// const BASE_URL = "https://amatech-backend.onrender.com/";
//   const BASE_URL = "http://localhost:3006/";
// const BASE_URL = "https://amatechbackend-production.up.railway.app/";
