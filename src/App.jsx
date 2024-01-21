import './App.css'
import { ThemeProvider } from 'contexts/ThemeContext';
import { ToDo } from 'components/ToDo';

function App() {
  return (
    <ThemeProvider>
      <ToDo></ToDo>
    </ThemeProvider>
  );
}

export default App
