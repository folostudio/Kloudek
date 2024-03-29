import { FC, Fragment, ReactNode, useCallback, useState } from "react";
import Sticky from "components/Sticky";
import Topbar from "components/Topbar";
import { Footer1 } from "components/footer";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import { MobileNavigationBar } from "components/mobile-navigation";
import SearchInput from "components/search-box/SearchInput";
import { Box } from "@mui/material";
import SocialNetwork from "components/SocialNetwork";

/**
 *  Used in:
 *  1. market-1, matket-2, gadget-shop,
 *     fashion-shop, fashion-shop-2, fashion-shop-3, furniture-shop, grocery3, gift-shop
 *  2. product details page
 *  3. order-confirmation page
 *  4. product-search page
 *  5. shops and shops-details page
 *  6. checkoutNavLayout and CustomerDashboadLayout component
 */

// ===================================================
type ShopLayout1Props = {
  children: ReactNode;
  showTopbar?: boolean;
  showNavbar?: boolean;
  topbarBgColor?: string;
};
// ===================================================

const ShopLayout1: FC<ShopLayout1Props> = ({
  children,
  topbarBgColor,
  showTopbar = true,
  showNavbar = true,
}) => {
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);

  return (
    <Fragment>
      {/* TOPBAR */}
      {/* {showTopbar && <Topbar bgColor={topbarBgColor} />} */}

      {/* HEADER */}
      <Sticky fixedOn={0} onSticky={toggleIsFixed} scrollDistance={300}>
        <Header isFixed={isFixed} searchInput={<SearchInput />} />
         <Navbar elevation={0} border={1}/> 
      </Sticky>

      <div className="section-after-sticky">
        {/* NAVIGATION BAR */}
  

        {/* BODY CONTENT */}
        {children}
      
      </div>

      {/* SMALL DEVICE BOTTOM NAVIGATION */}
      {/* <MobileNavigationBar /> */}

      {/* FOOTER */}
      <Box sx={{ position:'fixed', bottom:{md:30, xs:10}, right:{md:30, xs:10}}}><SocialNetwork/></Box>
      <Footer1 />
    </Fragment>
  );
};

export default ShopLayout1;
