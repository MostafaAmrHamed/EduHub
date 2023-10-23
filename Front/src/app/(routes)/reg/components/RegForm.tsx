"use client";
import { FormEvent, useState } from "react";
import axios from "axios";

const RegForm = () => {
  const [regData, setRegData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    class: "",
  });
  const updateValues = (e: any) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };
  const CreateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://educationhub.onrender.com/user",
        regData
      );
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={CreateUser}>
      <div>
        <label className="block mt-2 text-lg">Username</label>
        <input
          type="text"
          name="name"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="Mostafa Amr"
          onChange={updateValues}
          value={regData.name}
        />
      </div>
      <div>
        <label className="block mt-2 text-lg">Email</label>
        <input
          type="email"
          name="email"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="example@edu.com"
          onChange={updateValues}
          value={regData.email}
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
          value={regData.password}
        />
      </div>
      <div>
        <label className="block mt-2 text-lg">Phone</label>
        <input
          type="number"
          name="phoneNumber"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="01223456789"
          onChange={updateValues}
          value={regData.phoneNumber}
        />
      </div>
      <div>
        <label className="block mt-2 text-lg">Class</label>
        <input
          type="text"
          name="class"
          className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
          placeholder="example: Ola Sanawy"
          onChange={updateValues}
          value={regData.class}
        />
      </div>
      <div className="flex !justify-end mt-2">
        <button
          className="flex items-center justify-center border-2 border-primary-1 w-[220px] h-[40px] md:w-[150px] md:h-[50px] rounded text-lg text-primary-2 bg-primary-1 transition-all hover:pl-2 ease-in-out duration-300"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default RegForm;
