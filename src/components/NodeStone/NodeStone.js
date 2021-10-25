import { useState } from 'react';
import './NodeStone.scss';

import topTransition from '../../assets/img/nodestone/SectionTransition2 1.svg';
import bottomTransition from '../../assets/img/nodestone/SectionTransition2 2.svg'; 
import title from '../../assets/img/nodestone/NodestonesLogo 1.png';
import jewelLeft from '../../assets/img/nodestone/Amethyst-Left 1.png';
import jewelRight from '../../assets/img/nodestone/Aquamarine-Right 1.png';

import mintBtn from '../../assets/img/nodestone/mintBtn.svg';
import MinusBtn from '../../assets/img/nodestone/Minus.svg';
import PlusBtn from '../../assets/img/nodestone/Plus.svg';

export const NodeStone = () => {
    const [number, setNumber] = useState(1);

    return (
        <section className="nodeStone" id="nodeStone">
            <div className="nodeStone__topTransition">
                <img alt="top" src={ topTransition }></img>
            </div>
            <div className="nodeStone__bottomTransition">
                <img alt="top" src={ bottomTransition }></img>
            </div>
            <div className="nodeStone__main">
                <div className="nodeStone__main__jewelLeft">
                    <img alt="jewel" src={jewelLeft}></img>
                </div>
                <div className="nodeStone__main__jewelRight">
                    <img alt="jewel" src={jewelRight}></img>
                </div>

                <div className="nodeStone__main__mint">
                    <button className="nodeStone__main__mint__place">
                        <img src={mintBtn} alt="pic"></img>
                    </button>

                    <div className="nodeStone__main__mint__counter">
                        <button onClick={ () => setNumber(prev => prev - 1) }>
                            <img src={MinusBtn} alt="pic1"></img>
                        </button>
                        <div>
                            {number}
                        </div>
                        <button onClick={ () => setNumber(prev => prev + 1) }>
                            <img src={PlusBtn} alt="pic1"></img>
                        </button>
                    </div>
                </div>

                <div className="nodeStone__main__title">
                    <img alt="title" src={title}></img>
                </div>

                <div className="container">
                    <div className="nodeStone__main__desc">
                        Nodestones are the ultimate utility NFT to guide you through the nifty.io platform.
                    </div>

                    <div className="nodeStone__main__content">
                        Nodestones are randomly minted on the Ethereum blockchain using 39 possible traits. Nodestones place you into 1 of 5 realms and act as a future minting pass. There are also 5 1:1 Nodestones hidden in the mint. All Nodestones are minted randomly by Fair Distribution at 0.1 ETH
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NodeStone;