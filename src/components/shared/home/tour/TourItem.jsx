import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var NumberFormat = require('react-number-format');

class TourItem extends Component {
    onClick(id) {
        this.props.onAddLike(id);
    }
    onViews(views, id) {
        this.props.onAddViews(views, id);
    }
    render() {
        return (
            <div className="b-rooms-item wow fadeInUp">
                <div
                    className="b-images"
                    style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                    <div className="b-likes">
                        <button className="b-btn" onClick={this.onClick.bind(this, this.props.data.id)}>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                    </div>
                </div>
                <div className="b-content">
                    
                    <h2 className="b-text-title">
                        {this.props.data.name}
                    </h2>
                    <h5 className="b-text-price">
                        <NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} renderText={value => <div>{value} ₫ /
                        <span className="is-current">Day</span></div>} />

                    </h5>
                    <div className="b-list-feature">
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Số Chổ Còn :
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.total} Người
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Ngày:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.date} Ngày
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Thể Loại:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.type_tour}
                            </p>
                        </div>
                        <div className="b-item">
                            <h4 className="b-text-name">
                                Địa Điểm Bắt Đầu:
                            </h4>
                            <p className="b-text-norm">
                                {this.props.data.location}
                            </p>
                        </div>
                    </div>
                    <div className="b-list-social">
                        <div className="b-social-item">
                            <p className="b-text-like">
                                <i className="fas fa-eye"></i> {this.props.data.reviews}
                                                </p>
                        </div>
                        <div className="b-social-item b-like">
                            <p className="b-text-like">
                                <i className="fas fa-thumbs-up"></i> {this.props.data.likes.length}
                                                </p>
                        </div>
                        <div className="b-social-item b-comment mb-1">
                            <p className="b-text-like">
                                <i className="fas fa-comments"></i> {this.props.data.comments.length}
                                                </p>
                        </div>
                    </div>
                    <Link to={'/tour/' + this.props.data.id} onClick={this.onViews.bind(this, this.props.data.reviews, this.props.data.id)} className="b-link">View Details
                        <i className="fas fa-arrow-right" /></Link>
                </div>
            </div>
        );
    }
}

export default TourItem;