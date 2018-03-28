import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Animate from 'rc-animate';
import List1 from "./list";
import Course1 from "./course";

@inject("Countdata")
@observer
export default class extends React.Component<any, any> {
    render() {
        if( !this.props.Countdata.counts.showToggle){
            return (
            <Animate transitionName="fade" transitionAppear={true} component="">
              <div>
              <List1 />
              </div>
            </Animate > 
            )
        }
        return (
            <Animate transitionName="fade" transitionAppear={true} component="">
             <div>
             <Course1/>
             </div>
            </Animate > 
            )
        
    }
}






