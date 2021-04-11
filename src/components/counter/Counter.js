import React from 'react';

function Counter( { pointsClouds, pointsTemp } ) {
    const total = (pointsTemp+pointsClouds)
    return <div>

        <p>{total}</p>
    </div>
}
export default Counter