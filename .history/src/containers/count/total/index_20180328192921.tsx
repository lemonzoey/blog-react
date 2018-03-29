import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'
import {Chat} from '../../../components'
import {LeftModuleBody} from '../../../components/public/leftModule/leftModuleBody'

export class Layout extends React.Component<any, any> {
    Page(props){
        debugger
       if(props.location.pathname=='/note'){  
            return <Note/>           
           }else if(props.location.pathname=='/chat'){
            return  <Chat/>      
           }else{
            return  <LeftModuleBody/>     
           }
        }
     render(){
         let chat = this.props.location.pathname=='/chat'?  <Chat/> : <LeftModuleBody/> 
         let note = this.props.location.pathname=='/note'? <Note/>  : <LeftModuleBody/> 
       return <LayoutPublic>   
                    {this.props.location.pathname=='/'? <LeftModuleBody/>  : (this.props.location.pathname=='/note'?<Note/>:)  }
             </LayoutPublic> 
      }
   
       
       
   
}