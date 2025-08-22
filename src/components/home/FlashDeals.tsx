{/*import React, { useState, useEffect } from "react";
import { Box, Container, Grid, Button, Typography } from "@mui/material";
import { styled } from '@mui/system';

// Custom Scrollbar
const Scrollbar = styled('div')(({ theme }) => ({
    height: '4px',
    backgroundColor: '#3b82f6',
    borderRadius: '2px',
    marginBottom: '1rem',
    '&::-webkit-scrollbar': {
        height: '4px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#3b82f6',
        borderRadius: '2px',
    },
}));

interface CountdownTimerProps {
    targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    }, [targetDate]);

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mb={6}>
            <Box display="flex" gap={2} mb={2}>
                {['days', 'hours', 'minutes', 'seconds'].map((unit, index) => (
                    <Box key={index} className="bg-blue-600 text-white p-4 rounded-lg text-center">
                        <Typography variant="h4" fontWeight="bold">
                            {timeLeft[unit] || '0'}
                        </Typography>
                        <Typography variant="body2">{unit.charAt(0).toUpperCase() + unit.slice(1)}</Typography>
                    </Box>
                ))}
            </Box>
            <Scrollbar />
        </Box>
    );
};

interface Product {
    image: string;
    alt: string;
    discount: string;
    rating: number;
    reviews: number;
    name: string;
    originalPrice: string;
    discountedPrice: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Box className="bg-white p-4 rounded-lg shadow-lg relative">
            <Box position="relative">
                <img src={product.image} alt={product.alt} className="w-full rounded-lg" />
                <Box className={`absolute top-2 left-2 ${product.discount ? 'bg-blue-500' : 'bg-red-500'} text-white text-xs font-bold px-2 py-1 rounded`}>
                    {product.discount}
                </Box>
                <Box className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <i className="material-icons text-white text-4xl">visibility</i>
                </Box>
            </Box>
            <Box mt={4}>
                <Box display="flex" alignItems="center">
                    <Box className="text-yellow-500">
                        {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                            <i key={i} className="fas fa-star"></i>
                        ))}
                        {product.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
                    </Box>
                    <Typography variant="body2" color="textSecondary" ml={2}>
                        ({product.reviews})
                    </Typography>
                </Box>
                <Typography variant="h6" color="textPrimary" mt={2}>
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ textDecoration: 'line-through' }}>
                    {product.originalPrice}
                </Typography>
                <Typography variant="h5" color="primary" fontWeight="bold">
                    {product.discountedPrice}
                </Typography>
            </Box>
        </Box>
    );
};

const FlashDeals: React.FC = () => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Countdown for 2 days

    const products: Product[] = [
        {
            image: "https://placehold.co/150x150",
            alt: "Man in a suit",
            discount: "-10%",
            rating: 5,
            reviews: 1,
            name: "Exclusive & Fashionable Suit",
            originalPrice: "$500.00",
            discountedPrice: "$450.00"
        },
        // ... other products
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    };

    return (
        <Container maxWidth="xl">
            <Box className="bg-white p-6 rounded-lg shadow-lg">
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                    <Typography variant="h4" color="primary">
                        FLASH DEAL
                    </Typography>
                    <Button href="#" color="primary">
                        View All <i className="fas fa-chevron-right"></i>
                    </Button>
                </Box>
                <Typography color="primary" mb={4}>
                    Hurry Up! The offer is limited. Grab while it lasts
                </Typography>
                <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                    <CountdownTimer targetDate={targetDate} />
                    <Box position="relative" flex={1} ml={{ md: 4 }} overflow="hidden">
                        <Grid container spacing={2}>
                            {products.slice(currentIndex, currentIndex + 4).map((product, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <ProductCard product={product} />
                                </Grid>
                            ))}
                        </Grid>
                        <Button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                            <i className="fas fa-chevron-left"></i>
                        </Button>
                        <Button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                            <i className="fas fa-chevron-right"></i>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default FlashDeals;*/}
