import React, { Component } from 'react';
import Slider from "react-slick";

class BannerComponent extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            arrows: true,
        };
        return (
            <section className="b-page-banner">
                <Slider {...settings} className="b-slider-top">
                    {this.props.data.map(data => (
                        <div className="b-item" key={data.id} >
                            <div className="b-overload" style={{ backgroundImage: `url(http://127.0.0.1:8000${data.images})` }}>
                                <div className="b-content">
                                    <h3 className="b-text-name wow fadeInDown">
                                        {data.name}
                                    </h3>
                                    <h2 className="b-text-title wow fadeInDown">
                                        {data.title}
                                    </h2>
                                    <div className="b-content-bottom wow fadeInDown">
                                        <button className="b-btn waves-effect  waves-light">Discovert Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
        );
    }
}

export default BannerComponent;