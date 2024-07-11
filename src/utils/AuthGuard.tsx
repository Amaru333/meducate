"use client";

import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getLocalItem, removeLocalItem } from "./localStorageFunctions";
import httpRequest from "./httpRequest";
import { AUTO_LOGIN_ENDPOINT } from "@/constants/APIRoutes";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/slices/userSlice";

interface AuthGuardProps {
  children: React.ReactNode;
}

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = React.useState(true);
  useEffect(() => {
    const token = getLocalItem("meducate-token");
    if (!token) {
      setLoading(false);
      redirect("/");
    }
    httpRequest
      .get(AUTO_LOGIN_ENDPOINT)
      .then((res) => {
        dispatch(setUser(res.data));
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        toast("An error occurred. Please login again.", { style: { background: "red", color: "white" } });
        removeLocalItem("meducate-token");
        setLoading(false);
        router.push("/");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return loading ? <div className="w-screen h-screen flex items-center justify-center">LOADING</div> : children;
}

export default AuthGuard;
