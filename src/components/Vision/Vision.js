import './Vision.scss';

import title from '../../assets/img/vision/Our-Vision 1.png';
import sidePic from '../../assets/img/vision/ExMachinaBg 1.png';
import bottomTransition from '../../assets/img/vision/SectionTransition2 3.svg';

export const Vision = () => {
    return (
        <section className="vision">
            <div className="vision__sidePic">
                <img alt="pic" src={sidePic}></img>
            </div>

            <div className="vision__bottom">
                <img alt="pic" src={bottomTransition}></img>
            </div>

            <div className="vision__main container">
                <div className="vision__main__title">
                    <img alt="pic" src={title}></img>
                </div>

                <div className="vision__main__desc">
                    This is where it begins. For you, for us, for humanity. We’re inventing the future together.
                </div>

                <div className="vision__main__content">
                    <p>Nifty.io is the first community driven NFT development platform of this type and scope. This is a long-term project with many facets under development centered around the community; the Nodestone NFT holders. We are tying together some of the greatest achievements and will be building some of the most ambitious projects to date.</p>
                    <p>We began the nifty.io project to sustain the long-term potential of NFTs for the amazing community. We are coordinating efforts to develop aspects we see missing from current projects. To do this, we have designed nifty.io as a platform that will act as an incubator for projects in 6 categories we call realms.</p>
                    <p>It starts with minting a Nodestone. We call Nodestones the ultimate utility NFT token. Our goal is to give you ongoing value as long as you hold it. To reach our collective potential join the community.</p>
                </div>
            </div>
        </section>
    )
}

export default Vision;