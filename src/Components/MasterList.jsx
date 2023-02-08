import { useEffect, useState } from "react";
import { filterPokesByType, filterPokesByWeakness, getPokemonStats } from "../helpers/pokedex.helpers";
import Panels from "./Panels";


function MasterList({ list }) {

    function renderList(list) {
        return list.pokemon.map((pokemon) => {
            return (
                <li key={pokemon.id}>
                    {pokemon.name}
                </li>);
        })
    }; 
    
    console.log(list);

    return (
        <div>
            <ul>
                {renderList(list)}
            </ul>
        </div>
    )
}

export default MasterList;