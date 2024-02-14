import React from "react";
import MainStyleProvider from "./Provider/MainStyleProvider";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CreatePage from "./CreatePage";
import NavigationComponent from "../Components/NavigationComponent";

const Pages = () => {
  return (
    <MainStyleProvider>
      <section className="homepage" id="homepage">
        <header className="bg-transparent">
          <NavigationComponent />
        </header>
        <HomePage />
      </section>
      <section className="bg-light" id="aboutpage">
        <AboutPage />
      </section>
      <section className="bg-dark" id="createpage">
        <CreatePage />
      </section>
    </MainStyleProvider>
  );
};

export default Pages;
