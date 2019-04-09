import React, { Component } from 'react';
import Slider from "react-slick";

class FeatureComponent extends Component {
    render() {
        const settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            dots: false,
        };
        return (
            <Slider {...settings} className="b-slider-feature">
                <div className="b-slider-item" >
                    <div className="b-overload" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }}>
                        <div className="b-content">
                            <div className="b-overlay">
                                <div className="b-info">
                                    <h2 className="b-text-title">
                                        Entertaiment
                            </h2>
                                    <h3 className="b-text-name">
                                        Racing Bike
                            </h3>
                                </div>
                            </div>
                            <div className="b-entertaiment">
                                <div className="b-block-content">
                                    <h3 className="b-text-name">
                                        Entertaiment
                            </h3>
                                    <h2 className="b-text-title">
                                        Eacing Bike
                            </h2>
                                    <p className="b-text-norm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex quos. Alias a rem maiores,
                                        possimus dicta sit distinctio quis im ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                        ex quos. Alias a rem maiores
                            </p>
                                </div>
                                <div className="b-discover">
                                    <a href="/" className="b-link">Discover Now <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-slider-item">
                    <div className="b-overload" style={{ backgroundImage: 'url("../../images/bg-img/2.jpg")' }}>
                        <div className="b-content">
                            <div className="b-overlay">
                                <div className="b-info">
                                    <h2 className="b-text-title">
                                        Entertaiment
                            </h2>
                                    <h3 className="b-text-name">
                                        Racing Bike
                            </h3>
                                </div>
                            </div>
                            <div className="b-entertaiment">
                                <div className="b-block-content">
                                    <h3 className="b-text-name">
                                        Entertaiment
                            </h3>
                                    <h2 className="b-text-title">
                                        Eacing Bike
                            </h2>
                                    <p className="b-text-norm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex quos. Alias a rem maiores,
                                        possimus dicta sit distinctio quis im ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                        ex quos. Alias a rem maiores
                            </p>
                                </div>
                                <div className="b-discover">
                                    <a href="/" className="b-link">Discover Now <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-slider-item" >
                    <div className="b-overload" style={{ backgroundImage: 'url("../../images/bg-img/3.jpg")' }}>

                        <div className="b-content">
                            <div className="b-overlay">
                                <div className="b-info">
                                    <h2 className="b-text-title">
                                        Entertaiment
                            </h2>
                                    <h3 className="b-text-name">
                                        Racing Bike
                            </h3>
                                </div>
                            </div>
                            <div className="b-entertaiment">
                                <div className="b-block-content">
                                    <h3 className="b-text-name">
                                        Entertaiment
                            </h3>
                                    <h2 className="b-text-title">
                                        Eacing Bike
                            </h2>
                                    <p className="b-text-norm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex quos. Alias a rem maiores,
                                        possimus dicta sit distinctio quis im ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                        ex quos. Alias a rem maiores
                            </p>
                                </div>
                                <div className="b-discover">
                                    <a href="/" className="b-link">Discover Now <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="b-slider-item" >
                    <div className="b-overload" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }}>

                        <div className="b-content">
                            <div className="b-overlay">
                                <div className="b-info">
                                    <h2 className="b-text-title">
                                        Entertaiment
                            </h2>
                                    <h3 className="b-text-name">
                                        Racing Bike
                            </h3>
                                </div>
                            </div>
                            <div className="b-entertaiment">
                                <div className="b-block-content">
                                    <h3 className="b-text-name">
                                        Entertaiment
                            </h3>
                                    <h2 className="b-text-title">
                                        Eacing Bike
                            </h2>
                                    <p className="b-text-norm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ex quos. Alias a rem maiores,
                                        possimus dicta sit distinctio quis im ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
                                        ex quos. Alias a rem maiores
                            </p>
                                </div>
                                <div className="b-discover">
                                    <a href="/" className="b-link">Discover Now <i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        );
    }
}

export default FeatureComponent;