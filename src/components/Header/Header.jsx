import { ThemeSwitcher } from 'components/ThemeSwitcher';
import './Header.css';
import { HEADER_TITLE } from './Header.constants';

function Header() {
  return (
    <header>
      <div className='header-title-container'>
        <p className='header-title'>{HEADER_TITLE}</p>
        <ThemeSwitcher></ThemeSwitcher>
      </div>
    </header>
  );
}

export default Header;