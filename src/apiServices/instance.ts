import axios from "axios";
const url = "http://ecommerce.fresher.ameladev.click/api/";
export const instance = axios.create({
  baseURL: url,
  timeout: 1000,
});
