import React from 'react'
import './Home.scss';
import Car from '../car/Car';

export const Home = ({ carList }) => {
  return (
    <>
      {
        carList.length ? 
        <ul className='carList'>
          { carList.map((car) => <Car key={car.id} brand={car.brand}></Car>) }
        </ul> : 'No Records Found'
        
      }
    </>
  )
}


