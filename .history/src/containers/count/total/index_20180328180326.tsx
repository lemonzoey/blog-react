import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'
import {LeftModuleBody} from '../../../components/public/leftModule/leftModuleBody'
import {Chat} from '../../../components'
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
export class Layout extends React.Component<any, any> {
render(){
    return <LayoutPublic>
           {/* <Redirect from="/chat" to="/home" /> */}
           <Route path="home" component={<LeftModuleBody} />
           <Route path="note" component={Note} />
           <Route path="chat" component={Chat} />
        </LayoutPublic>
   }
}