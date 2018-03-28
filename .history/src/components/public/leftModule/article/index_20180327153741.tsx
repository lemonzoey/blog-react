import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import { Title } from './title'
// import '../../style/hot/content.css'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div className='article'> 
    <Card style={{ minHeight: '260px' }}>
      <Content/>
    </Card>
   </div>
   }
}


