import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CardActions,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const MovieListSection = ({
  movieReviewList,
  deleteReview,
  updateReview,
  setUpdatedReview,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      {movieReviewList.map((elem, index) => (
        <Card sx={{ width: 600, mt: 2, mb: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontFamily: "Bodoni" }}
            >
              {elem.movieName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Baskerville",
                fontStyle: "italic",
                fontColor: "black",
              }}
              variant="body2"
              color="text.secondary"
            >
              "{elem.movieReview}"
            </Typography>
          </CardContent>
          <CardActions
            sx={{ justifyContent: "space-between", padding: "0.5rem" }}
          >
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={() => deleteReview(elem.movieName)}
              sx={{
                margin: "0.5rem",
                "&:hover": {
                  backgroundColor: "darken(error.main, 0.1)",
                },
              }}
            >
              Delete
            </Button>
            <TextField
              size="small"
              type="text"
              id={`updateInput-${index}`}
              label="Update Review..."
              variant="outlined"
              onChange={(e) =>
                setUpdatedReview({
                  ...movieReviewList[index],
                  movieReview: e.target.value,
                })
              }
              sx={{ flexGrow: 1, mx: 1 }}
            />
            <Button
              color="success"
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => updateReview(elem.movieName)}
              sx={{
                margin: "0.5rem",
                "&:hover": {
                  backgroundColor: "darken(success.main, 0.1)",
                },
              }}
            >
              Update
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default MovieListSection;
