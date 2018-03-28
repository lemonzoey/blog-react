import * as React from 'react'
import Coursecom from '../components/coursecom'
import Footer from '../components/footer'
import Citys from '../components/citys'
import Http from '../../../store/public/http'
import { observer, inject } from 'mobx-react';

@inject("Countdata")
@observer
export  default class Course1 extends React.Component<any, any> {
    render() {
        const coursedata = this.props.Countdata.counts.data
        return (
            if(load){
observable
            }
            <>
            <Coursecom coursedata={coursedata}/>
            <Citys coursedata={coursedata}/>
            <Footer coursedata={coursedata}/>
            </>
        )
    }
}