import logo from './logo.svg';
import './App.css';
import './global.css'
import MasterList from './Components/MasterList';
import { useEffect, useState } from 'react';

function App() {

  let [list, setList] = useState({});

  useEffect(() => {
    fetchPokes();
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
    <div className="displayBlock">
        <div>
            {list.pokemon ? <MasterList list={list} /> : <></>}
        </div>
    </div> 
    </div>
  );
}

export default App;



