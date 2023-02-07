import { instance } from "./instance";
export const fetchProduct = async () => {
  const data = await instance
    .get(`products`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
export const filter = async (rule: string) => {
  const data = await instance
    .get(`products/filter?time=${rule}`)
    /* .get(`products/search/${rule}`) */
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
export const searchProduct = async (value: string) => {
  const data = await instance
    .get(`products/search/${value}`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
