import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import '../../style/hot/content.css'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div className='article'> 
   <div style={{ background: '#ECECEC' }}>
    <Card title="热门排行" bordered={false} style={{ height: '260px' }}>
        <Content/>
    </Card>
    <Card style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  </div>
   </div>
   }
}


