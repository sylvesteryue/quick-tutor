import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SignupForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            cpassword: '', 
            error: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.email, this.state.password);
        if(this.state.password === this.state.cpassword) {
            this.setState({error: ''});
            console.log("Password's match");
            let submitEmail = this.state.email;
            let submitPasswd = this.state.password;
            this.props.enterEmailPassword(submitEmail, submitPasswd);
        } else {
            console.log("Doesn't match");
            this.setState({error: "Passwords do not match"});
        }


        
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Sign up for Quick Tutor</h1>
                    <div>
                        <TextField label="Email" type="email" onChange={this.handleChange} value={this.state.email} name="email"></TextField>
                    </div>
                    <div>
                        <TextField label="Password" type="password" onChange={this.handleChange} value={this.state.password} name="password"></TextField>
                    </div>

                    <div>
                        <TextField label="Confirm Password" type="password" onChange={this.handleChange} value={this.state.cpassword} name="cpassword"></TextField>
                    </div>

                    <div>
                        {this.state.error? (
                            <p>{this.state.error}</p>
                        ) : null}
                        <Button variant="contained" color="primary" type="submit">Log in</Button>
                    </div> 
                </form>
            </div>
        );
    }

}



export default SignupForm;






