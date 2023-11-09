import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./user-slice";
import { getClasses, Update, Add, Delete } from "./class-slice";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNoZXRvcyIsInN1YiI6IjY1MmI1NmNiMDFlMjNiYTg3NmUwYzJkYyIsImlhdCI6MTY5OTUzMDA1MSwiZXhwIjoxNjk5NTQ0NDUxfQ.Tce9E9N61uvSOv3b7aP-zZ2woFe4gKJRKhquHIIcAYY";
export const eduHubApi = createApi({
  reducerPath: "eduHubApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://educationhub.onrender.com/api",
  }),
  endpoints: (builder) => ({
    /* Start of Auth Login Api */
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
    /* End of Auth Login Api */

    /* Start of CLass Api */
    getClasses: builder.query<getClasses[], any>({
      query: () => {
        return {
          url: `/classes`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(getClasses((await queryFulfilled).data));
      },
    }),
    addClass: builder.mutation<classes, Partial<classes>>({
      query: (classes) => {
        return {
          url: `/classes`,
          method: "POST",
          body: classes,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(Add((await queryFulfilled).data));
      },
    }),
    updateClass: builder.mutation<classes, classes>({
      query: (classes) => {
        return {
          url: `/classes/${classes._id}`,
          method: "PATCH",
          body: { name: classes.name },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(Update((await queryFulfilled).data));
      },
    }),
    DeleteClass: builder.mutation<classes, string>({
      query: (id) => {
        return {
          url: `/classes/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        dispatch(Delete((await queryFulfilled).data._id));
      },
    }),
    getSingleClass: builder.query<getClasses, string>({
      query: (id) => {
        return {
          url: `/classes/${id}`,
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    /* End of CLass Api */
  }),
});

export const {
  useLoginMutation,
  useAddClassMutation,
  useGetClassesQuery,
  useUpdateClassMutation,
  useDeleteClassMutation,
  useGetSingleClassQuery,
} = eduHubApi;
