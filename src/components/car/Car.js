import React from 'react'
import PropTypes from 'prop-types'

const Car = props => {
  return (
    <li>{props.brand}</li>
  )
}

Car.propTypes = {}

export default Car