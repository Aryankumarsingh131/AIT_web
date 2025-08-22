// /components/ProductCard.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';

// Define the Product interface to ensure proper typing.
interface Product {
    id: number;
    image: string;
    alt: string;
    name: string;
    price: string;
}

// Define the ProductCard component.
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Box className="text-center relative" sx={{ width: 200 }}>
            <Box className="relative">
                <img 
                    src={product.image} 
                    alt={product.alt} 
                    className="mx-auto mb-2" 
                    style={{ width: '100%', borderRadius: '8px' }} // Added border-radius for styling
                />
                <Box className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <Visibility className="text-white text-3xl" />
                </Box>
            </Box>
            <Typography variant="body1" className="text-gray-700 font-semibold">
                {product.name}
            </Typography>
            <Typography variant="h6" className="text-blue-600 font-bold">
                {product.price}
            </Typography>
        </Box>
    );
};

export default ProductCard;
