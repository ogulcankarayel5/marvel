import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gateway.marvel.com/v1/public",
});

export default axiosInstance;
