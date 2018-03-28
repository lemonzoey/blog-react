import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/public/layout'
import {Chat} from '../../../components/chat'

export class Notepage extends React.Component<any, any> {
render(){
    return <LayoutPublic>
        <Chat/>
    </LayoutPublic>
   }
}