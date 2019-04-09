import React, { Component } from 'react';
import { FormRegisterComponent } from '../../shared/login';
import { requestRegister } from '../../../actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.onRegister = this.onRegister.bind(this);
    }
    onRegister(data) {
        this.props.requestRegister(data)
    }
    render() {
        if (cookies.get('token') != null) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <main className="b-page-login b-register">
                <div className="b-fullscreen">
                    <div className="b-heading">
                        <img src="./images/dashboard/logo-dashboard.png" alt="Logo" className="wow fadeInDown" />
                    </div>
                    <FormRegisterComponent onRegister={this.onRegister}></FormRegisterComponent>
                </div>
            </main>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.login.account,
        token: state.login.token,
        error: state.login.error,
        login: state.login.login
    }
}
export default connect(mapStateToProps, { requestRegister })(RegisterPage);