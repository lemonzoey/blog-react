import * as React from 'react'
import { observer, inject } from 'mobx-react';
import DataBody from './body';

@inject("Countdata")
@observer
export class CourseTotal extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.props.Countdata.counts.getCountDate();
    }
     const load = this.props.Countdata.counts.loading
    render() {
        if(load){
               
            return <LoadPublic/>
         }
     return(
        <DataBody/>
    
     )
    }
}


