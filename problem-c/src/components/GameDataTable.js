import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your state and event work goes here
  let [sortByCriteria, setSort] = useState(null);
  let [isAscending, setAscending] = useState(null);

  function handleClick(event) {
    let button = event.currentTarget.name;
    if (button !== sortByCriteria) {
      setSort(button);
      setAscending(true);
    } else if (isAscending) {
      setAscending(false);
    } else if (!isAscending) {
      setSort(null);
      setAscending(null);
    }
  }



  //Map the `props.data` value into an array of `<GameDataRow>` elements here
  let data = props.data;
  data = _.sortBy(data, sortByCriteria);
  if (sortByCriteria != null && !isAscending) {
    data = _.reverse(data);
  }
  let games = data.map((game) => {
    return <GameDataRow gameObj={game} key={game.year} />
  })


  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" onClick={handleClick} 
                active={sortByCriteria === "year" ? true : false}
                ascending={sortByCriteria === "year" && isAscending}
              />
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" onClick={handleClick} 
                active={sortByCriteria === "winner" ? true : false} 
                ascending={sortByCriteria === "winner" && isAscending}
              />
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" onClick={handleClick} 
                active={sortByCriteria === "score" ? true : false} 
                ascending={sortByCriteria === "score" && isAscending}
              />
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" onClick={handleClick} 
                active={sortByCriteria === "runner_up" ? true : false} 
                ascending={sortByCriteria === "runner_up" && isAscending}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {games}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ gameObj }) { //gameObj = props.gameObj
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td className="text-end">{gameObj.winner} {gameObj.winner_flag}</td>
      <td className="text-center">{gameObj.score}</td>
      <td>{gameObj.runner_up_flag}&nbsp;&nbsp;{gameObj.runner_up}</td>
    </tr>
  );
}
