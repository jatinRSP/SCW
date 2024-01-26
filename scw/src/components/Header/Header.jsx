import "../../css/Header.css";
import React from "react";
function Header(){
    return (
        <>  
            <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet"></link>
            <header>
                <div className="LogoWrapper">
                    <img src={process.env.PUBLIC_URL+"/logos/SCWLOGO.svg"} alt="Logo" />
                </div>
                <nav>
                    <ul>
                        <li>About US</li>
                        <li>Services</li>
                        <li>Pricing</li>
                        <li>Contanct Us</li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;