"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Login } from "@/redux/features/user-slice";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "@/redux/features/api-slice";
const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [loginApi, { isLoading }] = useLoginMutation();
  const [loginData, setLoginData] = useState<loginData>({
    username: "",
    password: "",
  });

  const updateValues = (e: any) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const LoginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // await loginApi({
    //   username: loginData.username,
    //   password: loginData.password,
    // });
    await axios.post(
      "https://educationhub.onrender.com/api/auth/login",
      { username: loginData.username, password: loginData.password },
      { withCredentials: true }
    );
    if (!isLoading) router.push("/home");
  };
  return (
    <form onSubmit={LoginUser}>
      <div>
        <label className="block mt-2 text-lg">Username</label>
        <input
          type="text"
          name="username"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="Mostafa Amr"
          onChange={updateValues}
          value={loginData.username}
        />
      </div>
      <div className="mt-5">
        <label className="block mt-2 text-lg">Password</label>
        <input
          type="password"
          name="password"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="••••••••"
          onChange={updateValues}
          value={loginData.password}
        />
      </div>
      <div className="flex !justify-end mt-2">
        <button
          className="flex items-center justify-center border-2 border-primary-1 w-[220px] h-[40px] md:w-[150px] md:h-[50px] rounded text-lg text-primary-2 bg-primary-1 transition-all hover:pl-2 ease-in-out duration-300"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
