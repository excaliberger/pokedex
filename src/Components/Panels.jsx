import { useEffect, useState } from 'react';
import { getPokemonStats, filterPokesByType, filterPokesByWeakness} from '../helpers/pokedex.helpers'


function Panels({ id, name, type, num, img, weaknesses }) {

    function displayWeaknesses() {
        return weaknesses.join(", ")
    }

    function displayType() {
        if (type[1]) {
            return (
                <div  className="displayFlex">
                    <div className='flexStart'><h2 className=''>{num}</h2></div>
                    <div className='displayFlex'>                
                        <img className='masterListImage' src={img} />
                    </div>
                    <div className='primaryInfoPadding'>
                        <p>Name: {name}</p>
                        <p>Type:<br/> {type[0]}/{type[1]}</p>
                        <p>Weaknesses: <br/> {displayWeaknesses()}</p>
                    </div>
                </div>)
        } else if (type[1] === undefined) {
            return (
                <div  className="displayFlex flexEnd">
                    <div className='flexStart'><h2>{num}</h2></div>
                    <div className='displayFlex'>                
                        <img className='masterListImage' src={img} />
                    </div>
                    <div className='primaryInfoPadding'>
                        <p>Name: {name}</p>
                        <p>Type: <br/>{type}</p>
                        <p>Weaknesses: <br/> {displayWeaknesses()}</p>
                    </div>
                </div>
            )
            
        }
    }
   

    return (
        <div>
            <div>
                {displayType()}
            </div>
        </div>
    )

}


export default Panels;