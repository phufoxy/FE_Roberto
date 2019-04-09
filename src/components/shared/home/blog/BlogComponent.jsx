import React, { Component } from 'react';

class BlogComponent extends Component {
    render() {
        return (
            <section className="b-page-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="b-heading text-center wow fadeInUp">
                                <h3 className="b-text-name">
                                    OUR BLOG
                                        </h3>
                                <h2 className="b-text-title">
                                    Latest News &amp; Event
                                        </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="b-blog-item wow fadeInUp">
                                <div className="b-images">
                                    <img src="./images/bg-img/11.jpg" alt="BG" />
                                </div>
                                <div className="b-content">
                                    <div className="b-time">
                                        <h5 className="b-text-time">Jan 02 , 2019</h5>
                                        <h4 className="b-text-name">
                                            EVENT
                                                </h4>
                                    </div>
                                    <h2 className="b-text-title">
                                        Learn How To Motivate Yourseft
                                            </h2>
                                    <p className="b-text-norm">
                                        How many free autoresponders have you tried? And how many emails did you get through using them?
                                            </p>
                                    <a href="/" className="b-link"><i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="b-blog-item wow fadeInUp">
                                <div className="b-images">
                                    <img src="./images/bg-img/12.jpg" alt="BG" />
                                </div>
                                <div className="b-content">
                                    <div className="b-time">
                                        <h5 className="b-text-time">Jan 02 , 2019</h5>
                                        <h4 className="b-text-name">
                                            EVENT
                                                </h4>
                                    </div>
                                    <h2 className="b-text-title">
                                        Learn How To Motivate Yourseft
                                            </h2>
                                    <p className="b-text-norm">
                                        How many free autoresponders have you tried? And how many emails did you get through using them?
                                            </p>
                                    <a href="/" className="b-link"><i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="b-blog-item wow fadeInUp">
                                <div className="b-images">
                                    <img src="./images/bg-img/13.jpg" alt="BG" />
                                </div>
                                <div className="b-content">
                                    <div className="b-time">
                                        <h5 className="b-text-time">Jan 02 , 2019</h5>
                                        <h4 className="b-text-name">
                                            EVENT
                                                </h4>
                                    </div>
                                    <h2 className="b-text-title">
                                        Learn How To Motivate Yourseft
                                            </h2>
                                    <p className="b-text-norm">
                                        How many free autoresponders have you tried? And how many emails did you get through using them?
                                            </p>
                                    <a href="/" className="b-link"><i className="fas fa-arrow-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogComponent;