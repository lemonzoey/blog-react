import * as React from 'react';
import { render } from 'react-dom';
import { BigPic } from './bigPic'
import { LittlePic } from './littlePic'
export default class  extends React.Component<any, any> {
render(){
   return < >
   <LittlePic/>
   <BigPic/>
   <div style={{clear:'both'}}></div>
   </div>
   }
}


