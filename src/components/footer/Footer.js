import React from 'react'
import PropTypes from 'prop-types'

let footerStyle = {
  width: "100%",
  border: "2px solid grey",
  marginTop: "2rem",
};

const Footer = props => {
  return (
  
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">Copyright &copy; {props.productName}</p>
    </footer>

  )
}

Footer.propTypes = {
  productName: PropTypes.string
}

export default Footer