import React, { useState } from 'react'

const Background = () => {

    const colors = ['black', 'yellow', 'green', 'red']

    const [backgroundColor, setBackgroundColor] = useState(colors[0]);

    const getRandomColor = (colors) => {
        let colorIndex = Math.floor(Math.random() * colors.length)
        return colors[colorIndex]
    }

    const changeBackgroundColor = () => {
        console.log(setBackgroundColor(getRandomColor(colors)))
        
    }

    return (
        <div 
        style={{
            backgroundColor: backgroundColor,
            width: 250,
            height: 250
        }}
        >
            <button onClick={changeBackgroundColor}>Change</button>
        </div>
    )
}


export default Background;
