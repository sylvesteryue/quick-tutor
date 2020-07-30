import React, {Component} from 'react';

import {login} from '../../helpers/auth'

import LoginForm from '../../components/Login/LoginForm/LoginForm'

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.enterEmailPasswordHandler = this.enterEmailPasswordHandler.bind(this);
    }
    

    async enterEmailPasswordHandler(loginEmail, loginPasswd) {
        await this.setState({email: loginEmail, password: loginPasswd});

        console.log(this.state.email, this.state.password);

        try {
            await login(this.state.email, this.state.password);
            this.props.history.push('/home')
        } catch (error) {
            console.log(error.message);
        }
    }

    render() {
        return(
            <div>
                <LoginForm enterEmailPassword={this.enterEmailPasswordHandler}/>
            </div>
        );
    }


}

export default Login;