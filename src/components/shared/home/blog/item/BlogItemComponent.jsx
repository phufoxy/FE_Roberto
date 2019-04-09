import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');


class BlogItemComponent extends Component {
    componentDidMount() {

    }
    render() {
        var date = dateFormat(this.props.data.date, "mmmm dS, yyyy");
        return (
            <div className="b-blog-item">
                <div className="b-images" style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
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
                    <Link to={'/blog/' + this.props.data.id} className="b-link">Read More</Link>
                </div>
            </div>
        );
    }
}

export default BlogItemComponent;