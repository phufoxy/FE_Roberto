import React, { Component } from 'react';
var NumberFormat = require('react-number-format');

class TableComponent extends Component {
    onDelete = () => {
        this.props.onDelete(this.props.data.id);
    }
    onEdit = () => {
        this.props.onEdit(this.props.data.id);
    }
    render() {
        const data = this.props.data;
        const Table = () => {
            switch (this.props.choice) {

                case "PLACE":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.name}</td>
                            <td>{data.city}</td>
                            <td>
                                <span className="b-false">
                                    {data.type}
                                </span>
                            </td>
                            <td>{data.address}</td>
                            <td>{data.images}</td>
                            <td>
                                <span className="b-true">
                                    {data.review}
                                </span>
                            </td>
                            <td>{data.content}</td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "USER":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.username}</td>
                            <td>
                                <span className={data.is_superuser ? "b-true" : "b-false"}>
                                    {data.is_superuser ? "true" : "false"}
                                </span>
                            </td>
                            <td>
                                <span className={data.is_staff ? "b-true" : "b-false"}>
                                    {data.is_staff ? "true" : "false"}
                                </span>
                            </td>
                            <td>{data.first_name === '' ? "null" : data.first_name}</td>
                            <td>{data.last_name === '' ? "null" : data.last_name}</td>
                            <td>{data.email === '' ? 'null' : data.email}</td>
                            <td>
                                <span className={data.is_active ? "b-true" : "b-false"}>
                                    {data.is_active ? "true" : "false"}
                                </span>
                            </td>
                            <td>{data.password}</td>
                            <td className={this.props.is_authorities === true ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "TOUR":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.name}</td>
                            <td>
                                <span className={data.total % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.total}
                                </span>
                            </td>
                            <td>
                                <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} renderText={value => <span className={data.price % 2 === 0 ? "b-true" : "b-false"}>
                                    {value}₫
                                </span>}
                                />

                            </td>
                            <td>
                                <span className={data.date % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.date}
                                </span>
                            </td>
                            <td>{data.images}</td>
                            <td>
                                <span className="b-true">
                                    {data.type_tour}
                                </span>
                            </td>
                            <td>{data.location}</td>
                            <td>
                                <span className="b-true">
                                    {data.date_start}
                                </span>
                            </td>
                            <td>
                                <span className={data.is_sale ? "b-true" : 'b-false'}>
                                    {data.is_sale ? "True" : "False"}
                                </span>
                            </td>
                            <td>
                                <span className={data.reviews % 2 === 0 ? "b-true" : 'b-false'}>
                                    {data.reviews}
                                </span>
                            </td>
                            <td>
                                <span className={data.likes.length % 2 === 0 ? "b-true" : 'b-false'}>
                                    {data.likes.length}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "TOUR_DETAIL":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <span className={data.tour % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.tour}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "TOUR_IMAGES":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.name}</td>
                            <td>{data.images}</td>
                            <td>
                                <span className={data.tour % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.tour}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "BLOG":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.title}</td>
                            <td>
                                {data.content}
                            </td>
                            <td>
                                <span className="b-true">
                                    {data.date}
                                </span>
                            </td>

                            <td>{data.images}</td>
                            <td>
                                <span className="b-false">
                                    {data.date_create}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "BLOG_DETAILS":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                            <td>
                                <span className={data.blog % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.blog}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "TOUR_BOOK":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.date}</td>
                            <td>
                                <span className={data.price % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.price}
                                </span>
                            </td>
                            <td>
                                <span className={data.person % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.person}
                                </span>
                            </td>
                            <td>
                                {data.name}
                            </td>
                            <td>
                                {data.email}
                            </td>
                            <td>
                                {data.address}
                            </td>
                            <td>
                                {data.phone}
                            </td>
                            <td>
                                <span className={data.is_book ? "b-true" : "b-false"}>
                                    {
                                        data.is_book ? "True" : "False"
                                    }
                                </span>
                            </td>
                            <td>
                                {data.description}
                            </td>
                            <td>
                                {data.date_create}
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "FEEDBACK":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.email}</td>
                            <td>{data.title}</td>
                            <td>
                                {data.body}
                            </td>
                            <td>
                                <span className={data.is_check ? 'b-true' : 'b-false'}>
                                    {data.is_check ? 'True' : 'False'}
                                </span>
                            </td>
                            <td>{data.date_create}</td>

                            <td>
                                <span className={data.user % 2 === 0 ? 'b-true' : 'b-false'}>
                                    {data.user}
                                </span>
                            </td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                case "SLIDER":
                    return (
                        <tr >
                            <td>
                                <span className={data.id % 2 === 0 ? "b-true" : "b-false"}>
                                    {data.id}
                                </span>
                            </td>
                            <td>{data.name}</td>
                            <td>{data.title}</td>
                            <td>
                                {data.images}
                            </td>
                            <td>{data.date_create}</td>
                            <td className={this.props.is_authorities ? "b-edit" : "b-edit disable"} >
                                <button className="b-btn b-btn-edit" onClick={this.onEdit}>
                                    <i className="fas fa-edit" />
                                </button>
                                <button className="b-btn b-btn-delete" onClick={this.onDelete}>
                                    <i className="fas fa-user-minus" />
                                </button>
                            </td>
                        </tr>
                    )
                default:
                    return (
                        <></>
                    )

            }
        }
        return (
            Table()
        );
    }
}

export default TableComponent;