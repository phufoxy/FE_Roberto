import React, { Component } from 'react';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';

class HeroComponent extends Component {
    render() {
        return (
            <Parallax bgImage={("/images/bg-img/1.jpg")} strength={500}>
                <section
                    className="b-page-hero">
                    <div className="b-content">
                        <h2 className="b-text-title wow fadeInDown">
                            {this.props.title !== undefined ? this.props.title : "Our Tour"}
                        </h2>
                        <p className="b-text-norm wow fadeInDown">
                            <Link to="/" className="b-link">Trang Chủ</Link>
                            <span className="is-current">
                                {this.props.item !== undefined ? this.props.item : "Item"}</span>
                        </p>
                    </div>
                </section>
            </Parallax>
        );
    }
}

export default HeroComponent;