"use client";

import { navbarData } from "@/constants/navbarData";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-64 h-full flex flex-col">
      <Link href="/dashboard/home" className="p-6 border-b h-20 flex items-center justify-center">
        <Image alt="logo" src="/images/logo-small.png" width={50} height={0} sizes="100vw" className="object-contain rounded-2xl" />
      </Link>
      <div className="py-8 px-6 gap-4 flex flex-col flex-1">
        {navbarData.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className={`flex relative items-center gap-3 px-4 py-3 rounded-full active:scale-95 hover:bg-primary hover:bg-opacity-5 transition-all overflow-hidden ${pathname?.includes(item.link) ? "bg-primary bg-opacity-10 text-primary" : "bg-transparent text-black"}`}
          >
            {pathname?.includes(item.link) && <div className="w-3 h-6 rounded-full bg-primary absolute -left-2 top-[calc(50%-0.75rem)]"></div>}
            <div>{item.icon({ style: { width: "20px", height: "20px" }, strokeWidth: 0.25 })}</div>
            <p className="text-sm">{item.title}</p>
          </Link>
        ))}
      </div>
      <div className="px-6 pb-12">
        <button className={`flex w-full items-center gap-3 px-4 py-3 rounded-full text-red-500 active:scale-95 hover:bg-red-500 hover:bg-opacity-5 transition-all overflow-hidden`} onClick={() => router.push("/")}>
          <div>{IoIosLogOut({ style: { width: "20px", height: "20px" }, strokeWidth: 0.25 })}</div>
          <p className="text-sm">Logout</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
