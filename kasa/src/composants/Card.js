import '../styles/App.scss';
import { Link } from 'react-router-dom';
function Card(props) {
    const bg = {
        background: `no-repeat center / cover url(${props.imgCover})`
    }
    return (
        <Link to={'/fichelogement/'+ props.id} style={bg} className="card">
            <p>{props.titre}</p>
        </Link>
    )
}

export default Card