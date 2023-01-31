import { RootState } from "app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User = {
  email: string;
  password: string;
  avatar: string;
};

interface IInitialState {
  isAuthenticated: boolean;
  user: null | Omit<User, "password">;
}

const initialState: IInitialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state: any, action: PayloadAction<User>) => {
      console.log(action);
      const { password, ...user } = action.payload;
      console.log(password);
      console.log(user);
      state.isAuthenticated = true;
      state.user = user;
    },
    /* logout: (state) => {
      state = initialState;
    }, */
  },
});
//action
export const { loginSuccess } = authSlice.actions;
// reducer
export default authSlice.reducer;
//state
export const selectAuth = (state: RootState) => state.auth;
