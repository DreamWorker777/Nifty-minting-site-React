import './Home.scss';
import NavBar from '../../components/NavBar/NavBar';
import Intro from '../../components/Intro/Intro';
import NodeStone from '../../components/NodeStone/NodeStone';
import Vision from '../../components/Vision/Vision';
import RoadMap from '../../components/RoadMap/RoadMap';
import Realm from '../../components/Realm/Realm';
import Team from '../../components/Team/Team';

export const Home = () => {
    return (
        <div className="container">            
            <NavBar />
            <Intro />
            <NodeStone />
            <Vision />
            <RoadMap />
            <Realm />
            <Team />
        </div>
    )
}

export default Home;