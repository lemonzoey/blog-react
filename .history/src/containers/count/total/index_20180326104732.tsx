import * as React from 'react'
import { observer, inject } from 'mobx-react';
import DataBody from './body';
import LoadPublic from '../../../components/public/loading'
@inject("Countdata")
@observer
export class CourseTotal extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.Countdata.counts.getCountDate();
    }
    render() {
     const load = this.props.Countdata.counts.loading
        
        if(load){
               
            return <LoadPublic/>
         }
     return(
        <DataBody/>
    
     )
    }
}


