import get from "utils/request";
export const search = async (q: any, type: string = "less") => {
  try {
    const res = await get("user/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
