import React, { useState } from 'react';
import astonMartin from './images/astonMartinVantage.jpeg';

const CarShow = () => {
  return (
    <div className='car-show-box'> 
      <Info cars={cars}/>
    </div>
  )
}

const Image = () => {
  return (
    <div className="car-images">
      <img key={cars.id} src={cars.src} alt="could not load" />
    </div>
  )
}

const Info = () => {
  const [car, newCar] = useState(cars[0]);



  return (
    <div className="car-info-box">
      <Image />
      <h3 className={astonMartin} key={cars.id}>{cars.name}</h3>
      <p className="car-description">
        Aston Martin pushed sports car performance yet again with the announcement of the new V12 Vantage S. V12 Vantage S replaced the outgoing V12 Vantage in markets around the world and, with the exception of One-77, arrived as the fastest road-going Aston Martin offered at the time.
      </p>
      <button className="change-car">Change Car</button>
    </div>
  );
};

const cars = [
  {
    id: 1,
    name: 'Aston Martin Vantage',
    src: '/images/astonMartinVantage.jpeg'
  },
  {
    id: 2, 
    name: 'McLaren 570S',
    src: '/images/mclaren570s.jpeg'
  },
  {
    id: 3,
    name: 'Porsche GT3',
    src: '/images/porscheGT3.jpeg'
  }
]

export default CarShow
