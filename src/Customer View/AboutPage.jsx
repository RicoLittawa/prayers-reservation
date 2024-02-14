import React from "react";
import { Title, SubTitle } from "../Components/ReusableComponents";
import Church1 from "../assets/church1.jpg";
import Church2 from "../assets/church2.jpg";
import Church3 from "../assets/church3.jpg";
import { Typography } from "@material-tailwind/react";

const AboutPage = () => {
  return (
    <div className="mx-5 px-5 py-20 md:px-20">
      <div className="pb-5">
        <Title about={true}>About Us</Title>
        <SubTitle about={true}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          <br />
          and publishing industries for previewing layouts and visual mockups.
        </SubTitle>
      </div>
      <div className="flex justify-center py-10">
        <div>
          <img
            src={Church1}
            className="hidden h-96 w-full rounded-md object-cover object-center md:flex"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-full md:ml-10 md:w-96">
          <Typography variant="h5" className="font-ls-700 text-dark">
            Title one
          </Typography>
          <Typography variant="small" className="font-lb400 text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="w-full md:mr-10 md:w-96">
          <Typography variant="h5" className="font-ls-700 text-dark">
            Title two
          </Typography>
          <Typography variant="small" className="font-lb400 text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div>
          <img
            src={Church2}
            className="hidden h-96 w-full rounded-md object-cover object-center md:flex"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div>
          <img
            src={Church3}
            className="h-96 w-full rounded-md object-cover object-center hidden md:flex"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-full md:ml-10 md:w-96">
          <Typography variant="h5" className="font-ls-700 text-dark">
            Title three
          </Typography>
          <Typography variant="small" className="font-lb400 text-dark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
