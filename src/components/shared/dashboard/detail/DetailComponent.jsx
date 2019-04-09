import React, { Component } from 'react';

class DetailComponent extends Component {
    constructor(props) {
        super(props);
        this.onClickChanger = this.onClickChanger.bind(this);
    }
    onClickChanger() {
        this.props.switchViews('VIEW_CARD');
    }
    render() {
        return (
            <section className="b-dashboard-details">
                <div className="b-fix-add">
                    <button className="b-btn" onClick={this.onClickChanger}>
                        <i className="fas fa-table"></i>
                    </button>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="b-heading text-center">
                                <h2 className="b-text-title">
                                    Details
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="b-block">
                        <div className="b-images"
                            style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>

                        </div>
                        <div className="b-header">
                            <div className="b-header-left">
                                <h5 className="b-text-price">
                                    ${this.props.data.price}
                                </h5>
                            </div>
                            <div className="b-header-right">
                                <nav className="b-page-nav">
                                    <ul className="b-list-item">
                                        <li className="b-item">
                                            <h2 className="b-text-title">Views</h2>
                                            <p className="b-text-norm">
                                                {this.props.data.review} <sup>+</sup>
                                            </p>
                                        </li>
                                        <li className="b-item">
                                            <h2 className="b-text-title">Create Date</h2>
                                            <p className="b-text-norm">
                                                {this.props.data.type}<sup>+</sup>
                                            </p>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="b-block-type">
                            <div className="b-info">
                                <div className="b-type">
                                    <h2 className="b-text-title">
                                        Home Type
                                </h2>
                                    <p className="b-text-norm">
                                        {this.props.data.name}
                                    </p>
                                </div>
                                <div className="b-type">
                                    <h2 className="b-text-title">
                                        City
                                </h2>
                                    <p className="b-text-norm">
                                        {this.props.data.city}
                                    </p>
                                </div>
                                <div className="b-type">
                                    <h2 className="b-text-title">
                                        Address
                                </h2>
                                    <p className="b-text-norm">
                                        {this.props.data.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="b-block-info">
                            <h2 className="b-text-title">
                                More info
                        </h2>
                            <p className="b-text-norm">
                                {this.props.data.content}
                            </p>
                        </div>
                        <div className="b-gallery">
                            <div className="b-header">
                                <h2 className="b-text-title">
                                    Gallery
                            </h2>
                            </div>
                            <div className="b-gallery-main">
                                <div className="b-item"
                                    style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                                    <div className="b-overlay">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DetailComponent;