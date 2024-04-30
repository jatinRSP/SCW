import React from "react";
import "../../css/Services.css";
import img1 from "../../../public/Services/Interior.jpg";
import img2 from "../../../public/Services/Exterior.jpg";
import img3 from "../../../public/Services/Commercial.jpg";
import img4 from "../../../public/Services/Designer.jpg";

function Services() {
  return (
    <section className="container" id="services">
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div
                className="ag-courses-item_bg"
                style={{ "--service-card-color": "orange" }}
              ></div>

              <div className="ag-courses-item_title">Interior Painting</div>
              <div className="img-container">
                <img src={img1} alt="painting" />
              </div>
            </a>
          </div>

          <div
            className="ag-courses_item"
            style={{ "--service-card-color": "magenta" }}
          >
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Exterior Painting</div>
              <div className="img-container">
                <img src={img2} alt="painting" />
              </div>
            </a>
          </div>

          <div
            className="ag-courses_item"
            style={{ "--service-card-color": "purple" }}
          >
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Commercial Painting</div>
              <div className="img-container">
                <img src={img3} alt="painting" />
              </div>
            </a>
          </div>

          <div
            className="ag-courses_item"
            style={{ "--service-card-color": "magenta" }}
          >
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Designer Wall</div>
              <div className="img-container">
                <img src={img4} alt="painting" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
