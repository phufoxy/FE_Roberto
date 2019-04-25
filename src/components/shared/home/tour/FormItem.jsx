import React, { Component } from 'react';

class FormItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            location: ''
        }
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onResearch(this.state);
    }
    render() {
        return (
            <div className="b-form wow fadeInUp">
                <form className="b-form-content" onSubmit={this.onSubmit}>
                    <div className="b-form-group">
                        <div className="b-header">
                            <h2 className="b-text-title">
                                Date
                        </h2>
                        </div>
                        <div className="b-content">
                            <select name="name" onChange={this.onChanger}>
                                <option value="Tour Da Nang">Tour Da Nang</option>
                                <option value="Tour Sai Gon">Tour Sai Gon</option>
                                <option value="Tour Hue">Tour Hue</option>
                            </select>
                            <select name="location" onChange={this.onChanger}>
                                <option value="Da Nang">Da Nang</option>
                                <option value="Sai Gon">Sài Gòn</option>
                                <option value="Hue">Huế</option>
                            </select>
                        </div>
                    </div>
                    <div className="b-form-group">
                        <div className="b-header">
                            <h2 className="b-text-title">
                                Guests
                        </h2>
                        </div>
                        <div className="b-content">
                            <select name="name">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                            <select name="name">
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                    </div>
                    <div className="b-form-group">
                        <button type="submit" className="b-btn">Check Available</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FormItem;