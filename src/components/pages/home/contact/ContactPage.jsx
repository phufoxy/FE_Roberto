import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, } from '../../../shared/home';
import { Link } from 'react-router-dom';

class ContactPage extends Component {
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
                    <section className="b-contact-us  text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3">
                                    <div className="b-heading">
                                        <h3 className="b-text-name">
                                            CONTACT US
                                        </h3>
                                        <h2 className="b-text-title">
                                            Leave Message
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <form className="b-form">
                                    <div className="b-group">
                                        <div className="b-form-group">
                                            <input type="text" className="b-input" placeholder="Your Name" />
                                        </div>
                                        <div className="b-form-group">
                                            <input type="text" className="b-input" placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="b-form-group">
                                        <input type="text" className="b-input" placeholder="Your Name" />
                                    </div>
                                    <button className="b-btn waves-effect waves-teal">Send Mesage</button>
                                </form>
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

export default ContactPage;