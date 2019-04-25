import React, { Component } from 'react';
import { FormComponent } from '../../shared/login';
import { requestRegister } from '../../../actions/login';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from 'react-page-loading';
const cookies = new Cookies();

class RegisterPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isCheck: false,
            isLogin: false
        }
    }
    onRegister = (data) => {
        this.props.requestRegister(data)
        this.setState({
            isLogin: true
        })
    }
    onLogin = () => {
        this.setState({
            isCheck: true
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
                <Redirect to="/login" />
            )
        }
        if (this.state.isLogin) {
            return (
                <Redirect to="/" />
            )
        }
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>

                <main className="b-page-login">
                    <ToastContainer autoClose={5000} draggable={false} />
                    <div className="b-block">
                        <div className="b-block-left" style={{ backgroundImage: 'url("/images/bg-img/5.jpg")' }}>
                        </div>
                        <div className="b-block-right">
                            <FormComponent onRegister={this.onRegister} choice="REGISTER" is_check="register"></FormComponent>
                            <div className="b-forget b-register">
                                <p className="b-text-norm">Forget <a href="/" className="b-link">Username</a>/<a href="/" className="b-link">password?</a></p>
                            </div>
                            <div className="b-signup">
                                <button className="b-btn" onClick={this.onLogin}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </main>
            </Page>

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