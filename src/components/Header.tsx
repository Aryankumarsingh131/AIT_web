import React from "react";
import { Box, Container ,Button, InputBase, IconButton, Menu, MenuItem, Typography, Link } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import { Container } from "postcss";

const Header: React.FC = () => {
    const [anchorEl,setanchorEl] =  React.useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setanchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setanchorEl(null);
    };

    return (
        <Box className="bg-white text-black" >
            <Container maxWidth={"xl"}>
            <Box className="flex flex-col lg:flex-row items-center justify-between py-4">
            {/* Left Section- Logo */}
            <Box className="flex items-center mb-4 lg:mb-0">
                <Box className="flex items-center">
                    <Box className=" bg-blue-600 p-2 rounded">
                        <ShoppingCartIcon className="text-white text-2xl" />
                    </Box>
                    <Typography variant="h4" className="font-bold text-blue-600 ml-2">
                        AOS
                    </Typography>

                </Box>

            </Box>


            {/* Middle Section */}
            <Box className=" flex items-center w-full lg:w-1/2 mb-4 lg:mb-0">
            <Box className="flex border rounded w-full">
                <Button className="flex items-center px-4 border-r max-w-[185px] w-full"
                aria-controls="category-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                endIcon={<ArrowDropDownIcon />}>
                    All Categories
                </Button>
                <Menu 
                id="category-menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}>

                    <MenuItem onClick={handleMenuClose}>Category 1</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Category 2</MenuItem>
                </Menu>
                <InputBase
                placeholder="Search for items..."
                className="w-full px-4 py-2 outline-none" />

                <IconButton type="submit" className="bg-blue-600 text-white px-4 rounded-none">
                    <SearchIcon />
                </IconButton>

            </Box>
            </Box>


            {/* Right Section- Important Instruction */}
            <Button className="bg-blue-600 text-white px-6 py-2 rounded text-center">
    <Typography variant="body1" className="font-bold">
        Website still under development
    </Typography>
    <Typography variant="body2">
        <Link href="/LostandFound" underline="none" color="inherit">Lost And Found</Link>
    </Typography>
</Button>


        </Box>
            </Container>
        </Box>
    );
};

export default Header;