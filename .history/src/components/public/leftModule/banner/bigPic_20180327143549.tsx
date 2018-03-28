import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'
import { Carousel } from 'antd';
export class BigPic extends React.Component<any, any> {
render(){
   return  <div className='bigPic'>
       <Carousel autoplay>
        <div><img></img</div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
   </div>
   
 }
}


