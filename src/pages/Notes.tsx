// src/Notes.tsx
import Layout from "@/components/Layout";
import { Box, Card, Container, Grid, Typography } from "@mui/material";
import Link from "next/link"; // Import Link from Next.js

interface Note { 
  src: string; // Image source
  alt: string; // Image alt text
  name: string; // Name of the note (or the content)
  link: string; // Link to the note
}

const notes: Note[] = [ // Example notes with images
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

export default function Notes() {
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
              Notes
            </Typography>
            <Typography
              variant="h3"
              className="text-xl text-gray-600 mt-2 text-left"
            >
              All Available Notes
            </Typography>
          </Box>

          {/* Notes grid section */}
          <Grid container spacing={3} justifyContent="flex-start">
            {notes.map((note, index) => ( 
              <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                <Link href={note.link}>
                  <Card className="p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <img
                      src={note.src}
                      alt={note.alt}
                      className="w-full h-auto rounded"
                    />
                    <Typography variant="body1" className="mt-2 text-gray-800">
                      {note.name}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>

          {/* Light blue box underneath */}
          <Box className="bg-blue-100 p-6 mt-8 rounded-lg">
            <Typography variant="h5" className="text-blue-700">
              More information about notes can be displayed here.
            </Typography>
            <Typography variant="body1" className="text-blue-600 mt-2">
              This is a light blue box placed under the notes grid for additional content.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Footer spacing */}
      <Box className="mb-12"></Box>
    </Layout>
  );
}
