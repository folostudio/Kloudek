import { FC } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Grid, Link, List, ListItem, styled } from "@mui/material";
import { H6 } from "components/Typography";
import { NavLink } from "components/nav-link";
import BazaarCard from "components/BazaarCard";
import { FlexRowCenter } from "components/flex-box";

// style components
const Wrapper = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  position: "relative",
  transition: "color 150ms ease-in-out",
  ":hover": {
    color: theme.palette.primary.main,
    "& .menu-list": { display: "block" },
  },
}));

const MenusContainer = styled(ListItem)(({ theme }) => ({
  zIndex: 2,
  top: "100%",
  left:'0',
  width: "100vw",
  display: "none",
  position: "absolute",

  [theme.breakpoints.down(2000)]: { minWidth: "100vw" },
}));

const MenuListItem = styled(ListItem)(({ theme }) => ({
  padding: ".3rem 2rem",
  ":hover": { backgroundColor: theme.palette.action.hover },
}));

const StyledNavLink = styled(NavLink)({
  transition: "all 0.3s",
});

// ===============================================================
type Nav = { title: string; url: string };
type Navs = {
  url: string; title: string; child: Nav[] 
};

type MegaMenuProps = { menuList: Array<Navs[]>; title: string };
// ===============================================================

const gridSize = (length: number) => {
  if (length === 1) return 12;
  if (length === 2) return 6;
  if (length === 3) return 4;
  if (length === 4) return 3;
  if (length === 5) return 2;
 
  return 2;
};

const MegaMenu: FC<MegaMenuProps> = ({ title, menuList }) => {
  // get grid size the basis of menu list
  const grid = gridSize(menuList.length);

  return (
    <Wrapper>
      <FlexRowCenter fontWeight='bold' alignItems="flex-end" gap={0.3} sx={{":hover":{borderBottom:'3px solid red'}}}>
        {title}{" "}
        {/* <KeyboardArrowDown sx={{ color: "grey.500", fontSize: "1.1rem" }} /> */}
      </FlexRowCenter>

      <MenusContainer className="menu-list">
        <BazaarCard elevation={3} sx={{ mt: 1.5, overflow: "hidden" }}>
          <Grid container>
            {menuList.map((category, key) => (
              <Grid
                item
                md={grid}
                key={key}
                sx={{
                  py: 2,
                  ":nth-of-type(odd)": { backgroundColor: "grey.100" },
                }}
              >
                {category.map((item) => {
                  return (
                    <List key={item.title}>
                      <Link href={item?.url} sx={{mb:0.5, fontWeight:'bold', fontSize:20, pl:4, color:'black', textDecoration:'none',}}>
                        {item.title}
                      </Link>

                      {item.child.map((sub) => {
                        return (
                          <StyledNavLink href={sub.url} key={sub.title}>
                            <MenuListItem>
                                {sub.title} 
                            </MenuListItem>
                          </StyledNavLink>
                        );
                      })}
                    </List>
                  );
                })}
              </Grid>
            ))}
          </Grid>
        </BazaarCard>
      </MenusContainer>
    </Wrapper>
  );
};

export default MegaMenu;
