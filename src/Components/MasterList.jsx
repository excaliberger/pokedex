import { useEffect, useState } from "react";
import { filterPokesByName, filterPokesByTypeAndWeakness, getListOf, getPokemonStats } from "../helpers/pokedex.helpers";
import Panels from "./Panels";
import DetailWindow from './DetailWindow';
import SearchBar from './SearchBar'

function MasterList({ list }) {


    let [selectedPokemon, setSelectedPokemon] = useState({});
    let [filteredList, setFilteredList] = useState([]);
    let [searchCriteria, setSearchCriteria] = useState(["","",""])


    function setStateOnClick(singlePokemon) {
        setSelectedPokemon(singlePokemon);
    }

    useEffect(() => {
        let newList = filterPokesByTypeAndWeakness(list.pokemon, searchCriteria[1], "type");
        newList = filterPokesByTypeAndWeakness(newList, searchCriteria[2], "weaknesses");
        newList = filterPokesByName(newList, searchCriteria[0]);
        setFilteredList(newList);

    }, [searchCriteria]);

    function setStateAndDisplayDetails(pokemonIndex) {
        setStateOnClick(list.pokemon[pokemonIndex]);
        displayDetails(list.pokemon[pokemonIndex]);
    }

    function displaySearchBar(){
        return (
            <div className='padding20pixels' id='searchCriteriaContainer'>
                <SearchBar
                    list={list}
                    searchCriteria={searchCriteria}
                    setSearchCriteria={setSearchCriteria}
                    />
            </div>
        )
    }

    function displayDetails(singlePokemon) {
        return singlePokemon.id ?  (
                <div className="primaryInfoPadding">
                    <DetailWindow 
                        list={list}
                        filteredList={filteredList}
                        setFilteredList={setFilteredList}
                        {...singlePokemon}
                        setStateAndDisplayDetails={setStateAndDisplayDetails}
                        searchCriteria={searchCriteria}
                        setSearchCriteria={setSearchCriteria}
                    />
                </div>
                ) : <></>
        }
    
    function renderList(list) {
        return list && list.pokemon && filteredList.map((singlePokemon) => {
            return (
                <div key={singlePokemon.id} className="panel" onClick={() => setStateAndDisplayDetails(singlePokemon.id-1)} > 
                    <li>
                        <Panels searchCriteria={searchCriteria}
                                setSearchCriteria={setSearchCriteria} 
                                img={singlePokemon.img} 
                                weaknesses={singlePokemon.weaknesses}
                                name={singlePokemon.name} 
                                type={singlePokemon.type} 
                                num={singlePokemon.num} />
                    </li>
                </div>
            )
        })
    }; 


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
                <div className="flexStart bg" id="detailWindowContainer">
                    {displayDetails(selectedPokemon)}
                </div>
            </div>
        </div>)
}

export default MasterList;