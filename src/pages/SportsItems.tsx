// src/sportsitem.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface SportsItem {
  src: string; // Image source
  alt: string; // Image alt text
  name: string; // Name of the sports item
  link: string; // Link to the sports item page
}

const sportsItems: SportsItem[] = [ // Example sports items with images
  { src: "/football.png", alt: "Football", name: "Football", link: "/sports/football" },
  { src: "/basketball.png", alt: "Basketball", name: "Basketball", link: "/sports/basketball" },
  { src: "/tennis.png", alt: "Tennis Racket", name: "Tennis Racket", link: "/sports/tennis" },
  { src: "/cricket.png", alt: "Cricket Bat", name: "Cricket Bat", link: "/sports/cricket" },
  { src: "/shoes.png", alt: "Sports Shoes", name: "Sports Shoes", link: "/sports/shoes" },
  { src: "/helmet.png", alt: "Helmet", name: "Helmet", link: "/sports/helmet" },
  { src: "/gloves.png", alt: "Gloves", name: "Gloves", link: "/sports/gloves" },
  { src: "/jersey.png", alt: "Sports Jersey", name: "Sports Jersey", link: "/sports/jersey" },
];

export default function SportsItems() {
  return (
    <Layout>
      {/* Thin black line */}
      <Box className="bg-black h-[1px] mb-8"></Box>

      {/* Main white box container */}
      <Box className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <Container maxWidth="xl">
          {/* Heading section */}
          <Box className="mb-8">
            <Typography
              variant="h1"
              className="text-4xl font-bold text-gray-800 text-left"
            >
              Sports Items
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Sports Items
            </Typography>
          </Box>

          {/* Sports items grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {sportsItems.map((item, index) => ( 
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Link href={item.link}>
                  <Card className="p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-auto rounded"
                    />
                    <Typography variant="body1" className="mt-2 text-gray-800">
                      {item.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* Light blue box underneath */}
          <Box className="bg-blue-100 p-6 mt-8 rounded-lg">
            <Typography variant="h5" className="text-blue-700">
              More information about sports items can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the sports items grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
