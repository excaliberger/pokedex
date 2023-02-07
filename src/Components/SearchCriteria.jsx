import { list, setList } from './MasterList'
import { useEffect, useState } from 'react';


function SearchCriteria(props) {

    let [searchPokes, setSearchPokes] = useState("");

    function onSubmit(event) {
        event.preventDefault();
        console.log("hello");
        console.log(searchPokes);
        let newList = [...list, searchPokes];
        setList(newList);
      }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="text"
                    id="text"
                    value={searchPokes}
                    onChange={(event) => setSearchPokes(event.target.value)}>
                </input>
                <button type="submit">Add</button>
                </form>
        </div>
    )
}


export default SearchCriteria;