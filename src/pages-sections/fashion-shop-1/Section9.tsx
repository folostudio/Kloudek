import { FC } from "react";
import { Box, Grid } from "@mui/material";
import CategorySectionCreator from "components/CategorySectionCreator";
import ProductCard12 from "components/product-cards/ProductCard12";
import ProductCard3Kloudek from "components/product-cards/ProductCard3Kloudek";
import Product from "models/Product.model";

// =============================================================
type Props = { products: any[] };
// =============================================================

const Section9: FC<Props> = ({ products }) => {
  const trendings = products;
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        <Grid item container md={12} xs={12} spacing={2}>
          {trendings?.map((item, index) => (
            <Grid item xs={12} sm={4} md={2.4} key={index}>
              <ProductCard3Kloudek
                china_code= {item?.china_code}
                color={item?.color}
                dimensions={item?.dimensions}
                final_code= {item?.final_code}
                final_name = {item?.final_name}
                historical_cost= {item?.historical_cost}
                id= {item?.id}
                image= {item?.image}
                kloudek_code= {item?.kloudek_code}
                material={item?.material}
                name= {item?.name}
                note={item?.note}
                rental_price={item?.rental_price}
                seat = {item?.seat}
                selling_price={item?.selling_price}
                specification={item?.specification}
                slug={item?.name}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section9;
