import * as React from 'react';
import { render } from 'react-dom';
import Banner from './banner';
import Hot from './hot';
import Article from './article';
export class LeftModuleBody extends React.Component<any, any> {
render(){
   return < >
    <Banner/>
    <Hot/>
    <Article/>
    </>
   }
}


