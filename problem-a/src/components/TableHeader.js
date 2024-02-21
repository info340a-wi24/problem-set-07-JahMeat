import React from 'react'; //import React library

/* Your code goes here */
export function TableHeader(props) {
    let thArray = props.columnNames.map((names) => {
        return <th key={names}>{names}</th>
    })

    return (
        <thead>
            <tr>
                {thArray}
            </tr>
        </thead>
    );
}