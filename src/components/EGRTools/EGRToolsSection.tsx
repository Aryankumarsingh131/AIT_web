// /components/EGRTools/EGRToolsSection.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ProductCard from '../ProductCard';

const egrProduct = {
    id: 1,
    image: "/20200004 (1).webp",
    alt: "EGR Tools image",
    name: "EGR Tools by SE TE BE...",
    price: "₹2,700.00",
};

const EGRToolsSection: React.FC = () => {
    return (
        <Box className="p-4 bg-white rounded-lg shadow-md mb-6"> {/* Added Box for white background */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" className="font-bold text-gray-800">EGR TOOLS</Typography>
                <Link href="/EGRTools" className="text-blue-600">View All</Link>
            </Box>
            <Box className="flex space-x-4 overflow-x-auto mb-6"> {/* Corrected mb=6 to mb-6 */}
                {Array(6).fill(egrProduct).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </Box>
        </Box>
    );
};

export default EGRToolsSection;
