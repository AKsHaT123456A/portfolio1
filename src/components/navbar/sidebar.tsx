import React, { useEffect, useRef } from "react";
import { BackArrowIcon, ChevronRightIcon } from "../iconpanel/IconPanel";
import Link from "next/link";
import { SidebarProps } from "@/app/types/types";
import { Button } from "../ui/button";
import { ModeToggle } from "../toggler/ModeToggler";

export default function SideBar({ sidebar, clickHandler }: SidebarProps) {
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (sidebarRef.current) {
        clickHandler();
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [sidebar]);
  return (
    <div
      ref={sidebarRef}
      className={`flex h-screen flex-col w-[60%] border-r shrink-0 top-0 right-0 absolute z-10 bg-white dark:bg-gray-800 opacity-1000 md:hidden transition-transform duration-1000 ease-in-out transform ${
        sidebar
          ? "animate-sidebar-show"
          : "animate-sidebar-hide"
      }`}
    >
      {" "}
      <Link className="flex items-center h-14 px-4" href="#">
        <ModeToggle />
      </Link>
      <nav className="flex-1 overflow-y-auto">
        <ul className="grid w-full">
          <li className="h-10 group">
            <Link
              className="flex h-full items-center px-4 text-sm font-medium group dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:.svg:scale-110 hover:bg-gray-100/50 hover:.svg:scale-110"
              href="#"
            >
              Home
              <ChevronRightIcon className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
          <li className="h-10 group">
            <Link
              className="flex h-full items-center px-4 text-sm font-medium group dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:.svg:scale-110 hover:bg-gray-100/50 hover:.svg:scale-110"
              href="#"
            >
              Skills
              <ChevronRightIcon className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
          <li className="h-10 group">
            <Link
              className="flex h-full items-center px-4 text-sm font-medium group dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:.svg:scale-110 hover:bg-gray-100/50 hover:.svg:scale-110"
              href="#"
            >
              Projects
              <ChevronRightIcon className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
          <li className="h-10 group">
            <Link
              className="flex h-full items-center px-4 text-sm font-medium group dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:.svg:scale-110 hover:bg-gray-100/50 hover:.svg:scale-110"
              href="#"
            >
              Testimonials
              <ChevronRightIcon className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
          <li className="h-10 group">
            <Link
              className="flex h-full items-center px-4 text-sm font-medium group dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:.svg:scale-110 hover:bg-gray-100/50 hover:.svg:scale-110"
              href="#"
            >
              Contact
              <ChevronRightIcon className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-all" />
            </Link>
          </li>
          <li className="flex justify-center items-center mt-[50px]">
            <Button
              className="w-[90%]   text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 dark:bg-white"
              size="icon"
              variant="outline"
              onClick={clickHandler}
            >
              <BackArrowIcon className="h-6 w-6 " />
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
