import * as React from 'react';
import { render } from 'react-dom';
import Banner from './banner/index';
import Hot from './hot/index';
import '../style/leftModule/leftBody.css'
export class LeftModuleBody extends React.Component<any, any> {
render(){
   return <div className='leftModule'>
    <Banner/>
    <Hot/>
    <
    </div>
   }
}


