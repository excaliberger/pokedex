import { useState, useEffect } from 'react';
import { list } from './MasterList';


function DetailWindow (props) {

    let [selectedPokemon, setSelectedPokemon] = useState({})

    return (
        <div>
            {selectedPokemon.name}
        </div>
    )
}

export default DetailWindow;