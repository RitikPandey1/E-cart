import React, { useState } from "react";
import {
  Container,
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

function Review({ onClose, modal }) {
  const [value, setValue] = useState(2);

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={modal.open}
    >
      <DialogTitle>Add your review:{modal.id}</DialogTitle>
      <DialogContent>
        <Box component="fieldset" mb={2} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            precision={1}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
        </Box>

        <TextField variant="outlined" label="Review" placeholder="Review" />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary">
          cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Review;
