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
            <button onClick={decrement}> - </button>
            <p>{count}</p>
            <button onClick={increment}> + </button>
        </div>
    ) 
} 

export default Counter;