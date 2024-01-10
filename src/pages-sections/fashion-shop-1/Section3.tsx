
import Product from "models/Product.model";
import { Box, Button, Typography } from "@mui/material";

// ==========================================================
type Props = { newArrivals: Product[] };
// ==========================================================

const Section3 = () => {


  return (
    <Box my={2}>
      <Box  sx={{display:'flex', flexDirection:'column', marginLeft:{md:10, xs:0}}}>
        <Typography sx={{paddingLeft:{xs:2}}} fontWeight='bold' fontSize={20}>Sofa so good</Typography>
        <Typography sx={{paddingLeft:{xs:2}}} color='black'>Sit back and relax, Jarrod has got your back.</Typography>
        <Button variant="contained" color='dark' sx={{borderRadius:999, width:150, mt:2,marginLeft:{xs:2} ,":hover":{backgroundColor:'white', color:'black', outline:'1px solid black'}}}>Shop Sofas</Button>
        <br/>
        <br/>
        <Box sx={{marginLeft:{ md:10, xs:0}}}>
        <img style={{maxWidth:'100%'}} src="/sofa.jpg" alt="sofa"/>
        </Box>
      </Box>
      <Box  sx={{display:'flex', flexDirection:'column', marginLeft:{md:10, xs:0}, my:4,}}>
        <Typography sx={{paddingLeft:{xs:2}}} fontWeight='bold' fontSize={20}>Mood lighting</Typography>
        <Typography sx={{paddingLeft:{xs:2}}} color='black'>Coloured stacked glass, geometric shapes, were all about Whitney..</Typography>
        <Button variant="contained" color='dark' sx={{borderRadius:999, width:150, mt:2, marginLeft:{xs:2}, ":hover":{backgroundColor:'white', color:'black', outline:'1px solid black'}}}>Shop Lighting</Button>
        <br/>
        <br/>
        <Box sx={{marginRight:{ md:10, xs:0}}}>
        <img style={{maxWidth:'100%'}} src="/denngu.jpg" alt="sofa"/>
        </Box>
      </Box>
    </Box>
  );
};

export default Section3;
