import { FC } from "react";
import Link from "next/link";
import { Box, Container, Grid, IconButton, Typography, styled } from "@mui/material";
import AppStore from "components/AppStore";
import Image from "components/BazaarImage";
import { FlexBox } from "components/flex-box";
import { Paragraph } from "components/Typography";
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
      <Box bgcolor="#222935">
        <Box sx={{ p: "1rem", color: "white" }}>
          <Box sx={{py:{md:5, xs:0}}} overflow="hidden">
            <Grid container spacing={4}>
              <Grid item lg={2.4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  KLOUDEK 
                  
                </Box>

                <div>
                  {KloudekLink.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={2.4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  CHÍNH SÁCH
                </Box>

                <div>
                  {aboutLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={2.4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  CHĂM SÓC KHÁCH HÀNG
                </Box>

                <div>
                  {customerCareLinks.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>
              <Grid item lg={2.4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  SHOP BY DEPARTMENT
                </Box>

                <div>
                  {shopByLink.map((item, ind) => (
                    <StyledLink href="/" key={ind}>
                      {item}
                    </StyledLink>
                  ))}
                </div>
              </Grid>

              <Grid item lg={2.4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="18px"
                  fontWeight="600"
                  mb={1.5}
                  lineHeight="1"
                  color="white"
                >
                  ĐỊA CHỈ LIÊN HỆ
                </Box>

                <Box py={0.6} color="grey.500">
                Địa chỉ: Số 33 Lô O, Hoàng Quốc Việt, Phường Phú Mỹ, Quận 7, Thành phố Hồ Chí Minh, Việt Nam
                </Box>

                <Box py={0.6} color="grey.500">
                  <Link href='mailto:info@lucenco.com'>Email: info@lucenco.com</Link>
                </Box>

                <Box py={0.6} mb={2} color="grey.500">
                  Phone: 1111 - 11111
                </Box>

                <FlexBox className="flex" mx={-0.625}>
                  {iconList.map((item, ind) => (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer noopenner"
                      key={ind}
                    >
                      <IconButton
                        sx={{
                          margin: 0.5,
                          fontSize: 12,
                          padding: "10px",
                          backgroundColor: "rgba(0,0,0,0.2)",
                        }}
                      >
                        <item.icon fontSize="inherit" sx={{ color: "white" }} />
                      </IconButton>
                    </a>
                  ))}
                </FlexBox>
              </Grid>
              <Grid item lg={12} md={12} sm={12}>
                    <Box sx={{display:'flex',flexDirection:{md:'row', xs:'column'}, justifyContent:'space-between',alignItems:'center',backgroundColor:'#CCCCCC', height:{md:100, xs:'100%'}, px:3 }}>
                        <Box>
                          <Typography>@2023 Kloudek</Typography>
                          <Typography fontSize={12}>Mã số doanh nghiệp: 0108617038. Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư TP Hà Nội cấp lần đầu ngày 20/02/2019.</Typography>
                        </Box>
                        <Box>
                          <img width={100} style={{marginRight:10}} height={50} src="/assets/images/footer/bocongthuong.jpg" alt="footer"/>
                          <img width={100} style={{marginRight:10}} height={50} src="/assets/images/footer/IQC.png" alt="footer"/>
                          <img width={100} style={{marginRight:10}} height={50} src="/assets/images/footer/dmca.png" alt="footer"/>
                          <img width={100} height={50} src="/assets/images/footer/tinnhiemmang.png" alt="footer"/>
                        </Box>
                    </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
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
