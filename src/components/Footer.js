import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box mt="80px" bgcolor="#01010f" >
   
    <Typography variant="h5" className='gradient' sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with <span className='gradient'>❤️</span> by Tech Girl</Typography>
  </Box>
);

export default Footer;
