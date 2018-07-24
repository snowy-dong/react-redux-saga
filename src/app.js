import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Footer from 'components/footer'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom'
import { DatePicker } from 'antd'
require('antd/dist/antd.css')
require('./static/css/index.css')
import { home, hot, animalStar, discovery, myZone, message, add } from './router'
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
          <Route  exact path="/" component={home}></Route>
          <Route path="/hot" component={hot} ></Route>
          <Route path="/animalStar" component={animalStar} ></Route>
          <Route path="/discovery" component={discovery} ></Route>
          <Route path="/myZone" component={myZone} ></Route>
          <Route path="/message" component={message} ></Route>
          <Route path="/add" component={add} ></Route>
          <Footer/>
        </div>
      </Router>)
      )
    }
  }