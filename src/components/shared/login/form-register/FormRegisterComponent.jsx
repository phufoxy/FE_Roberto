import React, { Component } from 'react';

class FormRegisterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm_password: ''
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
        this.props.onRegister(this.state)
    }
    render() {
        return (
            <form className="b-form" onSubmit={this.onSubmit}>
                <h2 className="b-text-title">
                    ACCOUNT REGISTER
            </h2>
                <div className="b-group b-register">
                    <div className="b-group-form">
                        <input type="text" name="username" className="b-input" placeholder="user name" onChange={this.onChanger} value={this.state.username} />
                    </div>
                    <div className="b-group-form">
                        <input type="password" name="password" className="b-input" placeholder="user password" onChange={this.onChanger} value={this.state.password} />
                    </div>
                    <div className="b-group-form">
                        <input type="password" name="confirm_password" className="b-input" placeholder="user confirm_password" onChange={this.onChanger} value={this.state.confirm_password} />
                    </div>
                </div>
                <button className="b-btn waves-effect waves-teal">SIGN UP</button>
            </form>
        );
    }
}

export default FormRegisterComponent;