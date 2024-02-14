import React from "react";
import { Typography } from "@material-tailwind/react";

const FooterComponent = () => {
  return (
    <footer className="bg-light">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t px-5 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-lb400 text-dark">
          &copy; 2023 Sample Church
        </Typography>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-lb400 transition-colors hover:text-blue-500 focus:text-blue-500 text-dark"
            >
              Facebook
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-lb400 transition-colors hover:text-blue-500 focus:text-blue-500 text-dark"
            >
              Gmail
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-lb400 transition-colors hover:text-blue-500 focus:text-blue-500 text-dark"
            >
              Twitter
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
