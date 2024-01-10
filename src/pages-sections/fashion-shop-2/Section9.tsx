import { FC, useEffect, useState } from "react";
import { Box, Container, Divider } from "@mui/material";
import useWindowSize from "hooks/useWindowSize";
import BazaarImage from "components/BazaarImage";
import Carousel from "components/carousel/Carousel";
import { FlexRowCenter } from "components/flex-box";
import Brand from "models/Brand.model";

// ======================================================================
type Section9Props = { brands: any[] };
// ======================================================================

const Section9: FC<Section9Props> = ({ brands }) => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    if (width < 370) setVisibleSlides(2);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 1024) setVisibleSlides(3);
    else setVisibleSlides(5);
  }, [width]);

  return (
    <Box sx={{ my: 4 }}>
      <Divider sx={{ mb: 4, borderColor: "grey.400" }} />

      <Carousel
        autoPlay={true}
        showArrow={false}
        totalSlides={brands.length}
        visibleSlides={visibleSlides}
        sx={{ ":hover": { cursor: "grab" } }}
        interval={1500}
      >
        {brands.map((item) => (
          <FlexRowCenter
            maxWidth={110}
            height="100%"
            margin="auto"
            key={item.id}
          >
            <BazaarImage
              alt="brand"
              width="100%"
              src={item.image}
         
            />
          </FlexRowCenter>
        ))}
      </Carousel>

      <Divider sx={{ mt: 4, borderColor: "grey.400" }} />
    </Box>
  );
};

export default Section9;
