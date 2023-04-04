import { filterPokesByTypeAndWeakness } from "../helpers/pokedex.helpers"

function DetailWindow ({setStateAndDisplayDetails, setSearchCriteria, searchCriteria, img, weaknesses, name, type, 
avg_spawns, candy, candy_count, egg, height, id, multipliers, 
spawn_chance, spawn_time, weight, next_evolution, prev_evolution, num, list, setFilteredList, filteredList}) {

    function displayMultipliers() {
        if (multipliers) {
            return multipliers.join(", ");
        } else if (multipliers === null) {
            return;
        }
        
    }

    function displayPrevEvolutions() {
        return prev_evolution && prev_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                    <div key={evolution.num}>
                        <img onClick={() => 
                            {setStateAndDisplayDetails(Number(evolution.num)-1)}} 
                            className='boxShadowNone' 
                            display='flex' 
                            src={evoIcon} />
                        <p>{evolution.name}</p>
                    </div>
            )
        })
    }


    function displayNextEvolutions() {
        return next_evolution && next_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                    <div key={evolution.num}>
                        <img onClick={() => {
                            setStateAndDisplayDetails(Number(evolution.num)-1)}}
                            className='boxShadowNone'
                            display='flex'
                            src={evoIcon} />
                        <p>{evolution.name}</p>
                    </div>
            )
        })
    }

    function displayTypeIcons(types, position) {
        return types.map((type, index) => {
            const typeImage = require(`../img/${type}.gif`); 
            return (
                <img onClick={(event) => {
                    let newSearchCriteria = searchCriteria; 
                    newSearchCriteria[position] = type;
                    setSearchCriteria([...newSearchCriteria]);
                }} key={`${index}icon`} className='panelTypeImages displayflex' src={typeImage}/>
            )
        });
    }


    return (
        <div id='detailWindowContainer'>
            <div>
                <div>
                    <img className="detailWindowPokemonImg" src={img} />
                </div>
                <div>
                    <div className="displayFlex">
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Name:</p>
                                    </td>
                                    <td className='detailInfoTd  boxShadow'>
                                        <p>{name}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Height:</p>
                                    </td>
                                    <td className='detailInfoTd  boxShadow'>
                                        <p>{height}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Type:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p className='displayFlex'>{displayTypeIcons(type)}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Weaknesses:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p className='displayFlex'>
                                            {displayTypeIcons(weaknesses)}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="displayFlex">
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd  boxShadow'>
                                        <p>Weight:</p>
                                    </td>
                                    <td className='detailInfoTd  boxShadow'>
                                        <p>{weight}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Average spawns:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                    <p>{avg_spawns}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Candy:</p>
                                    </td>
                                    <td className='detailInfoTd  boxShadow'>
                                        <p>{candy}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Candy Count:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p>{candy_count}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Spawn Time:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p>{spawn_time}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Multipliers:</p>
                                    </td>
                                    <td className='detailInfoTd  boxShadow'>
                                        <p>{displayMultipliers(multipliers)}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="displayFlex">
                        <table>
                            <tbody>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Spawn Chance:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p>{spawn_chance}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='detailNameTd boxShadow'>
                                        <p>Egg:</p>
                                    </td>
                                    <td className='detailInfoTd boxShadow'>
                                        <p>{egg}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Previous Evolution:</p>
                                </td>
                                <td className='displayFlex'>
                                    {displayPrevEvolutions()}
                                </td>
                                </tr>
                                <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Next Evolution:</p>
                                </td>
                                <td className='displayFlex'>
                                    {displayNextEvolutions()}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default DetailWindow;