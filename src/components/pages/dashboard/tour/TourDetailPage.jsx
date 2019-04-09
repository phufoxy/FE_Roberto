import React, { Component } from 'react';
import { SideBar, HeaderLayout, FooterLayout } from '../../../layouts/dashboard';
import { HeaderComponent, CardResposComponent, FormComponent, DetailComponent, LoadingComponent } from '../../../shared/dashboard';
import { requestExistToken, requestLogout } from '../../../../actions/login';
import { connect } from 'react-redux';
import { requestGetTourDetail, requestDeleteTourDetail, requestAddTourDetail, requestUpdateTourDetail } from '../../../../actions/tourdetail';
import { requestGetTour } from '../../../../actions/tour';
import { Pagination } from '../../../function';
import { Redirect } from 'react-router-dom';
import loadjs from 'loadjs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class TourDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 'VIEW_CARD',
            edit: false,
            dataEdit: {},
            pageOfItems: []
        }
        this.switchViews = this.switchViews.bind(this);
        this.onChangerAdd = this.onChangerAdd.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        loadjs('/script/script.min.js', function () {
        });
        this.props.requestGetTourDetail();
        this.props.requestGetTour();

    }
    switchViews(view) {
        this.setState({
            views: view
        })
    }
    onChangerAdd() {
        this.setState({
            views: 'VIEW_FORM'
        })
    }
    onLogout() {
        this.props.requestLogout();
    }
    onDelete(id) {
        this.props.requestDeleteTourDetail(id);
    }
    onAdd(data) {
        this.props.requestAddTourDetail(data);
        this.setState({
            views: 'VIEW_CARD'
        })
    }
    onEdit(data) {
        let item = [...this.props.data].filter(item => item.id === data)
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0],
                edit: true,
                views: 'VIEW_FORM',
            })
        }

    }
    onUpdate(data) {
        this.props.requestUpdateTourDetail(data);
        this.setState({
            views: "VIEW_CARD",
            edit: false
        })
    }
    render() {
        const loading = () => {
            if (this.props.fetching) {
                return (
                    <LoadingComponent></LoadingComponent>
                )
            }
        }
        if (typeof (cookies.get('token')) === 'undefined' && this.props.exists === false) {
            return (
                <Redirect to="/login" />
            )
        }
        const MainContent = () => {
            switch (this.state.views) {
                case 'VIEW_CARD':
                    return (
                        <section className="b-page-respos">
                            <div className="b-fix-add">
                                <button className="b-btn" onClick={this.onChangerAdd}>
                                    <i className="fas fa-plus-circle"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="b-respos">
                                    <div className="row">
                                        <div className="col-lg-6 offset-lg-3">
                                            <div className="b-heading text-center wow fadeInDown">
                                                <h2 className="b-text-title">
                                                    Reataurant Details
                                        </h2>
                                                <p className="b-text-norm">
                                                    User service easy to use
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                    {loading()}
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <table className="b-table">
                                                <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Tour</th>
                                                        <th>Title</th>
                                                        <th>Body</th>
                                                        <th>Edit</th>
                                                        <th>Remove</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.pageOfItems.map(data => (
                                                        <CardResposComponent key={data.id} onDelete={this.onDelete} data={data} onEdit={this.onEdit} onDetail={this.onDetail} switchViews={this.switchViews} choice="TOUR_DETAIL"></CardResposComponent>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <Pagination items={this.props.data} onChangePage={this.onChangePage} />
                                </div>
                            </div>
                        </section>
                    )
                case 'VIEW_FORM':
                    return (
                        <FormComponent choice="TOUR_DETAIL" switchViews={this.switchViews} tour={this.props.tour} onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormComponent>
                    )
                case 'VIEW_DETAIL':
                    return (
                        <DetailComponent ></DetailComponent>
                    )
                default:
                    return (
                        <FormComponent ></FormComponent>
                    )
            }
        }
        return (
            <div className="b-wrapper">
                <ToastContainer autoClose={5000} draggable={false} />
                <HeaderLayout></HeaderLayout>
                <main className="b-dashboard-main">
                    <div className="b-dashboard">
                        <div className="b-block-left">
                            <SideBar onLogout={this.onLogout}></SideBar>
                        </div>
                        <div className="b-block-right">
                            <HeaderComponent title="Restaurant Detail"></HeaderComponent>
                            {MainContent()}
                            <FooterLayout></FooterLayout>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        tour: state.tour.all,
        data: state.tourdetail.all,
        fetching: state.tourdetail.fetching,
        detail: state.tourdetail.detail,
        exists: state.login.exists
    }
}
export default connect(mapStateToProps, { requestExistToken, requestLogout, requestGetTourDetail, requestGetTour, requestDeleteTourDetail, requestAddTourDetail, requestUpdateTourDetail })(TourDetailPage);