import { Typography } from "@material-tailwind/react";
const Title = ({ children, about }) => {
  return (
    <>
      <Typography variant="h2" className={`font-ls700 ${about? "text-dark" :"text-light "}`}>
        {children}
      </Typography>
    </>
  );
};

const SubTitle = ({ children, about }) => {
  return (
    <>
      <Typography
        variant="small"
        className={`font-lb400 lead tracking-wide ${about? "text-dark" :"text-light"}`}
      >
        {children}
      </Typography>
    </>
  );
};

export { Title, SubTitle };
