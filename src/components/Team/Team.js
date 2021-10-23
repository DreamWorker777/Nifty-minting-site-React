import './Team.scss';
import back from '../../assets/img/team/back.png';

export const Team = () => {
    return (
        <section className="team">
            <div className="team__back">
                <img alt="back" src={ back }></img>
            </div>
        </section>
    )
}

export default Team;