import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from "components/carousel/Carousel";
import useWindowSize from 'hooks/useWindowSize';
import { H1 } from 'components/Typography';
import {useRouter} from 'next/router'
const ShopMostPopular = () => {
    const router = useRouter()
    const width = useWindowSize();
    const [visibleSlides, setVisibleSlides] = useState(4);
  
    useEffect(() => {
      if (width < 500) setVisibleSlides(1.5);
      else if (width < 650) setVisibleSlides(2);
      else if (width < 950) setVisibleSlides(3);
      else setVisibleSlides(4);
    }, [width]);
  return (
    <Container maxWidth='xl' sx={{flexGrow:1, width:{xl:'80%', xs:'100%',lg:'80%'}, mt:{md:12,xs:8}}}>
           <H1 pb={3}>Shop most popular</H1>
         <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={4}
        autoPlay={false}
        spacing='30px'
      >
            <Box sx={{":hover":{cursor:'pointer'}}} >
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/popular-beds.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Beds</Typography>
            </Box>
            <Box sx={{":hover":{cursor:'pointer'}}} >
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/popular-dining.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Dining Tables</Typography>
            </Box>
            <Box sx={{":hover":{cursor:'pointer'}}} >
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/popular-seating.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Seating</Typography>
            </Box >
            <Box sx={{":hover":{cursor:'pointer'}}} >
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/popular-desks.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Desks</Typography>
            </Box>
        </Carousel>
    </Container>
  )
}

export default ShopMostPopular
