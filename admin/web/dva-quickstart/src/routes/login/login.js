import React, { Component } from 'react';
import LoginWindows from '../../components/login_windows.js';
import Head from '../../layout/head.js';
import Foot from '../../layout/foot.js';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        console.log(1);
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
        		<LoginWindows that={this} />
            </div>
        );
    }
}
export default Login;