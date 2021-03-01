import React, { useState } from "react";
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
import LoadingButton from "../LoadingButton";
import axios from "axios";

function Review({ onClose, review, setReview, token }) {
  const [loading, setLoading] = useState(false);

  const submitReview = async () => {
    setLoading(true);
    const { data } = await axios.post(
      "/api/v1/ecartproducts/add/review",
      {
        ...review,
      },
      { headers: { authorization: `Bearer ${token}` } }
    );
    console.log(data);
    setLoading(false);
    setReview({ open: false });
  };

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={review.open}>
      <DialogTitle>Add your review</DialogTitle>
      <DialogContent>
        <Box component="fieldset" mb={2} borderColor="transparent">
          <Typography component="legend">
            Rating {review.rating === 0 ? null : review.rating}
          </Typography>
          <Rating
            name="product-rating"
            value={review.rating || 0}
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
        {loading ? (
          <LoadingButton text="submit" />
        ) : (
          <>
            <Button variant="contained" color="primary" onClick={submitReview}>
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={onClose}>
              cancel
            </Button>{" "}
          </>
        )}
      </DialogActions>
    </Dialog>
  );
}

export default Review;
