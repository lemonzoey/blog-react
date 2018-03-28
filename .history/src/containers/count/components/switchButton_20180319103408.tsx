import * as React from 'react'
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import "./style/button.css"
import { observer, inject } from 'mobx-react';
@inject("Countdata")
@observer
export default class SwitchButton extends React.Component<any, any> {
    handleClick(){
        this.props.Countdata.counts.handleClick()
    }
    render() {
        return (
           <div>
               <span className='toggle' onClick={this.handleClick.bind(this)}><i className="icon-refresh iconfont"></i></span>
           </div>
        )
    }
}