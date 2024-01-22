import React, { useEffect, useState } from 'react'
import ProductIntro from "pages-sections/product-details/ProductIntro";
import ShopLayout1 from 'components/layouts/ShopLayout1';
import { Box, Container, Tab, Tabs, Typography, styled } from '@mui/material';
import ProductDescription from 'pages-sections/product-details/ProductDescription';
import ProductReview from 'pages-sections/product-details/ProductReview';
import { useAppContext } from 'contexts/AppContext';
import Carousel from "components/carousel/Carousel";
import useWindowSize from 'hooks/useWindowSize';
import { H1 } from './Typography';
import { currency } from 'lib';

const StyledTabs = styled(Tabs)(({ theme }) => ({
  minHeight: 0,
  marginTop: 80,
  marginBottom: 24,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,

  "& .inner-tab": {
    minWidth: '50%',
    minHeight: 40,
    fontWeight: 600,
    textTransform: "capitalize",
  },

}));
;
const ProductDetail = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1.5);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  const handleOptionClick = (_, value: any) => setSelectedOption(value);
  return (
    <ShopLayout1>
      <Box sx={{ my: 4, mx: 1 }}>
        <ProductIntro />
        <Container>
          <StyledTabs
            textColor="primary"
            value={selectedOption}
            indicatorColor="primary"
            onChange={handleOptionClick}
          >
            <Tab className="inner-tab" label="Chi tiết sản phẩm" />
            <Tab className="inner-tab" label="Why Kloudek?" />
          </StyledTabs>
          <Box mb={6}>
            {selectedOption === 0 && <ProductDescription />}
            {selectedOption === 1 && <ProductReview />}
          </Box>
        </Container>
        <Container>
          <H1 pb={3}>Related Items</H1>
          <Carousel
            infinite={true}
            visibleSlides={visibleSlides}
            totalSlides={4}
            autoPlay={false}
            spacing='30px'
          >
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-living.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>
            </Box>
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-dining.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box>
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-bedroom.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box >
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-office.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box>
          </Carousel>
        </Container>
      {/*  */}
      <Container sx={{py:6}}>
          <H1 pb={3}>More Accent Chairs</H1>
          <Carousel
            infinite={true}
            visibleSlides={visibleSlides}
            totalSlides={4}
            autoPlay={false}
            spacing='30px'
          >
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-living.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>
            </Box>
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-dining.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box>
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-bedroom.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box >
            <Box sx={{ ":hover": { cursor: 'pointer' } }}>
              <img style={{ maxHeight: 500, maxWidth: '100%' }} src='/assets/images/shop-by-room-office.webp' alt='livingroom' />
              <Typography fontSize={15} fontWeight={500} pt={1}>test</Typography>
              <Box py={1}>
                <span style={{ fontWeight: 'bold' }}>{currency(4511)}đ/th</span> &nbsp;&nbsp;
                <span>{currency(4544)}đ</span> mua
              </Box>            </Box>
          </Carousel>
        </Container>  
      </Box>
    </ShopLayout1>
  )
}

export default ProductDetail
