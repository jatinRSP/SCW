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
                        <li><a href="#">About US</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contanct Us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;