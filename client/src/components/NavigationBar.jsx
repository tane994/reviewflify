import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const NavigationBar = () => {
  return (
    <AppBar component="nav">
    <Toolbar>
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, align: 'left' }}
      >
        <LocalMoviesIcon sx={{ marginRight: '4px', verticalAlign: 'middle', height: '50px' }} />
        Reviewflify
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default NavigationBar