import './SideBarProfile.css';
import { useApp } from '../../hooks/useApp.ts';

const SideBarProfile = () => {
  const { setCurrentView, currentUser } = useApp();
  return (
    <div className="sidebar-profile">
      <img src={currentUser.avatar} alt={currentUser.username} />
      <h1><button onClick={() => setCurrentView('profile')}>{currentUser.username}</button></h1>
      <div className="profile-stats">
        <h3>Followers: {currentUser.followers}</h3>
        <h3>Following: {currentUser.following}</h3>
      </div>
    </div>
  );
};
export default SideBarProfile;
