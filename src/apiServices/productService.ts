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
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
