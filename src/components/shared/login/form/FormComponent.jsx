import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
        this.props.onLogin(this.state.username, this.state.password)
    }
    render() {
        return (
            <div className="b-form-main">
                <form onSubmit={this.onSubmit}>
                    <div className="b-form-group  wow fadeInDown">
                        <div className="b-icon">
                            <i className="far fa-envelope"></i>
                        </div>
                        <div className="b-input">
                            <input type="text" name="username" placeholder="Username" onChange={this.onChanger} />
                        </div>
                    </div>
                    <div className="b-form-group  wow fadeInDown">
                        <div className="b-icon">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="b-input ">
                            <input type="password" name="password" placeholder="Password" onChange={this.onChanger} />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className=" wow fadeInDown" />
                </form>
            </div>
        );
    }
}

export default FormComponent;