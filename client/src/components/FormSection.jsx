import React from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';

const FormSection = ({ submitReview, movieName, setMovieName, review, setReview}) => {
  return (
    <Box
      component="form"
      sx={{
        maxWidth: 580, // use maxWidth for better responsiveness
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
        boxShadow: 3,
        borderRadius: 2,
        mx: 'auto', // sets left and right margins to auto, centering the element
        mt: 10, // optional: sets top and bottom margins
        p: 2,
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitReview}
    >
      <Typography variant="h4" sx={{ fontFamily: 'Roboto', mt: 1, mb: 2 }}>
        POST A RATING:
      </Typography>
      <TextField
        className="text-field"
        label="Movie Name"
        variant="outlined"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        sx={{ width: '100%', mt: 1, mb: 1, fontFamily: 'Roboto' }}
        required
      />
      <TextField
        className="text-field"
        label="Your Review"
        variant="outlined"
        multiline
        rows={4}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        sx={{ width: '100%', mt: 1, mb: 1, fontFamily: 'Baskerville' }}
        required
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, width: '100%' }}>
        Submit Review
      </Button>
    </Box>
  );
};

export default FormSection;
