import React, { Component } from 'react';

class LoadingComponent extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <div className="b-card-loading">
                        <img src="../../images/Wedges-3s-200px.gif" alt="Loading" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoadingComponent;