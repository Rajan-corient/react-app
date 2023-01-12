import React from 'react'
import PropTypes from 'prop-types'

const Car = props => {
  return (
    <li tabIndex={props.index}>{props.brand}</li>
  )
}

Car.propTypes = {
  id: PropTypes.number,
  brand: PropTypes.string
};

export default Car