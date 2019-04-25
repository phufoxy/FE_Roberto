import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');


class BlogItemComponent extends Component {
    onViews(review, blog) {
        this.props.onAddReview(review, blog);
    }
    onAddLike = () => {
        this.props.onAddLike(this.props.data.id);
    }
    render() {
        var date = dateFormat(this.props.data.date, "dd-mm-yyyy");
        return (
            <div className="b-blog-item">
                <div className="b-images" style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                    <div className="b-likes">
                        <button className="b-btn" onClick={this.onAddLike}>
                            <i className="fas fa-thumbs-up"></i>
                        </button>
                    </div>
                </div>
                <div className="b-content">
                    <h5 className="b-text-time">
                        {date} <span className="is-current">EVENT</span>
                    </h5>
                    <h2 className="b-text-title">
                        {this.props.data.title}
                    </h2>
                    <p className="b-text-norm">
                        {this.props.data.content}
                    </p>
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
                        <div className="b-social-item b-comment">
                            <p className="b-text-like">
                                <i className="fas fa-comments"></i> 65
                                                </p>
                        </div>
                    </div>
                    <Link to={'/blog/' + this.props.data.id} onClick={this.onViews.bind(this, this.props.data.reviews, this.props.data.id)} className="b-link">
                        View Details
                        <i className="fas fa-arrow-right" />
                    </Link>
                </div>
            </div>
        );
    }
}

export default BlogItemComponent;