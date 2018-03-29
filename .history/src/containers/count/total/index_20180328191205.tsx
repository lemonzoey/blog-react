import * as React from 'react';
import { render } from 'react-dom';
import {LayoutPublic} from '../../../components/layout'
import {Note} from '../../../components/note'
import {Chat} from '../../../components'
import {LeftModuleBody} from '../../../components/public/leftModule/leftModuleBody'

export class Layout extends React.Component<any, any> {
    Page(props){
        if(props.location.pathname=='/note'){  
            return <Note/>           
           }else if(props.location.pathname=='/chat'){
            return  <Chat/>      
           }else{
            return  <LeftModuleBody/>     
           }
        }
     render(){
       return <LayoutPublic>   
                     this.Page/>
             </LayoutPublic> 
      }
   
        //   if(this.props.location.pathname=='/note'){  
        //     return <LayoutPublic>
        //              <Note/> 
        //            </LayoutPublic>
        //    }else if(this.props.location.pathname=='/chat'){
        //     return <LayoutPublic>   
        //               <Chat/>
        //            </LayoutPublic> 
        //    }else{
        //     return <LayoutPublic>   
        //               <LeftModuleBody/>
        //            </LayoutPublic>  
        //    }
       
   }
}