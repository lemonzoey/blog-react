

import * as React from 'react';
import { render } from 'react-dom';
import Article from './public/leftModule/article'
export class Note extends React.Component<any, any> {
render(){
    return <div>
      <h3>生活笔记</h3>
      <Article/>
    </div>
}
}