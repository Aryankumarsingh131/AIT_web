import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  Container,
  CardMedia,
  ListItemText,
  IconButton,
  Collapse,
  List,
  ListItem,
  Drawer,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

type Coupon = {
  title: string;
  store: string;
  code: string;
  icon: string;
};

type Category = {
  name: string;
  subcategories?: { name: string; link: string }[];
  link: string;
};

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Hero: React.FC = () => {
  const coupons: Coupon[] = [
    { title: "Free delivery", store: "TECH SHOP", code: "l2oDTjKF3z", icon: "fas fa-truck" },
    { title: "Meet at Gazibo", store: "AOS", code: "rtzxx8n8lr", icon: "fas fa-dollar-sign" },
    { title: "OR Meet at FC", store: "TECH STORE", code: "rFhfx7XiCm", icon: "fas fa-dollar-sign" },
  ];

  const categories: Category[] = [
    { name: "EGR Tools", link: "/#", subcategories: [
        { name: "Roller", link: "/EGRTools" },
        { name: "Drafter", link: "/EGRTools" },
        { name: "Sketchbook", link: "/EGRTools" },
        { name: "Tools", link: "/EGRTools" },
        { name: "Other", link: "/EGRTools" }
      ]
    },
    { name: "Notes", link: "/#", subcategories: [
        { name: "HandWritten", link: "/Notes" },
        { name: "Decode", link: "/Notes" },
        { name: "Other", link: "/Notes" }
      ]
    },
    { name: "Books", link: "/#", subcategories: [
        { name: "Fiction", link: "/Books" },
        { name: "Non-Fiction", link: "/Books" },
        { name: "Competitive", link: "/Books" },
        { name: "College-Related", link: "/Books" },
        { name: "Other", link: "/Books" }
      ]
    },
    { name: "Sports Items", link: "/#", subcategories: [
        { name: "Cricket", link: "/SportsItems" },
        { name: "Football", link: "/SportsItems" },
        { name: "Badminton", link: "/SportsItems" },
        { name: "Other", link: "/SportsItems" }
      ]
    },
    { name: "Gadgets", link: "/#", subcategories: [
        { name: "PowerBank", link: "/SportsItems" },
        { name: "Cables", link: "/SportsItems" },
        { name: "Headphones", link: "/SportsItems" },
        { name: "Other", link: "/SportsItems" }
      ]
    },
  ];

  const [open, setOpen] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer state for mobile

  const handleToggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box role="presentation" className="space-y-2">
      <List component="nav">
        {categories.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem component="button" onClick={() => handleToggle(index)} className="flex justify-between items-center">
              <Link href={item.link} color="inherit" underline="none">
                <ListItemText primary={item.name} />
              </Link>
              {item.subcategories ? (
                <IconButton>
                  {open === index ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
              ) : (
                <i className="fas fa-chevron-right"></i>
              )}
            </ListItem>
            {item.subcategories && (
              <Collapse in={open === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subcategories.map((sub, subIndex) => (
                    <ListItem key={subIndex} className="pl-10">
                      <Link href={sub.link} color="inherit" underline="none">
                        <ListItemText primary={sub.name} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box className="bg-white text-black" mt={10}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Hamburger Icon for Mobile View */}
          <Grid item xs={12} md={3} className="md:hidden">
            <IconButton onClick={() => toggleDrawer(true)} className="text-black focus:outline-none">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
              {drawerList}
            </Drawer>
          </Grid>

          {/* Categories and Sidebar for Desktop View */}
          <Grid item xs={12} md={3} className="hidden md:block">
            <Box>{drawerList}</Box>
          </Grid>

          {/* Carousel and Content */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {/* Carousel */}
              <Grid item xs={12}>
                <Carousel
                  responsive={responsive}
                  showDots
                  autoPlay={true}
                  autoPlaySpeed={5000}
                  infinite={true}
                >
                  <Card>
                    <CardMedia
                      component="img"
                      image="/AIT-Entrance.png"
                      alt="Instruction from Academic Block"
                      style={{ height: "400px", objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </Card>
                  <Card>
                    <CardMedia
                      component="img"
                      image="/Bird-View-AIT.png"
                      alt="Instruction from Academic Block"
                      style={{ height: "400px", objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </Card>
                  <Card>
                    <CardMedia
                      component="img"
                      image="/withmilkhasingh1.jpg"
                      alt="Instruction from Academic Block"
                      style={{ height: "400px", objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </Card>
                </Carousel>
              </Grid>
            </Grid>

            {/* Additional Images Section */}
            <Grid container spacing={2} className="mt-4">
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="150"
                    image="/FDP DEC 19.png"
                    alt="Exclusive for BE"
                    className="rounded-lg"
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    height="150"
                    image="/FDP-2 July 22 (1).jpg"
                    alt="Exclusive for Teachers"
                    className="rounded-lg"
                  />
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
