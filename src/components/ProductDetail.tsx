import React, { useState } from 'react'
import ProductIntro from "pages-sections/product-details/ProductIntro";
import ShopLayout1 from 'components/layouts/ShopLayout1';
import { Box, Container, Tab, Tabs, styled } from '@mui/material';
import ProductDescription from 'pages-sections/product-details/ProductDescription';
import ProductReview from 'pages-sections/product-details/ProductReview';
import { useAppContext } from 'contexts/AppContext';

  const StyledTabs = styled(Tabs)(({ theme }) => ({
    minHeight: 0,
    marginTop: 80,
    marginBottom: 24,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,

    "& .inner-tab": {
      minWidth:'50%',
      minHeight: 40,
      fontWeight: 600,
      textTransform: "capitalize",
    },

  }));
;
const ProductDetail = () => {
  const [selectedOption, setSelectedOption] = useState(0);
   
  const handleOptionClick = (_, value: any) => setSelectedOption(value);
  return (
    <ShopLayout1>
    <Box sx={{ my: 4, mx:1 }}>
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
          {selectedOption === 0 && <ProductDescription  />}
          {selectedOption === 1 && <ProductReview />}
        </Box>
    </Container>
    </Box>
  </ShopLayout1>
  )
}

export default ProductDetail
