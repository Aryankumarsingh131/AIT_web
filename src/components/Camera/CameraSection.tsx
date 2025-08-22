// /components/Camera/CameraSection.tsx
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import ProductCard from '../ProductCard';

const cameraProduct = {
    id: 6,
    image: "https://placehold.co/100x100",
    alt: "Camera",
    name: "Camera by SE TE BE...",
    price: "₹15,000.00",
};

const CameraSection: React.FC = () => {
    return (
        <Box className="p-4 bg-white rounded-lg shadow-md mb-6"> {/* Added Box for white background */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" className="font-bold text-gray-800">CAMERA</Typography>
                <Link href="/Camera" className="text-blue-600">View All</Link>
            </Box>
            <Box className="flex space-x-4 overflow-x-auto mb-6"> {/* Corrected mb=6 to mb-6 */}
                {Array(6).fill(cameraProduct).map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </Box>
        </Box>
    );
};

export default CameraSection;
