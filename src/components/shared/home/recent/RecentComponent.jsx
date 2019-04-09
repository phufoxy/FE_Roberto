import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var dateFormat = require('dateformat');

class RecentComponent extends Component {
    render() {
        var date = dateFormat(this.props.data.date, "mmmm dS, yyyy");
        return (
            <div className="b-item">
                <Link to={'/blog/' + this.props.data.id} className="b-link">
                    <div className="b-images" style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                    </div>
                    <div className="b-content">
                        <h5 className="b-text-time">
                            {date} <span className="is-current">EVENT</span>
                        </h5>
                        <p className="b-text-norm">
                            {this.props.data.content}
                        </p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default RecentComponent;