import * as React from 'react';
import { render } from 'react-dom';
import './style/ad.css'
import { Icon } from 'antd';
import { Row, Col } from 'antd';
export default class Ad extends React.Component<any, any> {
render(){
   return  <div className='ad'>

        <Col className='ad_left' xs={24} sm={24} md={24} lg={20} xl={21} >
               <p><span><Icon type="message" /></span>博主录制的Python3爬虫视频教程已发布！详情请戳Python3爬虫视频教程！希望大家支持！非常感谢！</p>
            </Col>
            <Col className='ad_right' xs={0} sm={0} md={0} lg={4} xl={3}>
               <span><Icon type="user" />投稿</span>
               <span><Icon type="poweroff" />登录</span>
            </Col>
       </div>
   
 }
}


