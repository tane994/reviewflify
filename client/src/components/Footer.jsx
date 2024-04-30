import React, { useState, useEffect } from 'react';
import { Box, Typography, CssBaseline } from '@mui/material';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <CssBaseline /> 
      {showFooter && (
        <Box
          sx={{
            width: '100%',
            position: 'fixed', 
            left: 0, 
            bottom: 0, 
            bgcolor: 'black', 
            color: 'white', 
            textAlign: 'center',
            p: 2, 
          }}
        >
          <Typography variant="body2" sx={{ m: 0 }}>
            &copy; {new Date().getFullYear()} Tito94. All Rights Reserved.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Footer;
