import React from 'react';
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Home from 'pages/home'
import AnimalStar from 'pages/animalStar'
import MyZone from 'pages/myZone'
import './footer.less'
export default class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <Row>
          <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}><Link to="/">星球</Link></Col>
          <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}><Link to="/Discovery">发现</Link></Col>
          <Col xs={{ span: 7, offset: 1 }} lg={{ span: 6, offset: 2 }}><Link to="/MyZone">我的</Link></Col>
      </Row>
     </div>
      );
    }
  }