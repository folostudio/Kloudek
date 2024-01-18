import { FC } from "react";
import { Avatar, Box, Button, Chip, Container, Grid, Typography } from "@mui/material";
import { H1 } from "components/Typography";

import {useRouter} from 'next/router'
const Section1: FC = () => {
  const router = useRouter()
  return (

      <Grid  container sx={{display:'flex', flexDirection:{md:'row', xs:'column-reverse', gap:0}}}>
        <Grid sx={{ backgroundColor:'#F2F0ED', display:'flex',justifyContent:'center', alignItems:'center', py:4}} item md={4.5} xs={12}>
          <Box sx={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:{md:'flex-start', xs:'center'}, maxWidth:{md:400, xs:'100%'}}}>
            <H1 fontSize={40} sx={{textAlign:{md:'left', xs:'center'}}}>Furniture, made light.</H1>
            <Typography sx={{textAlign:{md:'left', xs:'center', fontSize:{md:20, xs:15}}}} py={2}  >Discover hassle-free delivery, free assembly and the flexibility to rent, rent-to-own or buy.</Typography>
          <Button onClick={() => router.push('/furniture-rental/living-room')} size='large' variant='contained' color='dark' sx={{backgroundColor:'#ED653B', color:'white', borderRadius:999}}>Start Shopping</Button>
          </Box>
        </Grid>
        <Grid item md={7.5} xs={12}>
        <img style={{ height:'100%', width:'100%'}} src="/assets/images/banner.webp" alt="banner"/>
        </Grid>
      </Grid>
   
  );
};

export default Section1;
