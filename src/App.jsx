import './App.css'
import { Header } from 'components/Header';
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
    <>
      <Header/>
      <ToDo/>
    </>
  );
}

export default App
