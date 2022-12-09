import './Card.css'

const Card = ({name, region, flag}) => {
    return(
        <div className="Card">
            <img src={flag} alt="Cuntry Flag" />
            <h2>{`${name},`}</h2>
            <h3>{region}</h3>
            <button >Details</button>
        </div>
    )
}

export default Card;