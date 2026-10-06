import "./SideBarProfile.css"
import type { User } from "../../types/index.ts"
import { useApp } from '../../context/AppContext';

const SideBarProfile = ()c => {
    const {setCurrentView, currentUser} = useApp();
    return(
        <div className="sidebar-profile"> 
            <img src={currentUser.avatar} alt = {currentUser.username}/>
            <h1 onClick={setCurrentView('profile')}>{currentUser.username}</h1>
            <div className="profile-stats">
                <h3>Followers: {currentUser.followers}</h3>
                <h3>Following: {currentUser.following}</h3>
            </div>
        </div>
    )
}

export default SideBarProfile;