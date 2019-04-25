import React, { Component } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';
class CardResposComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8nN1dsi3f2DUf5R-pKqgisfU2-8PP8CDVXchM5QIoz0MBbs3I) "
            }
        }
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDetail = this.onDetail.bind(this);
    }
    onClick(value) {
        this.props.switchViews(value);
    }
    onDelete() {
        this.props.onDelete(this.props.data.id);
    }
    onUpdate() {
        this.props.onEdit(this.props.data.id);
    }
    onDetail() {
        this.props.onDetail(this.props.data.id);
    }
    render() {
        const popover = (
            <Popover id="popover-basic" title="Popover right">
                <Button variant="danger" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Delete</Button>
                <Button variant="info" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</Button>
                <Button variant="info" onClick={this.onDetail}><i className="fas fa-info-circle"></i> Details</Button>
            </Popover>
        );
        const CARDCONTENT = () => {
            switch (this.props.choice) {
                case "PLACE":
                    return (
                        <div className="col-lg-4 col-md-4">
                            <div className="b-card wow fadeInDown">
                                <div className="b-header" style={{
                                    backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                }}>
                                    <div className="b-overlay">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                        <p className="b-text-norm">
                                            {this.props.data.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-content">
                                        <div className="b-start">
                                            <h5 className="b-text-number">
                                                {this.props.data.price}
                                            </h5>
                                            <p className="b-text-norm">
                                                price
                                        </p>
                                        </div>
                                        <div className="b-visit">
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <button className="b-button waves-effect waves-teal"><i className="fas fa-cogs"></i></button>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="b-forks">
                                            <h5 className="b-text-number">
                                                {this.props.data.review}
                                            </h5>
                                            <p className="b-text-norm">
                                                review
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-icon"
                                    style={{
                                        backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                    }}>
                                </div>
                            </div>
                        </div >
                    )
                case "BLOG":
                    return (
                        <div className="col-lg-4 col-md-4">
                            <div className="b-card wow fadeInDown">
                                <div className="b-header" style={{
                                    backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                }}>
                                    <div className="b-overlay">
                                        <h2 className="b-text-title">
                                            {this.props.data.title}
                                        </h2>

                                    </div>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-content">
                                        <div className="b-start">
                                        </div>
                                        <div className="b-visit">
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <button className="b-button waves-effect waves-teal"><i className="fas fa-cogs"></i></button>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="b-forks">
                                        </div>
                                    </div>
                                </div>
                                <div className="b-icon"
                                    style={{
                                        backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                    }}>
                                </div>
                            </div>
                        </div >
                    )
                case "TOUR":
                    return (
                        <div className="col-lg-4 col-md-4">
                            <div className="b-card wow fadeInDown">
                                <div className="b-header" style={{
                                    backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                }}>
                                    <div className="b-overlay">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                        <p className="b-text-norm">
                                            {this.props.data.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-content">
                                        <div className="b-start">
                                            <h5 className="b-text-number">
                                                {this.props.data.price}
                                            </h5>
                                            <p className="b-text-norm">
                                                price
                                    </p>
                                        </div>
                                        <div className="b-visit">
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <button className="b-button waves-effect waves-teal"><i className="fas fa-cogs"></i></button>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="b-forks">
                                            <h5 className="b-text-number">
                                                {this.props.data.total}
                                            </h5>
                                            <p className="b-text-norm">
                                                total
                                    </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-icon"
                                    style={{
                                        backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                    }}>
                                </div>
                            </div>
                        </div >
                    )
                case "TOUR_IMAGE":
                    return (
                        <div className="col-lg-4 col-md-4">
                            <div className="b-card wow fadeInDown">
                                <div className="b-header" style={{
                                    backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                }}>
                                    <div className="b-overlay">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                        <p className="b-text-norm">
                                            {this.props.data.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-content">
                                        <div className="b-start">

                                        </div>
                                        <div className="b-visit">
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <button className="b-button waves-effect waves-teal"><i className="fas fa-cogs"></i></button>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="b-forks">

                                        </div>
                                    </div>
                                </div>
                                <div className="b-icon"
                                    style={{
                                        backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                    }}>
                                </div>
                            </div>
                        </div >
                    )
                case "SLIDER":
                    return (
                        <div className="col-lg-4 col-md-4">
                            <div className="b-card wow fadeInDown">
                                <div className="b-header" style={{
                                    backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                }}>
                                    <div className="b-overlay">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                        <p className="b-text-norm">
                                            {this.props.data.city}
                                        </p>
                                    </div>
                                </div>
                                <div className="b-content">
                                    <div className="b-block-content">
                                        <div className="b-start">
                                            <h5 className="b-text-number">
                                            </h5>
                                            <p className="b-text-norm">
                                            </p>
                                        </div>
                                        <div className="b-visit">
                                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                                <button className="b-button waves-effect waves-teal"><i className="fas fa-cogs"></i></button>
                                            </OverlayTrigger>
                                        </div>
                                        <div className="b-forks">
                                            <h5 className="b-text-number">
                                            </h5>
                                            <p className="b-text-norm">

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-icon"
                                    style={{
                                        backgroundImage: `url(https://fotour.herokuapp.com${this.props.data.images})`
                                    }}>
                                </div>
                            </div>
                        </div >
                    )
                case "PLACE_DETAIL":
                    return (
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.place}</td>
                            <td>{this.props.data.title}</td>
                            <td>{this.props.data.body}</td>
                            <td><button className="b-btn b-edit" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</button></td>
                            <td><button className="b-btn b-remove" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Remove</button></td>
                        </tr>
                    )
                case "HOUSE_DETAIL":
                    return (
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.house}</td>
                            <td>{this.props.data.title}</td>
                            <td>{this.props.data.body}</td>
                            <td><button className="b-btn b-edit" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</button></td>
                            <td><button className="b-btn b-remove" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Remove</button></td>
                        </tr>
                    )
                case "RESTAURANT_DETAIL":
                    return (
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.restaurant}</td>
                            <td>{this.props.data.title}</td>
                            <td>{this.props.data.body}</td>
                            <td><button className="b-btn b-edit" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</button></td>
                            <td><button className="b-btn b-remove" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Remove</button></td>
                        </tr>
                    )
                case "TOUR_DETAIL":
                    return (
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.tour}</td>
                            <td>{this.props.data.title}</td>
                            <td>{this.props.data.body}</td>
                            <td><button className="b-btn b-edit" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</button></td>
                            <td><button className="b-btn b-remove" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Remove</button></td>
                        </tr>
                    )
                case "BLOG_DETAIL":
                    return (
                        <tr>
                            <td>{this.props.data.id}</td>
                            <td>{this.props.data.blog}</td>
                            <td>{this.props.data.title}</td>
                            <td>{this.props.data.body}</td>
                            <td><button className="b-btn b-edit" onClick={this.onUpdate}><i className="fas fa-edit"></i> Edit</button></td>
                            <td><button className="b-btn b-remove" onClick={this.onDelete}><i className="fas fa-trash-alt"></i> Remove</button></td>
                        </tr>
                    )
                default:
                    return (
                        <><h1>Erro</h1></>
                    )
            }
        }
        return (
            CARDCONTENT()
        );
    }
}

export default CardResposComponent;