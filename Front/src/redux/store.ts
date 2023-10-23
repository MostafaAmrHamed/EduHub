import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { eduHubApi } from "./features/api-slice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    userReducer,
    [eduHubApi.reducerPath]: eduHubApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eduHubApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
