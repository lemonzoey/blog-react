import * as React from 'react';
import { render } from 'react-dom';
import '../../style/article/content.css'

export class Content extends React.Component<any, any> {
render(){
   return  <div className='content'>
         <p>
          现在我们有一台内网主机 A，在局域网内是可以访问的，但是如果我们现在不处在局域网内，
          可以选择 VPN 连接，但这样其实并不太方便，所以本节我们来说明一下利用 SSH 反向隧道来实现访问内网主机的方法。 准备 首先我们需要有一台公网主机作为跳板，这台主机是可以公网访问的，我们将其命...
             
         </p>
       </div>
   
 }
}


