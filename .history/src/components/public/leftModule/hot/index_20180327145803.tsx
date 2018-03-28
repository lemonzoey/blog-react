import * as React from 'react';
import { render } from 'react-dom';
import { HotTitle } from './hottitle'
import { LittlePic } from './littlePic'
export default class  extends React.Component<any, any> {
render(){
   return <div className='clearfloat'> 
   <LittlePic/>
   <BigPic/>
   </div>
   }
}


