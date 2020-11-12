import React from "react";
import Rating from "@material-ui/lab/Rating";
import { Typography } from "@material-ui/core";

export default ({ rating }) => {
  if (rating)
    return (
      <>
        <Typography variant="h4">Rating : {rating} </Typography>
        <Rating
          name="half-rating"
          defaultValue={rating}
          precision={0.1}
          size="large"
          readOnly
        />
      </>
    );

  return <Typography variant="h4">Rating: Not Available</Typography>;
};
