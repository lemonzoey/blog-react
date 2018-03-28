import * as React from 'react';
import { render } from 'react-dom';
import { HotTitle } from './hottitle'
import { Content } from './content'
import '../../style/hot/hottitle.css'
export default class  extends React.Component<any, any> {
render(){
   return <div className='hot'> 
   <HotTitle/>
   <Content/>
   </div>
   }
}


