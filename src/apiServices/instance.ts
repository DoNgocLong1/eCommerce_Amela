import axios from "axios";
const url = "http://34.142.255.109/api";
export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});
