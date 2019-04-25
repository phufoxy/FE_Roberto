import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
        }
        this.onChanger = this.onChanger.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.props.is_check === "login") {
            this.props.onLogin(this.state.username, this.state.password);
        } else if (this.props.is_check === "register") {
            this.props.onRegister(this.state);
        } else {
            if (this.state.password === this.state.confirm_password) {
                this.props.onForgotPass(this.state.username, this.state.password);
            }
        }
    }
    render() {
        const mainContent = () => {
            switch (this.props.choice) {
                case "LOGIN":
                    return (
                        <form className="b-form" onSubmit={this.onSubmit}>
                            <h2 className="b-text-title">
                                ACCOUNT LOGIN
                        </h2>
                            <div className="b-group b-register">
                                <div className="b-group-form">
                                    <input type="text" name="username" className="b-input" placeholder="user name" onChange={this.onChanger} value={this.state.username} />
                                </div>
                                <div className="b-group-form">
                                    <input type="password" name="password" className="b-input" placeholder="user password" onChange={this.onChanger} value={this.state.password} />
                                </div>

                            </div>
                            <button className="b-btn waves-effect waves-teal">SIGN IN</button>
                        </form>
                    )
                case "REGISTER":
                    return (
                        <form className="b-form" onSubmit={this.onSubmit}>
                            <h2 className="b-text-title">
                                REGISTER FORM
                            </h2>
                            <div className="b-group b-register">
                                <div className="b-group-form">
                                    <input type="text" name="username" className="b-input" placeholder="Enter UserName" onChange={this.onChanger} value={this.state.username} />
                                </div>
                                <div className="b-group-form">
                                    <input type="password" name="password" className="b-input" placeholder="Enter Password" onChange={this.onChanger} value={this.state.password} />
                                </div>
                                <div className="b-group-form">
                                    <input type="password" name="confirm_password" className="b-input" placeholder="Enter Confirm Password" onChange={this.onChanger} value={this.state.confirm_password} />
                                </div>
                            </div>
                            <button className="b-btn waves-effect waves-teal">SIGN UP</button>
                        </form>
                    )
                case "FORGOT":
                    return (
                        <form className="b-form" onSubmit={this.onSubmit}>
                            <h2 className="b-text-title">
                                FORGOT FORM
                        </h2>
                            <div className="b-group b-register">
                                <div className="b-group-form">
                                    <input type="text" name="username" className="b-input" placeholder="Enter UserName" onChange={this.onChanger} value={this.state.username} />
                                </div>
                                <div className="b-group-form">
                                    <input type="password" name="password" className="b-input" placeholder="Enter old_password" onChange={this.onChanger} value={this.state.password} />
                                </div>
                                <div className="b-group-form">
                                    <input type="password" name="confirm_password" className="b-input" placeholder="user password" onChange={this.onChanger} value={this.state.confirm_password} />
                                </div>
                            </div>
                            <button className="b-btn waves-effect waves-teal">UPDATE PASS</button>
                        </form>
                    )
                default:
                    return (
                        <></>
                    )
            }
        }
        return (
            mainContent()
        );
    }
}

export default FormComponent;