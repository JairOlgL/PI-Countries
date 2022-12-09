import './SearchBar.css'

const SearchBar = ({setter}) => {
    return(
        <div className='Search'>
            <input type="text" name="" id="" />
            <button onClick={async() => {
                const input = document.querySelector('input').value;
                setter(await fetch(`http://localhost:3001/countries?name=${input}`)
                .then(data => data.json())
                .then(data => {
                    
                    return data;
                }))
            }}>Search</button>
        </div>
    )
}

export default SearchBar;