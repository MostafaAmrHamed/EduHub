import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./user-slice";
export const eduHubApi = createApi({
  reducerPath: "eduHubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://educationhub.onrender.com/api",
  }),
  endpoints: (builder) => ({
    // loginUser: builder.query<any, any>({
    //   query: () => "auth/login",
    // }),
    login: builder.mutation<userInfo, loginData>({
      query(loginData) {
        return {
          url: `/auth/login`,
          method: "POST",
          body: loginData,
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(Login((await queryFulfilled).data));
      },
    }),
  }),
});

export const { useLoginMutation } = eduHubApi;
