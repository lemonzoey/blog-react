import * as React from 'react';
import { render } from 'react-dom';
import './style/ad.css'
import { Icon } from 'antd';
export default class Ad extends React.Component<any, any> {
render(){
   return  <div className='ad'>
            <div className='ad_left'>

             <p>博主录制的Python3爬虫视频教程已发布！详情请戳Python3爬虫视频教程！希望大家支持！非常感谢！</p>
            </div>
            <div className='ad_right'>
            <span><Icon type="user" />投稿</span>
            <span><Icon type="poweroff" />登录</span>
            </div>
       </div>
   
 }
}


