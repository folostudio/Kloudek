import { Box, Card, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LazyImage from "components/LazyImage";
import { H3, H4 } from "components/Typography";

const StyledContent = styled("div")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  "&:after": {
    content: '" "',
    position: "absolute",
    height: 150,
    width: 150,
    top: 0,
    right: 0,
    background: "#fbeef0",
    zIndex: -1,
    borderRadius: "300px",
    marginRight: -75,
    marginTop: -51,
  },
  "&:before": {
    content: '" "',
    position: "absolute",
    height: 150,
    width: 150,
    bottom: 0,
    left: 0,
    background: theme.palette.grey[300],
    zIndex: -1,
    borderRadius: "300px",
    marginLeft: -75,
    marginBottom: -75,
  },
}));

const Section4 = () => {
  return (
    <Container id="technologies" sx={{ mb: "7rem" }}>
      <H3
        fontSize={35}
        textAlign="center"
        fontWeight="700"
        color="secondary.main"
        mt={5}
        textTransform="uppercase"
      >
        CÔNG NGHỆ SỬ DỤNG
      </H3>
      <Container sx={{display:'flex', flexDirection:'column'}}>
      <Typography zIndex={66} mt={4} mb={2} textAlign='center'fontSize={18} >Công nghệ hiện đại mang đến nhiều lợi ích cho việc thiết kế website, giúp tạo ra những trang web có giao diện đẹp mắt, mượt mà, đáp ứng tốt các tiêu chuẩn kỹ thuật và bảo mật. Một số công nghệ hiện đại thường được sử dụng trong thiết kế website :</Typography>
      <Typography textAlign='center' fontSize={15}>Thiết kế website responsive: Công nghệ này giúp website có thể hiển thị tốt trên mọi thiết bị, bao gồm máy tính, điện thoại và máy tính bảng.</Typography>
      <Typography textAlign='center' fontSize={15}>Thiết kế website chuẩn SEO: Công nghệ này giúp website dễ dàng được tìm thấy trên các công cụ tìm kiếm như Google, Bing,...</Typography>
      <Typography mb={4} textAlign='center' fontSize={15} zIndex={55}>Thiết kế website tích hợp các tính năng hiện đại: Công nghệ này giúp website có thêm nhiều tính năng hữu ích, như bán hàng trực tuyến, chat trực tiếp,...</Typography>
      </Container>
      <StyledContent>
        <Grid container spacing={3}>
          {list.map((item) => (
            <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card
                elevation={3}
                sx={{
                  display: "flex",
                  minHeight: "260px",
                  boxShadow: "large",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box mb={2}>
                  <LazyImage
                    width={60}
                    height={60}
                    alt={item.title}
                    src={item.imgUrl}
                  />
                </Box>
                <H4
                  fontSize="18px"
                  fontWeight="700"
                  maxWidth="200px"
                  textAlign="center"
                  mx="auto"
                >
                  {item.title}
                </H4>
              </Card>
            </Grid>
          ))}
        </Grid>
      </StyledContent>
    </Container>
  );
};

const list = [
  {
    imgUrl: "/assets/images/logos/react.png",
    title: "React",
  },
  {
    imgUrl: "/assets/images/logos/next-js.png",
    title: "Next.js",
  },
  {
    imgUrl: "/assets/images/logos/typescript.png",
    title: "TypeScript",
  },
  {
    imgUrl: "/assets/images/logos/mui.svg",
    title: "MUI",
  },
];

export default Section4;
