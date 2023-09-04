import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Paper,
  Stack,
} from "@mui/material";
import Rating from "@mui/material/Rating";
const MacSlidercard = (props) => {
  return (
    <Card
      sx={{
        height: "100%",
        border: "none",
        boxShadow: "none",
        mr: 1,
        ml: 1,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="330px"
          image={props.image}
          alt="green iguana"
        />
      </CardActionArea>
      <CardContent>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "red",
          }}
        >
          {props.allCardData.sale}
        </Typography>
        <CardActionArea>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
            }}
          >
            {props.allCardData.Mac}
          </Typography>
        </CardActionArea>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          {props.allCardData.RealPrice}
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "400",
          }}
        >
          {props.allCardData.off}
        </Typography>

        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "300",
            textDecoration: "line-through",
          }}
        >
          {props.allCardData.offPrice}
        </Typography>
        <Stack direction="row">
          <Rating
            size="small"
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            sx={{
              color: "#186ADC",
            }}
          />

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            {props.allCardData.rating}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default MacSlidercard;
