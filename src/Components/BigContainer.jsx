import { useEffect, useState } from "react";
import { filterPokesByType, filterPokesByWeakness, getPokemonStats } from "../helpers/pokedex.helpers";
import DetailWindow from "./DetailWindow";
import SearchCriteria from "./SearchCriteria";
import MasterList from "./MasterList";


function BigContainer(props) {

    return (
        <div>
            <div>
                <div id='searchCriteriaContainer'>
                    <SearchCriteria />
                </div>
            </div>
            <div id="displayFlex">
                <div id='pokemonMasterListContainer'>
                    <MasterList />
                </div>
                <div id='detailWindowContainer'>
                    <DetailWindow />
                </div>
            </div>
        </div>
    )


}




export default BigContainer;