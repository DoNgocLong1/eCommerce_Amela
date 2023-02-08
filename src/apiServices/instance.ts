import axios from "axios";
const url = "http://34.87.154.7/api";
export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});
