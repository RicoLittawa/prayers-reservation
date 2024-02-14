import React from "react";
import MainStyleContext from "../Context/MainStyleContext";
import FooterComponent from "../../Components/FooterComponent";


const MainStyleProvider = ({ children }) => {
  return (
    <MainStyleContext.Provider value={{}}>
      <main>{children}</main>
      <FooterComponent />
    </MainStyleContext.Provider>
  );
};

export default MainStyleProvider;
