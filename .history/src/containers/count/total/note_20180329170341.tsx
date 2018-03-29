import * as React from 'react';
import { render } from 'react-dom';
import {Note} from '../../../components/note'


export class Layout extends React.Component<any, any> {
     render(){
         let pathname = this.props.location.pathname
       return <LayoutPublic>   
                    {pathname=='/'? <LeftModuleBody/>  : (pathname=='/note'?<Note/>:<Chat/>)  }
             </LayoutPublic> 
      }   
}