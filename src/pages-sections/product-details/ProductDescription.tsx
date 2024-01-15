import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { H3 } from "components/Typography";

// ======================================================
type ProductDescriptionProps = {};
// ======================================================

const ProductDescription = (props : any) => {

  const product = props?.product
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={6} md={6} xs={12}>
        <H3 mb={2}>Description:</H3>
      <Typography fontWeight={500}>
      Bring warmth and texture to your dining space with the Shawna Chair. Its gorgeous natural grain pattern is achieved through an innovative process that uses heat, steam, and pressure to transform solid bamboo into an earthy wheat tone. Stunning curves and an organic shape round out this sustainable and stylish piece of furniture.

      </Typography>
        </Grid>
        <Grid item sm={3} md={3} xs={12}>
          <H3 mb={2}>Specifications</H3>
          <Typography fontWeight={500} my={1}>{product?.specification}</Typography>
        </Grid>
        <Grid item sm={3} md={3} xs={12}>
          <H3 mb={2}>Dimensions</H3>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography fontWeight={500}>Length</Typography>
            <Typography fontWeight={500}>{product?.dimensions[0]}</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between',my:1}}>
            <Typography fontWeight={500}>Width</Typography>
            <Typography fontWeight={500}>{product?.dimensions[1]}</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', my:1}}>
            <Typography fontWeight={500}>Height</Typography>
            <Typography fontWeight={500}>{product?.dimensions[2]}</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography fontWeight={500}>Depth</Typography>
            <Typography fontWeight={500}>{product?.dimensions[3] ? product?.dimensions[3] : ''}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
