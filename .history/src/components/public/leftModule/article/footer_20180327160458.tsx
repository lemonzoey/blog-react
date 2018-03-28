import * as React from 'react';
import { render } from 'react-dom';
import { Icon } from 'antd';
import '../../style/article/footer.css'

export class Footer extends React.Component<any, any> {
render(){
   return  <div className='footer'>
            <span><Icon type="user" /> zoey</span> &nbsp;
            <span><Icon type="right-circle-o" /> 3天前</span>
            <span><Icon type="eye" /> 109浏览</span>
            <span><Icon type="message" /> 5条评论</span>
            <span><Icon type="heart-o" /> 3喜欢</span>
       </div>
   
 }
}


