import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'

export class LittlePic extends React.Component<any, any> {
render(){
   return  <div className='littlePic'>
        <div className='border' style={{margin:'0px'}}><img src='../../../../assets/img/001.jpeg' ></img></div>
        <div className='border'><img src='../../../../assets/img/002.jpeg' ></img></div>
        <div className='border'><img src='../../../../assets/img/003.jpeg' ></img></div>
        <div className='border'><img src='../../../../assets/img/004.jpeg' ></img></div>
   </div>
   
 }
}


