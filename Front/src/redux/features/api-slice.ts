import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Login } from "./user-slice";
import { getClasses, Update, Add, Delete } from "./class-slice";

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
          credentials: "include",
        };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        if (await queryFulfilled) {
          dispatch(Login((await queryFulfilled).data));
        }
      },
    }),
    /* End of Auth Login Api */

    /* Start of Add Student Api */
    addStudent: builder.mutation<addStudentSuccessResponse, addStudent>({
      query(addStudent) {
        return {
          url: `/user`,
          method: "POST",
          body: addStudent,
          credentials: "include",
        };
      },
      async onQueryStarted(arg, { queryFulfilled }) {},
    }),
    /* End of Add Student Api */

    /* Start of CLass Api */
    getClasses: builder.query<getClasses[], any>({
      query: () => {
        return {
          url: `/classes`,
          method: "GET",
          credentials: "include",
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
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
          credentials: "include",
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
          credentials: "include",
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
          credentials: "include",
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
          credentials: "include",
        };
      },
    }),
    /* End of CLass Api */

    /* Start of create-exam */
    addExam: builder.mutation<exam, createExam>({
      query: (createExam) => {
        return {
          url: `/exam`,
          method: "POST",
          body: createExam,
          credentials: "include",
        };
      },
    }),
    /* End of create-exam */

    /* Start of Exam-Question Api */
    addImage: builder.mutation<uploadImage, any>({
      query: (any) => {
        return {
          url: "/upload",
          method: "POST",
          body: any,
          credentials: "include",
        };
      },
    }),
    /* End of Exam-Question Api */
  }),
});

export const {
  useLoginMutation,
  useAddStudentMutation,
  useAddClassMutation,
  useGetClassesQuery,
  useUpdateClassMutation,
  useDeleteClassMutation,
  useGetSingleClassQuery,
  useAddExamMutation,
  useAddImageMutation,
} = eduHubApi;
