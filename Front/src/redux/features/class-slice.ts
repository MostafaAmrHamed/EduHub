import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: getClasses[] = [];
export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    getClasses: (state, action: PayloadAction<getClasses[]>) => {
      return action.payload;
    },
    Add: (state, action: PayloadAction<classes>) => {
      state.push(action.payload);
    },
    Update: (state, action: PayloadAction<classes>) => {
      state.filter((classes) => {
        if (classes._id === action.payload._id) {
          return (classes.name = action.payload.name);
        }
      });
    },
    Delete: (state, action: PayloadAction<string>) => {
      state = state.filter((classes) => {
        return classes._id !== action.payload;
      });
      return state;
    },
  },
});

export const { Add, Update, Delete, getClasses } = classSlice.actions;
export default classSlice.reducer;
