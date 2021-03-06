import React, { useState } from 'react';

// create a component that increments and decrements a number
const Counter = () => {

    const [count, setValue] = useState(0);

    const increment = () => {
        setValue(count + 1)
    }

    const decrement = () => {
        setValue(count - 1)
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            <p>{count}</p>
            <button onClick={increment}>+</button>
        </div>
    ) 
} 

// const counterDivStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: 50,
//     height: 50,
// }

export default Counter;