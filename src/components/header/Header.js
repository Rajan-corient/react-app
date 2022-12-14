import React from 'react'
import './Header.scss';
import PropTypes from 'prop-types'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../footer/Footer';

const Header = props => {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        { props.title }
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">
                                    Contact-Us
                                </Link>
                            </li>        
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer productName='Apna Bazar'/>
        </div>
    )
}

Header.propTypes = {}

export default Header