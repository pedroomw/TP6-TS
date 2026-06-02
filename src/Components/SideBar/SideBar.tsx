import './SideBar.css'
import SideBarProfile from "../SideBarProfile/SideBarProfile.tsx"
import type { User } from "../../types/index.ts"

interface SideBarProps {
    currentUser : User;
    onGoProfile : () => void;
    onGoFeed : () => void;
}

const SideBar = ({currentUser, onGoProfile, onGoFeed} : SideBarProps) =>
{
    return(
    <section className="sidebar">
    <SideBarProfile
    currentUser = {currentUser}
    onGoProfile = {onGoProfile}
    />
    <button onClick = {onGoFeed}>Home</button>
    <button>Discover</button>
    <button>Direct Messages</button>
    <button>Settings</button>
    </section>
    )
}

export default SideBar