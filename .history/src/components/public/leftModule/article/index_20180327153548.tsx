import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import '../../style/hot/content.css'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div className='article'> 
   <div style={{ background: '#ECECEC' }}>
    
    <Card style={{ minHeight: '260px' }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  </div>
   </div>
   }
}


