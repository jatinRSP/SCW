import React from 'react'
import '../../css/Services.css'

function Services() {
  return (
    <section className='container' id='services'>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg" style={{ "--service-card-color": "orange" }}></div>

              <div className="ag-courses-item_title">
                Interior Painting
              </div>
              <div className='img-container'>
                <img src="https://picsum.photos/200/300" alt="painting" />
              </div>

            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "magenta" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Exterior Painting
              </div>
              <div className='img-container'>
                <img src="https://picsum.photos/200/300" alt="painting" />
              </div>

            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "purple" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Commorcial Painting
              </div>
              <div className='img-container'>
                <img src="https://picsum.photos/200/300" alt="painting" />
              </div>
            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "limegreen" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Designer Wall
              </div>
              <div className='img-container'>
                <img src="https://picsum.photos/200/300" alt="painting" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
