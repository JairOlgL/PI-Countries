import {useState, useEffect} from 'react';
import Cards from "../../Components/Cards/Cards"
import SearchBar from "../../Components/SearchBar/SearchBar";

const Principal = () => {
    const [countries, setCountries] = useState([]);
    const [page, setPage] = useState(0)
    useEffect(async() => {
        setCountries(await fetch('http://localhost:3001/countries')
        .then(data => data.json())
        .then(data => {
            console.log(data)
            return data
        }))
    }, [])
    if(countries.error) document.querySelectorAll('.pageButton').forEach(e => e.hidden = true);
    else document.querySelectorAll('.pageButton').forEach(e => e.hidden = false);
    return(
        <div>
            <SearchBar setter={setCountries} page={setPage} />
            {countries.error ? <h1>{countries.error}</h1> : <Cards countries={countries.slice(page, page+9)} />}
            <div className='pageButton'>
                <button onClick={() => {
                    if(countries.slice(page-9, page).length === 9) setPage(page-9)
                }}>{"<"}</button>
                <h1 style={{display: "inline", margin: "0 15px"}}>{(page+9)/9}</h1>
                <button onClick={() => {
                    if(countries.slice(page+9, page+18).length > 0) setPage(page+9)
                }}>{">"}</button>
            </div>
        </div>
    )
}

export default Principal;