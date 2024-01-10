import { FC, useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { H2 } from "components/Typography";
import { BlogCard2 } from "components/blog-cards";
import Blog from "models/Blog.model";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";

// =======================================
type Section8Props = { blogs: any[] };
// =======================================

const Section8: FC<Section8Props> = ({ blogs }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(4);

  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(4);
  }, [width]);
  return (
    <Box sx={{ pt: 5 , backgroundColor:'#EEE5DE'}}>
      <H2 textAlign="center" mb={4}>
      Discover handy tips and styling inspiration
      </H2>
      <Carousel
        infinite={true}
        visibleSlides={visibleSlides}
        totalSlides={blogs.length}
        autoPlay={false}
      >

        {blogs.map((item, index) => (
            <BlogCard2
            key={index}
              title={item.title}
              date={item.createdAt}
              image={item.thumbnail}
              description={item.description}
            />
        ))}
     
      </Carousel>
    </Box>
  );
};

export default Section8;
