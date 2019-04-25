import React, { Component } from 'react';
import PaginationHome from '../../../function/pagination/PaginationHome';
var dateFormat = require('dateformat');
class CommentItemComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageOfItems: [],
        }
    }
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        const contentMain = () => {
            switch (this.props.views) {
                case "BLOG":
                    return (
                        <>
                            <div className="b-total-comnent">
                                <h3 className="b-text-total">
                                    {this.props.data.length} Comments
                                </h3>
                            </div>
                            <div className="b-list-comment">
                                {this.state.pageOfItems.map(data => (
                                    <div className="b-comment-item" key={data.id}>
                                        <div className="b-comment-main">
                                            <div className="b-images">
                                                <div className="b-icon" style={{ backgroundImage: `url(http://127.0.0.1:8000${data.avatar})` }}>
                                                </div>
                                            </div>
                                            <div className="b-content">
                                                <h3 className="b-text-time">
                                                    {dateFormat(data.date_create, "dd-mm-yyyy")}
                                                </h3>
                                                <h2 className="b-text-title">
                                                    {data.username}
                                                </h2>
                                                <p className="b-text-norm">
                                                    {data.title}
                                                </p>
                                                <div className="b-button">
                                                    <div className="b-button-item">
                                                        <button className="b-btn">
                                                            LIKE
                                    </button>
                                                    </div>
                                                    <div className="b-button-item">
                                                        <button className="b-btn">
                                                            REPLY
                                </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <PaginationHome items={this.props.data.reverse()} onChangePage={this.onChangePage}></PaginationHome>

                        </>
                    )
                default:
                    return (
                        <>
                            <div className="b-header">
                                <h2 className="b-text-title">
                                    {this.props.data.length} Comments
                             </h2>
                            </div>
                            <div className="b-block">
                                {this.state.pageOfItems.map(data => (
                                    <div className="b-block-item" key={data.id}>

                                        <div className="b-images">
                                            <div className="b-icon" style={{ backgroundImage: `url(http://127.0.0.1:8000${data.avatar})` }}>
                                            </div>
                                        </div>
                                        <div className="b-content">
                                            <h4 className="b-text-time">
                                                {dateFormat(data.date_create, "yyyy-mm-dd, h:MM:ss TT")}
                                            </h4>
                                            <h3 className="b-text-name">
                                                {data.username}
                                            </h3>
                                            <p className="b-text-norm">
                                                {data.comment}
                                            </p>
                                        </div>
                                        <div className="b-star">
                                            <ul className="b-list-item">
                                                <li className="b-item">
                                                    <i className="fas fa-star" />
                                                </li>
                                                <li className="b-item">
                                                    <i className="fas fa-star" />
                                                </li>
                                                <li className="b-item">
                                                    <i className="fas fa-star" />
                                                </li>
                                                <li className="b-item">
                                                    <i className="fas fa-star" />
                                                </li>
                                                <li className="b-item">
                                                    <i className="fas fa-star" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                ))}
                            </div>
                            <PaginationHome items={this.props.data.reverse()} onChangePage={this.onChangePage}></PaginationHome>
                        </>
                    )
            }
        }
        return (
            contentMain()
        );
    }
}

export default CommentItemComponent;