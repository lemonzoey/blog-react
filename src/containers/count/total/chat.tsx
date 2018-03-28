import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components'
import {Chat} from '../../../components'

export class Chatpage extends React.Component<any, any> {
render(){
    return <LayoutPublic>
        <Chat/>
    </LayoutPublic>
   }
}