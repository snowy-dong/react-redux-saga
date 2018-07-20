import React from 'react';
import { Link } from 'react-router-dom'
import StarCarousel from 'components/carousel'
import { Row, Col, Icon, Avatar } from 'antd'
import HotTheme from 'components/hotTheme'
import './home.less'
export default class Home extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="home">
          <div  className="Portals" >
            <Row gutter={16}>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link"  to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link"  to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
              <Col className="gutter-row" span={6}>
                <Link className="link" to="/"> <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Link>
              </Col>
            </Row>
          </div>
          <div className="hotTheme">
            <HotTheme/>
          </div>
      </div>
    )
  }
}