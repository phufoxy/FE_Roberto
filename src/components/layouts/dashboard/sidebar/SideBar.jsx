import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nN1dsi3f2DUf5R-pKqg" +
                    "isfU2-8PP8CDVXchM5QIoz0MBbs3I')"
            }
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
        event.preventDefault();
        this.props.onLogout();
    }
    render() {
        return (
            <div className="b-sidebar">
                <div className="b-profile">
                    <div className="b-profile-header">
                        <div className="b-icon" style={this.state.style}></div>
                        <div className="b-description">
                            <h5 className="b-text-name">
                                Tran Van Phu
                            </h5>
                            <p className="b-text-norm">Online</p>
                        </div>
                    </div>
                    <div className="b-form">
                        <div className="b-icon">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="b-input">
                            <input type="text" placeholder="Enter Name" />
                        </div>
                    </div>
                </div>
                <div className="b-block-menu">
                    <ul className="sidebar-menu">
                        <li className="sidebar-header">PAGES</li>
                        <li className="b-item"><Link to="/dashboard" className="b-link"><i
                            className="fas fa-tachometer-alt"></i> Dashboard v1</Link>
                        </li>
                        <li className="b-item"><Link to="/dashboard/place" className="b-link"><i
                            className="fas fa-globe-europe"></i> Place</Link>
                        </li>
                        <li className="sidebar-header">MAIN NAVIGATION</li>
                        <li className="b-item ">
                            <Link to="/" className="b-link b-hash-menu">
                                <i className="fas fa-globe-europe"></i><span>Place</span>
                            </Link>
                            <ul className="sidebar-submenu">
                                <li className="b-item"><Link to="/dashboard/place" className="b-link"><i
                                    className="fas fa-list-ol"></i> Place </Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/place/details" className="b-link"><i
                                    className="fas fa-info-circle"></i> Place Detail</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="b-item ">
                            <Link to="/" className="b-link b-hash-menu">
                                <i className="fas fa-house-damage"></i><span>House</span>
                            </Link>
                            <ul className="sidebar-submenu">
                                <li className="b-item"><Link to="/dashboard/house" className="b-link"><i
                                    className="fas fa-list-ol"></i> House </Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/house/details" className="b-link"><i
                                    className="fas fa-info-circle"></i> House Detail</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="b-item ">
                            <Link to="/" className="b-link b-hash-menu">
                                <i className="fas fa-utensils"></i><span>Restaurants</span>
                            </Link>
                            <ul className="sidebar-submenu">
                                <li className="b-item"><Link to="/dashboard/restaurants" className="b-link"><i
                                    className="fas fa-list-ol"></i> Restaurant </Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/restaurants/details" className="b-link"><i
                                    className="fas fa-info-circle"></i> Place Detail</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="b-item ">
                            <Link to="/" className="b-link b-hash-menu">
                                <i className="fas fa-tractor"></i><span>Tour</span>
                            </Link>
                            <ul className="sidebar-submenu">
                                <li className="b-item"><Link to="/dashboard/tour" className="b-link"><i
                                    className="fas fa-list-ol"></i> Tour </Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/tour/details" className="b-link"><i
                                    className="fas fa-info-circle"></i> Tour Detail</Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/tour/images" className="b-link"><i
                                    className="fas fa-info-circle"></i> Tour Images</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="b-item">
                            <Link to="/dashboard/blog" className="b-link b-hash-menu">
                                <i className="fas fa-globe-europe"></i><span>Blog</span>
                            </Link>
                            <ul className="sidebar-submenu">
                                <li className="b-item"><Link to="/dashboard/blog" className="b-link"><i
                                    className="fas fa-list-ol"></i> Blog </Link>
                                </li>
                                <li className="b-item"><Link to="/dashboard/blog/details" className="b-link"><i
                                    className="fas fa-info-circle"></i> Blog Detail</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-header">Feature</li>
                        <li className="b-item"><Link to="/dashboard/slider" className="b-link"><i
                            className="fas fa-sign-in-alt"></i> Slider</Link>
                        </li>
                        <li className="sidebar-header">LOGIN</li>
                        <li className="b-item"><Link to="/login" className="b-link"><i
                            className="fas fa-sign-in-alt"></i> Login</Link>
                        </li>
                        <li className="b-item"><Link to="/register" className="b-link"><i
                            className="fas fa-registered"></i> Register</Link>
                        </li>
                        <li className="b-item"><Link to="/" className="b-link" onClick={this.onClick}><i
                            className="fas fa-registered"></i> logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;