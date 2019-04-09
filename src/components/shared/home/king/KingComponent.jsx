import React, { Component } from 'react';
import Slider from "react-slick";

class KingComponent extends Component {
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
            <section className="b-page-king">
                <Slider {...settings} className="b-slider-center">
                    <div className="b-slider-item">
                        <div className="b-block">
                            <div className="b-block-left" style={{ backgroundImage: 'url("./images/bg-img/7.jpg")' }}>
                            </div>
                            <div className="b-block-right">
                                <div className="b-content ">
                                    <div className="b-info ">
                                        <h2 className="b-text-title wow fadeInUp">Best King Room</h2>
                                        <h4 className="b-text-price wow fadeInUp">125$ <span className="is-current">/Day</span> </h4>
                                    </div>
                                    <div className="b-list wow fadeInUp">
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="b-slider-item">
                        <div className="b-block">
                            <div className="b-block-left" style={{ backgroundImage: 'url("./images/bg-img/1.jpg")' }}>
                            </div>
                            <div className="b-block-right">
                                <div className="b-content ">
                                    <div className="b-info ">
                                        <h2 className="b-text-title wow fadeInUp">Best King Room</h2>
                                        <h4 className="b-text-price wow fadeInUp">125 <span className="is-current">/Day</span> </h4>
                                    </div>
                                    <div className="b-list wow fadeInUp">
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                        <div className="b-item">
                                            <p className="b-text-norm">Size <span className="is-current">30ft</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        );
    }
}

export default KingComponent;