

import * as React from 'react';
import { render } from 'react-dom';
import Article from './public/leftModule/article'
export class Note extends React.Component<any, any> {
render(){
    return <div>
      <h3>技术杂谈</h3>
      <Article/>
    </div>
}
}