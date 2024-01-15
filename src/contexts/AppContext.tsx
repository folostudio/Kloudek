import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import SettingsProvider from "./SettingContext";

// =================================================================================
type InitialState = {
  search: any;
  render: any;
  allProduct: any; cart: CartItem[], detail: any[] 
};

export type CartItem = {
  final_name: ReactNode;
  image: any;
  brand: ReactNode;
  qty: number;
  name: string;
  slug: string;
  price: number;
  imgUrl?: string;
  id: string | number;
};

type CartActionType = { type: "CHANGE_CART_AMOUNT"; payload: any, type1: "DETAIL", type2: "ALL_PRODUCT", type3:"RENDER", type4: "SEARCH" };
type ActionType = CartActionType;

// =================================================================================
const SEARCH = ''
const RENDER = false
const INITIAL_ALL_PRODUCT = null
const INITIAL_CART = [
];
const INITIAL_DETAIL = []
const INITIAL_STATE = { cart: INITIAL_CART, detail : INITIAL_DETAIL, allProduct: INITIAL_ALL_PRODUCT, render : RENDER, search : SEARCH };

interface ContextProps {
  state: InitialState;
  dispatch: (args: any) => void;
}

const AppContext = createContext<ContextProps>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: InitialState, action: ActionType) => {
  switch (action.type || action.type1 || action.type2 || action.type3 || action.type4) {
    case "CHANGE_CART_AMOUNT":
      let cartList = state.cart;
      let cartItem = action.payload;
      let exist = cartList.find((item) => item.id === cartItem.id);

      if (cartItem.qty < 1) {
        const filteredCart = cartList.filter((item) => item.id !== cartItem.id);
        localStorage.removeItem("cart")
        return { ...state, cart: filteredCart };
      }

      // IF PRODUCT ALREADY EXITS IN CART
      if (exist) {
        const newCart = cartList.map((item) =>
          item.id === cartItem.id ? { ...item, qty: cartItem.qty } : item
        );

        return { ...state, cart: newCart };
      }

      return { ...state, cart: [...cartList, cartItem] };
      case "DETAIL":
        const pd = action.payload
        const rs = []
        rs.push(pd)
        return { ...state , detail: rs}
      case "ALL_PRODUCT" :
        const result = action.payload
        return {...state, allProduct : result}
      case "RENDER" :
        const pl = action.payload
        return {...state, render : pl}
      case "SEARCH" :
        const re = action.payload
        return {...state, search : re}
    default: {
      return state;
    }

  }
};

// =======================================================
type AppProviderProps = { children: ReactNode };
// =======================================================

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext<ContextProps>(AppContext);

export default AppContext;
