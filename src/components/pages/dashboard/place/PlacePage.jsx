import React, { Component } from 'react';
import { SideBar, HeaderLayout, FooterLayout } from '../../../layouts/dashboard';
import { HeaderComponent, CardResposComponent, FormComponent, DetailComponent, LoadingComponent } from '../../../shared/dashboard';
import { connect } from 'react-redux';
import { requestGetPlace, requestDeletePlace, requestAddPlace, requestUpdatePlace, requestGetPlaceDetails } from '../../../../actions/place';
import { requestExistToken, requestLogout } from '../../../../actions/login';
import { Pagination } from '../../../function';
import { Redirect } from 'react-router-dom';
import loadjs from 'loadjs';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const cookies = new Cookies();
class PlacePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: 'VIEW_CARD',
            edit: false,
            dataEdit: {},
            pageOfItems: []
        }
        this.switchViews = this.switchViews.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onChangerAdd = this.onChangerAdd.bind(this);
        this.onDetail = this.onDetail.bind(this);
        this.onLogout = this.onLogout.bind(this);
        this.onChangePage = this.onChangePage.bind(this);

    }


    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    switchViews(view) {
        this.setState({
            views: view
        })
    }
    componentDidMount() {
        this.props.requestExistToken()
        this.props.requestGetPlace();
        loadjs('/script/script.min.js', function () {
        });

    }
    onDelete(id) {
        this.props.requestDeletePlace(id);
    }
    onAdd(data) {
        this.props.requestAddPlace(data);
        this.switchViews('VIEW_CARD');
    }
    onEdit(data) {
        this.setState({
            views: 'VIEW_FORM'
        })
        let item = [...this.props.data].filter(item => item.id === data)
        if (item.length > 0) {
            this.setState({
                dataEdit: item[0],
                edit: true
            })
        }
    }
    onUpdate(data) {
        this.props.requestUpdatePlace(data);
        this.setState({
            views: 'VIEW_CARD',
            edit: false
        })
    }
    onChangerAdd() {
        this.setState({
            views: 'VIEW_FORM'
        })
    }
    onDetail(id) {
        this.setState({
            views: "VIEW_DETAIL"
        })
        this.props.requestGetPlaceDetails(id);
    }
    onLogout() {
        this.props.requestLogout();
    }
    render() {

        if (typeof (cookies.get('token')) === 'undefined' && this.props.exists === false) {
            return (
                <Redirect to="/login" />
            )
        }
        const loading = () => {
            if (this.props.fetching) {
                return (
                    <LoadingComponent></LoadingComponent>
                )
            }
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
                                                    Place
                                        </h2>
                                                <p className="b-text-norm">
                                                    User service easy to use
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                    {loading()}
                                    <div className="row">
                                        {this.state.pageOfItems.map(data => (
                                            <CardResposComponent key={data.id} onDelete={this.onDelete} data={data} onEdit={this.onEdit} onDetail={this.onDetail} switchViews={this.switchViews} choice="PLACE"></CardResposComponent>
                                        ))}
                                    </div>
                                    <Pagination items={this.props.data} onChangePage={this.onChangePage} />
                                </div>
                            </div>
                        </section>
                    )
                case 'VIEW_FORM':
                    return (
                        <FormComponent onAdd={this.onAdd.bind(this)} switchViews={this.switchViews} edit={this.state.edit} dataEdit={this.state.dataEdit} onUpdate={this.onUpdate} choice="PLACE"></FormComponent>
                    )
                case 'VIEW_DETAIL':
                    return (
                        <DetailComponent data={this.props.detail} switchViews={this.switchViews}></DetailComponent>
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
                            <HeaderComponent title="Place"></HeaderComponent>
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
        data: state.place.all,
        fetching: state.place.fetching,
        detail: state.place.detail,
        exists: state.login.exists
    }
}
export default connect(mapStateToProps, { requestGetPlace, requestDeletePlace, requestAddPlace, requestUpdatePlace, requestGetPlaceDetails, requestExistToken, requestLogout })(PlacePage);