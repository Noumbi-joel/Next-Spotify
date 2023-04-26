import { signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";

const Login = () => {
  const providers = authOptions.providers;
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img
        src="https://links.papareact.com/9xl"
        alt="spotify"
        className="w-52 mb-5"
      />

      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          onClick={() => signIn(provider.id, { callbackUrl: "/" })}
        >
          <button className="bg-[#18D860] text-white p-5 rounded-full">
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;
