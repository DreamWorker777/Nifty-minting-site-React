import './Intro.scss';
import video from '../../assets/videos/HeroVid.mp4';

export const Intro = () => {
    return (
        <section className="intro">
            <div className="intro__video">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        </section>
    )
}

export default Intro;