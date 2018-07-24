import React from 'react'
import PropTypes from 'prop-types'

class  Works extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <li onClick={this.props.onClick}>
      {this.props.text}
      </li>
    )
  }
}
Works.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default Works