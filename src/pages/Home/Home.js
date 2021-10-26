import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import NodeStone from '../../components/NodeStone/NodeStone';
import Gallery from '../../components/Gallery/Gallery';
import Trailer from '../../components/Trailer/Trailer';
import Vision from '../../components/Vision/Vision';
import RoadMap from '../../components/RoadMap/RoadMap';
import Realm from '../../components/Realm/Realm';
import Team from '../../components/Team/Team';
import Footer from '../../components/Footer/Footer';

export const Home = () => {
    return (
        <div className="home">
            <NavBar />
            <Intro />
            <NodeStone />
            <Gallery />
            <Trailer />
            <Vision />
            <RoadMap />
            <Realm />
            <Team />
            <Footer />
        </div>
    )
}

export default Home;