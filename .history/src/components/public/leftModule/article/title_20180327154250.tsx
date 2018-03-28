import * as React from 'react';
import { render } from 'react-dom';
import '../../style/article/title.css'

export class Title extends React.Component<any, any> {
render(){
   return  <div className='title'>
            <span>Linux</span>
            <h3>SSH</h3>
       </div>
   
 }
}


