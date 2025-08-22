// src/gadgets.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface Gadget {
  src: string; // Image source
  alt: string; // Image alt text
  name: string; // Name of the gadget
  link: string; // Link to the gadget page
}

const gadgets: Gadget[] = [ // Example gadgets with images
  { src: "/smartphone.png", alt: "Smartphone", name: "Smartphone", link: "/gadgets/smartphone" },
  { src: "/laptop.png", alt: "Laptop", name: "Laptop", link: "/gadgets/laptop" },
  { src: "/smartwatch.png", alt: "Smartwatch", name: "Smartwatch", link: "/gadgets/smartwatch" },
  { src: "/headphones.png", alt: "Headphones", name: "Headphones", link: "/gadgets/headphones" },
  { src: "/tablet.png", alt: "Tablet", name: "Tablet", link: "/gadgets/tablet" },
  { src: "/camera.png", alt: "Camera", name: "Camera", link: "/gadgets/camera" },
  { src: "/drone.png", alt: "Drone", name: "Drone", link: "/gadgets/drone" },
  { src: "/keyboard.png", alt: "Mechanical Keyboard", name: "Mechanical Keyboard", link: "/gadgets/keyboard" },
];

export default function Gadgets() {
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
              Gadgets
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Gadgets
            </Typography>
          </Box>

          {/* Gadgets grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {gadgets.map((item, index) => ( 
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
              More information about gadgets can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the gadgets grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
