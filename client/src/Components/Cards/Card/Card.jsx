import './Card.css'
import { NavLink } from 'react-router-dom';

const Card = ({name, continent, flag, id}) => {
    return(
        <div className="Card">
            <img src={flag} alt="Cuntry Flag" />
            <h2>{`${name},`}</h2>
            <h3>{continent}</h3>
            
            <NavLink exact to={`/countries/${id}`}><button>Details</button></NavLink>
        </div>
    )
}

export default Card;