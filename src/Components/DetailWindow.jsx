import { useState, useEffect } from 'react';
import { list } from './MasterList';


function DetailWindow ({img, weaknesses, name, type, 
avg_spawns, candy, candy_count, egg, height, id, multipliers, 
spawn_chance, spawn_time, weight, next_evolution}) {


    function displayNextEvolutions() {
        console.log("full object", next_evolution);
        return next_evolution && next_evolution.map((evolution) => {
            return (
                <div className='evoPadding'>
                    <p>
                        {evolution.num}<br/>
                        {evolution.name}
                    </p>
                </div>
            )
            })
        }

    return (
        <div>
            <div className='displayFlex flexStart'>
                <div>
                    <img src={img} />
                </div>
                <div>
                    <p>Name: {name}</p>
                    <p>height: {height}</p>
                    <p>weight: {weight}</p>
                    <p>type: {type}</p>
                    <p>weaknesses: {weaknesses}</p>
                </div>
            </div>
            <div className='displayFlex flexStart'>
                <div>
                    <p>average spawns: {avg_spawns}</p>
                    <p>candy: {candy}</p>
                    <p>candy count: {candy_count}</p>
                    <p>egg: {egg}</p>
                </div>
                    <div>
                        <p>multipliers: {multipliers}</p>
                        <p>spawn chance: {spawn_chance}</p>
                        <p>spawn time: {spawn_time}</p>
                        <div className='displayFlex'>
                            {displayNextEvolutions()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailWindow;