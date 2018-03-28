import * as React from 'react';
import { render } from 'react-dom';
import '../../style/leftModule/banner.css'

export class LittlePic extends React.Component<any, any> {
render(){
   return  <div className='bigPic'>
       <Carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
   </div>
   
 }
}


