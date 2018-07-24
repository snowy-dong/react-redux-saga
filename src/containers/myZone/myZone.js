import React from 'react';
import { connect } from 'react-redux'
import { Avatar } from 'antd'
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
        <Avatar size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
    )
  }
}
export default connect(
  mapStateToProps
)(myZone)