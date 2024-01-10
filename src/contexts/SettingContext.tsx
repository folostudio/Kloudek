import { Direction } from "@mui/material";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";

// ============================================================
export type SettingsOptions = {  };
// ============================================================

// SET "rtl" OR "ltr" HERE
// THEN GOTO BROWSER CONSOLE AND RUN localStorage.clear() TO CLEAR LOCALSTORAGE
const initialSettings = { };

export const SettingsContext = createContext({
  settings: initialSettings,
  updateSettings: (arg: any) => {},
});

// ============================================================
type settingsProviderProps = { children?: ReactNode };
// ============================================================

const SettingsProvider = ({ children }: settingsProviderProps) => {
  const {state, dispatch} = useAppContext()
  const [settings, setSettings] = useState(state.cart);

  const updateSettings = (updatedSetting: any) => {
    setSettings(updatedSetting);
    window.localStorage.setItem(
      "cart",
      JSON.stringify(updatedSetting)
    );
  };

  useEffect(() => {
    if (!window) return null;

    const getItem = window.localStorage.getItem("cart");

    if (getItem) setSettings(JSON.parse(getItem));
    return () => window.localStorage.removeItem("cart")
  }, [state.cart]);

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
