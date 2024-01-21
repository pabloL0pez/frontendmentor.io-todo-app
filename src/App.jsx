import './App.css'
import { ToDo } from 'components/ToDo';
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'contexts/ThemeContext';

function App() {
  const { activeTheme } = useContext(ThemeContext);
  const rootElement = document.getElementById('root');

  useEffect(() => {
    rootElement.className = activeTheme;
  }, [activeTheme]);

  return (
    <ToDo></ToDo>
  );
}

export default App
