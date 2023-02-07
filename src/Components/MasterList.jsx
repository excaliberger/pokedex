import { useEffect, useState } from "react";
import {filterPokesByType, filterPokesByWeakness, getPokemonStats } from "../helpers/pokedex.helpers";


function MasterList(props) {

    let [list, setList] = useState([]);

    let { id, num, name, img, type } = getPokemonStats(filterPokesByType(), filterPokesByWeakness());

    useEffect(() => {
        fetchPokes();
    })

    const fetchPokes = () => {
        fetch(
            `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`,
            { mode: "cors" }
        )
        .then((res) => res.json())
        .then((pokemon) => {
            setList(pokemon);
        }) 
        .catch ((err) => {console.error(err)})
    }

    function renderList() {
        return list.map((pokemon) => {
            return (<li key={id}>
                        {name}
                    </li>)
        })
    }; 

    return (
        <div>
            <ul>
                {renderList(list)}
            </ul>
        </div>
    )
}

export default MasterList;