import * as React from 'react';
import { render } from 'react-dom';
import Banner from './banner';
import Hot from './hot';
import Article from './article';
import '../style/leftModule/leftBody.css'
export class LeftModuleBody extends React.Component<any, any> {
render(){
   return < >
    <Banner/>
    {/* <Hot/> */}
    <Article/>
    </>
   }
}


