import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { useMediaQuery } from "@mui/material";
const ProductSliderCard = (props) => {
  const mediaQuery = useMediaQuery("(min-width:600px)");
  return (
    <Card
      sx={{
        height: "470px",
        mr: { xs: "7px", sm: "50px" },

        mb: 9,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="400px"
          image={props.image}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        {mediaQuery && (
          <Typography gutterBottom variant="h6">
            {props.title}
          </Typography>
        )}
        {!mediaQuery && (
          <Typography
            gutterBottom
            variant="p"
            sx={{
              fontWeight: "700",
            }}
          >
            {props.title}
          </Typography>
        )}
        <Typography variant="body2" color="text.secondary">
          {props.detail}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductSliderCard;
