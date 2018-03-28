
import { Layout, Menu, Breadcrumb } from 'antd';
import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import {LeftModuleBody} from './public/leftModule/leftModuleBody'
import {RightModuleBody} from './public/rightModule/rightModuleBody'
import Ad from './public/ad'
import { Row, Col } from 'antd';
import './public/style/layout.css'
const { Header, Content, Footer } = Layout;
export class LayoutPublic extends React.Component<any, any> {
render(){
    return <Layout className="layout">
    <Header className = 'header'>
      <div className='top'><span>zoey </span>  的个人博客</div>
      <Menu
        className = 'nav'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        {/* <Link to='/index' ><Menu.Item key="1" >首页</Menu.Item></Link> */}
        <Menu.Item key="1" >首页</Menu.Item>
        <Menu.Item key="2">生活笔记</Menu.Item>
        <Menu.Item key="3">技术杂谈</Menu.Item>
        <Menu.Item key="4">福利专区</Menu.Item>
        <Menu.Item key="5">关于自己</Menu.Item>
        <Menu.Item key="6">给我留言</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 100px' }} >
      <Breadcrumb style={{ margin: '0 0 16px' }}>
        {/* <Breadcrumb.Item>首页</Breadcrumb.Item>
        <Breadcrumb.Item>生活笔记</Breadcrumb.Item> */}
        <Ad/>
      </Breadcrumb>
      <div style={{ background: '#f0f2f5',  minHeight: 280 }} className='clearfloat body'>
      {/* <Row>
         <Col xs={24} sm={24} md={24} lg={16} xl={16} ><LeftModuleBody/></Col>
         <Col xs={0} sm={0} md={0} lg={1} xl={1}></Col>
         <Col xs={0} sm={0} md={0} lg={8} xl={8}><RightModuleBody/></Col>
      </Row> */}
          {/* <LeftModuleBody/> */}

          {this.props.children}
          <RightModuleBody/>
          
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
}
}