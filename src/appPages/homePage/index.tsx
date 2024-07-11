"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "@/constants/APIRoutes";
import { setLocalItem } from "@/utils/localStorageFunctions";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

function HomePage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const registerUser = () => {
    axios
      .post(REGISTER_ENDPOINT, userDetails)
      .then((res) => {
        toast("Account created successfully! Please login to continue.", { style: { background: "green", color: "white" } });
      })
      .catch((err) => {
        toast(err?.response?.data?.message || "An error occurred. Please try again.", { style: { background: "red", color: "white" } });
      });
  };
  const login = () => {
    axios
      .post(LOGIN_ENDPOINT, userDetails)
      .then((res) => {
        dispatch(setUser(res.data));
        setLocalItem("meducate-token", res.headers["auth-token"]);
        toast("Logged in successfully", { style: { background: "green", color: "white" } });
        router.push("/dashboard/home");
      })
      .catch((err) => {
        toast(err?.response?.data?.message || "An error occurred. Please try again.", { style: { background: "red", color: "white" } });
      });
  };
  return (
    <div className="w-screen h-screen bg-gray-100 p-8 grid grid-cols-2">
      <div className="bg-white rounded-2xl">
        <div className="flex flex-col items-center justify-center h-full gap-x-4">
          <Image alt="logo" src="/images/logo.png" width={150} height={0} sizes="100vw" className="object-contain rounded-2xl" />
          <p className="text-2xl font-medium max-w-sm text-center">Get ready and join us on a Medi Learning Adventure!</p>
          <p className="text-sm text-gray-600 max-w-sm text-center mt-6">Join us or login to access our courses and get certified.</p>
          <div className="flex flex-col w-full max-w-sm mt-10 mb-4">
            <label htmlFor="email" className="text-xs text-gray-500">
              Email
            </label>
            <input type="email" id="email" className="outline-none text-sm border rounded-md mt-1 px-4 py-2" value={userDetails.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
          </div>
          <div className="flex flex-col w-full max-w-sm">
            <label htmlFor="password" className="text-xs text-gray-500">
              Password
            </label>
            <input type="password" id="password" className="outline-none text-sm border rounded-md mt-1 px-4 py-2" value={userDetails.password} onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
          </div>
          <div className="flex items-center justify-between w-full max-w-sm mt-2">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-xs text-gray-500 ml-2">
                Remember me
              </label>
            </div>
            <button className="text-primary font-semibold text-xs hover:opacity-90 transition-all">Forgot password</button>
          </div>
          <button onClick={login} className="bg-primary text-center w-full max-w-sm text-white text-xs py-2 px-4 rounded-full hover:opacity-90 active:scale-95 transition-all mt-12">
            Login
          </button>
          <button className="bg-white w-full max-w-sm text-primary border border-primary text-xs py-2 px-4 rounded-full hover:opacity-90 active:scale-95 transition-all mt-4" onClick={registerUser}>
            Join us
          </button>
        </div>
      </div>
      <div>
        <Image alt="sign-in-bg" src="/images/sign-in-bg.png" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} />
      </div>
    </div>
  );
}

export default HomePage;
