import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'
import {Chat} from '../../../components'
import {LeftModuleBody} from '../../../components/public/leftModule/leftModuleBody'

export class Layout extends React.Component<any, any> {
     render(){
         let pathname = this.props.location.pathname
       return <LayoutPublic>   
                    {pathname=='/'? <LeftModuleBody/>  : (pathname=='/note'?<Note/>:<Chat/>)  }
             </LayoutPublic> 
      }   
}