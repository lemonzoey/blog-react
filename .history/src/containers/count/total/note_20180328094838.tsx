import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'

export class Notepage extends React.Component<any, any> {
render(){
    return <LayoutPublic>
        <Note/>
    </LayoutPublic>
   }
}