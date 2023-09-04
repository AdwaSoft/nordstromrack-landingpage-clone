import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ColorSelector from "./ColorSelector";
import { useNavigate } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import {
  AddOutlined,
  PlusOneOutlined,
  SportsRugbySharp,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Product = ({ product }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        border: "none",
        borderRadius: "none",
        boxShadow: "none",
        margin: 0,
      }}
    >
      <Box
        position="relative"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: "400px",
            cursor: "pointer",
          }}
          // image={
          //   !isHover
          //     ? process.env.REACT_APP_UPLOAD_URL +
          //       product.attributes.img.data.attributes.url
          //     : process.env.REACT_APP_UPLOAD_URL +
          //       product.attributes.img1.data.attributes.url
          // }
          image={!isHover ? product.image2 : product.image}
          // onClick={() => navigate(`/product/${product.attributes.id}`)}
          // alt={product?.attributes.description}
          onClick={() => navigate(`/product/${product.id}`)}
          alt={product.description}
        />

        {/* ######################################  */}

        <Box width="70%">
          <Box
            display={isHover ? "block" : "none"}
            position="absolute"
            bottom="0"
            left="10px"
            right="10px"
            width="85%"
          >
            <Button
              style={{
                borderRadius: 4,
              }}
              sx={{
                alignSelf: "center",
                justifySelf: "center",
                border: "1.5px solid blue",

                backgroundColor: "white",
                opacity: "0.9",
                m: "0 6px 10px 10px",
                color: "alltextcolor.main",
                "&:hover": {
                  backgroundColor: "alltextcolor.light",
                },
              }}
              size="large"
              fullWidth
              variant="outlined"
              startIcon={<AddOutlined />}
            >
              Quick View
            </Button>
          </Box>
        </Box>

        {/* ############################################# */}
      </Box>

      <CardContent
        sx={{
          height: "auto",
        }}
      >
        {/* <ColorSelector product={product} /> */}
        <Typography
          sx={{
            fontSize: "13px",
            fontWeight: "700",
          }}
        >
          {/* {product?.attributes.title} */}
          {product?.title}
        </Typography>
        <CardActionArea>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            {/* {product?.attributes.description} */}
            {product?.description}
          </Typography>
        </CardActionArea>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "700",
            color: "red",
          }}
        >
          {/* ${product?.attributes.price} */}${product?.price}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "300",
            color: "red",
          }}
        >
          {/* (Up to {product?.attributes.discount} off select Items) */}
          (Up to {product?.discount} off select Items)
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",

            fontWeight: "400",
            textDecoration: "line-through",
          }}
        >
          {/* ${product?.attributes.oldPrice} */}${product?.oldPrice}
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
            {/* ({product?.attributes.rating}) */}({product?.rating.rate})
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Product;
