import React from "react";
import "../../css/Services.css";
import { alignProperty } from "@mui/material/styles/cssUtils";

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
              <div className="desc">
                Interior painting involves painting the walls, ceilings, and
                other interior surfaces of a building. This service can include
                preparation work such as filling holes, sanding, and priming
                surfaces before applying paint. Interior painting can transform
                the look and feel of a space, making it brighter, more modern,
                or more personalized according to the client's preferences.
                Professional interior painters ensure smooth, even application
                of paint and use high-quality materials to achieve long-lasting
                results. Whether refreshing the existing color scheme or
                completely changing the look of a room, interior painting can
                enhance the aesthetics and value of a property.
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
              <div className="desc">
                Exterior painting involves painting the exterior surfaces of a
                building, such as walls, trim, doors, and other architectural
                elements. This service is essential for maintaining the
                appearance and protecting the exterior of a property from
                weather damage, UV rays, moisture, and other environmental
                factors. Professional exterior painters typically start by
                preparing the surfaces, which may involve pressure washing,
                scraping old paint, repairing damaged areas, and applying
                primer. They then apply high-quality exterior paint that is
                durable and weather-resistant, ensuring a beautiful and
                long-lasting finish. Exterior paint work not only enhances the
                curb appeal of a property but also helps to preserve its
                structural integrity and value.
              </div>
            </a>
          </div>

          <div
            className="ag-courses_item"
            style={{ "--service-card-color": "purple" }}
          >
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Commorcial Painting</div>
              <div className="desc">
                Commercial paint work involves painting various types of
                commercial properties, including offices, retail stores,
                restaurants, warehouses, and other business establishments.
                Unlike residential painting, commercial painting projects often
                have specific requirements related to brand identity, corporate
                colors, safety regulations, and scheduling constraints.
                Professional commercial painters have the expertise and
                equipment to handle large-scale projects efficiently, ensuring
                minimal disruption to business operations. They work closely
                with property owners, facility managers, and project managers to
                deliver high-quality results within budget and on schedule.
                Commercial paint work can rejuvenate the appearance of a
                commercial property, create a welcoming atmosphere for customers
                and employees, and enhance the overall brand image.
              </div>
            </a>
          </div>

          <div
            className="ag-courses_item"
            style={{ "--service-card-color": "limegreen" }}
          >
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Designer Wall</div>
              <div className="desc">
                Designer walls are a creative way to add visual interest,
                texture, and personality to interior spaces. This service
                involves applying decorative techniques or materials to one or
                more walls to create a focal point or enhance the ambiance of a
                room. Designer wall treatments can include techniques such as
                faux painting, stenciling, wallpapering, textured finishes,
                murals, or accent walls painted in bold colors or patterns.
                Professional designers and painters collaborate with clients to
                develop customized designs that reflect their style,
                preferences, and the overall theme of the space. Whether
                creating a feature wall in a living room, bedroom, or commercial
                space, designer walls can elevate the design aesthetic and make
                a memorable impression.
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
