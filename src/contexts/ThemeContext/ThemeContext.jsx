import { createContext, useState } from "react";
import { THEME } from './ThemeContext.constants';

export const ThemeContext = createContext({});

function ThemeContextProvider({ children }) {
  const [state, setState] = useState({
    activeTheme: THEME.light,
    setActiveTheme: setActiveTheme,
  });

  function setActiveTheme(theme) {
    setState({
      ...state,
      activeTheme: theme,
    });
  };

  return (
    <ThemeContext.Provider value={state}>
      { children }
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;