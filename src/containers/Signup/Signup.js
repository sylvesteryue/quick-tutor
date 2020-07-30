import React, {Component} from 'react';

import SignupForm from '../../components/Signup/SignupForm/SignupForm'

import {signup} from '../../helpers/auth'

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.signupHandler = this.signupHandler.bind(this);
    }

    async signupHandler(signupEmail, signupPasswd) {
        await this.setState({ email: signupEmail, password: signupPasswd });
        console.log(this.state.email);
        console.log(this.state.password);
        try{
            await signup(this.state.email, this.state.password);
            this.props.history.push('/home')
        } catch (error) {
            console.log(error.message);
        }
    }


    render() {
        return(
            <div>
                <SignupForm enterEmailPassword={this.signupHandler}/>
            </div>
        );
    }


}

export default Signup;