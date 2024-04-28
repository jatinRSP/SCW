import React, { useState } from "react";

import "../../css/Pricing.css";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";

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
        image: "1_ROYAL_PLASTIC_PAINT.jpeg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: " Perfect Emulsion Paint",
        price: "₹25 / sq.ft",
        image: "2_PREMIUM_EMULSION.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Apex Paint",
        price: "₹14 / sq.ft",
        image: "3_APEX.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "PU Paint",
        price: "₹400 / sq.ft",
        image: "4_PU.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Melamyne Polish",
        price: "₹100 / sq.ft",
        image: "5_MELAMYNE.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Birla Putty",
        price: "₹8 / sq.ft",
        image: "6_BIRLA.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Oil Paint",
        price: "₹20 / sq.ft",
        image: "7_OIL.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Rustic Texture",
        price: "₹50 / sq.ft",
        image: "8_TEXTURE.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Magnum Paint",
        price: "₹35 / sq.ft",
        image: "9_MAGNUM.jpeg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Zinc Paint",
        price: "₹45 / sq.ft",
        image: "10_ZINC.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Laquer Paint",
        price: "₹35 / sq.ft",
        image: "11_LAQUER.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Metallic Paint",
        price: "₹80 TO 250 / sq.ft",
        image: "12_METALIC.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Epoxy Paint",
        price: "₹38 / sq.ft",
        image: "13_EPOXY.jpg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Distemper Paint",
        price: "₹15 / sq.ft",
        image: "14_DISTEMPER.webp",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },

      {
        name: "Wall Primer",
        price: "₹10 / sq.ft",
        image: "15_WALL_PRIMER.jpeg",
        desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ];

    return cards.slice(startIndex, endIndex).map((card) => (
      <div key={card} className="card">
        <div className="card-image">
          {/* Placeholder image */}
          <img src={`../../../public/Products/${card.image}`} alt={card.name} />
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
