import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";
import Service from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import Project from "./components/Projects/Projects";
import ContactUS from "./components/ContactUS/ContactUs";
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

      <div className="waves-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      <Service />
      <Pricing />
      <Project />
      <ContactUS />
      <Footer />
    </>
  );
}

export default App;
