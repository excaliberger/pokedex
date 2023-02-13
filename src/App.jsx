import logo from './logo.svg';
import './App.css';
import './global.css'
// import SearchCriteria from './Components/SearchCriteria';
import MasterList from './Components/MasterList';
import { useEffect, useState } from 'react';
import { getPokemonStats, filterPokesByType, filterPokesByWeakness} from './helpers/pokedex.helpers'

function App(props) {


  let [searchPokes, setSearchPokes] = useState("");
  let [list, setList] = useState({ });

  useEffect(() => {
    setList(fetchPokes);
  }, [])

  const fetchPokes = () => {
    fetch(
        'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
        { mode: "cors" }
    )
    .then ((res) =>  {
        return res.json();
    })
    .then((pokemon) => {
        setList(pokemon);
    }) 
    .catch ((err) => {console.error(err)})
  }

  return (
    <div>
    {/* <div>
        <div id='searchCriteriaContainer'>
            <SearchCriteria />
        </div>
    </div> */}
    <div className="displayFlex">
        <div id='pokemonMasterListContainer'>
            <MasterList list={list} />
        </div>

    </div> 
    </div>
  );
}

export default App;



