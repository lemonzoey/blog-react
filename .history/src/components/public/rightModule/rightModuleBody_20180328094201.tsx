import * as React from 'react';
import { render } from 'react-dom';
import {Share} from './share'
import CommonCard from '../commonCard'
import Pic from './pic'
import Classify from './classify'

import '../style/rightModule/rightBody.css'
export class RightModuleBody extends React.Component<any, any> {
render(){
   return <div className='rightModule'>
    <Share/>
    <CommonCard/>
    <Pic/>
    </div>
   }
}


