import * as React from 'react'
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
import "./style/course.css"
import  SwitchButton from './switchButton'
export default class Coursecom extends React.Component<any, any> {
    render() {
        return (     
            <div className="flex-container">
                 <WingBlank>
                    <Flex className='dear'>
                        <Flex.Item>亲爱的<span className='number' style={{fontSize:'16px'}}>{this.props.coursedata.name}</span></Flex.Item>
                        <SwitchButton/>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className='need'>
                        <Flex.Item> {this.props.coursedata.semester}</Flex.Item>
                    </Flex>
                    <WhiteSpace size="lg" />
                    <Flex className='course'>
                        <Flex.Item><span className='number'>{this.props.coursedata.courses_num}&nbsp;</span>门课程 &nbsp;&nbsp;&nbsp;&nbsp;  <span className='number' style={{color:'#fc9d7f'}}>{this.props.coursedata.class_num}&nbsp;</span>节课</Flex.Item>
                    </Flex>
                    <div className='line'>😄</div>
                    <WhiteSpace size="lg" />
                 </WingBlank>  
            </div>
           


        )
    }
}