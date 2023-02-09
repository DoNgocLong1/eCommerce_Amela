import { instance } from "apiServices/instance";
export const fetchCategory = async () => {
  const data = await instance
    .get("categories")
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
