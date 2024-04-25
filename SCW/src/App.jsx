import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";

import Service from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Project from "./components/Projects/Projects";
import ContactUS from "./components/ContactUS/ContactUs";

function App() {
  return (
    <>
      <Header />
      <FrontPage />
      <Service/>
      <Pricing/>
      <Project/>
      <ContactUS/>
      <Footer />
    </>
  );
}

export default App;
