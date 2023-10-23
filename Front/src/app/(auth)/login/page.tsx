import Image from "next/image";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[75px] h-[60px] md:w-[100px] md:h-[75px] relative">
        <Image
          src="/images/EduHubLogo.png"
          fill
          alt="logo"
          className="bg-primary-1 rounded-lg p-2"
        />
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;
