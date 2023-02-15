import { useEffect, useState } from "react";
import { filterPokesByType, filterPokesByWeakness, getPokemonStats } from "../helpers/pokedex.helpers";
import Panels from "./Panels";
import DetailWindow from './DetailWindow';



function MasterList({ list }) {

    let [selectedPokemon, setSelectedPokemon] = useState({})

    // useEffect(() => {
        // console.log(selectedPokemon);
    // })

    function setStateOnClick(singlePokemon) {
        console.log(list);
        setSelectedPokemon(singlePokemon);
    }

    function setStateAndDisplayDetails(pokemonIndex) {
        setStateOnClick(list.pokemon[pokemonIndex]);
        displayDetails(list.pokemon[pokemonIndex]);
    }

    function displayDetails(singlePokemon) {

        return (
                <div className="primaryInfoPadding">
                    <DetailWindow 
                        {...singlePokemon}
                        setStateAndDisplayDetails={setStateAndDisplayDetails}
                    />
                </div>

            )
        }
    
    function renderList(list) {
        return list && list.pokemon && list.pokemon.map((singlePokemon) => {
            return (
                <div className="panel" onClick={() => setStateAndDisplayDetails(singlePokemon.id-1)} > 
                    <li key={singlePokemon.id}>
                        <Panels img={singlePokemon.img} weaknesses={singlePokemon.weaknesses} name={singlePokemon.name} type={singlePokemon.type} num={singlePokemon.num} />
                    </li>
                </div>
            )
        })
    }; 

    return (
        <div className="alignCenter">
            <div id="pokedexMasterListContainer">
                <ul>
                    {renderList(list)}
                </ul>
            </div>
            <div className="flexStart" id="detailWindowContainer">
                {displayDetails(selectedPokemon)}
            </div>
        </div>)
}

export default MasterList;