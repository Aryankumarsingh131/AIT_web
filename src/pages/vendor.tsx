import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";  // Import Link from Next.js

interface Vendor {
  src: string;
  alt: string;
  name: string;
  link: string;  // Add a link property for each vendor
}

const vendors: Vendor[] = [
  { src: "/baliandson.png", alt: "Bali AND Son", name: "Bali AND Son", link: "/vendors/bali-and-son" },
  { src: "/xerox.png", alt: "Xerox Shop", name: "Xerox Shop", link: "/vendors/xerox-shop" },
  { src: "/tailor.jpg", alt: "Tailor Shop", name: "Tailor Shop", link: "/vendors/tailor-shop" },
];

export default function Vendor() {
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
              Vendor
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Vendors
            </Typography>
          </Box>

          {/* Vendor grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {vendors.map((vendor, index) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Link href={vendor.link}>
                  <Card className="p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <img
                      src={vendor.src}
                      alt={vendor.alt}
                      className="w-full h-auto rounded"
                    />
                    <Typography variant="body1" className="mt-2 text-gray-800">
                      {vendor.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* Light blue box underneath */}
          <Box className="bg-blue-100 p-6 mt-8 rounded-lg">
            <Typography variant="h5" className="text-blue-700">
              More information about vendors can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the vendor grid for additional content.
            </Typography>
          </Box>

        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
