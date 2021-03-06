import React from 'react';
import { Row, Col, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Home from 'containers/home'
import AnimalStar from 'containers/animalStar'
import MyZone from 'containers/myZone'
import './footer.less'
export default class Footer extends React.Component{
  render(){
    return (
      <div className="footer">
        <Row >
          <Col xs={{ span: 6 }} lg={{ span: 6}}><Link to="/"><i className="iconfont icon-dibudaohanglan_xingqiu_tiaozhuanfaxianye" /><br/>星球</Link></Col>
          <Col xs={{ span: 6 }} lg={{ span: 6}}><Link to="/discovery"><i className="iconfont icon-faxian" /><br/>发现</Link></Col>
          <Col xs={{ span: 6 }} lg={{ span: 6}}><Link to="/add"><i className="iconfont icon--jia" /></Link></Col>
          <Col xs={{ span: 6 }} lg={{ span: 6}}><Link to="/message"><i className="iconfont icon-message" /><br/>消息</Link></Col>
          <Col xs={{ span: 6 }} lg={{ span: 6}}><Link to="/myZone"><i className="iconfont icon-icon" /><br/>我的</Link></Col>
       </Row>
     </div>
      );
    }
  }