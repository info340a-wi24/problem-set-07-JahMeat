import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  let [teamName, setTeamName] = useState("");
  let [isRunnerUp, setRunnerUp] = useState(false);

  function applyFilter(name, runner) {
    setTeamName(name);
    setRunnerUp(runner);
  }

  let displayedData = props.gameData.filter((game) => {
    if (teamName === "") {
      return true;
    } else if (!isRunnerUp) {
      return game.winner == teamName;
    } else {
      return game.winner == teamName || game.runner_up == teamName; 
    }
  })
  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter}/>
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
