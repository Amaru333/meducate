import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiSearch } from "react-icons/ci";

function DashboardNavbar() {
  return (
    <div className="h-20 border-b flex items-center px-8 justify-between">
      <div className="relative">
        <input className="bg-gray-200 pr-2 py-3 rounded-full pl-10 outline-none text-sm w-96" placeholder="Search" />
        <div className="absolute left-0 top-0 flex h-full items-center justify-center text-gray-500 ml-3">
          <CiSearch />
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default DashboardNavbar;
