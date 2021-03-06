
import { Layout, Menu, Breadcrumb } from 'antd';
import * as React from 'react';
import { render } from 'react-dom';
import {LeftModuleBody} from './leftModule/leftModuleBody'
import {RightModuleBody} from './rightModule/rightModuleBody'
import Ad from './ad'
import { Row, Col } from 'antd';
import './style/layout.css'
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
        <Menu.Item key="1">首页</Menu.Item>
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
      <div style={{ background: '#f0f2f5',  minHeight: 280 }} className='clearfloat'>
      <Row>
         {/* <Col xs={24} sm={24} md={16} lg={16} xl={16} ><LeftModuleBody/></Col>
         <Col xs={0} sm={0} md={1} lg={1} xl={1}></Col>
         <Col xs={0} sm={0} md={8} lg={8} xl={8}><RightModuleBody/></Col> */}

         <Col xs={{ span: 24, offset: 0 }} lg={{ span: 16, offset: 0 }}><LeftModuleBody/></Col>
         <Col xs={{ span: 0, offset: 0 }} lg={{ span: 0, offset: 1 }}>Col</Col>
         <Col xs={{ span: 0, offset: 0 }} lg={{ span: 7, offset: 0 }}><RightModuleBody/></Col>
      </Row>
          
          
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
}
}