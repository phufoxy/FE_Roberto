import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
var NumberFormat = require('react-number-format');

class BookComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            date: '',
            person: 1,
            rating: 3.5
        }
    }
    changeRating = (newRating) => {
        if (cookies.get('data').username === undefined) {
            console.log(123);

        } else {
            console.log(newRating);

        }

    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onBookTour(this.state);
    }
    onChangerPage = () => {
        this.props.onViews("DETAIL_BOOK");
    }
    render() {
        const mainContent = () => {
            switch (this.props.views) {
                case "BOOK":
                    return (
                        <div className="b-book">
                            <div className="b-content">
                                <div className="b-item">
                                    <h2 className="b-text-title">
                                        Mã TOUR <span className="is-current">{this.props.data.id}</span>
                                    </h2>
                                </div>
                                <div className="b-item">
                                    <h2 className="b-text-title">
                                        Ngày Bắt Đầu<span className="is-current">{this.props.data.date_start}</span>
                                    </h2>
                                </div>
                                <div className="b-item">
                                    <h2 className="b-text-title">
                                        Nơi Bắt Đầu <span className="is-current">{this.props.data.location}</span>
                                    </h2>
                                </div>
                                <div className="b-item">
                                    <h2 className="b-text-title">
                                        Thời Gian Đi <span className="is-current">{this.props.data.date} /Day</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="b-evaluate">
                                <div className="b-star">
                                    <StarRatings
                                        rating={this.state.rating}
                                        starRatedColor="red"
                                        changeRating={this.changeRating}
                                        numberOfStars={5}
                                        name='rating'
                                        starSpacing="2px"
                                        starDimension="16px"

                                    />
                                </div>
                                <div className="b-reviews">
                                    <p className="b-text-norm">
                                        <i className="fas fa-eye" />{this.props.data.reviews}
                                    </p>
                                </div>
                                <div className="b-likes">
                                    <p className="b-text-norm">
                                        <i className="fas fa-thumbs-up" />{this.props.data.likes.length}
                                    </p>
                                </div>
                                <div className="b-likes">
                                    <p className="b-text-norm">
                                        <i className="fas fa-comment" />{this.props.data.comments.length}
                                    </p>
                                </div>
                            </div>
                            <div className="b-book-tour">
                                <div className="b-price">
                                    <NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =>
                                        <h3 className="b-text-price">
                                            {value} ₫
                                        </h3>
                                    } />
                                </div>
                                <div className="b-group-btn">
                                    <button className="b-btn waves-effect waves-teal" onClick={this.onChangerPage}>
                                        Đặt Ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                case "DETAIL_BOOK":
                    return (
                        <div className="b-block-top">
                            <div className="b-block-images">
                                <div className="b-images" style={{ backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})` }}>
                                </div>
                                <div className="b-price">
                                    <div className="b-day">
                                        <p className="b-text-norm">
                                            Số ngày: {this.props.data.date}
                                        </p>
                                    </div>
                                    <div className="b-info">
                                        <NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={value =>
                                            <h3 className="b-text-price">
                                                {value} ₫
                                        </h3>
                                        } />
                                    </div>
                                </div>
                            </div>
                            <div className="b-content">
                                <div className="b-header">
                                    <h2 className="b-text-title">
                                        {this.props.data.name}
                                    </h2>
                                </div>
                                <div className="b-content-main">
                                    <div className="b-item">
                                        <p className="b-text-norm">
                                            Mã Tour: <span className="b-current">
                                                {this.props.data.id}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="b-item">
                                        <p className="b-text-norm">
                                            Ngày Khởi hành: <span className="b-current">
                                                {this.props.data.date_start}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="b-item">
                                        <p className="b-text-norm">
                                            Ngày : <span className="b-current">
                                                {this.props.data.date} / Ngày
                                </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="b-warning">
                                    <p className="b-text-norm">
                                        Khách nữ từ 55 tuổi trở lên, khách nam từ 60 tuổi trở lên đi tour một mình và
                                        khách mang thai trên 4 tháng (16 tuần) vui lòng đăng ký tour trực tiếp tại văn
                                        phòng của Vietravel. Không áp dụng đăng ký tour online đối với khách từ 70 tuổi
                                        trở lên
                            </p>
                                </div>
                            </div>
                        </div>
                    )
                default:
                    return (<></>);
            }
        }
        return (
            mainContent()
        );
    }
}

export default BookComponent;