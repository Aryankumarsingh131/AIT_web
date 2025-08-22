// src/camera.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface Camera {
  src: string; // Image source
  alt: string; // Image alt text
  name: string; // Name of the camera item
  link: string; // Link to the camera item page
}

const cameras: Camera[] = [ // Example camera items with images
  { src: "/dslr.png", alt: "DSLR Camera", name: "DSLR Camera", link: "/cameras/dslr" },
  { src: "/mirrorless.png", alt: "Mirrorless Camera", name: "Mirrorless Camera", link: "/cameras/mirrorless" },
  { src: "/actioncam.png", alt: "Action Camera", name: "Action Camera", link: "/cameras/actioncam" },
  { src: "/lens.png", alt: "Camera Lens", name: "Camera Lens", link: "/cameras/lens" },
  { src: "/tripod.png", alt: "Tripod", name: "Tripod", link: "/cameras/tripod" },
  { src: "/memorycard.png", alt: "Memory Card", name: "Memory Card", link: "/cameras/memorycard" },
  { src: "/flash.png", alt: "Camera Flash", name: "Camera Flash", link: "/cameras/flash" },
  { src: "/drone.png", alt: "Camera Drone", name: "Camera Drone", link: "/cameras/drone" },
];

export default function Cameras() {
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
              Cameras
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Camera Items
            </Typography>
          </Box>

          {/* Cameras grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {cameras.map((item, index) => ( 
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
              More information about cameras and related items can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the cameras grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
