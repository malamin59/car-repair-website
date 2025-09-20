"use client";
import { signIn } from "next-auth/react";
import { FaGithub, FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";

export default function SocialLoginButtons() {
  return (
    <div className="flex justify-center  gap-6 text-3xl">
      {/* Google Login */}
      <button
        onClick={() => signIn("google")}
        className="text-red-500 hover:text-red-700"
      >
        <FaGoogle />
      </button>

      {/* GitHub Login */}
      <button
        onClick={() => signIn("github")}
        className="text-gray-800 hover:text-black"
      >
        <FaGithub />
      </button>

      {/* Facebook Login */}
      <button
        onClick={() => signIn("facebook")}
        className="text-blue-600 hover:text-blue-800"
      >
        <FaFacebook />
      </button>

      {/* LinkedIn Login */}
      <button
        onClick={() => signIn("linkedin")}
        className="text-blue-700 hover:text-blue-900"
      >
        <FaLinkedin />
      </button>
    </div>
  );
}
