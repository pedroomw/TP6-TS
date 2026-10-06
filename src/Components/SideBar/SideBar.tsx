import './SideBar.css'
import SideBarProfile from "../SideBarProfile/SideBarProfile.tsx"
import type { User } from "../../types/index.ts"
import { useApp } from '../../context/AppContext.js';

const SideBar = () =>
    {
        const {handleGoBack} = useApp()
        return(
        <section className="sidebar">
        <SideBarProfile/>
        <button onClick = {handleGoBack}>Home</button>
        <button>Discover</button>
        <button>Direct Messages</button>
        <button>Settings</button>
        </section>
        )
    }

export default SideBar