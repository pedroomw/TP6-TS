import './Header.css';
import type { AppView } from '../../types/index.ts';

interface HeaderProps {
  currentView: AppView;
  onGoFeed: () => void;
  onGoProfile: () => void;
}

const Header = ({ currentView, onGoFeed, onGoProfile }: HeaderProps) => {
  return (
    <header>
      {/* Tu logo existente */}
      <img
        src="src/assets/Logo/LogoInstagram.png"
        alt="logo"
        onClick={onGoFeed}
        style={{ cursor: 'pointer' }}
      />

      {/* Tu búsqueda existente */}
      <form>
        <img src="src/assets/Icons/SearchIcon.svg" alt="" />
        <input type="text" placeholder="Buscar" />
      </form>

      <nav>
        <img src="src/assets/Icons/SettingsIcon.svg" alt="" onClick={onGoProfile} style={{ cursor: 'pointer' }} />
        <img src="src/assets/Icons/CameraIcon.svg" alt="" />
        <img src="src/assets/Icons/DMIcon.svg" alt="" />
      </nav>
    </header>
  );
};

export default Header;