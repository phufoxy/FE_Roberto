import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { requestLogout } from '../../../../actions/login';
import { connect } from 'react-redux';
const cookies = new Cookies();
class MenuLayout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isCheck: false,
            isDropdown: false,
            logout: false,
            isToggle: false
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.stickMenu);
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            this.setState({
                logout: true
            })
        }
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.stickMenu);
    }
    stickMenu = (event) => {
        const nav = document.querySelector('.b-page-menu');
        const navTop = nav.offsetTop;
        if (window.scrollY > navTop) {
            nav.classList.add('b-sticky');
        } else {
            nav.classList.remove('b-sticky');
        }
    }
    onClick = (event) => {
        event.preventDefault();
        this.setState({
            isDropdown: !this.state.isDropdown
        })
    }
    onLogout = () => {
        this.props.requestLogout();
        this.setState({
            logout: true
        })

    }
    onToggle = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    render() {
        const contentLogin = () => {
            if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
                return (
                    <></>
                )
            } else {
                return (
                    <div className="b-profile">
                        <div className="b-user">
                            <h2 className="b-text-title">
                                <i className="fas fa-user-ninja" /> {cookies.get('data').username}
                            </h2>
                        </div>
                        {
                            cookies.get('is_staff') === 'true' ?
                                <div className="b-staff">
                                    <Link to="/dashboard" className="b-link">
                                        <i className="fas fa-tachometer-alt"></i> Admin
                                    </Link>
                                </div> :
                                <div className="b-staff">
                                    <Link to={'/profile/' + cookies.get('data').id} className="b-link">
                                        <i className="fas fa-user-shield" /> User
                                    </Link>
                                </div>
                        }
                        <div className="b-logout">
                            <button className="b-btn" onClick={this.onLogout}><i className="fas fa-sign-out-alt" /> Đăng Xuất</button>
                        </div>
                    </div>
                )
            }
        }
        const menuLogout = () => {
            if (this.state.logout) {
                return (
                    <li className="b-item b-book">
                        <Link to="/login" className="b-link">Đăng Nhập <i className="fas fa-arrow-right" /></Link>
                    </li>
                )
            } else {
                return (
                    <li className={this.state.isDropdown ? "b-item b-book active" : "b-item b-book"}>
                        <a href="/" onClick={this.onClick} className="b-link">Tài Khoản <i className="fas fa-arrow-right" /></a>
                        {contentLogin()}
                    </li>
                )
            }
        }

        return (
            // "b-page-menu"
            <div className={this.state.isCheck === false ? "b-page-menu" : "b-page-menu b-sticky"}>
                <div className="b-toggle-btn">
                    <button className="b-btn " id="b-btn-toggle" onClick={this.onToggle}>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="container">
                    <div className={this.state.isToggle ? "b-block responsive" : "b-block"}>
                        <div className="b-block-left">
                            <div className="b-logo">
                                <Link to="/" className="b-link">
                                    <img src="/images/core-img/logo.png" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="b-block-right">
                            <nav className="b-page-nav">
                                <ul className="b-list-item">
                                    <li className="b-item">
                                        <NavLink to="/" exact={true} activeClassName='is-active' className="b-link">Trang Chủ</NavLink>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/tour" exact={true} activeClassName='is-active' className="b-link">Tour</NavLink>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/about" exact={true} activeClassName='is-active' className="b-link">Về Chúng Tôi</NavLink>
                                    </li>
                                    <li className="b-item b-hash-menu">
                                        <Link to="/" className="b-link">Pages</Link>
                                        <ul className="b-dropdown">
                                            <li className="b-item">
                                                <Link to="/" className="b-link">News</Link>
                                            </li>
                                            <li className="b-item">
                                                <Link to="/" className="b-link">Contact</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/blog" exact={true} activeClassName='is-active' className="b-link">Sự Kiện</NavLink>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/contact" exact={true} activeClassName='is-active' className="b-link">Phản Hồi</NavLink>
                                    </li>
                                    {menuLogout()}
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
export default connect(mapStateToProps, { requestLogout })(MenuLayout);