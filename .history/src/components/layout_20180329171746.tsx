
import { Layout, Menu, Breadcrumb } from 'antd';
import * as React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import {LeftModuleBody} from './public/leftModule/leftModuleBody'
import {RightModuleBody} from './public/rightModule/rightModuleBody'
import Ad from './public/ad'
import './public/style/layout.css'
const { Header, Content, Footer } = Layout;
export class LayoutPublic extends React.Component<any, any> {
render(){
    return <Layout className="layout">
    <Header className = 'header'>
      <div className='top'><span>zoey </span>  的个人博客</div>
      <Menu className = 'nav' theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
        <Menu.Item key="1" ><Link to='/' >首页</Link></Menu.Item>
        <Menu.Item key="2"> <Link to='/note' >生活笔记</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/chat' >技术杂谈</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 %' }} >
      <div style={{ margin: '0 0 16px' }}>
        <Ad/>
      </div>
      <div style={{ background: '#f0f2f5',  minHeight: 780 }} >
        <RightModuleBody/>
        <div className='leftModule'>

          {this.props.children}

        </div>  
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
 }
}