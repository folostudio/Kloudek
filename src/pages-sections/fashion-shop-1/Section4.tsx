import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { H1, H2 } from "components/Typography";
import { BlogCard2 } from "components/blog-cards";
import Blog from "models/Blog.model";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";
import { currency } from "lib";
import { carouselStyled } from "components/carousel/styles";
import { useAppContext } from "contexts/AppContext";
import {useRouter} from 'next/router'
// =======================================
type Section8Props = { blogs: any[] };
// =======================================

const Section8 = (props: any) => {


  const product = props?.products?.slice(7, 13)
  const router = useRouter()
  const {state, dispatch} = useAppContext()
  const handleDetail = (pd: any ) => {
    dispatch({
      type1: "DETAIL",
      payload: pd
    })
    router.push(`/product/${pd?.final_name}`)
  }

  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(2.5);
    else setVisibleSlides(4);
  }, [width]);
  return (

    <Container maxWidth='xl' sx={{ flexGrow: 1, width: { xl: '80%', xs: '100%', lg: '80%' }, mt: { md: 12, xs: 8 } }}>
      <H1 >Shop what’s new</H1>
      
      <Carousel
   totalSlides={product?.length}
   visibleSlides={visibleSlides}
   infinite={true}
   autoPlay={false}
      >
       {product?.map((item, index) => 
         <Box onClick={() => handleDetail(item && item)} sx={{":hover":{cursor:'pointer'}}} py={5} key={index}  >
         <img height={300} style={{objectFit:'cover'}}  src={item?.image[0] || item?.image[1] || item?.image[2] || item?.image[0]} alt='livingroom' />
         <Typography fontSize={15} fontWeight={500} pt={1}>{item?.final_name}</Typography>
         <Box py={1}>
         <span  style={{fontWeight:'bold'}}>{currency(item?.rental_price)}đ/th</span> &nbsp;&nbsp;
         <span>{currency(item?.selling_price)}đ</span> mua
         </Box>
         
       </Box>
       )}
       
      </Carousel>
    </Container>
  );
};

export default Section8;
