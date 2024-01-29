import { FC, useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  styled,
  SvgIconProps,
  Typography,
} from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  KeyboardArrowDown,
} from "@mui/icons-material";
import { NavLink } from "components/nav-link";
import { FlexBox } from "components/flex-box";
import BazaarCard from "components/BazaarCard";
import Category from "components/icons/Category";
import { Paragraph } from "components/Typography";
import CategoryMenu from "components/categories/CategoryMenu";
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import useSettings from "hooks/useSettings";
import navbarNavigations from "data/navbarNavigations";
import InputLabel from '@mui/material/InputLabel';
import { LanguageSwitcher } from "../lang-switcher";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Translation } from "react-i18next";
import Script from 'next/script'

// NavList props interface
type Navs = {
  url: string;
  title: string;
  Icon?: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};

type NavList = {
  url: string;
  title: string;
  child: Navs[];
  megaMenu: boolean;
  megaMenuWithSub: boolean;
};

// const common css style
const navLinkStyle = {
  cursor: "pointer",
  fontWeight: "bold",
  transition: "color 150ms ease-in-out",
  "&:hover": { color: "primary.main", borderBottom:'3px solid red' ,},
  "&:last-child": { marginRight: 0 },
};
// style components
const StyledNavLink = styled(NavLink)({ ...navLinkStyle });

const ParentNav = styled(Box)(({ theme }) => ({
  "&:hover": {
    color: theme.palette.primary.main,
    "& > .parent-nav-item": { display: "block" },
  },
}));

const ParentNavItem = styled(Box)(({ theme }) => ({
  top: 0,
  zIndex: 5,
  left: "100%",
  paddingLeft: 8,
  display: "none",
  position: "absolute",
  [theme.breakpoints.down(1640)]: {
    right: "100%",

    paddingRight: 8,
  },
}));

const NavBarWrapper = styled(BazaarCard)<{ border: number }>(
  ({ theme, border }) => ({
    height: "60px",
    display: "block",
    borderRadius: "0px",
    position: "relative",
    // ...(border && { borderBottom: `1px solid ${theme.palette.grey[200]}` }),
    [theme.breakpoints.down(1150)]: { display: "none" },
  })
);

const InnerContainer = styled(Box)({
  paddingLeft:10,
  paddingRight:10,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const CategoryMenuButton = styled(Button)(({ theme }) => ({
  width: "278px",
  height: "40px",
  backgroundColor: theme.palette.grey[100],
}));

const ChildNavsWrapper = styled(Box)({
  zIndex: 5,
  left: "50%",
  top: "100%",
  display: "none",
  position: "absolute",
  transform: "translate(-50%, 0%)",
});

// ==========================================================
type NavbarProps = {
  border?: number;
  elevation?: number;
  navListOpen?: boolean;
  hideCategories?: boolean;
};
// ==========================================================

const Navbar: FC<NavbarProps> = ({
  navListOpen,
  hideCategories,
  elevation,
  border,
}) => {
  const [age, setAge] = useState('Việt Nam');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  

  const { settings } = useSettings();
  const handleTransition = () => {
    // document.addEventListener("translate", (event) => {
    //   const translatedText = event.detail.translatedText;
      
    // })
  }
  const renderNestedNav = (list: any[] = [], isRoot = false) => {
   
    return list.map((nav: NavList) => {
      if (isRoot) {
        // show megamenu
        if (nav.megaMenu) {
          return (
            //@ts-ignore
            <MegaMenu key={nav.title} title={nav.title} menuList={nav.child} />
          );
        }

        // show megamenu with sub
        if (nav.megaMenuWithSub) {
          return (
            //@ts-ignore
            <MegaMenu2 key={nav.title} title={nav.title} menuList={nav.child} />
          );
        }

        if (nav.url) {
          return (
            <StyledNavLink href={nav.url} key={nav.title}>
              {nav.title}
            </StyledNavLink>
          );
        }

        if (nav.child) {
          return (
            <FlexBox
              key={nav.title}
              alignItems="center"
              position="relative"
              flexDirection="column"
              sx={{
                "&:hover": { "& > .child-nav-item": { display: "none" } },
              }}
            >
              <FlexBox gap={0.3} sx={navLinkStyle}>
                {nav.title}{" "}
                {/* <KeyboardArrowDown
                  sx={{ color: "grey.500", fontSize: "1.1rem" }}
                /> */}
              </FlexBox>
              <ChildNavsWrapper className="child-nav-item">
                <BazaarCard
                  elevation={3}
                  sx={{ mt: 2.5, py: 1, minWidth: 200 }}
                >
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ChildNavsWrapper>
            </FlexBox>
            
          );
          
        }
      } else {
        if (nav.url) {
          return (
            <NavLink href={nav.url} key={nav.title}>
              <MenuItem>{nav.title}</MenuItem>
            </NavLink>
          );
        }

        if (nav.child) {
          return (
            <ParentNav position="relative" minWidth="230px" key={nav.title}>
              <MenuItem color="grey.700">
                <Box flex="1 1 0" component="span">
                  {nav.title}
                </Box>
                
                {/* {settings.direction === "ltr" ? (
                  <ArrowRight fontSize="small" />
                ) : (
                  <ArrowLeft fontSize="small" />
                )} */}
              </MenuItem>

              <ParentNavItem className="parent-nav-item">
                <BazaarCard
                  sx={{ py: "0.5rem", minWidth: "230px" }}
                  elevation={3}
                >
                
                  {renderNestedNav(nav.child)}
                </BazaarCard>
              </ParentNavItem>
            </ParentNav>
          );
        }
      }
    });
  };

  return (
    <NavBarWrapper hoverEffect={false} elevation={elevation} border={2}>
      {!hideCategories ? (
        <InnerContainer>
        
          {/* Category megamenu */}
          {/* <CategoryMenu open={navListOpen}>
            <CategoryMenuButton variant="text">
              <Category fontSize="small" />
              <Paragraph
                fontWeight="600"
                textAlign="left"
                flex="1 1 0"
                ml={1.25}
                color="grey.600"
              >
                Categories
              </Paragraph>

              {settings.direction === "ltr" ? (
                <ChevronRight className="dropdown-icon" fontSize="small" />
              ) : (
                <ChevronLeft className="dropdown-icon" fontSize="small" />
              )}
            </CategoryMenuButton>
          </CategoryMenu> */}

          {/* Horizontal menu */}
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
          <FlexBox gap={3}>
          {/* <div id="google_translate_element"></div> */}
          <LanguageSwitcher />
            {/* <Typography>Test</Typography>
            <Typography>Test1</Typography> */}
            {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-standard-label">Ngôn ngữ</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Ngôn ngữ"
        > */}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {/* <MenuItem value="Việt Nam">Việt Nam</MenuItem>
          <MenuItem onClick={handleTransition} value='EngLish'>EngLish</MenuItem> */}
     
        {/* </Select> */}
      
      
      {/* </FormControl> */}
          </FlexBox>
          
        </InnerContainer>
      ) : (
        <InnerContainer sx={{ justifyContent: "center" }}>
          <FlexBox gap={4}>{renderNestedNav(navbarNavigations, true)}</FlexBox>
        </InnerContainer>
      )}
      
    </NavBarWrapper>

  );
};

//  set default props data
Navbar.defaultProps = {
  elevation: 2,
  navListOpen: false,
  hideCategories: false,
};

export default Navbar;
