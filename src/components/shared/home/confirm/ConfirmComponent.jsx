import React, { Component } from 'react';
var NumberFormat = require('react-number-format');

class ConfirmComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            person: ''
        }
    }
    onChanger = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onBookTour(this.state);
    }
    onCheckTour = () => {
        this.props.onCheckTour(this.props.data.id, this.props.data.tour);
    }
    onFinshed = () =>{
        this.props.onFinshed();
    }
    render() {
        const mainContent = () => {
            switch (this.props.views) {
                case "BOOK_TOUR":
                    return (
                        <div className="b-confirm">
                            <form className="b-form" onSubmit={this.onSubmit}>
                                <div className="b-group">
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Họ Tên
                            </label>
                                        <input type="text" className="b-input" placeholder="Nhập Họ Và Tên" name="name" onChange={this.onChanger} />
                                    </div>
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Số điện thoại
                            </label>
                                        <input type="text" className="b-input" placeholder="Enter Phone" name="phone" onChange={this.onChanger} />
                                    </div>
                                </div>
                                <div className="b-group">
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Địa chỉ
                            </label>
                                        <input type="text" className="b-input" placeholder="Enter Address" name="address" onChange={this.onChanger} />
                                    </div>
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Email
                            </label>
                                        <input type="text" className="b-input" placeholder="Enter Email" name="email" onChange={this.onChanger} />
                                    </div>
                                </div>
                                <div className="b-group">
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Số lượng người
                            </label>
                                        <select className="b-input" name="person" onChange={this.onChanger} >
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={10}>10</option>
                                        </select>
                                    </div>
                                    <div className="b-form-group">
                                        <label className="b-text-label">
                                            Ghi chú
                         </label>
                                        <input type="text" className="b-input" placeholder="Nhập Ghi Chú" name="description" onChange={this.onChanger} />
                                    </div>
                                </div>
                                <div className="b-total">
                                    <p className="b-text-norm">Tổng Cộng</p>
                                    <NumberFormat value={this.props.price} displayType={'text'} thousandSeparator={true} renderText={value => <h3 className="b-text-price">{value} ₫
                                    </h3>} />

                                </div>
                                <div className="b-create">
                                    <button type="submit" className="b-btn">Đặt Tour</button>
                                </div>
                            </form>
                        </div>
                    )
                case "CONFIRM":
                    return (
                        <div className="b-confirm">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Xác nhận đặt tour
                          </h2>
                            </div>
                            <table className="b-table">
                                <thead>
                                    <tr>
                                        <th>Mã Tour</th>
                                        <th>Tên Tour</th>
                                        <th>Thời Gian Bắt Đầu</th>
                                        <th>Tên</th>
                                        <th>Địa Chỉ</th>
                                        <th>Số Điện Thoại</th>
                                        <th>Email</th>
                                        <th>số lượng</th>
                                        <th>Giá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.props.data.id}</td>
                                        <td>{this.props.data.name}</td>
                                        <td>{this.props.data.date}</td>
                                        <td>{this.props.data.name}</td>
                                        <td>{this.props.data.address}</td>
                                        <td>{this.props.data.phone}</td>
                                        <td>{this.props.data.email}</td>
                                        <td>{this.props.data.person}</td>
                                        <td className="b-price">  <NumberFormat value={this.props.data.price} displayType={'text'} thousandSeparator={true} renderText={value => <>{value} ₫
                                    </>} /></td>
                                    </tr>
                                </tbody>

                            </table>
                            <div className="b-confirm-content">
                                <button className="b-btn-confirm waves-effect waves-teal" onClick={this.onCheckTour}>Xác Nhận</button>
                            </div>
                        </div>
                    )
                case "FINSHED_TOUR":
                    return (
                        <div className="b-confirm">
                            <div className="b-heading">
                                <h2 className="b-text-title">
                                    Hoàn Tất
                                </h2>
                            </div>
                            <div className="b-finshed">
                                <i className="fas fa-check"></i>
                            </div>
                            <div className="b-confirm-content">
                                <button className="b-btn-confirm waves-effect waves-teal" onClick={this.onFinshed}>Xác Nhận</button>
                            </div>
                        </div>
                    )
                default:
                    return (<></>)
            }
        }
        return (
            mainContent()
        );
    }
}

export default ConfirmComponent;