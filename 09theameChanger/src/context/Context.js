import { useContext, createContext } from "react";

export const ThemeContext = createContext({

  themeMode:"light",
  lightMode: ()=>{

  },
  darkMode: ()=>{

  }
});

export const ContextProvider = ThemeContext.Provider;

export function useTheme(){
  return(useContext(ThemeContext));
}