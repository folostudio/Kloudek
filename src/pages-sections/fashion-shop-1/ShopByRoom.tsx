import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Carousel from "components/carousel/Carousel";
import useWindowSize from 'hooks/useWindowSize';
import { H1 } from 'components/Typography';
import {useRouter} from 'next/router'
const ShopByRoom = () => {
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
    <Container maxWidth='xl' sx={{flexGrow:1, width:{xl:'80%', xs:'100%',lg:'80%'}}}>
           <H1 pb={3}>Shop by room</H1>
         <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={4}
        autoPlay={false}
        spacing='30px'
      >
            <Box sx={{":hover":{cursor:'pointer'}}} onClick={() => router.push('/furniture-rental/living-room')}>
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/shop-by-room-living.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Living Room</Typography>
            </Box>
            <Box sx={{":hover":{cursor:'pointer'}}} onClick={() => router.push('/furniture-rental/living-room')}>
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/shop-by-room-dining.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Dining Room</Typography>
            </Box>
            <Box sx={{":hover":{cursor:'pointer'}}} onClick={() => router.push('/furniture-rental/living-room')}>
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/shop-by-room-bedroom.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Bedroom</Typography>
            </Box >
            <Box sx={{":hover":{cursor:'pointer'}}} onClick={() => router.push('/furniture-rental/living-room')}>
                <img style={{maxHeight:500,maxWidth:'100%'}} src='/assets/images/shop-by-room-office.webp' alt='livingroom'/>
                <Typography fontSize={20} fontWeight={500} pt={2}>Office</Typography>
            </Box>
        </Carousel>
      
    </Container>
  )
}

export default ShopByRoom
