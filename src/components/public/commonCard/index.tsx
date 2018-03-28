import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div className='card'> 
   <div style={{ background: '#ECECEC' }}>
    <Card title="热门专题" bordered={false} >
        <Content/>
    </Card>
  </div>
   </div>
   }
}


