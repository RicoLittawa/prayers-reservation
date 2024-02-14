import React from "react";
import { Typography } from "@material-tailwind/react";

const Breadcrumb = ({ title, path }) => {
  return (
    <div className="mx-10 mt-5">
      <Typography variant="h3" className="font-ls700 text-dark">
        {title}
      </Typography>
      <Typography variant="small" className="text-gray">
        {path}
      </Typography>
    </div>
  );
};

export default Breadcrumb;
