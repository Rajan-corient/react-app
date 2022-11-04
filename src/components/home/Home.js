import React from 'react'
import './Home.scss';
import Car from '../car/Car';

export const Home = ({ carList, title }) => {
  return (
    <>
      <h5 className=''>{title}</h5>
      {
        carList.length ? 
        <ul className='carList'>
          { carList.map((car) => <Car key={car.id} brand={car.brand}></Car>) }
        </ul> : 'No Records Found'
        
      }
    </>
  )
}


