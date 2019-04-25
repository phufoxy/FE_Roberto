import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');

class RecentComponent extends Component {
    onViews(views, id) {
        this.props.onAddViews(views, id);
    }
    onViewsBlog(views, id) {
        this.props.onAddReview(views, id);
    }
    render() {
        const conentMain = () => {
            switch (this.props.views) {
                case "TOUR":
                    return (
                        <div className="b-recent wow fadeInUp">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Tour Mới Nhất
                                </h2>
                            </div>
                            <div className="b-recent-list">
                                {this.props.data.map(data => (
                                    <div className="b-item" key={data.id}>
                                        <Link to={'/tour/' + data.id} className="b-link" onClick={this.onViews.bind(this, data.reviews, data.id)}>
                                            <div className="b-images" style={{ backgroundImage: `url(https://fotour.herokuapp.com${data.images})` }}>
                                            </div>
                                            <div className="b-content">
                                                <h5 className="b-text-time">
                                                    {data.date_start} <span className="is-current">Tour</span>
                                                </h5>
                                                <p className="b-text-norm">
                                                    {data.name}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                case "BLOG":
                    var date = dateFormat(this.props.data.date, "dd-mm-yyyy");
                    return (
                        <div className="b-item">
                            <Link to={'/blog/' + this.props.data.id} onClick={this.onViewsBlog.bind(this, this.props.data.reviews, this.props.data.id)} className="b-link">
                                <div className="b-images" style={{ backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})` }}>
                                </div>
                                <div className="b-content">
                                    <h5 className="b-text-time">
                                        {date} <span className="is-current">EVENT</span>
                                    </h5>
                                    <p className="b-text-norm">
                                        {this.props.data.title}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    )
                default:
                    return (<></>)
            }

        }
        return (
            conentMain()
        );
    }
}

export default RecentComponent;