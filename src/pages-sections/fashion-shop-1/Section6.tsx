import { FC } from "react";
import { Box, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3 from "components/product-cards/ProductCard3";
import Product from "models/Product.model";

// =============================================================
type Props = { products: any[] };
// =============================================================

const Section6: FC<Props> = ({ products }) => {
  const trendings = products.slice(1, products.length);

  return (
    <Box mt={2}>
      <Grid container spacing={2}>
     

        <Grid item container md={12} xs={12} spacing={2}>
          {trendings.map((item, index) => (
            <Grid item xs={12} sm={2.4} key={index}>
              <ProductCard3
                slug={item.slug}
                title={item.title}
                price={item.price}
                off={item.discount}
                rating={item.rating}
                imgUrl={item.thumbnail}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section6;
