import * as React from 'react'
import Listtitle from '../components/listtitle'
import Listitem from '../components/listitem'
import Http from '../../../store/public/http'
import { observer, inject } from 'mobx-react';


@inject("Countdata")
@observer
export default class List1 extends React.Component<any, any> {  
        render() {
           const listArr = this.props.Countdata.counts.data.list.slice()
            return(
               <div>
                <Listtitle/>
              
              {  listArr && listArr.map((x,i)=>{
               return  <Listitem data={x} key={i}/>
                  })
              } 
              </div>
            )
        }
        
    }