import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import { DatePicker } from 'antd'
require('antd/dist/antd.css')
import Home from 'containers/home'
import Hot from 'containers/hot'
import Footer from 'components/footer'
import AnimalStar from 'containers/animalStar'
import Discovery from 'containers/discovery'
import MyZone from 'containers/myZone'
import Message from 'containers/message'
import Add from 'containers/add'
require('./static/css/index.css')
export default class App extends Component{
  static defaultProps= {
    name:"SunnyChuan",
    age:22
  }
  static propTypes={
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired
  }
  render(){
    return (
      (<Router>
        <div>
          <Route  exact path="/" component={Home}></Route>
          <Route path="/hot" component={Hot} ></Route>
          <Route path="/AnimalStar" component={AnimalStar} ></Route>
          <Route path="/Discovery" component={Discovery} ></Route>
          <Route path="/MyZone" component={MyZone} ></Route>
          <Route path="/Message" component={Message} ></Route>
          <Route path="/Add" component={Add} ></Route>
          <Footer/>
        </div>
      </Router>)
      )
    }
  }