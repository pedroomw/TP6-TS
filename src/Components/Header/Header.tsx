import './Header.css'

const Header = () => {
    return(
        <header>
        <img src="src/assets/LogoInstagram.png" alt="jhsadjhsad" />
        <form><img src="src/assets/Icons/SearchIcon.svg" alt="" /><input type="text" placeholder = "Username, hashtag and story search"/></form>
        <nav>
            <img src="src/assets/Icons/SettingsIcon.svg" alt="" />
            <img src="src/assets/Icons/CameraIcon.svg" alt="" />
            <img src="src/assets/Icons/DMIcon.svg" alt="" />   
        </nav>
        
        <button></button>
        </header>
    )
}

export default Header