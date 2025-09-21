"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLoginButtons() {
  const session = useSession();
  const router = useRouter();
  const handleGithubLogin = async (providerName) => {
    const result = await signIn(providerName, { redirect: false });
    console.log(result);
  };

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { redirect: false });
    console.log(result)
   
  };

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success("login Successfully!");
    }
  }, [session?.status]);

  return (
    <div className="flex justify-center  gap-6 text-3xl">
      {/* Google Login */}
      <button onClick={handleGoogleLogin} className="cursor-pointer">
        <FcGoogle className="text-2xl" />
      </button>
      {/* GitHub Login */}
      <button
        onClick={() => handleGithubLogin("github")}
        className="text-gray-800 cursor-pointer hover:text-black"
      >
        <FaGithub />
      </button>

      {/* Facebook Login */}
      <button
        onClick={() => signIn("facebook")}
        className="text-blue-600 cursor-pointer hover:text-blue-800"
      >
        <FaFacebook />
      </button>

      {/* LinkedIn Login */}
      <button
        onClick={() => signIn("linkedin")}
        className="text-blue-700 cursor-pointer hover:text-blue-900"
      >
        <FaLinkedin />
      </button>
    </div>
  );
}
