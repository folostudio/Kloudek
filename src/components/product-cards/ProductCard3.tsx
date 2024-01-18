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
import { useAppContext } from "contexts/AppContext";
import router from "next/router";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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

const ProductCard3: any = (props : any) => {
  const [showFavorite, setShowFavorite] = useState('none');
  const product = props?.product
 ;
 const {state, dispatch} = useAppContext()
 const handleDetail = (pd: any ) => {
   dispatch({
     type1: "DETAIL",
     payload: pd
   })
 }

  return (
    <Box>
      <Box onMouseLeave={() => setShowFavorite('none')} onMouseMove={() => setShowFavorite('flex')} sx={{position:'relative'}}>
      <Link onClick={() => handleDetail(product && product)}  href={`/product/${product?.final_name}`}>
        <HoverBox sx={{ borderRadius: "8px" , backgroundColor:'white', height:{lg:250,xs:330, sm:250}}}>
          <img  className="product-img"  style={{objectFit:'contain',width:'100%', height:'100%'}} alt={product?.name} src={product?.image[0] || product?.image[1] || product?.image[2] || product?.image[3]    } />
        </HoverBox>
        <Box sx={{position:'absolute',right:10, top:10, backgroundColor:'#F6F6F6', width:23, height:23, borderRadius:999, display: showFavorite, justifyContent:'center', alignItems:'center',}}>
              <FavoriteBorderIcon fontSize="small" sx={{":hover":{color:'pink', cursor:'pointer'}}}/>
              </Box>
      </Link>
      </Box>

      <FlexBetween  mt={1}>
        <Box>
          <H4 onClick={() => router.push(`/product/${product?.final_name}`)} fontWeight="600" fontSize="14px" mb={0.5} title={product?.final_name} ellipsis>
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
