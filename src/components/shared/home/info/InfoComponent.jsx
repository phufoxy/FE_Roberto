import React, { Component } from 'react';

class InfoComponent extends Component {
    render() {
        return (
            <div className="b-information">
                <div className="b-item">
                    <h3 className="b-text-name">
                        Location
                </h3>
                    <p className="b-text-norm">
                        {this.props.location}
                    </p>
                </div>
                <div className="b-item">
                    <h3 className="b-text-name">
                        Date Duration
                </h3>
                    <p className="b-text-norm">
                        {this.props.data.date} /Day
                </p>
                </div>
                <div className="b-item">
                    <h3 className="b-text-name">
                        Date start
                </h3>
                    <p className="b-text-norm">
                        {this.props.data.date_start}
                </p>
                </div>
                <div className="b-item">
                    <h3 className="b-text-name">
                        Type Tour
                </h3>
                    <p className="b-text-norm">
                        {this.props.data.type_tour}
                </p>
                </div>
            </div>
        );
    }
}

export default InfoComponent;