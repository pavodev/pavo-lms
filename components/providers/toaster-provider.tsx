"use client";

import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
    // toastOptions={{
    //   error: {
    //     style: {
    //       background: "zinc-950",
    //     },
    //   },
    // }}
    />
  );
};

export default ToastProvider;
