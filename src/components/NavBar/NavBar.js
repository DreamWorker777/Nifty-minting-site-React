import './NavBar.scss';
import logo from '../../assets/img/nav/NiftyLogo 1.svg';
import discordIcon from '../../assets/img/nav/DiscordIcon 1.svg';
import openSeaIcon from '../../assets/img/nav/OpenSeaIcon-Blk 1.svg';
import twitterIcon from '../../assets/img/nav/TwitterIcon 1.svg';

export const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="navBar__icons">
                <a href='#javascript' className="navBar__icons__logo">
                    <img src={logo} alt="logo"></img>
                </a>

                <div className="navBar__icons__wrapper">
                    <a href='#javascript' className="navBar__icons__social">
                        <img src={twitterIcon} alt="logo"></img>
                    </a>

                    <a href='#javascript' className="navBar__icons__social">
                        <img src={discordIcon} alt="logo"></img>
                    </a>

                    <a href='#javascript' className="navBar__icons__social">
                        <img src={openSeaIcon} alt="logo"></img>
                    </a>

                    <a href='#javascript' className="navBar__icons__text">
                        WhitePaper
                    </a>
                </div>
            </div>

            <div className="navBar__btn">
                <button className="navBar__btn__connect">
                    Connect Wallet
                </button>
            </div>
        </nav>
    )
}

export default NavBar;