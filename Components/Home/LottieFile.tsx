/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";

import lottieProvider from "@/tools/lottieProvider";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

const LottieFile = ({ image }: { image: any }) => {
   
  return (
    <Lottie options={lottieProvider(image)} height={"auto"} width={"100%"} />
  );
};

export default LottieFile;
