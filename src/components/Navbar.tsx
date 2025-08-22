import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Badge,
  Divider,
  MenuItem,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";  // Import the right arrow icon
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Navbar: React.FC = () => {
  // State for dropdown and drawer
  const [vendorAnchorEl, setVendorAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Handlers for vendor dropdown
  const handleVendorClick = (event: React.MouseEvent<HTMLElement>) => {
    setVendorAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setVendorAnchorEl(null);
  };

  // Handlers for drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box className="bg-white shadow-md">
      <Container maxWidth={"xl"}>
        <Box className="flex flex-wrap items-center justify-between py-2 bg-white">

          {/* Left Section - Category Dropdown */}
          <Box className="flex items-center bg-blue-700 p-2 w-full md:w-auto">
            <IconButton onClick={toggleDrawer(true)} className="text-white">
              <MenuIcon />
            </IconButton>
            <Typography className="text-white ml-2" onClick={toggleDrawer(true)}>
              Select Category
            </Typography>
            <ChevronRightIcon className="text-white" /> {/* Right-facing arrow added */}

            {/* Drawer for Categories */}
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box className="w-64 p-4">
                <Typography variant="h6" className="text-gray-800">Select Category</Typography>
                <Divider className="my-2" />
                <List>
                  <ListItem component="button" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Category 1" />
                  </ListItem>
                  <ListItem component="button" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Category 2" />
                  </ListItem>
                  <ListItem component="button" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Category 3" />
                  </ListItem>
                  <ListItem component="button" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Category 4" />
                  </ListItem>
                  <ListItem component="button" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Category 5" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>

          {/* Middle Section - Navigation Links */}
          <Box className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0 w-full md:w-auto">
            <Typography component="a" href="" className="text-gray-700">HOME</Typography>
            <Typography component="a" href="#" className="text-gray-700 flex items-center" onClick={handleVendorClick}>
              VENDORS <ExpandMoreIcon className="ml-1" fontSize="small" />
            </Typography>
            <Menu anchorEl={vendorAnchorEl} open={Boolean(vendorAnchorEl)} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Stationary</MenuItem>
              <MenuItem onClick={handleClose}>Xerox Shop</MenuItem>
              <MenuItem onClick={handleClose}>Tailor</MenuItem>
              <Box className="text-blue-600 flex justify-center items-center mt-4">
                <a href="/vendor">View all</a>
              </Box>
            </Menu>
            <Typography component="a" href="https://www.aitpune.com/" className="text-gray-700">
              ABOUT AIT
            </Typography>
          </Box>

          {/* Right Section - Icons and User Actions */}
          <Box className="flex items-center space-x-4 mt-2 md:mt-0 w-full md:w-auto justify-center">
            <Typography component="a" href="#" className="m-0 font-regular text-base leading-6 tracking-normal text-black">LOGIN/REGISTER</Typography>
            <Divider orientation="vertical" flexItem className="border-gray-300" />
            <IconButton className="text-gray-700">
              <SyncAltIcon />
            </IconButton>
            <IconButton className="Text-gray-700">
              <FavoriteIcon />
            </IconButton>
            <Divider orientation="vertical" flexItem className="border-gray-700" />
            <Box className="relative">
              <IconButton className="text-gray-700">
                <Badge badgeContent={0} color="primary">
                  <ShoppingBagIcon />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
