import { useContext, useMemo } from "react";
import { ThemeContext, THEME } from 'contexts/ThemeContext';
import './ThemeSwitcher.css';

function ThemeSwitcher() {
  const { activeTheme, setActiveTheme } = useContext(ThemeContext);

  const switchToTheme = useMemo(() => {
    if (activeTheme === THEME.light) {
      return {
        theme: THEME.dark,
        iconSrc: 'src/assets/images/icon-moon.svg',
      };
    }

    return {
      theme: THEME.light,
      iconSrc: 'src/assets/images/icon-sun.svg',
    };
  }, [activeTheme]);

  return (
    <button onClick={() => {setActiveTheme(switchToTheme.theme)}}>
      <img src={switchToTheme.iconSrc}></img>
    </button>
  );
};

export default ThemeSwitcher;