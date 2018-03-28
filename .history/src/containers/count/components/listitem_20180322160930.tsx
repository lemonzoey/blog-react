import * as React from 'react'
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import "./style/list.css"
export default class Listitem extends React.Component<any, any> {
    render() {
        return (
            <div className="flex-container">
                 <WingBlank className='items'>
                    <div className='list-bk'>
                        <Flex className='city column'>
                            <Flex.Item>{this.props.data.name}</Flex.Item>
                            <Flex.Item className="right">剩余</Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex className='list_course column'>
                            <Flex.Item><span className="num">{this.props.data.read_num} </span>节课</Flex.Item>
                            <Flex.Item className="right"><span className="num" style={{color:'#fc9d7f'}}>{this.props.data.surplus_num}</span>节课</Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>
                 </WingBlank>  
            </div>
        )
    }
}