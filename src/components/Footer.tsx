import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box className="footer bg-gray-800 text-gray-300 p-6">
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className="font-semibold mb-2">
                        Army Institute of Technology
                    </Typography>
                    <Box className="flex items-center mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span>Contact Us</span>
                    </Box>
                    <Box className="flex items-center mb-2">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <span>Dighi Hills, Pune-411015</span>
                    </Box>
                    <Box className="flex items-center mb-2">
                        <i className="fas fa-phone mr-2"></i>
                        <span>7249250184 / 7249250185</span>
                    </Box>
                    <Box className="flex items-center mb-2">
                        <i className="fas fa-envelope mr-2"></i>
                        <span>ait@aitpune.edu.in</span>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className="font-semibold mb-2">
                        Departments
                    </Typography>
                    <ul className="list-none p-0">
                        {['APPLIED SCI AND GEN ENGG', 'E & TC', 'COMPUTER ENGG', 'INFORMATION TECHNOLOGY', 'MECHANICAL ENGG', 'AUTOMATION & ROBOTICS ENGG'].map((dept) => (
                            <li key={dept} className="flex justify-between mb-2">
                                {dept} <i className="fas fa-chevron-right"></i>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className="font-semibold mb-2">
                        Useful Links
                    </Typography>
                    <ul className="list-none p-0">
                        {['Home','Vendor Page','Categories'].map((link) => (
                            <li key={link} className="flex justify-between mb-2">
                                {link} <i className="fas fa-chevron-right"></i>
                            </li>
                        ))}
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" className="font-semibold mb-2">
                        Follow Us
                    </Typography>
                    <Box className="flex mb-4">
                        {['facebook', 'linkedin', 'youtube', 'twitter', 'instagram'].map((platform) => (
                            <Link key={platform} href="#" className="text-gray-300 hover:text-blue-500 mr-2">
                                <i className={`fab fa-${platform}`}></i>
                            </Link>
                        ))}
                    </Box>
                    <Box className="text-center">
                        <video controls className="w-full max-w-xs">
                            <source src="/AIT Movie.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="mt-2 border-b border-gray-600 pb-1">AIT MOVIE</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
