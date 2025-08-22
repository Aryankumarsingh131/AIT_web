import React, {MouseEvent} from "react";
import { Box,Typography,Container, IconButton, Menu, MenuItem, Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlagIcon from '@mui/icons-material/Flag';
//import { Container } from "postcss";


export default function HeaderTop() {
    // State types: anchorElCurrency and anchorElLanguage are either null or an HTML element
    const [anchorElCurrency, setanchorElCurrency] = React.useState<null | HTMLElement>(null)
    const [anchorElLanguage, setanchorElLanguage] = React.useState<null | HTMLElement>(null)

    //Event handler for currency menu
    const handlerCurrencyMenuClick = (event: MouseEvent<HTMLElement>) => {
        setanchorElCurrency(event.currentTarget);
    };

    const handlerCurrencyMenuClose = () =>{
        setanchorElCurrency(null);
    };

    //Event handler for language menu 
    const handleLanguageMenuClick = (event: MouseEvent<HTMLElement>) => {
        setanchorElLanguage(event.currentTarget);
    };

    const handleLanguageMenuClose = () =>{
        setanchorElLanguage(null);
    };

    return (
        <Box className="bg-white">
            <Container maxWidth="xl">
            <Box className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300">
            {/* Left Section*/}
            <Box className="flex items-center mb-2 md:mb-0">
                <PhoneIcon className="text-blue-500 mr-2" />
                <Typography className=" m-0 font-regular text-base leading-6 tracking-normal text-black">+8801xxxxxxxx</Typography>
            </Box>

            {/* Right Section */}
            <Box className="flex items-center space-x-4">
                {/* Currency Selector */}
                {/*<Box className="flex items-center space-x-1">
                    <Button className="p-0 text-blue-600" aria-controls="currency-menu" aria-haspopup="true" onClick={handlerCurrencyMenuClick} endIcon={<ArrowDropDownIcon />}>
                    USD $

                    </Button>
                    <Menu id="currency-menu" anchorEl={anchorElCurrency} open={Boolean(anchorElCurrency)} onClose={handlerCurrencyMenuClose}>
                        <MenuItem onClick={handlerCurrencyMenuClose}>USD $</MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>EUR € </MenuItem>


                    </Menu>

                </Box>*/}

                {/* Language Selector */}
                <Box className="flex items-center space-x-1">
                    <IconButton onClick={handleLanguageMenuClick}>
                        <FlagIcon fontSize="small" />

                    </IconButton>
                    <Typography className="m-0 font-regular text-base leading-6 tracking-normal text-black">English</Typography>
                    <IconButton onClick={handleLanguageMenuClick}>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <Menu id="language-menu"
                    anchorEl={anchorElLanguage}
                    open={Boolean(anchorElLanguage)}
                    onClose={handleLanguageMenuClose}>

                        <MenuItem onClick={handleLanguageMenuClose}>English</MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>Spanish</MenuItem>

                    </Menu>


                </Box>

                {/* Vendor Button */}
                <Typography className="m-0 font-regular text-base leading-6 tracking-normal text-black">Become A Vendor</Typography>

            </Box>

        </Box>
              
            </Container>

        </Box>
    );
}

