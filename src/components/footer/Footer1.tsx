import { FC } from "react";
import Link from "next/link";
import { Box, Button, Container, Grid, IconButton, TextField, Typography, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { H6, Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";
// styled component
const StyledLink = styled(Link)(({ theme }) => ({
  display: "block",
  borderRadius: 4,
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[500],
  "&:hover": { color: theme.palette.grey[100] },
}));

const Footer1: FC = () => {

  return (
    <footer>
      <Box sx={{backgroundColor:'#FFFFFF', borderTop:"1px solid gray"}}>
        <Container>
        <Grid container py={6} spacing={2}>
          <Grid item md={3}>
            <H6 pb={2}>Shop</H6>
            <Typography> <Link href={"#"}>The Goods</Link></Typography>
            <Typography py={2}>  <Link href={"#"}>Kloudek for Business</Link></Typography>
            <Typography>  <Link href={"#"}>Get design help</Link></Typography>
          </Grid>
          <Grid item md={3}>
          <H6 pb={2}>Help</H6>
            <Typography> <Link href={"#"}>kloudek@gmail.com</Link></Typography>
            <Typography py={2}>  <Link href={"#"}>FAQs</Link></Typography>
   
          </Grid>
          <Grid item md={4}>
          <H6 pb={2}>Be in the know</H6>
          <Typography> <Link href={"#"}>Get the latest products, promotions, and design tips in your inbox. Sign up and get 25% off your first month.</Link></Typography>
          <Box pt={2} sx={{display:'flex'}}>
          <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
          <Button size='medium' variant='contained' color='dark' sx={{backgroundColor:'#ED653B', color:'white', borderRadius:999, ml:3}}>Submit</Button>
          </Box>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
        </Container>
      </Box>
    </footer>
  );
};
const KloudekLink = [
  "Ưu đãi & đặc quyền",
  "Đăng kí thành viên"
]
const aboutLinks = [
  "Chính sách bảo mật",
  "Chính sách khuyến mãi",
  "Chính sách đổi trả 60 ngày",
  "Hỗ trợ đặt hàng",
  "Chính sách trả hàng",
  "Chính sách bảo hành"
];

const customerCareLinks = [
  "Hỏi đáp - FAQs",
  "Trải nghiệm mua sắm 100% hài lòng",
];
const shopByLink = [
  "Living Room",
  "Kitchen & Dining",
  "Bed & Bath",
  "Accent Furniture"
]
const iconList = [
  { icon: Facebook, url: "#" },
  { icon: Twitter, url: "#" },
  {
    icon: Youtube,
    url: "#",
  },
  { icon: Google, url: "#" },
  { icon: Instagram, url: "#" },
];

export default Footer1;
