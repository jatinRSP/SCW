import React, { useState } from "react";

import "../../css/Pricing.css";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import img1 from "../../../public/Products/1_ROYAL_PLASTIC_PAINT.jpeg";
import img2 from "../../../public/Products/2_PREMIUM_EMULSION.jpg";
import img3 from "../../../public/Products/3_APEX.jpg";
import img4 from "../../../public/Products/4_PU.jpg";
import img5 from "../../../public/Products/5_MELAMYNE.jpg";
import img6 from "../../../public/Products/6_BIRLA.jpg";
import img7 from "../../../public/Products/7_OIL.jpg";
import img8 from "../../../public/Products/8_TEXTURE.jpg";
import img9 from "../../../public/Products/9_MAGNUM.jpeg";
import img10 from "../../../public/Products/10_ZINC.jpg";
import img11 from "../../../public/Products/11_LAQUER.jpg";
import img12 from "../../../public/Products/12_METALIC.jpg";
import img13 from "../../../public/Products/13_EPOXY.jpg";
import img14 from "../../../public/Products/14_DISTEMPER.webp";
import img15 from "../../../public/Products/15_WALL_PRIMER.jpeg";

function Pricing() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(15 / cardsPerPage); // Assuming there are 15 cards in total

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    // Take reference from public/products folder

    const cards = [
      {
        name: " Royal Plastic Paint",
        price: "₹32 / sq.ft",
        image: img1,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: " Perfect Emulsion Paint",
        price: "₹25 / sq.ft",
        image: img2,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Apex Paint",
        price: "₹14 / sq.ft",
        image: img3,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "PU Paint",
        price: "₹400 / sq.ft",
        image: img4,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Melamyne Polish",
        price: "₹100 / sq.ft",
        image: img5,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Birla Putty",
        price: "₹8 / sq.ft",
        image: img6,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Oil Paint",
        price: "₹20 / sq.ft",
        image: img7,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Rustic Texture",
        price: "₹50 / sq.ft",
        image: img8,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Magnum Paint",
        price: "₹35 / sq.ft",
        image: img9,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Zinc Paint",
        price: "₹45 / sq.ft",
        image: img10,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Laquer Paint",
        price: "₹35 / sq.ft",
        image: img11,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Metallic Paint",
        price: "₹80 TO 250 / sq.ft",
        image: img12,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Epoxy Paint",
        price: "₹38 / sq.ft",
        image: img13,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Distemper Paint",
        price: "₹15 / sq.ft",
        image: img14,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Wall Primer",
        price: "₹10 / sq.ft",
        image: img15,
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ];

    return cards.slice(startIndex, endIndex).map((card) => (
      <div key={card} className="card">
        <div className="card-image">
          {/* Placeholder image */}
          <img src={card.image} alt={card.name} />
        </div>
        <div className="card-content">
          <h3 className="product-title">{card.name}</h3>
          <p className="product-desc">{card.desc}</p>
        </div>
        <div className="card-footer">
          <span className="product-price">{card.price}</span>
        </div>
      </div>
    ));
  };

  return (
    <section className="container" id="pricing">
      {/* Render the cards based on the current page */}
      <div className="card-container">{renderCards()}</div>

      {/* Pagination */}
      <Stack
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => <PaginationItem component="div" {...item} />}
        />
      </Stack>
    </section>
  );
}

export default Pricing;
