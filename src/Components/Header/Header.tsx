import './Header.css';
import { useApp } from '../../hooks/useApp.ts';

const Header = () => {
  const { currentUser, setCurrentView } = useApp();
  const onGoFeed = () => setCurrentView('feed');
  const onGoProfile = () => setCurrentView('profile');
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
        <img src={currentUser.avatar} alt="" onClick={onGoProfile} style={{ cursor: 'pointer' }} />
        <img src="src/assets/Icons/CameraIcon.svg" alt="" />
        <img src="src/assets/Icons/DMIcon.svg" alt="" />
      </nav>
    </header>
  );
};

export default Header;