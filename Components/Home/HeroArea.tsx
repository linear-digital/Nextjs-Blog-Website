"use client";

import Image from "next/image";
import Navbar from "../Navbar";
import React from "react";

export default function HeroArea() {
  return (
    <div className="bg-[#1E1743] h-[90vh]">
      <Navbar />
      <div className="relative  px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto container flex lg:justify-between justify-center gap-y-10 items-center lg:h-[90vh] h-[80vh] lg:flex-row flex-col-reverse ">
          <div className="min-w-[55%]">
            <div className="text-start max-w-2xl">
              <h1 className="text-[40px] text-balance font-semibold tracking-tight text-white lg:text-5xl leading-normal">
                Hello, I’m <u>Hazrat Ali</u> <br /> Welcome to my blog
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
                Dont miss out on the latest news about Travel tips, Web Design
                And Development Related Blogs
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-gray-100">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          <Image
            src={"/images/hero-area.png"}
            width={720}
            height={520}
            alt="Image"
            className="rounded-lg"
          />
          {/* <LottieFile image={HeroLottie} /> */}
          {/* Place image here  */}
        </div>
      </div>
    </div>
  );
}
