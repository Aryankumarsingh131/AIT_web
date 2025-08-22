import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
} from "@mui/material";
import Header from "./Header";
import HeaderTop from "./HeaderTop";
import PromoBanner from "./PromoBanner";

// Define types for the categories
type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Men's fashion", image: "https://placehold.co/100x100?text=Men's+fashion" },
  { name: "Home...", image: "https://placehold.co/100x100?text=Home" },
  { name: "Outdoor Fun ...", image: "https://placehold.co/100x100?text=Outdoor+Fun" },
  { name: "Women's...", image: "https://placehold.co/100x100?text=Women's+fashion" },
  { name: "ebook", image: "https://placehold.co/100x100?text=ebook" },
  { name: "Jewelry &...", image: "https://placehold.co/100x100?text=Jewelry" },
  { name: "Toys, Kids...", image: "https://placehold.co/100x100?text=Toys+Kids" },
  { name: "Beauty, Health...", image: "https://placehold.co/100x100?text=Beauty+Health" },
  { name: "Mobile...", image: "https://placehold.co/100x100?text=Mobile" },
  { name: "Computer,...", image: "https://placehold.co/100x100?text=Computer" },
  { name: "Phones &...", image: "https://placehold.co/100x100?text=Phones" },
  { name: "Home, Pet...", image: "https://placehold.co/100x100?text=Home+Pet" },
  { name: "Bags & Shoes", image: "https://placehold.co/100x100?text=Bags+Shoes" },
];

const CategoryPage: React.FC = () => {
  return (
    <Container className="bg-gray-100" maxWidth="lg">
      <PromoBanner />
      <HeaderTop />
      <Header />

      <Box className="bg-blue-100 p-6 rounded-lg mb-6">
        <Typography variant="h3" className="font-bold text-blue-700">
          CATEGORY
        </Typography>
        <Typography variant="h6" className="text-blue-600">
          Find your favourite categories and products
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Card className="bg-white p-4 rounded-lg shadow-md text-center">
              <CardMedia
                component="img"
                image={category.image}
                alt={category.name}
                className="mx-auto mb-2"
              />
              <Typography className="text-gray-700">{category.name}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryPage;
