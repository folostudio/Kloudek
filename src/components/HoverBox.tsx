import { Box, styled } from "@mui/material";

const HoverBox = styled(Box)({
  display: "flex",
  overflow: "hidden",
  position: "relative",
  borderRadius: "3px",
  transition: "all 0.3s",
 
 
  "& img": { transition: "0.3s" },
  ":hover": { img: { transform: "scale(1.1)" } },
   
  
});

export default HoverBox;
