import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'
import {LeftModuleBody} from '../../../components/public/leftModule/leftModuleBody'
import {Chat} from '../../../components'
import {Note} from '../../../components/note'
export class Layout extends React.Component<any, any> {
render(){
    return <LayoutPublic>
           <LeftModuleBody/>
        </LayoutPublic>
   }
}