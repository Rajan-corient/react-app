import React from 'react'
import './Home.scss';
import Car from '../car/Car';

export const Home = ({ carList, title }) => {
  return (
    <>
      <h5 className='px-4'>{title}</h5>
      {
        carList.length ? 
        <ul className='carList'>
          <li tabIndex={0}>Ford</li>
          <li tabIndex={0}>BMW</li>
          <li tabIndex={0}>Audi</li>
          {/* { carList.map((car, index) => <Car key={car.id} brand={car.brand} index={index}></Car>) } */}
        </ul> : 'No Records Found'
        
      }
    </>
  )
}


