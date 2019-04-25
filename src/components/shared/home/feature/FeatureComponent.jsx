import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
var NumberFormat = require('react-number-format');

class FeatureComponent extends Component {
    onViews(views, id) {
        this.props.onAddViews(views, id);
    }
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
                {this.props.data.map(data => (
                    <div className="b-slider-item" key={data.id} >
                        <div className="b-overload" style={{ backgroundImage: `url(http://127.0.0.1:8000${data.images})` }}>
                            <div className="b-content">
                                <div className="b-overlay">
                                    <div className="b-info">
                                        <h2 className="b-text-title">
                                            {data.name}
                                        </h2>
                                        <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} renderText={value =>
                                            <h3 className="b-text-name">
                                                {value}₫
                                            </h3>
                                        } />

                                    </div>
                                </div>
                                <div className="b-entertaiment">
                                    <div className="b-block-content">
                                        <h3 className="b-text-name">
                                            {data.name}
                                        </h3>
                                        <h2 className="b-text-title">
                                            {data.type_tour}
                                        </h2>


                                    </div>
                                    <div className="b-discover">
                                        <Link to={'/tour/' + data.id} onClick={this.onViews.bind(this,data.reviews, data.id)} className="b-link">Discover Now <i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}


            </Slider>
        );
    }
}

export default FeatureComponent;