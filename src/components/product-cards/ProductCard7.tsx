import { FC } from "react";
import Link from "next/link";
import { Add, Close, Remove } from "@mui/icons-material";
import { Button, Card, IconButton, Typography, styled } from "@mui/material";
import Image from "components/BazaarImage";
import { Span } from "components/Typography";
import { FlexBox } from "components/flex-box";
import { useAppContext } from "contexts/AppContext";
import { currency } from "lib";

// styled components
const Wrapper = styled(Card)(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  position: "relative",
  borderRadius: "10px",
  marginBottom: "1.5rem",
  boxShadow: theme.shadows[2],
  backgroundColor: theme.palette.background.paper,

  "@media only screen and (max-width: 425px)": {
    flexWrap: "wrap",
    img: { height: "auto", minWidth: "100%" },
  },
}));

// =========================================================
type ProductCardProps = {
  qty: number;
  name: string;
  slug: string;
  price: number;
  image?: string;
  id: string | number;
  brand : any,
  final_name: any
};
// =========================================================

const ProductCard7: FC<ProductCardProps> = ({
  id,
  name,
  qty,
  price,
  image,
  slug,
  brand,
  final_name
}) => {
  const { dispatch } = useAppContext();
  // handle change cart
  const handleCartAmountChange = (amount: number) => () => {
    dispatch({
      type: "CHANGE_CART_AMOUNT",
      payload: { id, name, price, image, qty: amount, slug, brand ,final_name},
    });
  };

  return (
    <Wrapper>
      <Image
        alt={name}
        width={140}
        height={140}
        display="block"
        src={image && image[0] || ""}
      />

      <IconButton
        size="small"
        onClick={handleCartAmountChange(0)}
        sx={{ position: "absolute", right: 15, top: 15 }}
      >
        <Close fontSize="small" />
      </IconButton>

      <FlexBox p={2} rowGap={2} width="100%" flexDirection="column">
        {/* <Link href={`/product/${slug}`}> */}
          <Span ellipsis fontWeight="600" fontSize={18}>
            {final_name}
          </Span>
        {/* </Link> */}
        <Typography>Phân loại :{brand} </Typography>
        <FlexBox gap={1} flexWrap="wrap" alignItems="center">
          <Span color="grey.600">
            {currency(price)} x {qty}
          </Span>

          <Span fontWeight={600} color="primary.main">
            {currency(price * qty)}
          </Span>
        </FlexBox>

        <FlexBox alignItems="center">
          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            disabled={qty === 1}
            onClick={handleCartAmountChange(qty - 1)}
          >
            <Remove fontSize="small" />
          </Button>

          <Span mx={1} fontWeight={600} fontSize={15}>
            {qty}
          </Span>
          <Button
            color="primary"
            sx={{ p: "5px" }}
            variant="outlined"
            onClick={handleCartAmountChange(qty + 1)}
          >
            <Add fontSize="small" />
          </Button>
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
};

export default ProductCard7;
