import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';

interface Product {
    id: number;
    image: string;
    alt: string;
    name: string;
    price: string;
}

// Generic Product Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Box className="text-center relative" sx={{ width: 200 }}>
            <Box className="relative">
                <img src={product.image} alt={product.alt} className="mx-auto mb-2" style={{ width: '100%' }} />
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

// Main App Component
const App: React.FC = () => {
    const egrProduct: Product = {
        id: 1,
        image: "/20200004 (1).webp",
        alt: "EGR Tools image",
        name: "EGR Tools by SE TE BE..",
        price: "₹2,700.00",
    };

    const notesProduct: Product = {
        id: 2,
        image: "https://placehold.co/100x100",
        alt: "Notes image",
        name: "Notes by FE SE TE BE...",
        price: "₹270.00",
    };

    const sportsProduct: Product = {
        id: 3,
        image: "https://placehold.co/100x100",
        alt: "Sports items",
        name: "Sports Items by SE TE BE...",
        price: "₹500.00",
    };

    const gadgetsProduct: Product = {
        id: 4,
        image: "https://placehold.co/100x100",
        alt: "Gadgets",
        name: "Gadgets by SE TE BE...",
        price: "₹1,500.00",
    };

    const accessoriesProduct: Product = {
        id: 5,
        image: "https://placehold.co/100x100",
        alt: "Accessories",
        name: "Accessories by SE TE BE...",
        price: "₹800.00",
    };

    const cameraProduct: Product = {
        id: 6,
        image: "https://placehold.co/100x100",
        alt: "Camera",
        name: "Camera by SE TE BE...",
        price: "₹15,000.00",
    };

    return (
        <Box className="p-6 bg-white rounded-lg shadow-lg">
            <ProductSection title="EGR TOOLS" product={egrProduct} />
            <ProductSection title="NOTES" product={notesProduct} />
            <ProductSection title="SPORTS ITEMS" product={sportsProduct} />
            <ProductSection title="GADGETS" product={gadgetsProduct} />
            <ProductSection title="ACCESSORIES" product={accessoriesProduct} />
            <ProductSection title="CAMERA" product={cameraProduct} />
        </Box>
    );
};

// Section Component for each product category
const ProductSection: React.FC<{ title: string; product: Product }> = ({ title, product }) => {
    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Typography variant="h5" className="font-bold text-gray-800">
                    {title}
                </Typography>
                <Link href="/EGRTools" className="text-blue-600">
                    View All
                </Link>
            </Box>
            <Box className="flex space-x-4 overflow-x-auto mb-6">
                {Array(6).fill(product).map((prod, index) => (
                    <ProductCard key={index} product={prod} />
                ))}
            </Box>
        </>
    );
};

export default App;
