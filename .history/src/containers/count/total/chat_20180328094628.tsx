import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/public/layout'
import {Chat} from '../../../components/public/C'

export class Notepage extends React.Component<any, any> {
render(){
    return <LayoutPublic>
        <Note/>
    </LayoutPublic>
   }
}