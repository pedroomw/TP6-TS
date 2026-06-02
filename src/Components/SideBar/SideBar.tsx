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
    <button>Home</button>
    </section>
    )
}

export default SideBar