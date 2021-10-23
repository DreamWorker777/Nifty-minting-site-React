import './Intro.scss';
import video from '../../assets/videos/HeroVid.mp4';

export const Intro = () => {
    return (
        <section className="intro">
            <video autoPlay>
                <source src={video} type="video/mp4"/>
            </video>
        </section>
    )
}

export default Intro;