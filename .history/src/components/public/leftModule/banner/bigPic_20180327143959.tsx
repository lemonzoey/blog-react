import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'
import { Carousel } from 'antd';
export class BigPic extends React.Component<any, any> {
render(){
   return  <div className='bigPic'>
       <Carousel autoplay>
        <div><img src='../../../../assets/img/001.jpeg' style={{height:'300px'}}></img></div>
        <div><img src='../../../../assets/img/002.jpeg' style={{height:'300px'}}></img></div>
        <div><img src='../../../../assets/img/003.jpeg' style={{height:'300px'}}></img></div>
        <div><img src='../../../../assets/img/004.jpeg' style={{height:'300px'}}></img></div>
      </Carousel>
   </div>
   
 }
}


