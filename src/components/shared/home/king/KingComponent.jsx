import React, { Component } from 'react';
import Slider from "react-slick";
var NumberFormat = require('react-number-format');

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
                    {
                        this.props.data.map(data => (
                            <div className="b-slider-item" key={data.id}>
                                <div className="b-block">
                                    <div className="b-block-left" style={{ backgroundImage: `url(https://fotour.herokuapp.com${data.images})` }}>
                                    </div>
                                    <div className="b-block-right">
                                        <div className="b-content ">
                                            <div className="b-info ">
                                                <h2 className="b-text-title wow fadeInUp">{data.name}</h2>
                                                <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} renderText={value => 
                                                     <h4 className="b-text-price wow fadeInUp">{value}₫ <span className="is-current"></span> </h4>
                                                     } />
                                            </div>
                                            <div className="b-list wow fadeInUp">
                                                <div className="b-item">
                                                    <p className="b-text-norm">Số Ngày <span className="is-current">{data.date} Ngày</span></p>
                                                </div>
                                                <div className="b-item">
                                                    <p className="b-text-norm">Số Lượng Còn <span className="is-current">{data.total} Người</span></p>
                                                </div>
                                                <div className="b-item">
                                                    <p className="b-text-norm">Thể Loại <span className="is-current">{data.type_tour}</span></p>
                                                </div>
                                                <div className="b-item">
                                                    <p className="b-text-norm">Địa Điểm Bắt Đầu <span className="is-current">{data.location}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </section>
        );
    }
}

export default KingComponent;