import Image from "next/image";
import Logo from "../../../public/images/EduHubLogo.png";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-10">
      <div className="w-[75px] h-[60px] md:w-[100px] md:h-[75px] relative">
        <Image
          src="/images/EduHubLogo.png"
          fill
          alt="logo"
          className="bg-primary-1 rounded-lg p-2"
        />
      </div>
      <form>
        <div>
          <label className="block mt-2 text-lg">Username</label>
          <input
            type="text"
            className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
            placeholder="Mostafa Amr"
          />
        </div>
        <div className="mt-5">
          <label className="block mt-2 text-lg">Password</label>
          <input
            type="password"
            className="p-2.5 w-[220px] h-[40px] md:w-[500px] md:h-[50px] border-primary-3 border-2 outline-none focus:ring-primary-1 focus:border-primary-1 bg-primary-2 rounded"
            placeholder="••••••••"
          />
        </div>
        <div className="flex !justify-end mt-2">
          <button className="flex items-center justify-center border-2 border-primary-1 w-[220px] h-[40px] md:w-[150px] md:h-[50px] rounded text-lg text-primary-2 bg-primary-1 transition-all hover:pl-2 ease-in-out duration-300">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
