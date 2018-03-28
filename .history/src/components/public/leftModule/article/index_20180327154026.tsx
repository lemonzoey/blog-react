import * as React from 'react';
import { render } from 'react-dom';
import { Content } from './content'
import { Title } from './title'
import { Footer } from './footer'
import { Card } from 'antd';
export default class  extends React.Component<any, any> {
render(){
   return <div style={{margin}}> 
    <Card style={{ minHeight: '250px' }}>
      <Title/>
      <Content/>
      <Footer/>
    </Card>
   </div>
   }
}


