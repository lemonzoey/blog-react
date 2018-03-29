import * as React from 'react';
import { render } from 'react-dom';
import '../../../components/public/style/login.css'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

      class NormalLoginForm extends React.Component<any,any> {
        handleSubmit = (e) => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        }
        render() {
          const { getFieldDecorator } = this.props.form;
          return (
            <div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </FormItem>
            </Form>
            </div>
          );
        }
      }
      
      const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
      
      export class Login extends React.Component<any,any>{
         render(){
           return <WrappedNormalLoginForm/>
         }
      }
         
     