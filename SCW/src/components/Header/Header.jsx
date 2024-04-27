import "../../css/Header.css";
import React from "react";
import Logo from "../../../public/logos/LOGO2.svg";

function Header({ isScrolling }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap"
        rel="stylesheet"
      ></link>
      <header className={isScrolling && "isscrolling"}>
        <div className="LogoWrapper">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li style={{ "--i": ".1s" }}>
              <a href="#frontpage">Home</a>
            </li>
            <li style={{ "--i": ".2s" }}>
              <a href="#services">Services</a>
            </li>
            <li style={{ "--i": ".3s" }}>
              <a href="#pricing">Pricing</a>
            </li>
            <li style={{ "--i": ".4s" }}>
              <a href="#projects">Projects</a>
            </li>
            <li style={{ "--i": ".5s" }}>
              <a href="#contactus">Contanct Us</a>
            </li>
          </ul>
        </nav>
        <div
          className="hamburger"
          onClick={({ target }) => {
            target.closest(".hamburger").classList.toggle("active");
          }}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
