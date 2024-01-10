import { FC } from "react";
import { Box, Container, Grid } from "@mui/material";


const Section1: FC = () => {
  return (
    <Box >
      <img style={{objectFit:'cover', maxHeight:'100%', maxWidth:'100%'}} src="/bannerKloudek.png" alt="banner"/>
    </Box>
  );
};

export default Section1;
