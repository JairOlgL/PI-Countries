import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Details.css'

const Details = () => {
    const [country, setCountry] = useState({})
    const {idCountry} = useParams();
    useEffect(async() => {
        setCountry(await fetch(`http://localhost:3001/countries/${idCountry}`).then(data => data.json()))
        console.log(country)
    }, [])
    return(
        <div className="Details">
            <img src={country.flag} alt="" />
            <h1>{country.name}, {country.continent}</h1>
            <h2>CCA3: <h3 style={{display: "inline"}}>{country.id}</h3></h2>
            <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
                <h2>Capital: <h3>{country.capital}</h3></h2>
                <h2>Subregion: <h3>{country.region}</h3></h2>
                <h2>Population: <h3>{country.population ? country.population.toLocaleString() : ""}</h3></h2>
                <h2>In {country.name} you can: <h3>{country.activities ? country.activities.map(e => `${e.name}, `) : ""}</h3></h2>
            </div>
        </div>
    )
}

export default Details;