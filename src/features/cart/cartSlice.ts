import { RootState } from "app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartList } from "types/cartType.type";
interface IInitialState {
  cartList: ICartList[];
  listLength: number;
  totalPrice: number;
}
const initialState: IInitialState = {
  cartList: [],
  listLength: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state: IInitialState, action: PayloadAction<ICartList>) {
      console.log(action.payload);
      state.listLength++;
      const existingItem: any = state.cartList.find((cart: ICartList) => {
        return cart.id === action.payload.id;
      });
      if (!existingItem) {
        console.log("add item");
        const newItem = {
          ...action.payload,
          count: 1,
          total: action.payload.price,
        };
        state.cartList = [newItem, ...state.cartList];
        state.totalPrice += action.payload.price;
      } else {
        console.log("increase");
        existingItem.count++;
        existingItem.total += action.payload.price;
        state.totalPrice += action.payload.price;
      }
    },
    removeItem(state: IInitialState, action: PayloadAction<ICartList>) {
      console.log(action.payload);
      const removeItem: any = state.cartList.find((cart: ICartList) => {
        return cart.id === action.payload.id;
      });
      state.cartList.splice(state.cartList.indexOf(removeItem), 1);
      state.totalPrice -= removeItem.total;
      state.listLength -= removeItem.count;
    },
    deleteItem(state: IInitialState, action: PayloadAction<ICartList>) {
      const existingItem: any = state.cartList.find((cart: ICartList) => {
        return cart.id === action.payload.id;
      });
      existingItem.count--;
      if (existingItem.count === 0) {
        state.cartList.splice(state.cartList.indexOf(existingItem), 1);
      }
      state.listLength--;
      state.totalPrice -= action.payload.price;
    },
  },
});
//action
export const { addItem, removeItem, deleteItem } = cartSlice.actions;
// reducer
export default cartSlice.reducer;
//state
export const selectCartList = (state: RootState) => state.cart;