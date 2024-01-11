import Link from "next/link";
import {
  ChangeEvent,
  FC,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { SearchOutlinedIcon, SearchResultCard } from "./styled";
import api from "utils/__api__/products";
import { useRouter } from "next/router";
import { useAppContext } from "contexts/AppContext";

const SearchInput: FC = () => {
  const router = useRouter()
  const parentRef = useRef();
  const [_, startTransition] = useTransition();
  const [resultList, setResultList] = useState<string[]>([]);
  const {dispatch} = useAppContext()
  const getProducts = async (searchText: string) => {
    const data = await api.searchProducts(searchText);
    setResultList(data);
  };
  const [value, setValue] = useState('')

  

  const handleDocumentClick = () => setResultList([]);
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push('/search')
    dispatch({
    type4: "SEARCH",
    payload: value
    })
    
  }
  // useEffect(() => {
  //   window.addEventListener("click", handleDocumentClick);
  //   return () => window.removeEventListener("click", null);
  // }, []);

  return (
    <Box
      position="relative"
      flex="1 1 0"
      maxWidth="670px"
      mx="auto"
      {...{ ref: parentRef }}
    >
      <form onSubmit={(e) =>handleSubmit(e)}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Searching for..."
        onChange={(e) => setValue(e.target.value)}
        InputProps={{
          sx: {
            height: 44,
            paddingRight: 0,
            borderRadius: 300,
            color: "grey.700",
            overflow: "hidden",
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "primary.main",
            },
          },
          endAdornment: (
            <Button
            onClick={(e) =>handleSubmit(e)}
              color='warning'
              disableElevation
              variant="contained"
              sx={{
                px: "3rem",
                height: "100%",
                borderRadius: "0 300px 300px 0",
              }}
            >
              Search
            </Button>
          ),
          startAdornment: <SearchOutlinedIcon fontSize="small" />,
        }}
      />
      </form>

      {resultList.length > 0 && (
        <SearchResultCard elevation={2}>
          {resultList.map((item) => (
            <Link href={`/product/search/${item}`} key={item}>
              <MenuItem key={item}>{item}</MenuItem>
            </Link>
          ))}
        </SearchResultCard>
      )}
    </Box>
  );
};

export default SearchInput;
