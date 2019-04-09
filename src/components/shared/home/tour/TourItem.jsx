import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TourItem extends Component {
    render() {
        return (
            <div className="b-rooms-item wow fadeInUp">
                <div
                    className="b-images"
                    style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                </div>
                <div className="b-content">
                    <h2 className="b-text-title">
                        {this.props.data.name}
                    </h2>
                    <h5 className="b-text-price">
                        {this.props.data.price}$ /
                        <span className="is-current">Day</span>
                    </h5>
                    <div className="b-list-feature">
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Total:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.total} Person
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Date:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.date} Day
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Type:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.type_tour}
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Locations:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.location}
                            </p>
                        </div>
                    </div>
                    <Link to={'/tour/' + this.props.data.id} className="b-link">View Details
                        <i className="fas fa-arrow-right" /></Link>
                </div>
            </div>
        );
    }
}

export default TourItem;