import React, { Component } from 'react';

class FooterLayout extends Component {
    render() {
        return (
            <footer className="b-dashboard-footer">
                <div className="b-block-header">
                    <div className="b-about">
                        <div className="b-heading">
                            <h2 className="b-text-title">
                                About
                  </h2>
                        </div>
                        <div className="b-content">
                            <p className="b-text-norm">
                                Whatever method you chosse,these nine will make you re-think theway you craft healines Why? Because they all
                                have points in that are worth from a point of view.
                  </p>
                        </div>
                    </div>
                    <div className="b-quick">
                        <div className="b-heading">
                            <h2 className="b-text-title">
                                Quick Link
                  </h2>
                        </div>
                        <nav className="b-page-nav">
                            <ul className="b-list-item">
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link">General Report</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="b-get">
                        <div className="b-heading">
                            <h2 className="b-text-title">
                                Get In Touch
                  </h2>
                        </div>
                        <div className="b-touch">
                            <form className="b-form">
                                <div className="b-form-group">
                                    <input type="text" className="b-input" placeholder="Enter Your Email" />
                                    <button className="b-btn">Join</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="b-block-footer">
                    <div className="b-block-left">
                        <img src="/images/core-img/logo2.png" alt="Logo" />
                    </div>
                    <div className="b-block-right">
                        <p className="b-text-norm">
                            Copyright ©2019 All rights reserved | This template is made with ♥ by Colorlib
                </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterLayout;