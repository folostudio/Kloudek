import React, { useEffect, useState } from 'react'
import ProductIntro from "pages-sections/product-details/ProductIntro";
import ShopLayout1 from 'components/layouts/ShopLayout1';
import { Box, Tab, Tabs, Typography, styled } from '@mui/material';
import ProductDescription from 'pages-sections/product-details/ProductDescription';
import ProductReview from 'pages-sections/product-details/ProductReview';
import { useAppContext } from 'contexts/AppContext';
import { includes } from 'lodash';
import Section9 from "pages-sections/fashion-shop-1/Section9";
import {useRouter} from 'next/router';
  const StyledTabs = styled(Tabs)(({ theme }) => ({
    minHeight: 0,
    marginTop: 80,
    marginBottom: 24,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
    "& .inner-tab": {
      minHeight: 40,
      fontWeight: 600,
      textTransform: "capitalize",
    },

  }));
;
const ProductDetailSearch = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState(0);
    const {state } = useAppContext()    
    const sofa = state.allProduct?.sofas_sectionals
    const cabinet = state.allProduct?.cabinets;
    const tables = state.allProduct?.tables
    const chairs = state.allProduct?.chairs
    const rs = state.allProduct != null ? [...sofa, ...cabinet, ...tables, ...chairs] : []
    const search = state.search
    const resultSearch = rs?.filter((a) => {
      return a.final_name.toLowerCase().includes(search)
    })
  
    useEffect(() => {
      // Kiểm tra xem state có bằng null không
      if (state.allProduct === null) {
        router.push('/');
      }
    }, [state]);


  const handleOptionClick = (_, value: any) => setSelectedOption(value);
  return (
    <ShopLayout1>
    <Box sx={{ my: 4, mx:1 }}>
    {resultSearch?.length > 0 ? <Section9 products={resultSearch && resultSearch}/> : <Typography textAlign='center' sx={{py:{md:15, xs:0}}} fontSize={20}>Không tìm thấy kết quả</Typography>}
    </Box>
  </ShopLayout1>
  )
}

export default ProductDetailSearch
