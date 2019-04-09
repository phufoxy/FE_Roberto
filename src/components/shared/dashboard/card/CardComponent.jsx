import React, { Component } from 'react';
class CardComponent extends Component {
    render() {
        return (
            <section className="b-page-card">
                <div className="b-block">
                    <div className="b-card is-green">
                        <div className="b-icon">
                            <i className="fas fa-place-of-worship"></i>
                        </div>
                        <div className="b-content">
                            <h3 className="b-text-title">
                                Place Total
                            </h3>
                            <p className="b-text-norm">
                                {this.props.countPlace}
                            </p>
                        </div>
                    </div>
                    <div className="b-card is-red">
                        <div className="b-icon">
                            <i className="fas fa-place-of-worship"></i>
                        </div>
                        <div className="b-content">
                            <h3 className="b-text-title">
                                House Total
                            </h3>
                            <p className="b-text-norm">
                                {this.props.countHouse}
                            </p>
                        </div>
                    </div>
                    <div className="b-card is-green-item">
                        <div className="b-icon">
                            <i className="fas fa-place-of-worship"></i>
                        </div>
                        <div className="b-content">
                            <h3 className="b-text-title">
                                Restaurant Total
                            </h3>
                            <p className="b-text-norm">
                                {this.props.countRestaurant}
                            </p>
                        </div>
                    </div>
                    <div className="b-card is-yellow">
                        <div className="b-icon">
                            <i className="fas fa-place-of-worship"></i>
                        </div>
                        <div className="b-content">
                            <h3 className="b-text-title">
                                Place Total
                            </h3>
                            <p className="b-text-norm">
                                {this.props.countPlace}
                            </p>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default CardComponent;