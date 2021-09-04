import React, { useState } from 'react';
import  astonMartin  from './images/astonMartinVantage.jpeg';
import  mclaren  from './images/mclaren570s.jpeg';
import  porscheGT3  from './images/porscheGT3.jpeg'; 

const CarShow = () => {
  return (
    <div className="carshow">
      <Cars
        id={cars.id}
        src={cars.src}
        name={cars.name}   
      />
    </div>
  )
}

const Cars = () => {
  const [car, newCar] = useState(cars[0]);

  // grab the position of a car in the object array
  const selectCar = () => {
    const carIndex = Math.floor(Math.random() * cars.length)
    return cars[carIndex]
  }
  // pass the index selected to the browser to render
  const changeCar = () => {
    newCar(selectCar(cars))
  }

  return (
    <div className='car-show-box'> 
      <div className="car-info-box">
        <img className='car-images' src={car.src} alt="could not load" />
        <h3>{car.name}</h3>
        <p className="car-description">
          {car.description}
        </p>
        <button onClick={changeCar}>Change Car</button>
      </div>
    </div>
  )
}

const cars = [
  {
    id: 0,
    name: 'Aston Martin Vantage',
    src: astonMartin,
    description: 'Aston Martin pushed sports car performance yet again with the announcement of the new V12 Vantage S. V12 Vantage S replaced the outgoing V12 Vantage in markets around the world and, with the exception of One-77, arrived as the fastest road-going Aston Martin offered at the time.'
  },
  {
    id: 1, 
    name: 'McLaren 570S',
    src: mclaren, 
    description: 'It’s the ultimate sports car experience. Completely driver-centric and performance oriented, the 570S Coupé is equally at home on the track as it is on the open road. With the lightest weight in its class and the highest power to weight ratio, it delivers super car punch and thrills that would shame many more expensive rivals.'
  },
  {
    id: 2,
    name: 'Porsche GT3',
    src: porscheGT3,
    description: 'The 911 GT3 with Touring Package also sets the performance tone – but with focus primarily on the road. Thanks to ingenious aerodynamics, cornering remains impressive, even without a large rear wing.'
  }
]

export default CarShow
