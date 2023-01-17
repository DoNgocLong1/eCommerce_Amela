import axios from "axios";
const request = axios.create({
  baseURL: "http://54.179.60.253/",
});
export const get = async (path: string, option: any = {}) => {
  const response = await request.get(path, option);
  return response.data;
};
export default request;
