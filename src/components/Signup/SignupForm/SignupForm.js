import React, {Component} from 'react';

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
                        <input placeholder="Email" type="email" onChange={this.handleChange} value={this.state.email} name="email"></input>
                    </div>
                    <div>
                        <input placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password} name="password"></input>
                    </div>

                    <div>
                        <input placeholder="Confirm Password" type="password" onChange={this.handleChange} value={this.state.cpassword} name="cpassword"></input>
                    </div>

                    <div>
                        {this.state.error? (
                            <p>{this.state.error}</p>
                        ) : null}
                        <button type="submit">Sign Up</button>
                    </div> 
                </form>
            </div>
        );
    }

}



export default SignupForm;






