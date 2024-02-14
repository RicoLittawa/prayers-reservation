import React from "react";
import {
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";

const NavigationComponent = () => {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navList = (
    <ul className="flex-wrap items-center gap-y-2 md:flex md:gap-x-8">
      <li className="group px-6 text-dark transition-all duration-300 ease-in-out">
        <a href="#homepage">
          <Typography
            variant="h5"
            className="from-light to-light font-ls700 transition-all duration-500 ease-out hover:text-orange md:bg-gradient-to-r md:bg-[length:0%_3px] md:bg-left-bottom md:bg-no-repeat md:hover:text-dark md:group-hover:bg-[length:100%_3px]"
          >
            HOME
          </Typography>
        </a>
      </li>
      <li className="group px-6 text-dark transition-all duration-300 ease-in-out">
        <a href="#aboutpage">
          <Typography
            variant="h5"
            className="from-light to-light font-ls700 transition-all duration-500 ease-out hover:text-orange md:bg-gradient-to-r md:bg-[length:0%_3px] md:bg-left-bottom md:bg-no-repeat md:hover:text-dark md:group-hover:bg-[length:100%_3px]"
          >
            ABOUT
          </Typography>
        </a>
      </li>
      <li className="group px-6 text-dark transition-all duration-300 ease-in-out md:hidden">
        <a href="#createpage">
          <Typography
            variant="h5"
            className="from-light to-light font-ls700 transition-all duration-500 ease-out hover:text-orange md:bg-gradient-to-r md:bg-[length:0%_3px] md:bg-left-bottom md:bg-no-repeat md:group-hover:bg-[length:100%_3px]"
          >
            CREATE RESERVATION
          </Typography>
        </a>
      </li>
    </ul>
  );
  return (
    <nav className="flex flex-wrap justify-between p-5 py-7 md:px-20">
      <div className="hidden md:flex">{navList}</div>
      <Button className="hidden rounded-full bg-orange px-10 font-ls700 normal-case tracking-wide text-light md:flex">
       <a href="#createpage">Create Reservation</a>
      </Button>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>

      <Collapse open={openNav}>{navList}</Collapse>
    </nav>
  );
};

export default NavigationComponent;
