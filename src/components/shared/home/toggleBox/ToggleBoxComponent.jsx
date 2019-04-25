import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { requestLogout } from '../../../../actions/login';
import { Redirect } from 'react-router-dom';
const cookies = new Cookies();

class ToggleBoxComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            views: "LOGIN",
            isLogin: false,
            isDashboard: false,
            is_staff: false,
            is_active: false
        }
    }
    onLogout = () => {
        this.props.requestLogout();
        this.setState({
            isLogin: true
        })
    }
    onLogin = () => {
        this.setState({
            isLogin: true
        })
    }
    onDashboard = () => {
        this.setState({
            isDashboard: true
        })
    }
    render() {
        if (this.state.isLogin) {
            return (
                <Redirect to='/login'></Redirect>
            )
        }
        if (this.state.isDashboard) {
            return (
                <Redirect to='/dashboard/place'></Redirect>
            )
        }
        const isLogin = () => {
            if (typeof (cookies.get('token')) !== 'undefined' && typeof (cookies.get('data') !== 'undefined')) {
                return (
                    <div className="b-block-item">
                        <button className="b-btn b-logout" onClick={this.onLogout}>
                            <i className="fas fa-sign-out-alt" />
                        </button>
                        <div className="b-content">
                            <h2 className="b-text-title">
                                Logout
                            </h2>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="b-block-item">
                        <button className="b-btn b-logout" onClick={this.onLogin}>
                            <i className="fab fa-redhat"></i>
                        </button>
                        <div className="b-content">
                            <h2 className="b-text-title">
                                Login
                                </h2>
                        </div>
                    </div>
                )
            }
        }
        const isNameAccount = () => {
            if (typeof (cookies.get('data')) !== 'undefined') {
                return (
                    <div className="b-block-item">
                        <button className="b-btn">
                            <i className="fas fa-user-circle" />
                        </button>
                        <div className="b-content">
                            {cookies.get('data').username}
                        </div>
                    </div>
                )
            }
        }
        const isDashboard = () => {
            if (cookies.get('is_staff') === 'true') {
                return (
                    <div className="b-block-item">
                        <button className="b-btn" onClick={this.onDashboard}>
                            <i className="fas fa-tachometer-alt"></i>
                        </button>
                        <div className="b-content">
                            <h2 className="b-text-title">
                                Dashboard
                            </h2>
                        </div>
                    </div>
                )
            } else {
                return (
                    <></>
                )
            }
        }

        return (
            <section className="b-toggle-box">
                <div className="b-block">
                    {isNameAccount()}
                    {isLogin()}
                    {isDashboard()}
                </div>
            </section>

        );
    }
}
function mapStateToProps(state) {
    return {
        account: state.login.account,
    }
}
export default connect(mapStateToProps, { requestLogout })(ToggleBoxComponent);