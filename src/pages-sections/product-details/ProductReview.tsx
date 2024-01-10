import { FC } from "react";
import { Box, Button, TextField, Rating, Grid, Typography } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { FlexBox } from "components/flex-box";
import ProductComment from "./ProductComment";
import { H2, H5 } from "components/Typography";

// ===================================================
type ProductReviewProps = {};
// ===================================================

const ProductReview = () => {


  

  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <Box sx={{display:'flex' ,flexDirection:'column', alignItems:'center', justifyContent:'center',px:3}}>
            <Typography fontWeight={600} py={2}>Its effortless.You dont have to lift a finger. Delivery and assembly are both included.</Typography>
            <Typography fontWeight={600} py={2}>Were flexible.Creating your home should be easy. Thats why we offer flexible options to rent, buy, or rent-to-own. Rent, and avoid high upfront costs in favor of small monthly payments. Buy, and your furniture is yours to keep!</Typography>
            <Typography fontWeight={600} py={2}>
            Your home will look beautiful.Weve thoughtfully curated a select offering of beautiful, high-quality furniture pieces that will go perfectly with your home. Add extra personal touches with our selection of décor, lighting, and plants to match your furniture.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6} xs={12} sx={{backgroundColor:'#FFFFCC'}}>
          <Box sx={{display:'flex' ,flexDirection:'column', alignItems:'center', justifyContent:'center',px:3}}>
              <Box py={2} textAlign='center'>
                <Typography fontWeight='bold'>Our furniture is made to last.</Typography>
                <Typography>Our furniture is made to last. We only source items from trusted, credible manufacturers. These items are high quality and guaranteed to stand the test of time.</Typography>
              </Box>
              <Box py={2} textAlign='center'>
              <Typography fontWeight='bold'>Were working to reduce furniture waste.</Typography>
              <Typography>Together we can cut down on the 9.8 million tons of fast furniture that ends up in a landfill each year.</Typography>
              </Box>
              <Box py={2} textAlign='center'>
              <Typography fontWeight='bold'>We keep it fresh</Typography>
              <Typography>All furniture goes though an 11-step sanitation and refurbishment process using sustainably sourced materials.</Typography>
              </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};



export default ProductReview;
