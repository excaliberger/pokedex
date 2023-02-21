import { useState, useEffect } from 'react';
import { list } from './MasterList';


function DetailWindow ({setStateAndDisplayDetails, img, weaknesses, name, type, 
avg_spawns, candy, candy_count, egg, height, id, multipliers, 
spawn_chance, spawn_time, weight, next_evolution, prev_evolution, num}) {

    function displayWeaknesses() {
        return weaknesses.join(", ")
    }

    function displayType() {
        return type.join(" / ")
    }

    function displayPrevEvolutions() {
        console.log("full object", next_evolution);
        return prev_evolution && prev_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                <div key={evolution.num} onClick={() => {setStateAndDisplayDetails(Number(evolution.num)-1)}} className='evoPadding'>
                    <img src={evoIcon} /><br/>
                    <p>{evolution.name}</p>
                </div>
            )
        })
    }


    function displayNextEvolutions() {
        console.log("full object", next_evolution);
        return next_evolution && next_evolution.map((evolution) => {
            let evoIcon = require(`../img/${evolution.num}.png`)
            return (
                <div key={evolution.num} onClick={() => {setStateAndDisplayDetails(Number(evolution.num)-1)}} className='evoPadding'>
                    <img src={evoIcon} /><br/>
                     <p>{evolution.name}</p>
                </div>
            )
        })
    }

    return (
        <div className='flexStart' id='detailWindowContainer'>
            <div>
                <div>
                    <img className="detailWindowPokemonImg" src={img} />
                </div>
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <p>name:</p>
                            </td>
                            <td>
                                <p>{name}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>height:</p>
                            </td>
                            <td>
                                <p>{height}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>weight:</p>
                            </td>
                            <td>
                                <p>{weight}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>type:</p>
                            </td>
                            <td>
                                <p>{displayType()}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>weaknesses:</p>
                            </td>
                            <td>
                                <p>{displayWeaknesses()}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>egg:</p>
                            </td>
                            <td>
                                <p>{egg}</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='detailWindowPadding'>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p>average spawns:</p>
                        </td>
                        <td>
                            <p>{avg_spawns}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>candy:</p>
                        </td>
                        <td>
                            <p>{candy}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>candy count:</p>
                        </td>
                        <td>
                            <p>{candy_count}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <p>previous evolution:</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='displayFlex'>
                            {displayPrevEvolutions()}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        <div className='displayFlex'>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>multipliers:</p>
                            </td>
                            <td>
                                <p>{multipliers}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>spawn chance:</p>
                            </td>
                            <td>
                                <p>{spawn_chance}</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>spawn time:</p>
                            </td>
                            <td>
                                <p>{spawn_time}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <p>next evolution:</p>
                            </td>
                        </tr>
                        <tr>
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