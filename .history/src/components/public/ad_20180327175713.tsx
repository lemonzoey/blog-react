import * as React from 'react';
import { render } from 'react-dom';
import './style/ad.css'

export default class Ad extends React.Component<any, any> {
render(){
   return  <div className='ad'>
            <div className='ad_left'>
             <p></p>
            </div>
            <div className='ad_right'></div>
       </div>
   
 }
}


