import React, { Component } from 'react';
import { Parallax } from "react-parallax";

class ContactComponent extends Component {
    render() {
        const image1 =
            "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
        return (
            <section className="b-page-contact">
                <div className="container">
                    <Parallax bgImage={image1} strength={500}>
                        <div className="b-block" >
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
                    </Parallax>
                </div>
            </section>
        );
    }
}

export default ContactComponent;