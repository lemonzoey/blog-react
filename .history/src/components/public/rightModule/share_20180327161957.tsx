import * as React from 'react';
import { render } from 'react-dom';
import '../style/rightModule/share.css'
import { Icon } from 'antd';
export class Share extends React.Component<any, any> {
render(){
   return  <div className='share'>
             <span><Icon type="weibo-circle" /></span>
             <span></span>
       </div>
   
 }
}


