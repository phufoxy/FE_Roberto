import React, { Component } from 'react';

class OptionComponent extends Component {
    render() {
        return (
            <section className="b-dashboard-options">
                <div className="container-fluid">
                    <div className="b-block">
                        <div className="b-block-left">
                            <div className="b-title">
                                <h2 className="b-text-title">
                                    {this.props.title}
                                </h2>
                            </div>
                        </div>
                        <div className="b-block-right">
                            <nav className="b-page-nav">
                                <ul className="b-list-item">
                                    <li className="b-item">
                                        <a href="/" className="b-link">Today Agu 16</a>
                                    </li>
                                    <li className="b-item">
                                        <a href="/" className="b-link">
                                            <i className="fas fa-plus-square" />
                                        </a>
                                    </li>
                                    <li className="b-item">
                                        <a href="/" className="b-link">
                                            <i className="fas fa-plus-square" />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OptionComponent;