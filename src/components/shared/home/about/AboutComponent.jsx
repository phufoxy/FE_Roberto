import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
            <section className="b-page-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="b-about wow fadeInUp">
                                <h3 className="b-text-name">
                                    ABOUT US
                    </h3>
                                <h2 className="b-text-title">
                                    Welcome To Roberto Hotel Luxury
                    </h2>
                                <p className="b-text-norm">
                                    With over 340 hotels worldwide, NH Hotel Group offers a wide variety of hotels catering for a perfect
                                    stay no matter where your destination.
                    </p>
                                <p className="b-text-norm">
                                    Manager: <span className="is-current"> Michen Taylor </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="b-block">
                                <div className="b-block-left wow fadeInUp">
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/1.jpg")' }}>
                                    </div>
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/2.jpg")' }}>
                                    </div>
                                </div>
                                <div className="b-block-right">
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/3.jpg")' }}>
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

export default AboutComponent;