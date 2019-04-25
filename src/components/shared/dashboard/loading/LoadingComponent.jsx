import React, { Component } from 'react';

class LoadingComponent extends Component {
    render() {
        return (
            <div className="b-loading text-center">
                <img src="/images/Cube-1s-200px.gif" alt="Loader" />
            </div>
        );
    }
}

export default LoadingComponent;