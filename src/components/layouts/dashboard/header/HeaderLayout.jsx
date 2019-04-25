import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { requestLogout } from '../../../../actions/login';
import { connect } from 'react-redux';
class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: false,
            isLogout: false

        }
    }
    onClick = (event) => {
        event.preventDefault();
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    onLogout = () => {
        this.props.requestLogout();
        this.setState({
            isLogout: true
        })

    }
    render() {
        if (this.state.isLogout) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        return (
            <div className="b-dashboard-header">
                <div className="container-fluid">
                    <div className="b-block">
                        <div className="b-block-left">
                            <div className="b-logo">
                                <Link to="/dashboard/" className="b-link">
                                    <img src="/images/core-img/logo2.png" alt="true" />
                                </Link>
                            </div>
                        </div>
                        <div className="b-block-right">
                            <nav className="b-page-nav">
                                <ul className="b-list-item">
                                    <li className="b-item">
                                        <Link to="/" className="b-link"><i className="fas fa-cart-plus" /></Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/" className="b-link"><i className="fas fa-bell" /></Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/" className="b-link"><i className="fas fa-chart-bar" /></Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/" className="b-link"><i className="fas fa-cart-plus" /></Link>
                                    </li>
                                    <li className={this.state.isToggle ? "b-item b-toggle active" : "b-item b-toggle"}>
                                        <Link to="/" onClick={this.onClick} className="b-link">
                                            Hi,San
                                            <i className="fab fa-reddit-alien" />
                                        </Link>
                                        <div className="b-dropdown">
                                            <div className="b-heading">
                                                <div className="b-icon">
                                                    <img src="/images/core-img/logo2.png" alt="Logo" />
                                                </div>
                                                <div className="b-info">
                                                    <h2 className="b-text-title">
                                                        Tran Van Phu
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="b-signout">
                                                <button className="b-btn" onClick={this.onLogout}>
                                                    Sign out
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    }
}
export default connect(mapStateToProps, { requestLogout })(HeaderLayout);