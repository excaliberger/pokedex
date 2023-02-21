import { useEffect, useState } from "react";
import { filterPokesByType, filterPokesByWeakness, getListOf, getPokemonStats } from "../helpers/pokedex.helpers";
import Panels from "./Panels";
import DetailWindow from './DetailWindow';
import SearchBar from './SearchBar'

function MasterList({ list }) {

    console.log("first list", list);

    let [selectedPokemon, setSelectedPokemon] = useState({});
    let [filteredList, setFilteredList] = useState([]);

    function setStateOnClick(singlePokemon) {
        console.log("setStateOnClick",list);
        setSelectedPokemon(singlePokemon);
    }

    const handleChange = (event) => {
        setFilteredList(event.target.value)
    }

    function setStateAndDisplayDetails(pokemonIndex) {
        console.log("pokemon index", pokemonIndex);
        setStateOnClick(list.pokemon[pokemonIndex]);
        displayDetails(list.pokemon[pokemonIndex]);
    }

    function displaySearchBar(){
        return (
            <div>
                <SearchBar
                    className='padding20pixels'
                    list={list}
                    onChange={handleChange} 
                    />
            </div>
        )
    }

    function displayDetails(singlePokemon) {
        return singlePokemon.id ?  (
                <div className="primaryInfoPadding">
                    {console.log(singlePokemon)}
                    <DetailWindow 
                        {...singlePokemon}
                        setStateAndDisplayDetails={setStateAndDisplayDetails}
                    />
                </div>
                ) : <></>
        }
    
    function renderList(list) {
        return list && list.pokemon && list.pokemon.map((singlePokemon) => {
            return (
                <div key={singlePokemon.id} className="panel" onClick={() => setStateAndDisplayDetails(singlePokemon.id-1)} > 
                    <li>
                        <Panels img={singlePokemon.img} weaknesses={singlePokemon.weaknesses} name={singlePokemon.name} type={singlePokemon.type} num={singlePokemon.num} />
                    </li>
                </div>
            )
        })
    }; 

    filterPokesByType(list, filteredList);
    filterPokesByWeakness(list, filteredList);
    renderList(filteredList);

    return (
        <div className="displayBlock">
            <div>
                <div>
                    {displaySearchBar()}
                </div>
            </div>
            <div className="flexStart">
                <div id="pokedexMasterListContainer">
                    <ul>
                        {renderList(list)}
                    </ul>
                </div>
                <div className="flexStart" id="detailWindowContainer">
                    {displayDetails(selectedPokemon)}
                </div>
            </div>
        </div>)
}

export default MasterList;