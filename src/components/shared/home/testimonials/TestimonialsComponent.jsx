import React, { Component } from 'react';
import Slider from "react-slick";

class TestimonialsComponent extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 5000,
            arrows: false,

        };
        return (
            <section className="b-page-testimonial">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Slider {...settings} className="b-slider-testimonial">
                                <div className="b-item" >
                                    <div className="b-overload" style={{ backgroundImage: 'url("./images/bg-img/11.jpg")' }}>
                                    </div>
                                </div>
                                <div className="b-item" >
                                    <div className="b-overload" style={{ backgroundImage: 'url("./images/bg-img/11.jpg")' }}>
                                    </div>
                                </div>
                                <div className="b-item" >
                                    <div className="b-overload" style={{ backgroundImage: 'url("./images/bg-img/11.jpg")' }}>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-lg-6">
                            <div className="b-heading">
                                <h3 className="b-text-name">
                                    Phản Hồi
                            </h3>
                                <h2 className="b-text-title">
                                   Những Lời Bình Luận Yêu Thích
                            </h2>
                            </div>
                            <Slider {...settings} className="b-slider-our">
                                {this.props.feedbackhome.map(data => (
                                    <div className="b-item" key={data.id}>
                                        <div className="b-content">
                                            <p className="b-text-norm">
                                                “{data.body}”
                                            </p>
                                            <nav className="b-list-star">
                                                <ul className="b-list-item">
                                                    <li className="b-item">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="b-item">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="b-item">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="b-item">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="b-item">
                                                        <i className="fas fa-star" />
                                                    </li>
                                                </ul>
                                            </nav>
                                            <h3 className="b-text-name">
                                                Email - <span className="is-current">{data.email}</span>
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TestimonialsComponent;