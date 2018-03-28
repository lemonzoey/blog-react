import * as React from 'react'
import { Flex, WhiteSpace,WingBlank } from 'antd-mobile';

import 'antd-mobile/dist/antd-mobile.css'; 
import "./style/list.css"
import  SwitchButton from './switchButton'
export default class Listcom extends React.Component<any, any> {
    render() {     
        return (
            <WingBlank className="list">
                    <Flex>
                       <Flex.Item>课程列表</Flex.Item>
                     <SwitchButton/>
                     </Flex>     
            </WingBlank>   
        )
    }
}



