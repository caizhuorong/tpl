import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login_windows.less';
const FormItem = Form.Item;

class loginWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    componentWillMount(){
    }
    handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFields((err, values) => {
	        if (!err) {
	            console.log('Received values of form: ', values);
	        }
	    });
    }
    componentDidMount(){
    }
    render() {
    	const { getFieldDecorator } = this.props.form;
        return (
        	<div className={styles.main}>
	            <Form onSubmit={this.handleSubmit} >
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
			          <a  href="">Forgot password</a>
			          <Button type="primary" htmlType="submit" >
			            Log in
			          </Button>
			          Or <a href="">register now!</a>
			        </FormItem>
		        </Form>
	        </div>
        );
    }
}
const loginWindows = Form.create()(loginWindow);
export default loginWindows;




