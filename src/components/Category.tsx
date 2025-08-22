import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import Link from 'next/link';

type Category = {
    name: string;
    img: string;
    slug: string; // Add a slug for routing
};

const categories: Category[] = [
    { name: "Men's fashion", img: "https://placehold.co/100x100?text=Men's+fashion", slug: "/categories/mens-fashion" },
    { name: "Home Improvement", img: "https://placehold.co/100x100?text=Home+Improvement", slug: "/categories/home-improvement" },
    { name: "Outdoor Fun", img: "https://placehold.co/100x100?text=Outdoor+Fun", slug: "/categories/outdoor-fun" },
    { name: "Women's fashion", img: "https://placehold.co/100x100?text=Women's+fashion", slug: "/categories/womens-fashion" },
    { name: "ebook", img: "https://placehold.co/100x100?text=ebook", slug: "/categories/ebook" },
    { name: "Jewelry & Watches", img: "https://placehold.co/100x100?text=Jewelry+%26+Watches", slug: "/categories/jewelry-watches" },
    { name: "Toys, Kids & Babies", img: "https://placehold.co/100x100?text=Toys,+Kids+%26+Babies", slug: "/categories/toys-kids-babies" },
    { name: "Beauty, Health & Hair", img: "https://placehold.co/100x100?text=Beauty,+Health+%26+Hair", slug: "/categories/beauty-health-hair" },
    { name: "Mobile Accessories", img: "https://placehold.co/100x100?text=Mobile+Accessories", slug: "/categories/mobile-accessories" },
    { name: "Computer, Office", img: "https://placehold.co/100x100?text=Computer,+Office", slug: "/categories/computer-office" },
];

const Categories: React.FC = () => {
    return (
        <Box className="p-4">
            <Box className="flex justify-between items-center mb-4">
                <Typography variant="h6" className="font-bold">Categories</Typography>
                <Link href="/categories">
                    <Button variant="text" color="primary" endIcon={<i className="fas fa-chevron-right" />}>
                        View All
                    </Button>
                </Link>
            </Box>
            <Box className="flex space-x-4 overflow-x-auto">
                {categories.map((category, index) => (
                    <Link key={index} href={category.slug} passHref>
                        <Box className="flex flex-col items-center min-w-[100px] cursor-pointer">
                            <Box className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-md">
                                <CardMedia
                                    component="img"
                                    image={category.img}
                                    alt={category.name}
                                    className="w-full h-full object-contain"
                                />
                            </Box>
                            <Typography className="text-center text-sm mt-2">{category.name}</Typography>
                        </Box>
                    </Link>
                ))}
            </Box>
        </Box>
    );
};

export default Categories;
