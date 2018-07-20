import React from 'react';
export default class Home extends React.Component{
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this);
  }
  state={
    count:0
  }
  handleChange(){
    this.setState({count:this.state.count+1});
  }
  render(){
    return (
      <div>
        home
        <h2>当前计数是：{this.state.count}</h2>
        <button onClick={this.handleChange}>点击</button>
      </div>
    )
  }
}