import * as React from 'react'

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