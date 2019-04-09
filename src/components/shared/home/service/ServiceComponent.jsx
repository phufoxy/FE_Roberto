import React, { Component } from 'react';

class ServiceComponent extends Component {
    render() {
        return (
            <div className="b-card">
                <div className="b-info">
                    <div className="b-images">
                        <img src={this.props.data.src} alt="Images" />
                    </div>
                    <h2 className="b-text-title">
                        {this.props.data.title}
                    </h2>
                </div>
            </div>
        );
    }
}

export default ServiceComponent;