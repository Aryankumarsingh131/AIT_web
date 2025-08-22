// src/EGRTools.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface EGRTool { // Renamed interface for clarity
  src: string;
  alt: string;
  name: string;
  link: string; // Add a link property for each tool
}

const egrTools: EGRTool[] = [ // Changed variable name to lowercase for consistency
  { src: "/baliandson.png", alt: "Bali AND Son", name: "Bali AND Son", link: "/vendors/bali-and-son" },
  { src: "/xerox.png", alt: "Xerox Shop", name: "Xerox Shop", link: "/vendors/xerox-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
];

export default function EGRTools() {
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
              EGR Tools
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Products
            </Typography>
          </Box>

          {/* Vendor grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {egrTools.map((tool, index) => ( // Changed variable name in the map function
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Link href={tool.link}>
                  <Card className="p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <img
                      src={tool.src}
                      alt={tool.alt}
                      className="w-full h-auto rounded"
                    />
                    <Typography variant="body1" className="mt-2 text-gray-800">
                      {tool.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* Light blue box underneath */}
          <Box className="bg-blue-100 p-6 mt-8 rounded-lg">
            <Typography variant="h5" className="text-blue-700">
              More information about tools can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the tool grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
