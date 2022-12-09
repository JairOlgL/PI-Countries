import './Create.css'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

/*const countries = async() => {
    const countriesList = await fetch('http://localhost:3001/countries').then(data => data.json())
    return countriesList;
}*/

const Create = () => {
    const [list, setList] = useState([])
    const [formValues, setFormValues] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "spring",
        countries: []
    })
    useEffect(async() => {
        setList(await fetch('http://localhost:3001/countries').then(data => data.json()))
    }, [])
    //if(!(formValues.name && formValues.difficulty && formValues.duration && formValues.season && formValues.countries)) document.querySelector('button').disabled = true;
    return(
        <div>
            <div className="Create">
                <h3>Activity name:</h3>
                <input onChange={(e) => {
                    if(!e.target.value){
                        e.target.style = "border-color: #f00";
                        document.querySelector('button').disabled = true;
                    }
                    else setFormValues({...formValues, name: e.target.value})
                }} type="text" />
                <h3>Difficulty:</h3>
                <input min={1} max={5} onChange={(e) => {setFormValues({...formValues, difficulty: e.target.value})}} type="number"/>
                <h3>Time in hours:</h3>
                <input min={1} max={24} onChange={(e) => {setFormValues({...formValues, duration: e.target.value})}} type="number" />
                <h3>Season:</h3>
                <select onChange={(e) => {setFormValues({...formValues, season: e.target.value})}}>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                </select>
                <h3>Countries:</h3>
                <select onChange={(e) => {
                    if(!(formValues.countries.includes(e.target.value))) setFormValues({...formValues, countries: [...formValues.countries, e.target.value]});
                }}>{list.map(e => <option key={e.id} value={e.id} >{e.name}</option>)}</select>
                <h3>Countries selected: </h3>
                <h3>{formValues.countries.map(e => ` ${e} `)}</h3>
            </div>
            <NavLink exact to={"/countries"}>
                <button onClick={async () => {
                await fetch('http://localhost:3001/activities', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formValues)
                });
                console.log(formValues)
            }} style={{width: "20%"}}>Send</button></NavLink>
        </div>
    )
}

export default Create;