import { useEffect, useState } from 'react';
import { getListOf } from '../helpers/pokedex.helpers';


function SearchBar ({list, searchCriteria, setSearchCriteria}) {

    let types = getListOf(list, "type")

    function renderTypes(criteriaSlot) {
        return ( 
            <>
            <option></option>
            {list && list.pokemon && types.map((type, idx) => {
                if (type === searchCriteria[criteriaSlot]) {
                    return (
                        <option key={type + idx + "true"} value={type}>
                            {type}
                        </option>
                );} else {
                    return (
                        <option key={type + idx} value={type}>
                            {type}
                        </option>
                    )
                    
                }
            })}</>)
    }

    function clearSearch(click) {
        click.preventDefault();
        let clearedSearchCriteria = searchCriteria;
        clearedSearchCriteria = ["","",""];
        setSearchCriteria(clearedSearchCriteria);
    }

    return (
        <div>
            <form>
                <input
                    className='marginRight10px inputBox'
                    type="text"
                    name="text"
                    id="text"
                    placeholder='Search Pokemon'
                    onChange={(event) =>   {                        
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria[0] = event.target.value; 
                        setSearchCriteria([...newSearchCriteria])}}>
                </input>
                <label htmlFor="searchTypes" className='marginRight6px'>Filter By Type</label>
                <select
                    className='marginRight10px dropdownMenu'
                    name="searchTypes"
                    id="searchTypes"
                    value={searchCriteria[1]}
                    onChange={(event) => {
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria[1] = event.target.value; 
                        setSearchCriteria([...newSearchCriteria]);
                    }}
                >   
                {renderTypes(1)}
                </select>
                <label htmlFor="searchWeaknesses" className='marginRight6px'>Filter By Weakness</label>
                <select
                    className='marginRight10px dropdownMenu'
                    name="searchWeaknesses"
                    id="searchWeaknesses"
                    value={searchCriteria[2]}
                    onChange={(event) => {
                        let newSearchCriteria = searchCriteria;
                        newSearchCriteria[2] = event.target.value; 
                        setSearchCriteria([...newSearchCriteria]);
                    }}
                > 
                {renderTypes(2)}
                </select>
                <button className="clearBtn" onSubmit={() => {clearSearch()}}>Clear</button>
            </form>
        </div>
    )
}


export default SearchBar;