import { useEffect, useState } from 'react';
import { filterPokesByTypeAndWeakness } from '../helpers/pokedex.helpers'


function Panels({ id, name, type, num, img, weaknesses, searchCriteria, setSearchCriteria }) {


    function displayTypeIcons(types) {
        return types.map((type, index) => {
            const typeImage = require(`../img/${type}.gif`); 
            return (
                <img onclick={(event) => {
                    
                }} key={`${index}icon`} className='panelTypeImages displayflex' src={typeImage}/>
            )
        });
    }



    function displayPanel() {
            return (
                <div  className="displayFlex">
                    <div ><h1 className='flexStart'>{num}</h1></div>
                    <div className='displayFlex'>                
                        <img className='masterListImage' src={img} />
                    </div>
                    <div className='primaryInfoPadding'>
                        <h2>{name}</h2>
                        <p>{displayTypeIcons(type)}</p>
                        <p>Weaknesses: <br/>{displayTypeIcons(weaknesses)}</p>
                    </div>
                </div>)
    }
   

    return (
        <div>
            <div>
                {displayPanel()}
            </div>
        </div>
    )

}


export default Panels;