import * as React from 'react';
import { render } from 'react-dom';
import { BigPic } from './bigPic'
import { LittlePic } from './littlePic'
export default class  extends React.Component<any, any> {
render(){
   return <div >
   <LittlePic/>
   <BigPic/>
   <div stlye={{clear:'both'}}></div>
   </div>
   }
}


