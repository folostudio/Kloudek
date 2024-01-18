import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, styled } from "@mui/material";
import { NavLink3 } from "components/nav-link";
import { FlexRowCenter } from "components/flex-box";
import { H4, Paragraph } from "components/Typography";
import router from "next/router";
import { useAppContext } from "contexts/AppContext";
// custom styled components
const ImageBox = styled(Box)({
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  "& img": { transition: "0.3s" },
  ":hover": { "& img": { transform: "scale(1.1)" } },
});

const DateBox = styled(FlexRowCenter)(({ theme }) => ({
  top: 30,
  left: 30,
  width: 50,
  height: 50,
  textAlign: "center",
  position: "absolute",
  boxShadow: theme.shadows[1],
  backgroundColor: theme.palette.grey[200],
}));

// =====================================================
type BlogCard2Props = {
  date: string;
  image: string;
  title: string;
  description: string;
};
// =====================================================

const BlogCard2 = ({product}) => {
  const {state, dispatch} = useAppContext()
  const handleDetail = (pd: any ) => {
    dispatch({
      type1: "DETAIL",
      payload: pd
    })
  }
  return (
    <Card  sx={{ borderRadius: 0, boxShadow: 2, backgroundColor:'#EEE5DE', pb:4 }}>
      <ImageBox  m={2} maxHeight={300}>
        <img style={{objectFit:'fill'}} width={580} height={342} src={product?.image[0]} alt="blog-1" />

        {/* <DateBox>
          <Paragraph width="min-content" lineHeight={1} fontWeight={600}>
            {date}
          </Paragraph>
        </DateBox> */}
      </ImageBox>

      <Box onClick={() => handleDetail(product && product)} px={2} pt={1} pb={3}>
        <Link href={`/product/${product?.final_name}`}>
          <H4 fontWeight={700}>{product?.final_name}</H4>
        </Link>

        <Paragraph mt={0.5} mb={3}>
          {/* {product?.specification} */}
        </Paragraph>

        <NavLink3 text="Read More" href={`/product/${product?.final_name}`} />
      </Box>
    </Card>
  );
};

export default BlogCard2;
