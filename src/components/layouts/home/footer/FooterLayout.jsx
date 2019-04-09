import React, { Component } from 'react';

class FooterLayout extends Component {
    render() {
        return (
            <footer className="b-page-footer">
                <div className="container">
                    <div className="b-footer-block">
                        <div className="b-footer-info">
                            <div className="b-heading">
                                <a href="/" className="b-link">
                                    <img src="/images/core-img/logo2.png" alt="Logo" />
                                </a>
                            </div>
                            <div className="b-content">
                                <h5 className="b-text-number">
                                    +12 345-678-9999
                    </h5>
                                <p className="b-text-norm">
                                    Info.colorlib@gmail.com
                    </p>
                                <p className="b-text-address">
                                    856 Cordia Extension Apt. 356, Lake Deangeloburgh, South Africa
                    </p>
                            </div>
                        </div>
                        <div className="b-footer-blog">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Our Blog
                    </h2>
                            </div>
                            <div className="b-content">
                                <div className="b-list-blog">
                                    <div className="b-item">
                                        <h2 className="b-text-title">
                                            Freelance Design Tricks How
                        </h2>
                                        <h4 className="b-text-time">
                                            <i className="fas fa-clock" />Jan 02, 2019
                        </h4>
                                    </div>
                                    <div className="b-item">
                                        <h2 className="b-text-title">
                                            Freelance Design Tricks How
                        </h2>
                                        <h4 className="b-text-time">
                                            <i className="fas fa-clock" />Jan 02, 2019
                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="b-footer-links">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Links
                    </h2>
                            </div>
                            <div className="b-content">
                                <nav className="b-page-nav">
                                    <ul className="b-list-item">
                                        <li className="b-item">
                                            <a href="/" className="b-link"><i className="fas fa-caret-right" /> About Us</a>
                                        </li>
                                        <li className="b-item">
                                            <a href="/" className="b-link"><i className="fas fa-caret-right" /> About Us</a>
                                        </li>
                                        <li className="b-item">
                                            <a href="/" className="b-link"><i className="fas fa-caret-right" /> About Us</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="b-footer-suber">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Subscribe Newsletter
                    </h2>
                            </div>
                            <div className="b-content">
                                <p className="b-text-norm">
                                    Subscribe our newsletter gor get notification about new updates.
                    </p>
                                <form className="b-form">
                                    <div className="b-form-group">
                                        <input type="text" name="email" placeholder="Enter your email.." />
                                        <button className="b-btn">
                                            <i className="fab fa-telegram-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="b-footer-templates">
                        <div className="b-template">
                            <p className="b-text-norm">
                                Copyright ©2019 All rights reserved | This template is made with ♥ by Colorlib
                  </p>
                        </div>
                        <nav className="b-page-nav">
                            <ul className="b-list-item">
                                <li className="b-item">
                                    <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link"><i className="fab fa-instagram" /></a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link"><i className="fab fa-twitter" /></a>
                                </li>
                                <li className="b-item">
                                    <a href="/" className="b-link"><i className="fas fa-kiss-beam" /></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterLayout;