import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HeaderComponent extends Component {
    render() {
        return (
            <section className="b-block-header">
                <div className="b-block">
                    <div className="b-header-left">
                        <div className="b-info">
                            <h3 className="b-text-title">
                                {this.props.title}
                                <span className="b-current">
                                    Overview of enviroment
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div className="b-header-right">
                        <nav className="b-page-nav">
                            <ul className="b-list-item">
                                <li className="b-item">
                                    <Link to="/" className="b-link">
                                        <i className="fas fa-home"></i>
                                        Home</Link>
                                </li>
                                <li className="b-item">
                                    <p className="b-text-norm">
                                        {this.props.title}
                                    </p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeaderComponent;