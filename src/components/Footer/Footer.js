import './Footer.scss';

import logo from '../../assets/img/footer/NiftyLogoWhite 1.svg';

import discordIcon from '../../assets/img/footer/DiscordIcon-White 1.svg';
import openSeaIcon from '../../assets/img/footer/OpenSeaIcon-White 1.svg';
import twitterIcon from '../../assets/img/footer/TwitterIcon-White 1.svg';
import lockerIcon from '../../assets/img/footer/locker.svg';

import back from '../../assets/img/team/back.png';

export const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                {/* <div className="footer__back">
                    <img alt="back" src={ back }></img>
                </div> */}

                <div className="footer__logo">
                    <img alt="logo" src={logo}></img>
                </div>

                <div className="footer__links">
                    <div className="footer__links__icons">
                        <a href="#javascript;"><img src={twitterIcon} alt="logo"></img></a>
                        <a href="#javascript;"><img src={discordIcon} alt="logo"></img></a>
                        <a href="#javascript;"><img src={openSeaIcon} alt="logo"></img></a>
                    </div>

                    <div className="footer__links__first">
                        <a href="#javascript;">Nodestones</a>
                        <a href="#javascript;">Our Vision</a>
                        <a href="#javascript;">Roadmap</a>
                    </div>

                    <div className="footer__links__second">
                        <a href="#javascript;">Realms</a>
                        <a href="#javascript;">Team</a>
                        <a href="#javascript;">Smart Contract</a>
                    </div>

                    <div className="footer__links__third">
                        <a href="#javascript;" className="disable">Knights of the Ledger <img alt="iconpic" src={lockerIcon}></img></a>
                        <a href="#javascript;" className="disable">Ex Machina <img alt="iconpic" src={lockerIcon}></img></a>
                        <a href="#javascript;">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;