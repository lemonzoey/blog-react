import * as React from 'react';
import { render } from 'react-dom';
import { BigPic } from './bigPic'
import { LittlePic } from './little'
export default class  extends React.Component<any, any> {
render(){
   return <> 
   <LittlePic/>
   <BigPic/>
   </>
   }
}


