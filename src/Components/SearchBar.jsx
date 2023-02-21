import { useState } from 'react';
import { getListOf } from '../helpers/pokedex.helpers';


function SearchBar ({list}) {

    let [searchCriteria, setSearchCriteria] = useState("")
    let types = getListOf(list, "type")

    function onSubmit(event) {
        event.preventDefault();
        console.log("hello");
        console.log(searchCriteria, list);
        let newList = [...list, searchCriteria];
        setSearchCriteria(newList);
      }


    function renderTypes() {
        console.log("types", types);
        return list && types.map((type, idx) => {
            return (
              <option key={type + idx} value={type}>
                {type}
              </option>
            );
        })
    }

    return (
        <div className='flexStart'>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    id="text"
                    value="Search Pokemon"
                    onChange={(event) => setSearchCriteria(event.target.value)}>
                </input>
                <button type="submit">Submit</button>
                <label htmlFor="searchTypes">Filter By Type</label>
                <select
                    name="searchTypes"
                    id="searchTypes"
                    value={types}
                    onChange={(e) => setSearchCriteria(e.target.value)}
                >
                {renderTypes()}
                </select>
                <label htmlFor="searchWeaknesses">Filter By Weakness</label>
                <select
                    name="searchWeaknesses"
                    id="searchWeaknesses"
                    value={types}
                    onChange={(e) => setSearchCriteria(e.target.value)}
                >
                {renderTypes()}
                </select>
            </form>
        </div>
    )
}


export default SearchBar;