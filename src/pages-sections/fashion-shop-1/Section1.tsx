import { FC } from "react";
import { Box, Container, Grid } from "@mui/material";


const Section1: FC = () => {
  return (
    <Box >
      <img style={{objectFit:'cover', maxHeight:'100%', width:'100%'}} src="/assets/bannerkloudek.png" alt="banner"/>
    </Box>
  );
};

export default Section1;
