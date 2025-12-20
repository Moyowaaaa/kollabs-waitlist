import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_URL_LOCAL
    : process.env.NEXT_PUBLIC_BACKEND_URL_PROD;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
