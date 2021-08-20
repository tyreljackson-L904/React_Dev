import React, { useState } from 'react';

const Greeting = props => {

  const names = ['Tyrel', 'Jerel', 'Liz', 'Kristen']

  const [name, setName] = useState(names[0])

  const randomName = (names) => {
      const randIndx = Math.floor(Math.random() * (names.length))
      return names[randIndx] + '!'
  } 

  const changeName = () => {
      setName(randomName(names))
  }

  return (
      <div>
          <h1>Welcome to React Masterclass, { name }</h1>
          <button onClick={changeName}> Change Name </button>
      </div>
  )
}

export default Greeting

