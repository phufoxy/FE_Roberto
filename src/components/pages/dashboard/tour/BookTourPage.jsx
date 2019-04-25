import React, { Component } from 'react';
import { MenuLayout, HeaderLayout, FooterLayout } from '../../../layouts/dashboard';
import { OptionComponent, TableComponent, LoadingComponent, FormGroupComponent } from '../../../shared/dashboard';
import { connect } from 'react-redux';
import { requestGetTourBook, requestDeleteBookTour, requestAddBookTour, requestUpdateBookTour } from '../../../../actions/booktour';
import { requestGetTour } from '../../../../actions/tour';
import { requestCheckStaff } from '../../../../actions/login';
import { Pagination } from '../../../function';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const cookies = new Cookies();
class BookTourPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: "LIST",
            pageOfItems: [],
            edit: false,
            dataEdit: {},

        }
    }
    onChangePage = (pageOfItems) => {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.onGetData();
        this.interval = setInterval(() => (this.onGetData()), 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onGetData = () => {
        this.props.requestGetTourBook();
        this.props.requestGetTour();
        this.props.requestCheckStaff(cookies.get('data').id);
    }
    onDelete = (id) => {
        this.props.requestDeleteBookTour(id);
    }
    onForm = () => {
        this.setState({
            switch: "FORM"
        })
    }
    onSwitch = (views) => {
        this.setState({
            switch: views
        })
    }
    onAdd = (data) => {
        this.props.requestAddBookTour(data, cookies.get('data').id);
        this.setState({
            switch: "LIST"
        })
    }
    onEdit = (id) => {
        this.setState({
            switch: 'FORM'
        })
        let item = [...this.props.data].filter(item => item.id === id)
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0],
                edit: true
            })
        }
    }
    onUpdate = (data) => {
        this.props.requestUpdateBookTour(data, cookies.get('data').id);
        this.setState({
            switch: "LIST",
            edit: false
        })
    }
    isAutobot = (transformer) => {
        return (transformer.description === 'yeu thich');
    }
    render() {
        var autobots = this.state.pageOfItems.filter(this.isAutobot);
        var is_authorities = false;
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            return (
                <Redirect to='/login'></Redirect>
            )
        } else {
            if (cookies.get('is_staff') === false) {
                return (
                    <Redirect to='/'></Redirect>
                )
            }

        }
        const button_check = () => {
            if (cookies.get('is_superuser') === 'true') {
                is_authorities = true
                return (
                    <button className='b-btn waves-effect waves-teal' onClick={this.onForm}>
                        <i className="fas fa-plus" />
                        New Record
                    </button>
                )
            } else {
                is_authorities = false
                return (
                    <button className='b-btn waves-effect waves-teal disable' onClick={this.onForm}>
                        <i className="fas fa-plus" />
                        New Record
                    </button>
                )
            }

        }
        const loading = () => {
            if (this.props.fetching) {
                return (
                    <LoadingComponent></LoadingComponent>
                )
            } else {
                return (
                    <table className="b-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Date </th>
                                <th>Price</th>
                                <th>Person</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Is_Book</th>
                                <th>Description</th>
                                <th>DateCreate</th>
                                <th className={is_authorities === true ? "b-action" : "b-action disable"}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {autobots.map(data => (
                                <TableComponent key={data.id} data={data} onDelete={this.onDelete} onEdit={this.onEdit} is_authorities={is_authorities} choice="TOUR_BOOK"></TableComponent>
                            ))}
                        </tbody>
                    </table>
                )
            }
        }
        const mainContent = () => {
            switch (this.state.switch) {
                case "LIST":
                    return (
                        <section className="b-dashboard-table">
                            <div className="container-fluid">
                                <div className="b-block-main">
                                    <div className="b-heading">
                                        <div className="b-block">
                                            <div className="b-block-left">
                                                <h2 className="b-text-title">
                                                    <i className="fab fa-canadian-maple-leaf" /> Book Tour Dashboard
                                                </h2>
                                            </div>
                                            <div className="b-block-right">
                                                {button_check()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="b-content">
                                        {loading()}
                                    </div>
                                    <Pagination items={this.props.data} onChangePage={this.onChangePage} />
                                </div>
                            </div>
                        </section>
                    )
                case "FORM":
                    return (
                        <section className="b-dashboard-table">
                            <div className="container-fluid">
                                <FormGroupComponent dataEdit={this.state.dataEdit} tour={this.props.tour} edit={this.state.edit} onSwitch={this.onSwitch} onAdd={this.onAdd} onUpdate={this.onUpdate} choice="TOUR_BOOK"></FormGroupComponent>
                            </div>
                        </section>
                    )
                default:
                    return (
                        <></>
                    )

            }
        }
        return (
            <div className="b-wrapper">
                <ToastContainer autoClose={5000} draggable={false} />
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-dashboard-main">
                    <OptionComponent title="Book Tour Page Dashboard"></OptionComponent>
                    {mainContent()}
                </main>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.booktour.all,
        fetching: state.booktour.fetching,
        tour: state.tour.all
    }
}
export default connect(mapStateToProps, { requestGetTour, requestCheckStaff, requestGetTourBook, requestDeleteBookTour, requestAddBookTour, requestUpdateBookTour })(BookTourPage);