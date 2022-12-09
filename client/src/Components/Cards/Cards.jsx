//import { useState, useEffect } from "react"
import Card from './Card/Card.jsx'

const Cards = ({countries}) => {
    return(
        <div style={{display: "Grid", gridTemplateColumns: "1fr 1fr 1fr"}}>
            {countries ? countries.map((e) => <Card key={e.id} flag={e.flag} name={e.name} continent={e.continent} id={e.id}/>): <h1>Cargando xd</h1>}
        </div>
    )
}

export default Cards;