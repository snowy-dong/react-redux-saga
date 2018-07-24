import React from 'react';
import { connect } from 'react-redux'
require('./myZone.less')
const mapStateToProps = state => {
  return {
    workslist: state.workList
  }
}
 class myZone extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.workslist.map((works, index) => (
            <li  key={index}> {works.text}</li>
          ))}
        </ul>
        个人中心
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(myZone)