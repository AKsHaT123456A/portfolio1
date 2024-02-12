import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuIcon } from "../iconpanel/IconPanel";
import { ModeToggle } from "../toggler/ModeToggler";
import { useState } from "react";
import SideBar from "./sidebar";
export default function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const clickHandler = () => {
    console.log("hi");

    setSidebar(!sidebar);
  };
  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-gray-800 shadow-md px-4 lg:px-6 ">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a
              className="text-gray-800 dark:text-white text-2xl font-bold md:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Portfolio
            </a>
          </div>
          <div className="flex md:hidden">
            <Button
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              size="icon"
              variant="outline"
              onClick={clickHandler}
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {sidebar && <SideBar sidebar={sidebar} clickHandler={clickHandler} />}
        <nav className="hidden md:flex  items-center space-x-10">
          <ModeToggle />
          <Link
            className="text-xl font-semibold text-gray-800 dark:text-gray-300 hover:text-gray-700 hover:font-bold dark:hover:text-gray-500"
            href="#"
          >
            Home
          </Link>
          <Link
            className=" text-xl font-semibold text-gray-800 dark:text-gray-300 hover:text-gray-700 hover:font-bold dark:hover:text-gray-500"
            href="#"
          >
            Skills
          </Link>
          <Link
            className="text-xl font-semibold text-gray-800 dark:text-gray-300 hover:text-gray-700 hover:font-bold dark:hover:text-gray-500"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="text-xl font-semibold text-gray-800 dark:text-gray-300 hover:text-gray-700 hover:font-bold dark:hover:text-gray-500"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
