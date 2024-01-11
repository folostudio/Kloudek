import Link from "next/link";
import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import HoverBox from "components/HoverBox";
import { H4 } from "components/Typography";
import LazyImage from "components/LazyImage";
import BazaarRating from "components/BazaarRating";
import { FlexBetween, FlexBox } from "components/flex-box";
import { calculateDiscount, currency } from "lib";

// ========================================================
type ProductCardProps = {
  off?: number;
  slug: string;
  title: string;
  price: number;
  imgUrl: string;
  rating: number;
  hideReview?: boolean;
  hideFavoriteIcon?: boolean;
};
// ========================================================

const ProductCard3: any = (props) => {
  const [favorite, setFavorite] = useState(false);
  const product = props?.product
 ;
  

  return (
    <Box >
      <Link href={`/furniture-rental/living-room/sofas-sectionals`}>
        <HoverBox sx={{ borderRadius: "8px" , backgroundColor:'white'}}>
          <img  className="product-img" width='100%'  alt={product?.final_name} src='https://www.moctinhhoa.vn/content/images/thumbs/0002050_sf308-ghe-sofa-da-pu-3-cho-ngoi.jpeg' />
        </HoverBox>
      </Link>

      <FlexBetween  mt={2}>
        <Box>
          <H4 fontWeight="600" fontSize="14px" mb={0.5} title={product?.final_name} ellipsis>
            {product?.final_name}
          </H4>

          {/* {!hideReview && <BazaarRating value={rating} color="warn" readOnly />} */}

          <FlexBox gap={1} alignItems="center">
            <Box fontWeight="600" color="primary.main">
              {/* {calculateDiscount(props?.selling_price, props?.off)} */}
              {currency(product?.selling_price)}
            </Box>
            <Box color="grey.600" fontWeight="600">
                {currency(product?.rental_price)}/ tháng
              </Box>
{/* 
            {!!off && (
              <Box color="grey.600" fontWeight="600">
                <del>{currency(price)}</del>
              </Box>
            )} */}
          </FlexBox>
        </Box>

        {/* {!hideFavoriteIcon && (
          <Button
            disableRipple
            disableElevation
            onClick={() => setFavorite((state) => !state)}
            sx={{
              height: "0",
              alignItems: "flex-start",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {favorite ? (
              <Favorite fontSize="small" color="primary" />
            ) : (
              <FavoriteBorder fontSize="small" sx={{ opacity: 0.5 }} />
            )}
          </Button>
        )} */}
      </FlexBetween>
    </Box>
  );
};

export default ProductCard3;
