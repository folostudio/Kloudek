import { FC } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Grid,
  IconButton,
  styled,
  SxProps,
} from "@mui/material";
import AppStore from "components/AppStore";
import { FlexBox } from "components/flex-box";
import BazaarImage from "components/BazaarImage";
import { Paragraph } from "components/Typography";
import Google from "components/icons/Google";
import Twitter from "components/icons/Twitter";
import Youtube from "components/icons/Youtube";
import Facebook from "components/icons/Facebook";
import Instagram from "components/icons/Instagram";

// styled components
const StyledFooter = styled("footer")<{ bgcolor?: string }>(
  ({ theme, bgcolor }) => ({
    color: "white",
    padding: "40px",
    background: bgcolor ? bgcolor : theme.palette.secondary.main,
    [theme.breakpoints.down("md")]: { marginBottom: "4rem" },
  })
);

const StyledLink = styled(Link)(({ theme }) => ({
  borderRadius: 4,
  display: "block",
  cursor: "pointer",
  position: "relative",
  padding: "0.3rem 0rem",
  color: theme.palette.grey[300],
  "&:hover": { color: theme.palette.grey[100] },
}));

// =================================================================
type Props = { id?: string; bgcolor?: string; sx?: SxProps };
// =================================================================

const Footer3: FC<Props> = ({ sx, id, bgcolor }) => {
  return (
    <StyledFooter id={id} sx={sx} bgcolor={bgcolor}>
      <Container>
        <Link href="/">
          <BazaarImage mb={2.5} src="" alt="logo" />
        </Link>

        <Grid container spacing={6}>
          <Grid item md={6} sm={6} xs={12}>
            <Paragraph mb={2.5} color="grey.300" maxWidth="370px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Paragraph>

            <AppStore />
          </Grid>

          <Grid item md={6} sm={6} xs={12}>
            <Box mt={-0.6}>
              {customerCareLinks.map((item, ind) => (
                <StyledLink href="/" key={ind}>
                  {item}
                </StyledLink>
              ))}
            </Box>

            <FlexBox className="flex" mx={-0.625} mt={2}>
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
        </Grid>
      </Container>
    </StyledFooter>
  );
};

const customerCareLinks = [
  "Help Center",
  "Track Your Order",
  "Corporate & Bulk Purchasing",
  "Returns & Refunds",
];

const iconList = [
  { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61553916825958" },
  { icon: Twitter, url: "https://www.facebook.com/profile.php?id=61553916825958" },
  {
    icon: Youtube,
    url: "https://www.facebook.com/profile.php?id=61553916825958",
  },
  { icon: Google, url: "https://www.facebook.com/profile.php?id=61553916825958" },
  { icon: Instagram, url: "https://www.facebook.com/profile.php?id=61553916825958" },
];

export default Footer3;
