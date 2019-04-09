import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class MenuLayout extends Component {
    render() {
        return (
            <div className="b-page-menu">
                <div className="container">
                    <div className="b-block">
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
                                        <Link to="/" className="b-link">Home</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/tour" className="b-link">Tour</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/about" className="b-link">About Us</Link>
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
                                        <Link to="/blog" className="b-link">News</Link>
                                    </li>
                                    <li className="b-item">
                                        <Link to="/contact" className="b-link">Contact</Link>
                                    </li>
                                    <li className="b-item b-book">
                                        <Link to="/" className="b-link">Book Now <i className="fas fa-arrow-right" /></Link>
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

export default MenuLayout;