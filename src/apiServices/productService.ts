import { instance } from "./instance";
export const fetchProduct = async (params: any = "") => {
  console.log("params", params);
  const isCategory: boolean = Object.keys(params).includes("category");
  console.log(isCategory);
  if (isCategory) {
    const data = await instance
      .post("category", { id: params.category })
      .then((response) => response)
      .catch((error) => {
        console.log(error);
      });
    return data;
  }
  const data = await instance
    .get(`products/filter`, { params: params })
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
export const listProduct = async () => {
  const data = await instance
    .get(`products`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
export const minMax = async () => {
  const data = await instance
    .get(`data-price`)
    .then((response) => response)
    .catch((error) => {
      console.log(error);
    });
  return data;
};
