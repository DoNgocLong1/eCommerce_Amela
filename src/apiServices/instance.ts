import axios from "axios";
const url = "http://34.125.49.197/api";
export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});
