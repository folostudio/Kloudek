import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { H3 } from "components/Typography";

// ======================================================
type ProductDescriptionProps = {};
// ======================================================

const ProductDescription = () => {
  return (
    <Box>
      <Grid container>
        <Grid item sm={6} md={6} xs={12}>
        <H3 mb={2}>Description:</H3>
      <Typography fontWeight={500}>
      Bring warmth and texture to your dining space with the Shawna Chair. Its gorgeous natural grain pattern is achieved through an innovative process that uses heat, steam, and pressure to transform solid bamboo into an earthy wheat tone. Stunning curves and an organic shape round out this sustainable and stylish piece of furniture.

      </Typography>
        </Grid>
        <Grid item sm={3} md={3} xs={12}>
          <H3 mb={2}>Specifications</H3>
          <Typography fontWeight={500} my={1}>Frame Material: 100% sustainably sourced bamboo</Typography>
          <Typography fontWeight={500} my={1}>Seat Material- Upholstered; durable charcoal woven fabric</Typography>
          <Typography fontWeight={500} my={1}>Made in an ISO 14001 Environment Management certified facility</Typography>
          <Typography fontWeight={500} my={1}>Natural variation in wood tone & grain may occur</Typography>
        </Grid>
        <Grid item sm={3} md={3} xs={12}>
          <H3 mb={2}>Dimensions</H3>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography fontWeight={500}>Width</Typography>
            <Typography fontWeight={500}>27.07</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between',my:1}}>
            <Typography fontWeight={500}>Width</Typography>
            <Typography fontWeight={500}>27.07</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between', my:1}}>
            <Typography fontWeight={500}>Width</Typography>
            <Typography fontWeight={500}>27.07</Typography>
          </Box>
          <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Typography fontWeight={500}>Width</Typography>
            <Typography fontWeight={500}>27.07</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDescription;
