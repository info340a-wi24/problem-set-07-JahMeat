import React from 'react'; //import React library
import { SenatorTable } from './SenatorTable.js';

/* Your code goes here */
export function App(props) {
    let senatorsList = props.senatorsList;

    return (<div className="container">
        <h1>US Senators (Jan 2022)</h1>
        <SenatorTable senatorsList={senatorsList}/>
    </div>);
}