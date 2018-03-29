import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'

export class LittlePic extends React.Component<any, any> {
render(){
   return  <div className='littlePic'>
        <div className='border'><img src='../../../../assets/img/001.jpeg' style={{height:'63px',width:'100%',margin:0px'}}></img></div>
        <div className='border'><img src='../../../../assets/img/002.jpeg' style={{height:'63px',width:'100%',margin:'2px 0px'}}></img></div>
        <div className='border'><img src='../../../../assets/img/003.jpeg' style={{height:'63px',width:'100%',}}></img></div>
        <div className='border'><img src='../../../../assets/img/004.jpeg' style={{height:'63px',width:'100%',margin:'0px 0px 2px'}}></img></div>
   </div>
   
 }
}


