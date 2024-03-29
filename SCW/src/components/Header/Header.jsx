import "../../css/Header.css";
import React from "react";
function Header(){



    return (
        <>  
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet"></link>
            <header>

                <div className="LogoWrapper">
                    <img src="../../public/logos/LOGO2.svg" alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li style={{"--i":".1s"}}><a href="#">About US</a></li>
                        <li style={{"--i":".2s"}}><a href="#">Services</a></li>
                        <li style={{"--i":".3s"}}><a href="#">Pricing</a></li>
                        <li style={{"--i":".4s"}}><a href="#">Contanct Us</a></li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={({target})=> {target.closest(".hamburger").classList.toggle("active")}}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </header>
        </>
    );
}

export default Header;