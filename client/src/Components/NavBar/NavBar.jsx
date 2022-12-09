import {NavLink} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return(
        <div className="NavBar" style={{display: "grid"}}>
            <div style={{placeSelf: "center"}}>
                <NavLink exact to='/countries'>Countries</NavLink>
                <NavLink to="/create">Create Activity</NavLink>
            </div>
        </div>
    )
}

export default NavBar;