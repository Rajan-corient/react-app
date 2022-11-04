import './App.scss';
import Input from './components/input';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About'
import ContactUs from './components/contact-us/ContactUs'
import { Login } from './components/login/Login'
import { Home } from './components/home/Home'
import { NotFound }  from './NotFound'
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
        <Routes>
          <Route path="/" element={<Header title="Khana Khazana" />}>
            <Route index element={<Home carList={cars} title={'Cars List'}/>} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>


      {/* <Router>
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

          <Route exact path="/about" element={<About />} />         
                
          <Route exact path="/contact-us" element={<ContactUs />} />

          <Route exact path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer productName='Apna Bazar' />
      </Router> */}
    </div>
  );
}

export default App;