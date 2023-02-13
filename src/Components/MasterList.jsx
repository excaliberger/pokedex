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
        setSelectedPokemon(singlePokemon);
    }

    function setStateAndDisplayDetails(singlePokemon) {
        setStateOnClick(singlePokemon);
        displayDetails(selectedPokemon);
    }

    function displayDetails(singlePokemon) {

        return (
                <div className="primaryInfoPadding">
                    <DetailWindow 
                    {...singlePokemon}
                    />
                </div>

            )
        }
    
    function renderList(list) {
        return list && list.pokemon && list.pokemon.map((singlePokemon) => {
            
            return (
                <div className="panel" onClick={() => setStateAndDisplayDetails(singlePokemon)} > 
                    <li key={singlePokemon.id}>
                        <Panels img={singlePokemon.img} weaknesses={singlePokemon.weaknesses} name={singlePokemon.name} type={singlePokemon.type} num={singlePokemon.num} />
                    </li>
                </div>
            )
        })
    }; 

    return (
        <div className="displayFlex">
            <div id="pokedexMasterListContainer">
                <ul>
                    {renderList(list)}
                </ul>
            </div>
            <div className="flexStart">
                {displayDetails(selectedPokemon)}
            </div>
        </div>)
}

export default MasterList;