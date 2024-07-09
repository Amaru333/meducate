import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomePage() {
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
            <input type="email" id="email" className="outline-none border rounded-md mt-1 px-4 py-2" />
          </div>
          <div className="flex flex-col w-full max-w-sm">
            <label htmlFor="password" className="text-xs text-gray-500">
              Password
            </label>
            <input type="password" id="password" className="outline-none border rounded-md mt-1 px-4 py-2" />
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
          <Link href="/dashboard/home" className="bg-primary text-center w-full max-w-sm text-white text-xs py-2 px-4 rounded-full hover:opacity-90 active:scale-95 transition-all mt-12">
            Login
          </Link>
          <button className="bg-white w-full max-w-sm text-primary border border-primary text-xs py-2 px-4 rounded-full hover:opacity-90 active:scale-95 transition-all mt-4">Join us</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
