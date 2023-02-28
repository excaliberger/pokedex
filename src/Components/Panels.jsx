import { useEffect, useState } from 'react';
import { filterPokesByTypeAndWeakness } from '../helpers/pokedex.helpers'


function Panels({ id, name, type, num, img, weaknesses, searchCriteria, setSearchCriteria }) {

    function displayTypeIcons(types, position) {
        return types.map((type, index) => {
            const typeImage = require(`../img/${type}.gif`); 
            return (
                <img onClick={(event) => {
                    let newSearchCriteria = searchCriteria;
                    newSearchCriteria = ["","",""]; 
                    newSearchCriteria[position] = type;
                    setSearchCriteria([...newSearchCriteria]);
                }} key={`${index}icon`} className='panelTypeImages displayflex' src={typeImage}/>
            )
        });
    }

    // function displayTypeIcons(types) {
    //     return types.map((type, index) => {
    //         const typeImage = require(`../img/${type}.gif`); 
    //         return (
    //             <img onClick={(event) => {
    //                 let newSearchCriteria = searchCriteria;
    //                 newSearchCriteria[1] = type;
    //                 newSearchCriteria[2] = "";
    //                 setSearchCriteria([...newSearchCriteria]);
    //             }} key={`${index}icon`} className='panelTypeImages displayflex' src={typeImage}/>
    //         )
    //     });
    // }

    // function displayWeaknessIcons(types) {
    //     return types.map((type, index) => {
    //         const typeImage = require(`../img/${type}.gif`); 
    //         return (
    //             <img onClick={(event) => {
    //                 let newSearchCriteria = searchCriteria;
    //                 newSearchCriteria[2] = type;
    //                 newSearchCriteria[1] = "";
    //                 setSearchCriteria([...newSearchCriteria]);
    //             }} key={`${index}icon`} className='panelTypeImages displayflex' src={typeImage}/>
    //         )
    //     });
    // }


    function displayPanel() {
            return (
                <div  className="displayFlex">
                    <div ><h1 className='flexStart'>{num}</h1></div>
                    <div className='displayFlex'>                
                        <img className='masterListImage' src={img} />
                    </div>
                    <div className='primaryInfoPadding'>
                        <h2>{name}</h2>
                        <p>{displayTypeIcons(type, 1)}</p>
                        <p>Weaknesses: <br/>{displayTypeIcons(weaknesses, 2)}</p>
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