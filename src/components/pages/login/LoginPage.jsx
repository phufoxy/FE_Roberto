import React, { Component } from 'react';
import { FormComponent } from '../../shared/login';
import { requestLogin } from '../../../actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
    }
    onLogin(username, password) {
        this.props.requestLogin(username, password);
    }
    render() {
        if (typeof (cookies.get('token')) !== 'undefined') {
            return (
                <Redirect to="/dashboard/place" />
            )
        }
        return (
            <main className="b-page-login">
                <div className="b-fullscreen">
                    <div className="b-heading">
                        <img src="./images/dashboard/logo-dashboard.png" alt="Logo" className="wow fadeInDown" />
                    </div>
                    <FormComponent onLogin={this.onLogin}></FormComponent>
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
export default connect(mapStateToProps, { requestLogin })(LoginPage);