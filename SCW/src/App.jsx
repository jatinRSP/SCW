import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";

import Service from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Project from "./components/Projects/Projects";
import ContactUS from "./components/ContactUS/ContactUs";

function App() {
  
  const [scroll, setScroll] = React.useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", changeBackground);


  return (
    <>
      <Header isScrolling={scroll} />
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
