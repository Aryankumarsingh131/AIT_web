// src/accessories.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface Accessory {
  src: string; // Image source
  alt: string; // Image alt text
  name: string; // Name of the accessory
  link: string; // Link to the accessory page
}

const accessories: Accessory[] = [ // Example accessories with images
  { src: "/watch.png", alt: "Watch", name: "Watch", link: "/accessories/watch" },
  { src: "/belt.png", alt: "Belt", name: "Belt", link: "/accessories/belt" },
  { src: "/sunglasses.png", alt: "Sunglasses", name: "Sunglasses", link: "/accessories/sunglasses" },
  { src: "/hat.png", alt: "Hat", name: "Hat", link: "/accessories/hat" },
  { src: "/wallet.png", alt: "Wallet", name: "Wallet", link: "/accessories/wallet" },
  { src: "/scarf.png", alt: "Scarf", name: "Scarf", link: "/accessories/scarf" },
  { src: "/bag.png", alt: "Bag", name: "Bag", link: "/accessories/bag" },
  { src: "/earrings.png", alt: "Earrings", name: "Earrings", link: "/accessories/earrings" },
];

export default function Accessories() {
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
              Accessories
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Accessories
            </Typography>
          </Box>

          {/* Accessories grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {accessories.map((item, index) => ( 
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
              More information about accessories can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the accessories grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
