import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Create from './Pages/Create Activity/Create';
import Details from './Pages/Details/Details';
import Principal from './Pages/Principal/Principal';

function App() {
  return (
    <div className="App">
      <Route exact path="/countries">
        <NavBar />
        <Principal />
      </Route>
      <Route exact path="/countries/:idCountry">
        <NavBar />
        <Details />
      </Route>
      <Route exact path="/create">
        <NavBar />
        <Create />
      </Route>
    </div>
  );
}

export default App;
