// /components/SportsItems/SportsItemsSection.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ProductCard from '../ProductCard';

const sportsProduct = {
    id: 3,
    image: "https://placehold.co/100x100",
    alt: "Sports items",
    name: "Sports Items by SE TE BE...",
    price: "₹500.00",
};

const SportsItemsSection: React.FC = () => {
    return (
        <Box className="p-4 bg-white rounded-lg shadow-md mb-6"> {/* Added Box for white background */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" className="font-bold text-gray-800">SPORTS ITEMS</Typography>
                <Link href="/SportsItems" className="text-blue-600">View All</Link>
            </Box>
            <Box className="flex space-x-4 overflow-x-auto mb-6"> {/* Corrected margin */}
                {Array(6).fill(sportsProduct).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </Box>
        </Box>
    );
};

export default SportsItemsSection;
