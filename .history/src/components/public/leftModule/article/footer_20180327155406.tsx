import * as React from 'react';
import { render } from 'react-dom';
import '../../style/article/footer.css'

export class Footer extends React.Component<any, any> {
render(){
   return  <div className='footer'>
            <span><i></i> zoey</span>
            <span><i></i> 3天前</span>
            <span><i></i> 109浏览</span>
            <span><i></i> 5条评论</span>
            <span><i></i> aixin</span>
       </div>
   
 }
}


