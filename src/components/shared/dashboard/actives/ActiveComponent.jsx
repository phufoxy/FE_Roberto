import React, { Component } from 'react';

class ActiveComponent extends Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="b-block">
                    <div className="b-block-top">
                        <div className="b-content">
                            <h2 className="b-text-title">
                                Activity
                                        </h2>
                        </div>
                    </div>
                    <div className="b-block-bottom">
                        <div className="b-packages">
                            <div className="b-item b-tour">
                                <div className="b-icon">
                                    <img src="../../images/core-img/coconut-tree.png" alt="Coco" />
                                </div>
                                <h2 className="b-text-title">
                                    Tour
                                            </h2>
                                <p className="b-text-norm">
                                    {this.props.countTour} Tour
                                            </p>
                            </div>
                            <div className="b-item b-feedback">
                                <div className="b-icon">
                                    <img src="../../images/core-img/badge.png" alt="Coco" />
                                </div>
                                <h2 className="b-text-title">
                                    Feedback
                                            </h2>
                                <p className="b-text-norm">
                                    {this.props.countFeedback} Feedback of customers
                                            </p>
                            </div>
                            <div className="b-item b-book">
                                <div className="b-icon">
                                    <img src="../../images/core-img/settings.png" alt="Coco" />
                                </div>
                                <h2 className="b-text-title">
                                    Book
                                            </h2>
                                <p className="b-text-norm">
                                    {this.props.countBook} Tour has been booked
                                            </p>
                            </div>
                            <div className="b-item b-blog">
                                <div className="b-icon">
                                    <img src="../../images/core-img/blog.png" alt="Coco" />
                                </div>
                                <h2 className="b-text-title">
                                    Blog
                                            </h2>
                                <p className="b-text-norm">
                                    {this.props.countBlog} Event Posts
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ActiveComponent;