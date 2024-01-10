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
import { useRouter } from "next/router";
import { useAppContext } from "contexts/AppContext";

// ========================================================
// type ProductCardProps = {
//   off?: number;
//   slug: string;
//   title: string;
//   price: number;
//   imgUrl: string;
//   rating: number;
//   hideReview?: boolean;
//   hideFavoriteIcon?: boolean;
// };
// ========================================================

const ProductCard3Kloudek = (props: any) => {
  const [favorite, setFavorite] = useState(false);
 
  
    const router = useRouter()
    const path = router?.pathname;
    const {state, dispatch} = useAppContext()
    const handleDetail = (pd : any) => {
      dispatch({
        type1: "DETAIL",
        payload: pd
      })
    }
    
  return (
    <Box >
      <Link onClick={() => handleDetail(props && props)}  href={`${path}/${props?.name}`}>
        <HoverBox sx={{ borderRadius: "8px" , backgroundColor:'white'}}>
          <img  className="product-img" width={400} height={350} alt={props?.name} src={props?.image[0]} />
        </HoverBox>
      </Link>

      <FlexBetween  mt={2}>
        <Box>
          <H4 onClick={() => router.push(`${path}/${props?.name}`)} fontWeight="600" fontSize="14px" mb={0.5} title={props?.name} ellipsis>
            {props?.name}
          </H4>

          {/* {!hideReview && <BazaarRating value={rating} color="warn" readOnly />} */}

          <FlexBox gap={1} alignItems="center">
            <Box fontWeight="600" color="primary.main">
              {/* {calculateDiscount(props?.selling_price, props?.off)} */}
              {currency(props?.selling_price)}
            </Box>
            <Box color="grey.600" fontWeight="600">
                {currency(props?.rental_price)}/ tháng
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

export default ProductCard3Kloudek;
