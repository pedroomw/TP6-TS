import "./SideBarProfile.css"
import type { User } from "../../types/index.ts"

interface SideBarProfileProps {
    currentUser : User;
    onGoProfile : () => void;
}

const SideBarProfile = ({currentUser, onGoProfile} : SideBarProfileProps) => {
    return(
        <div className="sidebar-profile"> 
            <img src={currentUser.avatar} alt = {currentUser.username}/>
            <h1 onClick={onGoProfile}>{currentUser.username}</h1>
            <div className="profile-stats">
                <h3>Followers: {currentUser.followers}</h3>
                <h3>Following: {currentUser.following}</h3>
            </div>
        </div>
    )
}

export default SideBarProfile;