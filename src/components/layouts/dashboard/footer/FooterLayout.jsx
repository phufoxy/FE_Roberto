import React, { Component } from 'react';

class FooterLayout extends Component {
    render() {
        return (
            <footer className="b-dashboard-footer">
                <div className="b-content">
                    <p className="b-text-norm">
                        <span className="is-current">
                            Copyright &copy; <a href="/" className="b-link">Copilot</a>.
                </span> All right servered
              </p>
                </div>
            </footer>
        );
    }
}

export default FooterLayout;