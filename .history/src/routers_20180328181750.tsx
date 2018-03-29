import * as React from 'react'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import { renderRoutes, RouteConfig, RouteConfigComponentProps } from 'react-router-config'
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import Loadable from 'react-loadable';
// import ActivityIndicator from "antd-mobile/lib/activity-indicator";
// import List from 'antd-mobile/lib/list';
// const Item = List.Item;
// const Brief = Item.Brief;

class RootRoutes extends React.Component<any, any> {
   
    // 创建过渡动画
    createCSSTransition = (Component: any, content = true, classNames = "fade") => {
        return class extends React.Component<any, any>{
            render() {
                return (
                    <Animate transitionName={classNames}
                        transitionAppear={true} component="">
                        <div className="animate-content">
                            <Component  {...this.props} />
                        </div>
                    </Animate  >
                );
            }
        }
    };
    // 组件加载动画
    Loading = () => (
        // <ActivityIndicator  size="large" />
        null
    );
    /**
     * 
     * @param Component 组件
     * @param Animate 路由动画
     * @param Loading 组件加载动画
     * @param cssTranParams 路由动画参数
     */
    Loadable(Component, Animate = true, Loading = this.Loading, cssTranParams = { content: true, classNames: "fade" }) {
        if (!Loading) {
            Loading = () => null;
        }
        // console.log("Loading",Loading);
        const loadable = Loadable({ loader: Component, loading: Loading });
        if (Animate) {
            return this.createCSSTransition(loadable, cssTranParams.content, cssTranParams.classNames);
        }
        return loadable;
    };
    routes: RouteConfig[] = [

    ]

    render() {
        return (
            <BrowserRouter>
                {renderRoutes(this.routes)}
            </BrowserRouter>
        );
    }
}
export default class extends RootRoutes {
    // routes: RouteConfig[] = [
    routes: any[] = [
        // {
        //     path: "/",
        //     exact: true,
        //     component: () => {
        //         // 输出路由列表
        //         return <div>
                   
                   
        //                 {this.routes.map((x, i) => {
        //                     if (x.path && x.path != "/") {
        //                         return <li key={i} >
        //                             <Link to={x.path} >{x.name} </Link>
        //                          </li>
        //                     }
        //                 })}
        //             </div>
            
        //     },
        // },
        {
            name: "首页",
            path: "/home",
            component: this.Loadable(() => import('./containers/count').then(x => x.Layout)),
            children:[
                {
                    name: "生活笔记",
                    path: "/note",
                    component: this.Loadable(() => import('./containers/count').then(x => x.Layout)),
                },
                {
                    name: "技术杂谈",
                    path: "/chat",
                    component: this.Loadable(() => import('./containers/count').then(x => x.Layout)),
                },
            ]
        },
       
        {
            name: "登录",
            path: "/back/login",
            component: this.Loadable(() => import('./containers/count').then(x => x.Layout)),
        },
       
    ]

}
