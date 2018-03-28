import * as React from 'react'

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


