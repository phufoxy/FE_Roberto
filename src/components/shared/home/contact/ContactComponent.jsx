import React, { Component } from 'react';

class ContactComponent extends Component {
    render() {
        return (
            <section className="b-page-contact">
                <div className="container">
                    <div className="b-block" style={{ backgroundImage: 'url("/images/bg-img/1.jpg")' }} data-paroller-factor="0.8" data-paroller-factor-xs="0.2">
                        <div className="b-block-left">
                            <div className="b-content">
                                <h2 className="b-text-title">
                                    Contact us now!
                                </h2>
                                <p className="b-text-norm">
                                    Contact (+12) 345-678-9999 to book directly or for advice
                                </p>
                            </div>
                        </div>
                        <div className="b-block-right">
                            <button className="b-btn waves-effect waves-light">Contact Now</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactComponent;