import * as React from 'react';
// import { render } from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;



class NormalLoginForm extends React.Component {
 
}

const NormalLoginForm1 = Form.create({})(NormalLoginForm);


export class Login extends React.Component<any, any> {
  render(){
      return <NormalLoginForm1 />
         
     }
  }