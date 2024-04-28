import React, { useEffect } from "react";
import Button from "../Button/Button";
import "../../css/FrontPage.css";
import Wtsp from "../../../public/img/WTSP-100-BLACK.png";

function FrontPage() {
  return (
    <section className="container frontpage" id="frontpage">
      <article className="CenterContent">
        <h1 className="headline">
          India's #1
          <br />
          <div id="container">
            <div id="flip">
              <div>
                <div className="painting-text">Painting Service</div>
              </div>
              <div>
                <div className="painting-text">Painting Product</div>
              </div>
              <div>
                <div className="painting-text">Painting Building</div>
              </div>
            </div>
          </div>
        </h1>
        <p className="subheadline">
          We provide the best painting service in India. We have a team of
          highly skilled painters who are experts in their field. We provide the
          best painting service in India. We have a team of highly skilled
          painters who are experts in their field.
        </p>
        <div className="btns">
          <a href="tel:9426485229"><Button titletext="Call Now" classes="themed-btn btn" /></a>
          <a href="../../../public/315_448D_452D_CyberSec_Project_Report.pdf"><Button titletext="Get Quote" classes="themed-btn btn" /></a>
        </div>
      </article>
      <div className="floating-icon-whatsapp">
        <a
          href="https://api.whatsapp.com/send/?phone=9824304318&text=Hello+Shree+Color+World+team%2C%0A%0ACould+you+please+provide+us+with+details+on+the+scope+of+work%2C+estimated+timeline%2C+pricing+breakdown%2C+and+any+additional+services+you+offer%3F+We%27re+particularly+interested+in+seeing+examples+of+your+previous+projects+to+assess+your+workmanship.%0A%0ALooking+forward+to+your+response.+Thank+you%21&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Wtsp} alt="WTSP" />
        </a>
      </div>
    </section>
  );
}

export default FrontPage;
