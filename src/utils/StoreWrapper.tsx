"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "@/redux/store";

interface StoreWrapperProps {
  children: React.ReactNode;
}

function StoreWrapper({ children }: StoreWrapperProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreWrapper;
