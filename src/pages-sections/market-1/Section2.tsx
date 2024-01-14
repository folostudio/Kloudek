import { FC, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Light from "components/icons/Light";
import Product from "models/Product.model";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "components/carousel/Carousel";
import ProductCard1 from "components/product-cards/ProductCard1";
import CategorySectionCreator from "components/CategorySectionCreator";

// =============================================================
type Props = { flashDeals: any[] };
// =============================================================

const Section2: FC<Props> = ({ flashDeals }) => {
  const [visibleSlides, setVisibleSlides] = useState(3);
  const width = useWindowSize();
  const result = flashDeals?.slice(0, 4)
  useEffect(() => {
    if (width < 500) setVisibleSlides(1);
    else if (width < 650) setVisibleSlides(2);
    else if (width < 950) setVisibleSlides(3);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <Box
    >
      <Carousel
        totalSlides={result?.length}
        visibleSlides={visibleSlides}
        infinite={true}
        autoPlay
      >
        {result?.map((item,index) => (
          <Box  py={0.5} mx={0.5} key={index}>
            <ProductCard1
              product={item}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Section2;
