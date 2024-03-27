import React from "react";
import "../../css/FrontPage.css"

function FrontPage(){
    return(
        <section className="frontpage">
            <article className="CenterContent">
                <h1 className="headline">India's #1<br/>Painting Service</h1>
                <p className="subheadline">We provide the best painting service in India. We have a team of highly skilled painters who are experts in their field. We provide the best painting service in India. We have a team of highly skilled painters who are experts in their field.</p>
                <div className="btns">
                    <button className="themed-btn btn">Call now</button>
                    <button className="themed-btn btn">Get Quote</button>
                </div>
            </article>
        </section>
    );
}

export default FrontPage;