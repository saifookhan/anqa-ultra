"use client";
import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignupPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side with 3D blob */}
      <div className="hidden md:flex w-1/2 bg-[#0a232f] items-center justify-center">
        {/* Replace with actual 3D blob image or animation */}
        <div className="w-80 h-80 flex items-center justify-center">
          <span className="text-white text-2xl opacity-60">3D Blob</span>
        </div>
      </div>
      {/* Right side with form */}
      <div className="flex flex-1 flex-col justify-center items-center bg-white px-8 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-2 text-[#0a232f]">
            welcome to ultra.
          </h2>
          <div className="flex justify-center mb-6">
            <div className="flex bg-white rounded-full shadow-md p-1 w-fit">
              <button
                className="px-6 py-2 rounded-full bg-white text-[#0a232f] font-medium focus:outline-none"
                onClick={() => router.push("/login")}
              >
                Sign in
              </button>
              <button
                className="px-6 py-2 rounded-full bg-[#0a232f] text-white font-medium focus:outline-none"
                onClick={() => router.push("/signup")}
              >
                Sign up
              </button>
            </div>
          </div>
          <p className="text-center text-gray-500 mb-6">
            Enter your details to create an account
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaUser size={16} />
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a232f] placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaEnvelope size={16} />
                </span>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a232f] placeholder-gray-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <PhoneInput
                country={"de"}
                value={phone}
                onChange={setPhone}
                inputClass="form-control !w-full !rounded !bg-white !text-black !pl-10 placeholder-gray-400"
                buttonClass="flag-dropdown !border-r !border-gray-300 !bg-white"
                dropdownClass="!rounded"
                containerClass="!w-full !flex !items-center !border !border-gray-300 !rounded"
                inputProps={{
                  name: "phone",
                  required: true,
                  placeholder: "197 394 209 2",
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaLock size={16} />
                </span>
                <input
                  type="password"
                  placeholder="••••••••••"
                  className="w-full pl-10 pr-3 py-2 bg-white border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0a232f] placeholder-gray-400"
                />
              </div>
              <ul className="text-xs text-gray-400 mt-1 space-y-1">
                <li>Minimum 12 characters</li>
                <li>One uppercase character</li>
                <li>One special character</li>
                <li>One number</li>
              </ul>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-xs">
                I agree with{" "}
                <a href="#" className="text-[#0a232f] underline">
                  Terms and Privacy policy
                </a>
                .
              </span>
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <span className="text-xs">
                Send me updates, news and relevant offers
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0a232f] text-white py-2 rounded mt-4 font-semibold"
            >
              Sign up
            </button>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-200" />
              <span className="mx-2 text-gray-400 text-xs">
                Or sign up with
              </span>
              <div className="flex-grow h-px bg-gray-200" />
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded font-medium"
            >
              <img src="/google.svg" alt="Google" className="w-5 h-5 mr-2" />{" "}
              Sign up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
