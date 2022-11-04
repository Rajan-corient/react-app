import React from 'react'
import PropTypes from 'prop-types'


class Footer extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      footerStyle: {
        width: "100%",
        border: "2px solid grey",
        marginTop: "2rem",
      }
    }
  }

  render () {
    return (
      <footer className="bg-dark text-light py-2" style={this.state.footerStyle}>
        <p className="text-center">Copyright &copy; {this.props.productName}</p>
      </footer>
    );
  }
}

// same eg witg function component
// const Footer = props => {
//   return (
  
//     <footer className="bg-dark text-light py-2" style={footerStyle}>
//       <p className="text-center">Copyright &copy; {props.productName}</p>
//     </footer>

//   )
// }

Footer.propTypes = {
  productName: PropTypes.string
}

export default Footer