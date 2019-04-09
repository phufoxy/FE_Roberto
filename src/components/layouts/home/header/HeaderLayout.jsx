import React, { Component } from 'react';

class HeaderLayout extends Component {
    render() {
        return (
            <header className="b-page-header">
                <div className="container">
                    <div className="b-block">
                        <div className="b-block-left">
                            <nav className="b-page-nav">
                                <ul className="b-list-item">
                                    <li className="b-item">
                                        <p className="b-text-norm">
                                            <i className="fas fa-phone" />
                                            (123) 456-789-123</p>
                                    </li>
                                    <li className="b-item">
                                        <p className="b-text-norm">
                                            <i className="fas fa-envelope" />
                                            info.colorlib@gmail.com</p>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="b-block-right">
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
                </div>
            </header>
        );
    }
}

export default HeaderLayout;