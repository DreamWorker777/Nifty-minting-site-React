import './RoadMap.scss';

import roadMapLogo from '../../assets/img/roadmap/1.gif';
import platformRoadMapLogo from '../../assets/img/roadmap/10.png';
import bottomTransition from '../../assets/img/roadmap/SectionTransition2 2.svg';
import mainBack from '../../assets/img/roadmap/back1.png';
import platformBack from '../../assets/img/roadmap/back2.png';
import platformSide from '../../assets/img/roadmap/platform_side.png';

export const RoadMap = () => {
    const roadMapInfo = [
        {
            title: 'Launch',
            content: 'The 16,665 Nodestones are designed to be the ultimate utility NFT token. There are rarities and through properties they place you into 1 of 5 realms. Soon you will use your Nodestones to mint a Knight of the Ledger or burn it to become an Ex Machina. Nodestones left unburnt will be your whitelabel pass to future projects developed by your realm. We are aiming for October 29th for the launch of Nodestones.',
        },
        {
            title: '25% Sold',
            content: 'A Charity contribution helping underprivileged children.',
        },
        {
            title: '50% Sold',
            content: 'A chance to win a physical real world Nodestone for the most active members on Twitter and Discord.',
        },
        {
            title: '65% Sold',
            content: 'Member-Exclusive Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.',
        },
        {
            title: '75% Sold',
            content: 'Locked Set of Nodestones will be collected and airdropped to 1 luck winner!',
        },
        {
            title: '100% Sold',
            content: 'The Quest for Truth begins. The Platform Roadmap is unlocked.',
        }
    ];

    const platRoadMapInfo = [
        {
            content: 'Knights of the Ledger and Ex Machina will be minted using your Nodestones.',
        },
        {
            content: 'Realms are established with community wallets for project development.',
        },
        {
            content: 'Activate Nodestone Set Benefits.',
        },
        {
            content: 'Further Development of the storyline to The Ledger.',
        },
        {
            content: 'Initial Projects are seeded to the Realms for development.',
        },
        {
            content: 'Real-world, physical tie-in with monetization models outside the development of NFT collectibles. ',
        },
        {
            content: 'Metaverse and digital asset creation.',
        },
        {
            content: 'NFT business platform with market market analytics, rarity details, and more.',
        }
    ];

    return (
        <section className="roadMap" id="roadMap">
            <div className="roadMap__bottomTransition">
                <img alt="top" src={ bottomTransition }></img>
            </div>

            <div className="roadMap__main">
                <div className="roadMap__main__title">
                    <img alt="title" src={roadMapLogo}></img>
                </div>    

                <div className="container">
                    <div className="roadMap__main__back">
                        <img alt="back" src={mainBack}></img>
                    </div>

                    <div className="roadMap__main__titleDesc">
                        Nifty.io is a platform built differently than other projects.
                    </div>
                    <div className="roadMap__main__desc">
                        This is a long-term, community-wide effort. Nodestones are your access to projects emerging from the nifty.io ecosystem. To learn about the vision we recommend reading the whitepaper. 
                    </div>
                    {
                        roadMapInfo.map((item, index) => (
                            <div className="roadMap__main__content" key={index}>
                                <div className="roadMap__main__content__title">
                                    {item.title}
                                </div>
                                <div className="roadMap__main__content__content">
                                    {item.content}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="roadMap__platform">

                <div className="roadMap__main__title">
                    <div className="first">PLATFORM</div>
                    <div className="second">ROADMAP</div>
                    <img alt="title" src={platformSide}></img>
                </div>
                <div className="container">
                    <div className="roadMap__main__titleDesc">
                        Nifty.io is a platform built differently than other projects.
                    </div>
                    <div className="roadMap__main__desc">
                        This is a long-term, community-wide effort. Nodestones are your access to projects emerging from the nifty.io ecosystem. To learn about the vision we recommend reading the whitepaper. 
                    </div>

                    <div className="roadMap__platform__contentWrapper">
                        <div className="roadMap__platform__contentWrapper__back">
                            <img alt="back" src={platformBack}></img>
                        </div>
                        {
                            platRoadMapInfo.map((item, index) => (
                                <div className="roadMap__main__content" key={index}>
                                    <div className="roadMap__main__content__content">
                                        {item.content}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RoadMap;