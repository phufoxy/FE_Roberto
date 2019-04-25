import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');

class BlogComponent extends Component {
    onAddView(reviews, blog) {
        this.props.onAddReview(reviews, blog);
    }
    render() {
        return (
            <section className="b-page-blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="b-heading text-center wow fadeInUp">
                                <h3 className="b-text-name">
                                    SỰ KIỆN
                                        </h3>
                                <h2 className="b-text-title">
                                    NHIỀU NGƯỜI XEM NHẤT
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.props.data.map(data => (
                            <div className="col-lg-4" key={data.id}>
                                <div className="b-blog-item wow fadeInUp">
                                    <div className="b-images">
                                        <img src={`http://127.0.0.1:8000${data.images}`} alt="BG" />
                                    </div>
                                    <div className="b-content">
                                        <div className="b-time">
                                            <h5 className="b-text-time">{dateFormat(data.date, "dd-mm-yyyy")}</h5>
                                            <h4 className="b-text-name">
                                                EVENT
                                            </h4>
                                        </div>
                                        <h2 className="b-text-title">
                                            {data.title}
                                        </h2>
                                        <p className="b-text-norm">
                                            {data.content}
                                        </p>
                                        <Link to={'/blog/' + data.id} onClick={this.onAddView.bind(this, data.reviews, data.id)} className="b-link"><i className="fas fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
        );
    }
}

export default BlogComponent;