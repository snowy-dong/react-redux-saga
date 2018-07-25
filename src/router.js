import React, {Component} from 'react'
import Bundle from './bundle'
import Home from 'bundle-loader?lazy&name=home!containers/home'
import Hot from 'bundle-loader?lazy&name=hot!containers/hot'
import AnimalStar from 'bundle-loader?lazy&name=animalStar!containers/animalStar'
import Discovery from 'bundle-loader?lazy&name=discovery!containers/discovery'
import MyZone from 'bundle-loader?lazy&name=myZone!containers/myZone'
import Message from 'bundle-loader?lazy&name=message!containers/message'
import Add from 'bundle-loader?lazy&name=add!containers/add'
export const home = (props) => (
  <Bundle load={Home}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const hot = (props) => (
  <Bundle load={Hot}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const animalStar = (props) => (
  <Bundle load={AnimalStar}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const discovery = (props) => (
  <Bundle load={Discovery}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const myZone = (props) => (
  <Bundle load={MyZone}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const message = (props) => (
  <Bundle load={Message}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)
export const add = (props) => (
  <Bundle load={Add}>
    {(Container) => <Container {...props}/>}
  </Bundle>
)