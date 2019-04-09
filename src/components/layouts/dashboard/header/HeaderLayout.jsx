import React, { Component } from 'react';

class HeaderLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nN1dsi3f2DUf5R-pKqgisfU2-8PP8CDVXchM5QIoz0MBbs3I')"
            }
        }
    }
    render() {
        return (
            <header className="b-dashboard-header">
                <div className="b-block">
                    <div className="b-block-left">
                        <div className="b-logo">
                            <img src="/images/dashboard/logo-dashboard.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="b-block-right">
                        <nav className="b-page-nav">
                            <ul className="b-list-item">
                                <li className="b-item b-hash-menu">
                                    <button className="b-button-dropdown">
                                        <i className="far fa-envelope"></i>
                                    </button>
                                    <span className="b-current is-green">
                                        <p className="b-text-norm">1</p>
                                    </span>
                                    <div className="b-dropdown">
                                        <div className="b-heading">
                                            <h2 className="b-text-title">
                                                You have 1 message(s)
                                            </h2>
                                        </div>
                                        <div className="b-content">
                                            <div className="b-block-item">
                                                <div className="b-info">
                                                    <h2 className="b-text-title">
                                                        Support Team
                                                    </h2>
                                                    <p className="b-text-norm">
                                                        Why not consider this a test message ?
                                                    </p>
                                                </div>
                                                <div className="b-time">
                                                    <p className="b-text-norm">
                                                        <i className="fas fa-clock"></i>
                                                        17 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b-footer">
                                            <h2 className="b-text-title">
                                                See All Message
                                            </h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="b-item b-hash-menu">
                                    <button className="b-button-dropdown">
                                        <i className="fas fa-bell"></i>
                                    </button>
                                    <span className="b-current is-yellow">
                                        <p className="b-text-norm">12</p>
                                    </span>
                                    <div className="b-dropdown">
                                        <div className="b-heading">
                                            <h2 className="b-text-title">
                                                You have 1 message(s)
                                            </h2>
                                        </div>
                                        <div className="b-content">
                                            <div className="b-block-item">
                                                <div className="b-info">
                                                    <h2 className="b-text-title">
                                                        Support Team
                                                    </h2>
                                                    <p className="b-text-norm">
                                                        Why not consider this a test message ?
                                                    </p>
                                                </div>
                                                <div className="b-time">
                                                    <p className="b-text-norm">
                                                        <i className="fas fa-clock"></i>
                                                        17 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b-footer">
                                            <h2 className="b-text-title">
                                                See All Message
                                            </h2>
                                        </div>
                                    </div>
                                </li>
                                <li className="b-item b-hash-menu">
                                    <button className="b-button-dropdown">
                                        <i className="fas fa-flag"></i>
                                    </button>
                                    <span className="b-current is-red">
                                        <p className="b-text-norm">1</p>
                                    </span>
                                    <div className="b-dropdown">
                                        <div className="b-heading">
                                            <h2 className="b-text-title">
                                                You have 1 message(s)
                                            </h2>
                                        </div>
                                        <div className="b-content">
                                            <div className="b-block-item">
                                                <div className="b-info">
                                                    <h2 className="b-text-title">
                                                        Support Team
                                                    </h2>
                                                    <p className="b-text-norm">
                                                        Why not consider this a test message ?
                                                    </p>
                                                </div>
                                                <div className="b-time">
                                                    <p className="b-text-norm">
                                                        <i className="fas fa-clock"></i>
                                                        17 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b-footer">
                                            <h2 className="b-text-title">
                                                See All Message
                                            </h2>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                        <div className="b-person b-hash-menu">
                            <div className="b-dropdown">
                                <div className="b-heading">
                                    <h2 className="b-text-title">
                                        You have 1 message(s)
                                    </h2>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-item">
                                        <div className="b-info">
                                            <h2 className="b-text-title">
                                                Support Team
                                            </h2>
                                            <p className="b-text-norm">
                                                Why not consider this a test message ?
                                            </p>
                                        </div>
                                        <div className="b-time">
                                            <p className="b-text-norm">
                                                <i className="fas fa-clock"></i>
                                                17 min ago
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-footer">
                                    <h2 className="b-text-title">
                                        See All Message
                                    </h2>
                                </div>
                            </div>
                            <div className="b-icon" style={this.state.style} >
                            </div>
                            <div className="b-description">
                                <p className="b-text-norm">
                                    Tran Van Phu
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </header >
        );
    }
}

export default HeaderLayout;