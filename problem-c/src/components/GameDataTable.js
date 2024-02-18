import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {

  //Your state and event work goes here


  //Map the `props.data` value into an array of `<GameDataRow>` elements here


  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" />
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" />
            </th>
            <th className="text-center">
              Score
              <SortButton name="score" />
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" />
            </th>
          </tr>
        </thead>
        <tbody>
          {/* render the array of <GameDataRow> elements here */}
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
