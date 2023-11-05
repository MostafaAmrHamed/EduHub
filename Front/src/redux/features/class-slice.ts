import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: classes[] = [];
export const classSlice = createSlice({
  name: "class",
  initialState,
  reducers: {
    getClasses: (state, action: PayloadAction<classes[]>) => {
      return action.payload;
    },
    Add: (state, action: PayloadAction<classes>) => {
      state.push(action.payload);
    },
    Update: (state, action: PayloadAction<classes>) => {
      state.filter((classes) => {
        if (classes.id === action.payload.id) {
          return (classes.name = action.payload.name);
        }
      });
    },
    Delete: (state, action: PayloadAction<string>) => {
      state = state.filter((classes) => {
        return classes.id !== action.payload;
      });
      return state;
    },
  },
});

export const { Add, Update, Delete, getClasses } = classSlice.actions;
export default classSlice.reducer;
