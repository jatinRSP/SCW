import React, { useState } from 'react';

import "../../css/Pricing.css";

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Pricing() {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 5;
    const totalPages = Math.ceil(15 / cardsPerPage); // Assuming there are 15 cards in total

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const renderCards = () => {
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const cards = Array.from({ length: 15 }, (_, index) => index + 1); // Array representing the cards
    
        return cards.slice(startIndex, endIndex).map(card => (
            <div key={card} className="card">
                <div className="card-image">
                    {/* Placeholder image */}
                    <img src={`https://picsum.photos/200/300`} alt={`Product ${card}`} />
                </div>
                <div className="card-content">
                    <h3 className="product-title">Product {card}</h3>
                    <p className="product-price">₹10.99</p>
                </div>
            </div>
        ));
    };
    
    return (
        <section className='container' id='pricing'>
            {/* Render the cards based on the current page */}
            <div className="card-container">
                {renderCards()}
            </div>

            {/* Pagination */}
            <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    renderItem={(item) => (
                        <PaginationItem
                            component="div"
                            {...item}
                        />
                    )}
                />
            </Stack>
        </section>
    );
}

export default Pricing;