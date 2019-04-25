import React, { Component } from 'react';
import Slider from "react-slick";

class SliderDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }
    onClick = () => {
        this.props.onAddLike();
    }
    render() {
        const settings = {
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            arrows: false,

        };
        return (
            <div className="b-group-images">
                <Slider {...settings} className="b-slider-images" asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}>

                    {this.props.data.map(data => (
                        <div className="b-slider-item" key={data.id}>
                            <div className="b-overload" style={{ backgroundImage: `url(https://fotour.herokuapp.com${data.images})` }}>
                                <div className="b-likes">
                                    <button className="b-btn" onClick={this.onClick}>
                                        <i className="fas fa-thumbs-up"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
                <Slider className="b-list-slider" asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={5}
                    slidesToScroll={1}
                    swipeToSlide={true}
                    centerMode={true}
                    focusOnSelect={true}>
                    {this.props.data.map(data => (
                        <div className="b-item" key={data.id}>
                            <img src={`https://fotour.herokuapp.com${data.images}`} alt="Images" width="100%" />
                        </div>
                    ))}
                </Slider>
            </div >
        );
    }
}

export default SliderDetailComponent;