import axios from "axios";
import { API_URL } from "../../helpers/constraints";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  withCredentials: true,
});
