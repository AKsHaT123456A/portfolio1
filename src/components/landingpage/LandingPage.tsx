import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 animate-fadeInDown flex items-center gap-3">
      <div className="z-[-10] w-[24vw] h-[49vh] bg-[aqua] top-0 absolute rounded-[5rem] rounded-br-[19rem]  md:flex hidden"></div>
      <div className="container px-4 md:px-6 ">
        <div className="flex flex-col items-center space-y-4 text-center h-96 justify-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none animate-fadeInDown m-8">
              Akshat Mishra
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fadeInUp">
              <TypeAnimation
                sequence={[
                  "Passionate full-stack developer.",
                  1500,
                  "Crafting innovative solutions in GoLang,Nodejs.",
                  1500,
                  "Open-source enthusiast building the future.",
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />{" "}
            </p>
          </div>
          <div className="mt-8 space-x-4 animate-bounce">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Contact
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="z-[-10] w-[24vw] h-[49vh] bg-[aqua] bottom-0 right-0 absolute rounded-[8rem] rounded-bl-[0rem] rounded-br-[0rem] rounded-tl-[30rem] md:flex hidden"></div>
    </section>
  );
};

export default LandingPage;
