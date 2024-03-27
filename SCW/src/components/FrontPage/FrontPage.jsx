import React from "react";
import Button from "../Button/Button";
import "../../css/FrontPage.css"

function FrontPage(){
    return(
        <section className="frontpage">
            <article className="CenterContent">
                <h1 className="headline">
                    India's #1
                    <br/>
                    <ul>
                        <li style={{"--chr": 16,"--delay":".5s"}}>Painting Service</li>    
                        <li style={{"--chr": 16,"--delay":".2s"}}>Painting Product</li>    
                        <li style={{"--chr": 17,"--delay":".3s"}}>Painting Building</li>    
                    </ul>
                </h1>
                <p className="subheadline">We provide the best painting service in India. We have a team of highly skilled painters who are experts in their field. We provide the best painting service in India. We have a team of highly skilled painters who are experts in their field.</p>
                <div className="btns">
                    <Button titletext="Call Now" classes="themed-btn btn"/>
                    <Button titletext="Get Quote" classes="themed-btn btn"/>
                </div>
            </article>
        </section>
    );
}

export default FrontPage;