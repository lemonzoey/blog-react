import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'

export class LittlePic extends React.Component<any, any> {
render(){
   return  <div className='littlePic'>
        <div><img src='../../../../assets/img/001.jpeg' style={{height:'73px',width:'100%'}}></img></div>
        <div><img src='../../../../assets/img/002.jpeg' style={{height:'300px',width:'100%'}}></img></div>
        <div><img src='../../../../assets/img/003.jpeg' style={{height:'300px',width:'100%'}}></img></div>
        <div><img src='../../../../assets/img/004.jpeg' style={{height:'300px',width:'100%'}}></img></div>
   </div>
   
 }
}


