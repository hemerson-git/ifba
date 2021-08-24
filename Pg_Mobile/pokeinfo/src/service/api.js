import axios from "axios";

const api = axios.create({
  baseURL: "http://172.19.1.1:5000",
});

export default api;
