import React, { Component } from 'react';

class FormComment extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            comment: ''
        }
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onComment(this.state.comment);
        this.setState({
            comment: ''
        })
    }
    render() {
        const contentMain = () => {
            switch (this.props.views) {
                case "BLOG":
                    return (
                        <form className="b-form" onSubmit={this.onSubmit}>
                            <div className="b-form-group">
                                <textarea type="text" className="b-input" name="comment" onChange={this.onChanger} value={this.state.comment} placeholder="Enter your email" />
                            </div>
                            <button className="b-btn waves-effect waves-teal">Post Comment</button>
                        </form>
                    )
                default:
                    return (
                        <form className="b-form" onSubmit={this.onSubmit}>
                            <h2 className="b-text-title">
                                Comments
                            </h2>
                            <div className="b-form-control">
                                <textarea type="text" className="b-input" name="comment" onChange={this.onChanger} value={this.state.comment} placeholder="Enter your email" />
                            </div>
                            <button type="submit" className="b-btn waves-effect waves-teal">
                                Comment
                        </button>
                        </form>
                    )
            }

        }
        return (
            contentMain()
        );
    }
}

export default FormComment;