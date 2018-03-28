import * as React from 'react'

export class CourseTotal extends React.Component<any, any> {
   
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


