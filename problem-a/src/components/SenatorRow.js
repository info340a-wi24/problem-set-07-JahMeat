import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */
export function SenatorRow(props) {
    let {name, state, party, phone, twitter} = props.senatorData;

    return (
        <tr>
            <td>{name}</td>
            <td>{party.charAt(0)} - {state}</td>
            <td><a href={`tel:${phone}`}>{phone}</a></td>
            <td><a href={`https://twitter.com/${twitter}`}>@{twitter}</a></td>
        </tr>
    )
}