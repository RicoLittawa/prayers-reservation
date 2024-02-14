import React from "react";
import { Button, Typography } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <div className="mx-5 h-full px-5 md:px-20">
      <div className="text-wrap py-20 md:py-36">
        <Typography variant="h1" className="font-ls900 text-dark">
          Love <span className="border-b-8 border-orange text-dark">God</span>,
          love doing good
        </Typography>
        <Typography variant="h5" className="pt-5 font-ls600 text-dark">
          Welcome to the Sample Church.
        </Typography>
        <div className="pt-5 drop-shadow-xl">
          <Button className=" bg-orange normal-case text-light" size="md">
            <a href="#aboutpage">
              <Typography variant="small" className="flex font-lb400">
                Learn more
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 pl-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </Typography>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
