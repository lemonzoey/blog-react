import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import '../../style/hot/content.css'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div className='hot'> 
   <div style={{ background: '#ECECEC' }}>
    <Card title="热门排行" bordered={false} style={{ height: '250px' }}>
        <Content/>
    </Card>
  </div>
   </div>
   }
}


