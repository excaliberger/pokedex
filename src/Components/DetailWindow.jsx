import { filterPokesByTypeAndWeakness } from "../helpers/pokedex.helpers"

function DetailWindow ({setStateAndDisplayDetails, setSearchCriteria, searchCriteria, img, weaknesses, name, type, 
avg_spawns, candy, candy_count, egg, height, id, multipliers, 
spawn_chance, spawn_time, weight, next_evolution, prev_evolution, num, list, setFilteredList, filteredList}) {

    function displayPrevEvolutions() {
        return prev_evolution && prev_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                    <>
                        <img key={evolution.num} onClick={() => {setStateAndDisplayDetails(Number(evolution.num)-1)}} className=' boxShadowNone' display='block' src={evoIcon} /><br/>
                        <p>{evolution.name}</p>
                    </>
            )
        })
    }


    function displayNextEvolutions() {
        return next_evolution && next_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                    <>
                        <img key={evolution.num} onClick={() => {
                            setStateAndDisplayDetails(Number(evolution.num)-1)}}
                            className='boxShadowNone'
                            display='block'
                            src={evoIcon} /><br/>
                        <p>{evolution.name}</p>
                    </>
            )
        })
    }

    function displayTypesIcons(types) {
        return types.map((type) => {
            const typeImage = require(`../img/${type}.gif`);
            return (
                <img key={`${type}icon`}
                    onClick={(event) => {
                        console.log(type);
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria[1] = type;
                        setSearchCriteria([...newSearchCriteria]);
                        console.log(searchCriteria);
                    }

                    }
                    className='largerTypeImages'
                    src={typeImage}/>
            )
        });
    }

    function displayWeaknessIcons(types) {
        return types.map((type) => {
            const typeImage = require(`../img/${type}.gif`);
            return (
                <img key={`${type}icon`}
                    onClick={(event) => {
                        console.log(type);
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria[2] = type;
                        setSearchCriteria([...newSearchCriteria]);
                        console.log(searchCriteria);
                    }

                    }
                    className='largerTypeImages'
                    src={typeImage}/>
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
                    <table>
                        <tbody>
                            <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Name:</p>
                                </td>
                                <td className='detailInfoTd  boxShadow'>
                                    <p>{name}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd  boxShadow'>
                                    <p>Weight:</p>
                                </td>
                                <td className='detailInfoTd  boxShadow'>
                                    <p>{weight}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Average spawns:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                <p>{avg_spawns}</p>
                                </td>
                            </tr>
                            <tr className='boxShadowNone fakeTr'></tr>
                            <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Height:</p>
                                </td>
                                <td className='detailInfoTd  boxShadow'>
                                    <p>{height}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Candy:</p>
                                </td>
                                <td className='detailInfoTd  boxShadow'>
                                    <p>{candy}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Candy Count:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p>{candy_count}</p>
                                </td>
                            </tr>
                            <tr className='boxShadowNone fakeTr'></tr>
                            <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Type:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p className='displayFlex'>{displayTypesIcons(type)}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Spawn Time:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p>{spawn_time}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Multipliers:</p>
                                </td>
                                <td className='detailInfoTd  boxShadow'>
                                    <p>{multipliers}</p>
                                </td>
                            </tr>
                            <tr className='boxShadowNone fakeTr'></tr>
                            <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Spawn Chance:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p>{spawn_chance}</p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Egg:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p>{egg}</p>
                                </td>
                            </tr>
                            <tr className='boxShadowNone fakeTr'></tr>
                            <tr>
                                <td className='detailNameTd boxShadow'>
                                    <p>Weaknesses:</p>
                                </td>
                                <td className='detailInfoTd boxShadow'>
                                    <p className='displayFlex'>
                                        {displayWeaknessIcons(weaknesses)}
                                    </p>
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
                                <td className='detailNameTd boxShadow'>
                                    <p>Previous Evolution:</p>
                                </td>
                                <td className='displayFlex'>
                                    {displayPrevEvolutions()}
                                </td>
                                <td className='boxShadowNone fakeTd'></td>
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
    )
}

export default DetailWindow;