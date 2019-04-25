import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ErrorPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <main className="b-page-error">
                    <div className="b-block">
                        <div className="b-404">
                            <div className="b-content">
                                <div className="b-info">
                                </div>
                                <h2 className="b-text-title">
                                    404
                            </h2>
                            </div>
                            <div className="b-content-main">
                                <h3 className="b-text-error">
                                    PAEG MPT FOUND
                            </h3>
                                <p className="b-text-norm">
                                    he page you are looking for might have been removed had its name changed or is temporarily
                                    unavailable.
                            </p>
                                <Link to="/" className="b-link waves-effect waves-teal">HOME PAGE</Link>
                            </div>

                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default ErrorPage;