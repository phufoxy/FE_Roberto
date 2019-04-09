import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, } from '../../../shared/home';
import { Link } from 'react-router-dom';

class AboutPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-page-main">
                    <section className="b-page-hero" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }} data-paroller-factor="0.8" data-paroller-factor-xs="0.2">
                        <div className="b-content">
                            <h2 className="b-text-title wow fadeInDown">
                                Our Blog
                            </h2>
                            <p className="b-text-norm wow fadeInDown">
                                <Link to="/" className="b-link">Home</Link> <span className="is-current"> Blog</span>
                            </p>
                        </div>
                    </section>
                    <section className="b-page-experience">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="b-images" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="b-content">
                                        <h3 className="b-text-name">
                                            TESTIMONIALS
                                        </h3>
                                        <h2 className="b-text-title">
                                            20 Years Of Experience
                                        </h2>
                                        <p className="b-text-norm">
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese
                                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.
                                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese
                                            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste. Lorem Ipsum
                                            available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="b-our-hotel" style={{ backgroundImage: 'url("../../images/bg-img/3.jpg")' }}>
                        <div className="b-overload">
                            <div className="b-content">
                                <h3 className="b-text-name">
                                    ULTIMATE SOLUTIONS
                                </h3>
                                <h2 className="b-text-title">
                                    Our Hotel &amp; Room
                                </h2>
                                <div className="b-play">
                                    <button className="b-btn"><i className="fas fa-play" /></button>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="b-page-ultimate">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="b-heading text-center">
                                        <h3 className="b-text-name">
                                            ULTIMATE SOLUTIONS
                                        </h3>
                                        <h2 className="b-text-title">
                                            Our Hotel &amp; Room
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                        <div className="b-content">
                                            <h2 className="b-text-title">
                                                Restaurant &amp; Bar
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                        <div className="b-content">
                                            <h2 className="b-text-title">
                                                Restaurant &amp; Bar
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                        <div className="b-content">
                                            <h2 className="b-text-title">
                                                Restaurant &amp; Bar
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ContactComponent></ContactComponent>
                    <section className="b-page-read">
                        <div className="container">
                            <div className="b-block">
                                <div className="b-block-item">
                                    <img src="/images/core-img/p1.png" alt="true" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p2.png" alt="true" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p3.png" alt="true" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p4.png" alt="true" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p5.png" alt="true" />
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                <FooterLayout></FooterLayout>
            </div >
        );
    }
}

export default AboutPage;