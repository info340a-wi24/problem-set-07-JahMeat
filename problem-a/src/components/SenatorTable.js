import React from 'react'; //import React library
import { TableHeader } from './TableHeader.js';
import { SenatorRow } from './SenatorRow.js';

const EXAMPLE_SENATORS = [
  { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */
let array = ['Name', 'State', 'Phone', 'Twitter'];

export function SenatorTable(props) {
  let rows = props.senatorsList.map((senatorObj) => {
    return (<SenatorRow senatorData={senatorObj} />);
  })
  return (
    <table className="table table-bordered">
      <TableHeader columnNames={array}/>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}