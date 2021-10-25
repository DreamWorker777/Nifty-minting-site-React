import { useState } from 'react';

import './Trailer.scss';
import back from '../../assets/img/trailer/back.png';
import bottom from '../../assets/img/trailer/bottom.svg';
import descText from '../../assets/img/trailer/desc.svg';
import titleText from '../../assets/img/trailer/title.svg';
import playBtn from '../../assets/img/trailer/playBtn.svg';
import video from '../../assets/videos/Nodestone Trailer.mp4';

export const Trailer = () => {
    const [show, setShow] = useState(false);

    return (
        <section className="trailer" id="trailer">
            {
                !show ? (
                    <div>
                        <div className="trailer__back">
                            <img src={back} alt="pic"></img>
                        </div>

                        <div className="trailer__title">
                            <img src={titleText} alt="text"></img>
                        </div>

                        <div className="trailer__desc">
                            <img src={descText} alt="text"></img>
                        </div>

                        <div className="trailer__playBtn">
                            <button onClick={() => setShow(true)}> <img alt="btn" src={playBtn}></img> </button>
                        </div>

                        <div className="trailer__bottom">
                            <img src={bottom} alt="bottom"></img>
                        </div>
                    </div>
                ) : (
                    <div className="trailer__video">
                        <video className="trailer__video" controls onEnded={() => { setShow(false); }}>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                )
            }
        </section>
    )
}

export default Trailer;