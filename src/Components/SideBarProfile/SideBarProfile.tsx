import type { User } from "../../types/index.ts"

interface SideBarProfileProps {
    currentUser : User;
    onGoProfile : () => void;
}

const SideBarProfile = ({currentUser, onGoProfile} : SideBarProfileProps) => {
    return(
        <>
        <img src={currentUser.avatar} alt = {currentUser.username}/>
        <h1 onClick={onGoProfile}>{currentUser.username}</h1>
        <h3>{currentUser.followers}</h3>
        <h3>{currentUser.following}</h3>
        </>
    )
}

export default SideBarProfile;