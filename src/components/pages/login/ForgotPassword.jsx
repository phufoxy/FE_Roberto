import React, { Component } from 'react';
import { FormComponent } from '../../shared/login';
import { requestFogotPassword } from '../../../actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();
class ForgotPassword extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isCheck: false,
            is_login: false
        }
    }
    onForgotPass = (username, password) => {
        this.props.requestFogotPassword(username, password);
        this.setState({
            is_login: true
        })
    }
    onRegister = () => {
        this.setState({
            isCheck: !this.state.isCheck
        })
    }
    render() {
        if (typeof (cookies.get('token')) !== 'undefined' && typeof (cookies.get('data') !== 'undefined')) {
            return (
                <Redirect to="/" />
            )
        }
        if (this.state.isCheck) {
            return (
                <Redirect to='/register'></Redirect>
            )
        }
        if (this.state.is_login) {
            return (
                <Redirect to='/login'></Redirect>
            )
        }
        return (
            <main className="b-page-login">
                <ToastContainer autoClose={5000} draggable={false} />
                <div className="b-block">
                    <div className="b-block-left" style={{ backgroundImage: 'url("/images/bg-img/5.jpg")' }}>
                    </div>
                    <div className="b-block-right">
                        <FormComponent onForgotPass={this.onForgotPass} choice="FORGOT" is_check="forgot"></FormComponent>
                        <div className="b-forget ">
                            <p className="b-text-norm">Forget <a href="/" className="b-link">Username</a>/<a href="/" className="b-link">password?</a></p>
                        </div>
                        <div className="b-signup">
                            <button className="b-btn" onClick={this.onRegister}>SIGN UP</button>
                        </div>
                    </div>
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
        is_forget: state.login.is_forget
    }
}
export default connect(mapStateToProps, { requestFogotPassword })(ForgotPassword);