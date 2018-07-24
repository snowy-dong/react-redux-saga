import { connect } from 'react-redux'
// import List from './List'
import React from 'react'
import PropTypes from 'prop-types'
import Works from './Works'

class  List extends React.Component {
  constructor(props){
    super(props)
  }
  onWorksClick(index){
    console.log(index)
  }
  render(){
    return (
      <div>
         <ul>
          {this.props.workslist.map((works, index) => (
            <Works key={index} {...works} onClick={() => this.onWorksClick(index)} />
          ))}
        </ul>
      </div>
    )
  }
}
List.propTypes = {
  workslist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onWorksClick: PropTypes.func
}

const mapStateToProps = state => {
  console.log(state.workList)
  console.log('state.workList')
  return {
    workslist: state.workList
  }
}

const WorksList = connect(
  mapStateToProps
)(List)

export default WorksList