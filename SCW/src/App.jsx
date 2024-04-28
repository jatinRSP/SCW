import React from "react";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";
import Service from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Project from "./components/Projects/Projects";
import ContactUS from "./components/ContactUS/ContactUs";
import Wave from "./components/Wave/Wave";
import "../src/css/Wave.css";

function App() {
  const [scroll, setScroll] = React.useState(false);

  // For Hide unhide header on scroll
  React.useEffect(() => {
    let lastScrollTop = 0;
    const changeBackground = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (window.scrollY >= 200 && scrollTop > lastScrollTop) {
        setScroll(false); // Scrolling down
      } else {
        setScroll(true); // Scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []); // Run only once on component mount

  return (
    <>
      <Header isScrolling={scroll} />
      <FrontPage />

      <Wave isfliped={true} />

      <Service />

      <Wave />
      <Wave isfliped={true} />

      <Pricing />

      <Wave />
      <Wave isfliped={true} />

      <Project />

      <Wave />
      <Wave isfliped={true} />

      <ContactUS />

      <Footer />
    </>
  );
}

export default App;
