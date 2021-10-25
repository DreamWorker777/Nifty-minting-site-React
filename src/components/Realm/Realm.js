import { useState, useEffect, useRef } from 'react';

import './Realm.scss';
import title from '../../assets/img/realm/Realms 1.png';
import back from '../../assets/videos/RealmBg.mp4';
import bottomTransition from '../../assets/img/realm/SectionTransition2 3.svg';
import card1 from '../../assets/img/realm/card1.svg';
import card2 from '../../assets/img/realm/card2.svg';
import card3 from '../../assets/img/realm/card3.svg';
import card4 from '../../assets/img/realm/card4.svg';
import card5 from '../../assets/img/realm/card5.svg';
import card6 from '../../assets/img/realm/card6.svg';

export const Realm = () => {
    const [isWidthBig, setIsWidthBig] = useState(true);
    const myRef = useRef();

    const checkAspect = () => {
        if( myRef.current.clientWidth > myRef.current.clientHeight)
            setIsWidthBig(true);
        else {
            setIsWidthBig(false);
        }
    }

    useEffect(() => {
        checkAspect();

        setInterval(checkAspect, 500);
    })

    return (
        <section className="realm" id="realm">
            <div className="realm__back" ref={myRef}>
                <div className={ isWidthBig ? 'fullWidth' : 'fullHeight' }>
                    <video autoPlay loop muted>
                        <source src={back} type="video/mp4"/>
                    </video>
                </div>
            </div>

            <div className="container">
                <div className="realm__title">
                    <img alt="pic" src={ title }></img>
                </div>
                <div className="realm__desc">
                    <span> What are the Realms? </span> These are the categories developed by the community with the assistance of and direction of the nifty.io team.
                </div>
                <div className="realm__contents">
                    <div>
                        <img alt="pic" src={card1}></img>
                    </div>
                    <div>
                        <img alt="pic" src={card2}></img>
                    </div>
                    <div>
                        <img alt="pic" src={card3}></img>
                    </div>
                    <div>
                        <img alt="pic" src={card4}></img>
                    </div>
                    <div>
                        <img alt="pic" src={card5}></img>
                    </div>
                    <div>
                        <img alt="pic" src={card6}></img>
                    </div>
                </div>
            </div>

            <div className="realm__bottomTransition">
                <img alt="top" src={ bottomTransition }></img>
            </div>
        </section>
    )
}

export default Realm;