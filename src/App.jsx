import logo from './logo.svg';
import './App.css';
import SearchCriteria from './Components/SearchCriteria';
import MasterList from './Components/MasterList';
import DetailWindow from './Components/DetailWindow';

function App(props) {
  return (
  <div>
    <div>
      <div id='searchCriteriaContainer'>
        <SearchCriteria />
      </div>
    </div>
    <div>
      <div id='pokemonMasterListContainer'>
        <MasterList />
      </div>
    </div>
  </div>
  );
}

export default App;
