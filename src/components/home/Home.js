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

        <div class="card m-4">
          <img src="image.png" alt="proper alt text" />
          <h3>Heading</h3>
          <p class="lede">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis tenetur iste vero fuga error dolor quaerat optio adipisci inventore, aspernatur a voluptatum culpa unde ratione doloremque voluptatibus illo recusandae hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt corporis veritatis impedit neque hic iste, debitis libero deleniti minima saepe praesentium fuga in facere aliquam ratione commodi laudantium cum aut!</p>
        </div>

      <button className='mx-4 my-2 btn btn-info'>Real Buttton</button>
      <div tabIndex={0} role={'button'} style={{width: '10%'}} className='mx-4 my-2 p-2 bg-warning text-center rounded'>
        Simulated Buttton
      </div>
    </>
  )
}


