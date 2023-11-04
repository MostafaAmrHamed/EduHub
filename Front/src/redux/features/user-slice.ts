import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: userInfo = {
  name: "",
  access_token: "",
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Login: (state, action: PayloadAction<userInfo>) => {
      localStorage.setItem("User", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export const { Login } = userSlice.actions;
export default userSlice.reducer;
