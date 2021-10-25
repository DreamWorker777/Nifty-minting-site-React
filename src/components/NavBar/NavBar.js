import './NavBar.scss';
import logo from '../../assets/img/nav/NiftyLogo 1.svg';
import discordIcon from '../../assets/img/nav/DiscordIcon 1.svg';
import openSeaIcon from '../../assets/img/nav/OpenSeaIcon-Blk 1.svg';
import twitterIcon from '../../assets/img/nav/TwitterIcon 1.svg';

export const NavBar = () => {
    return (
        <nav className="navBar">
            <div className="container">
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

                        <a href='#javascript' className="navBar__icons__text">
                            Trailer
                        </a>
                    </div>

                    <div className="navBar__dropDownMenu">
                        <button className="navBar__dropDownMenu__icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                        </button>
                        <div className="navBar__dropDownMenu__content">
                            <a href='#javascript'>Twitter</a>

                            <a href='#javascript'>Discord</a>

                            <a href='#javascript'>OpenSea</a>

                            <a href='#javascript'>WhitePaper</a>

                            <a href='#javascript'>Trailer</a>
                        </div>
                    </div>
                </div>

                <div className="navBar__btn">
                    <button className="navBar__btn__connect">
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;