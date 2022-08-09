import './App.scss';
import Input from './components/input';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About'
import ContactUs from './components/contact-us/ContactUs'
import { Home } from './components/home/Home'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];

  return (
    <div className="App">
      <Router>
        <Header title="Khana Khazana"/>

        <Routes>
          <Route exact path="/"
              element={
                 (
                  <>
                    <Home carList={cars}/>
                  </>
                )
              }
            > 
          </Route>

          <Route exact path="/about" element={<About />}>
          </Route>          
                
          <Route exact path="/contact-us" element={<ContactUs />}>
          </Route>
        </Routes>

        <Footer productName='Apna Bazar' />
      </Router>
    </div>
  );
}

export default App;