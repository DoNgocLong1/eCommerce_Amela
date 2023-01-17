import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://54.179.60.253/",
});

export const post = async (path: string, option: any = {}) => {
  axiosClient.post(path, option);
};
