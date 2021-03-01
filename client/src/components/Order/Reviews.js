import React from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  Button,
  Box,
  Typography,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";


function Review({ onClose, review, setReview }) {
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={review.open}>
      <DialogTitle>Add your review:{review.id}</DialogTitle>
      <DialogContent>
        <Box component="fieldset" mb={2} borderColor="transparent">
          <Typography component="legend">
            Rating {review.rating === 0 ? null : review.rating}
          </Typography>
          <Rating
            name="product-rating"
            value={review.rating}
            precision={0.5}
            onChange={(event, newValue) => {
              setReview({ ...review, rating: newValue });
            }}
          />
        </Box>

        <TextField
          variant="outlined"
          value={review.description}
          onChange={(e) =>
            setReview({ ...review, description: e.target.value })
          }
          multiline
          rows={4}
          label="Review"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary" onClick={onClose}>
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Review;
