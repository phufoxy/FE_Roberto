import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class MenuLayout extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isDropdown: false,
            isDropdownItem1: false,
            isDropdownItem2: false,

        }
    }

    onClick = (event) => {
        event.preventDefault();
        this.setState({
            isDropdown: !this.state.isDropdown,
            isDropdownItem1: false,
            isDropdownItem2: false
        })
    }
    onClickMenuItem1 = (event) => {
        event.preventDefault();
        this.setState({
            isDropdownItem1: !this.state.isDropdownItem1,
            isDropdown: false,
            isDropdownItem2: false
        })
    }
    onClickMenuItem2 = (event) => {
        event.preventDefault();
        this.setState({
            isDropdownItem2: !this.state.isDropdownItem2,
            isDropdown: false,
            isDropdownItem1: false
        })
    }
    render() {
        return (
            <div className="b-dashboard-menu">
                <div className="container-fluid">
                    <div className="b-block">
                        <div className="b-block-left">
                            <nav className="b-page-nav">
                                <ul className="b-list-item">
                                    <li className="b-item ">
                                        <NavLink to="/dashboard" exact={true} activeClassName='is-active' className="b-link">Dashboard</NavLink>
                                    </li>
                                    <li className={this.state.isDropdown ? "b-item b-hash-menu active" : "b-item b-hash-menu"}>
                                        <Link to="/" onClick={this.onClick} className="b-link">Tour</Link>
                                        <ul className="b-dropdown">
                                            <li className="b-item">
                                                <Link to="/dashboard/tour" className="b-link">Tour</Link>
                                            </li>
                                            <li className="b-item">
                                                <Link to="/dashboard/tour/details/" className="b-link">TourDetails</Link>
                                            </li>
                                            <li className="b-item">
                                                <Link to="/dashboard/tour/book/" className="b-link">Tour Book</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.isDropdownItem1 ? "b-item b-hash-menu active" : "b-item b-hash-menu"}>
                                        <Link to="/" onClick={this.onClickMenuItem1} className="b-link">Blog</Link>
                                        <ul className="b-dropdown">
                                            <li className="b-item">
                                                <Link to="/dashboard/blog/" className="b-link">Blog</Link>
                                            </li>
                                            <li className="b-item">
                                                <Link to="/dashboard/blog/details/" className="b-link">Details</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={this.state.isDropdownItem2 ? "b-item b-hash-menu active" : "b-item b-hash-menu"}>
                                        <Link to="/" onClick={this.onClickMenuItem2} className="b-link">Active</Link>
                                        <ul className="b-dropdown">
                                            <li className="b-item">
                                                <Link to="/dashboard/slider" className="b-link">Slider</Link>
                                            </li>
                                            <li className="b-item">
                                                <Link to="/" className="b-link">Dashboard</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/dashboard/user/" exact={true} activeClassName='is-active' className="b-link">User</NavLink>
                                    </li>
                                    <li className="b-item">
                                        <NavLink to="/dashboard/feedback/" exact={true} activeClassName='is-active' className="b-link">FeedBack</NavLink>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                        <div className="b-block-right">
                            <form className="b-form">
                                <div className="b-form-group">
                                    <input type="text" className="b-input" placeholder="Search" />
                                    <i className="fas fa-cart-plus"></i>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuLayout;