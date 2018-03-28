import * as React from 'react';
import { render } from 'react-dom';
import './style/ad.css'
import { Icon } from 'antd';
import { Row, Col } from 'antd';
export default class Ad extends React.Component<any, any> {
render(){
   return  <div className='ad'>
    <Row>
         <Col xs={24} sm={24} md={24} lg={16} xl={16} ><LeftModuleBody/></Col>
         <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
         <Col xs={0} sm={0} md={0} lg={7} xl={7}><RightModuleBody/></Col>
      </Row>

        <Col className='ad_left'>
               <p><span><Icon type="message" /></span>博主录制的Python3爬虫视频教程已发布！详情请戳Python3爬虫视频教程！希望大家支持！非常感谢！</p>
            </Col>
            <div className='ad_right'>
               <span><Icon type="user" />投稿</span>
               <span><Icon type="poweroff" />登录</span>
            </div>
            {/* <div className='ad_left'>
               <p><span><Icon type="message" /></span>博主录制的Python3爬虫视频教程已发布！详情请戳Python3爬虫视频教程！希望大家支持！非常感谢！</p>
            </div>
            <div className='ad_right'>
               <span><Icon type="user" />投稿</span>
               <span><Icon type="poweroff" />登录</span>
            </div> */}
       </div>
   
 }
}


