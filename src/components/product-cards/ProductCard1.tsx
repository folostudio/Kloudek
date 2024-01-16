import Link from "next/link";
import { FC, Fragment, useCallback, useState } from "react";
import { Add, Favorite, Remove, RemoveRedEye } from "@mui/icons-material";
import { Box, Button, Chip, IconButton, styled } from "@mui/material";
import { useSnackbar } from "notistack";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import LazyImage from "components/LazyImage";
import BazaarCard from "components/BazaarCard";
import { H3, Span } from "components/Typography";
import BazaarRating from "components/BazaarRating";
import { CartItem, useAppContext } from "contexts/AppContext";
import ProductViewDialog from "components/products/ProductViewDialog";
import { FlexBox } from "../flex-box";
import { calculateDiscount, currency } from "lib";

// styled components
const StyledBazaarCard = styled(BazaarCard)({
  height: "100%",
  margin: "auto",
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  flexDirection: "column",
  justifyContent: "space-between",
  transition: "all 250ms ease-in-out",
  "& img": { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } },
});

const ImageWrapper = styled(Box)(({ theme }) => ({
  height:450,
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  [theme.breakpoints.down("sm")]: { display: "block" },
}));

const StyledChip = styled(Chip)({
  zIndex: 1,
  top: "10px",
  left: "10px",
  paddingLeft: 3,
  paddingRight: 3,
  fontWeight: 600,
  fontSize: "10px",
  position: "absolute",
});

const HoverIconWrapper = styled(Box)({
  zIndex: 2,
  top: "7px",
  opacity: 0,
  right: "15px",
  display: "flex",
  cursor: "pointer",
  position: "absolute",
  flexDirection: "column",
  transition: "all 0.3s ease-in-out",
});

const ContentWrapper = styled(Box)({
  padding: "1rem",
  "& .title, & .categories": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

// ========================================================
type ProductCardProps = {
  title: string;
  slug: string;
  price: number;
  imgUrl: string;
  rating?: number;
  discount?: number;
  id: string | number;
  hideRating?: boolean;
  hoverEffect?: boolean;
  showProductSize?: boolean;
};
// ========================================================

const ProductCard1 = (props : any) => {
  const product = props?.product
  const { enqueueSnackbar } = useSnackbar();
  const { state, dispatch } = useAppContext();
 
    

  // const cartItem: CartItem | undefined = state.cart.find(
  //   (item) => item.slug === slug
  // );

  const handleCartAmountChange = (product: CartItem, type?: "remove") => () => {
    dispatch({ type: "CHANGE_CART_AMOUNT", payload: product });
    // SHOW ALERT PRODUCT ADDED OR REMOVE
    if (type === "remove")
      enqueueSnackbar("Remove from Cart", { variant: "error" });
    else enqueueSnackbar("Added to Cart", { variant: "success" });
  };
  const handleDetail = (pd: any ) => {
    dispatch({
      type1: "DETAIL",
      payload: pd
    })
  }
  return (
    <StyledBazaarCard >
      <ImageWrapper>
      <Link onClick={() => handleDetail(product && product)}  href={`/product/${product?.final_name}`}>
          <img
            style={{objectFit:'cover', height:'100%', width:'100%'}}
            src={product?.image && product?.image[0]}
            alt={product?.final_name}
          />
        </Link>
      </ImageWrapper>
      {/* <ProductViewDialog
        openDialog={openModal}
        handleCloseDialog={toggleDialog}
        product={{ title, price, id, slug, imgGroup: [imgUrl, imgUrl] }}
      /> */}

          
        <FlexBox sx={{position:'absolute', bottom:10, left:20}}>
          <Box flex="1 1 0" minWidth="0px" mr={1}>
            <Link href={`/product/${product?.final_name}`}>
              <H3
                mb={1}
                title={product?.final_name}
                fontSize="14px"
                fontWeight="600"
                className="title"
                color="text.secondary"
              >
                {product?.final_name}
              </H3>
            </Link>
            <FlexBox  alignItems="center" gap={1} mt={0.5}>
            <Box fontWeight="600" color="primary.main">
              {/* {calculateDiscount(props?.selling_price, props?.off)} */}
              {currency(product?.selling_price)}
            </Box>
            <Box color="grey.600" fontWeight="600">
                {currency(product?.rental_price)}/ tháng
              </Box>
            </FlexBox>
          </Box>
        </FlexBox>
    </StyledBazaarCard>
  );
};

export default ProductCard1;
