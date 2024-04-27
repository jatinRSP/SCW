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
              <div className='desc'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "magenta" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Exterior Painting
              </div>
              <div className='desc'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>

            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "purple" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Commorcial Painting
              </div>
              <div className='desc'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </a>
          </div>

          <div className="ag-courses_item" style={{ "--service-card-color": "limegreen" }}>
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">
                Designer Wall
              </div>
              <div className='desc'>
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
