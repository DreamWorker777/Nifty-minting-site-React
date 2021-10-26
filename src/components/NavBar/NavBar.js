import './NavBar.scss';
import logo from '../../assets/img/nav/NiftyLogo 1.svg';
import discordIcon from '../../assets/img/nav/DiscordIcon 1.svg';
import openSeaIcon from '../../assets/img/nav/OpenSeaIcon-Blk 1.svg';
import twitterIcon from '../../assets/img/nav/TwitterIcon 1.svg';
import { Link } from 'react-scroll'
import {NotificationManager} from 'react-notifications';

export const NavBar = () => {
    const connectWallet = () => {
        NotificationManager.info('Wallet connection currently unavailable! Please retry on launch date.');
    }

    return (
        <nav className="navBar">
            <div className="container">
                <div className="navBar__icons">
                    <a href='#javascript' className="navBar__icons__logo">
                        <img src={logo} alt="logo"></img>
                    </a>

                    <div className="navBar__icons__wrapper">
                        <a href='https://twitter.com/nifty_io' className="navBar__icons__social">
                            <img src={twitterIcon} alt="logo"></img>
                        </a>

                        <a href='http://discord.gg/nifty' className="navBar__icons__social">
                            <img src={discordIcon} alt="logo"></img>
                        </a>

                        <a href='https://opensea.io/collection/nodestones' className="navBar__icons__social">
                            <img src={openSeaIcon} alt="logo"></img>
                        </a>

                        <a href='https://medium.com/@nifty.io/the-new-renaissance-2ba6b029e88b' className="navBar__icons__text">
                            WhitePaper
                        </a>

                        <Link
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            to="trailer"
                            className="navBar__icons__text"
                            offset={-50}
                        >
                            Trailer
                        </Link>
                    </div>

                    <div className="navBar__dropDownMenu">
                        <button className="navBar__dropDownMenu__icon">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                        </button>
                        <div className="navBar__dropDownMenu__content">
                            <a href='https://twitter.com/nifty_io'>Twitter</a>

                            <a href='http://discord.gg/nifty'>Discord</a>

                            <a href='https://opensea.io/collection/nodestones'>OpenSea</a>

                            <a href='https://medium.com/@nifty.io/the-new-renaissance-2ba6b029e88b'>WhitePaper</a>

                            <Link
                                smooth={true} 
                                duration={500} 
                                spy={true} 
                                to="trailer"
                                offset={-50}
                            >
                                Trailer
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="navBar__btn">
                    <button className="navBar__btn__connect" onClick={ () => connectWallet() }>
                        Connect Wallet
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;