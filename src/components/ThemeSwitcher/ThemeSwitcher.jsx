import { useContext, useMemo } from "react";
import { ThemeContext, THEME } from 'contexts/ThemeContext';

function ThemeSwitcher() {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);

  const switchTheme = useMemo(() => {
    if (activeTheme === THEME.light) {
      return THEME.dark;
    }

    return THEME.light;
  }, [activeTheme]);

  return (
    <button onClick={() => {setActiveTheme(switchTheme)}}>SWITCH TO {activeTheme} MODE</button>
  );
};

export default ThemeSwitcher;