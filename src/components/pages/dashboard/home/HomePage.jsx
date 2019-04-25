import React, { Component } from 'react';
import { MenuLayout, HeaderLayout, FooterLayout } from '../../../layouts/dashboard';
import { ActiveComponent, OptionComponent, DailyComponent } from '../../../shared/dashboard';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import { requestGetTourCount, requestGetTourBookCount } from '../../../../actions/tour';
import { requestGetBlogCount, requestGetFeedBackCount } from '../../../../actions/blog';
import { requestCheckStaff } from '../../../../actions/login';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const cookies = new Cookies();

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        this.props.requestGetTourCount();
        this.props.requestGetBlogCount();
        this.props.requestGetTourBookCount();
        this.props.requestGetFeedBackCount();
    }
    render() {
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
        return (
            <div className="b-wrapper">
                <ToastContainer autoClose={5000} draggable={false} />
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-dashboard-main">
                    <OptionComponent title="Home Dashboard"></OptionComponent>
                    <section className="b-page-active">
                        <div className="container-fluid">
                            <div className="row">
                                <ActiveComponent countFeedback={this.props.countFeedback} countBook={this.props.countBook} countTour={this.props.countTour} countBlog={this.props.countBlog}></ActiveComponent>
                                <DailyComponent countFeedback={this.props.countFeedback} countBook={this.props.countBook} countTour={this.props.countTour} countBlog={this.props.countBlog}></DailyComponent>
                            </div>
                        </div>
                    </section>

                    <section className="b-dashboard-exclusive">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="b-exclusive">
                                        <div className="b-heading">
                                            <h2 className="b-text-title">
                                                Exclusive Datatable Plugin
                                    </h2>
                                        </div>
                                        <div className="b-content">
                                            <table className="b-table">
                                                <thead>
                                                    <tr>
                                                        <th>Company</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th>Managed By</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div className="b-block">
                                                                <div className="b-icon">
                                                                    <img src="../../images/bg-img/1.jpg" alt="Person" width="100px" />
                                                                </div>
                                                                <div className="b-content">
                                                                    <p className="b-text-norm">
                                                                        Text number file
                                                            </p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            2/13/2019
                                                </td>
                                                        <td>
                                                            <span className="b-done">
                                                                Done
                                                    </span>
                                                            <span className="b-pending">
                                                                pending
                                                    </span>
                                                            <span className="b-delivered">
                                                                delivered
                                                    </span>
                                                        </td>
                                                        <td>
                                                            <h2 className="b-text-title">
                                                                Lynnett Dinnington
                                                    </h2>
                                                            <p className="b-text-norm">
                                                                Architect
                                                    </p>
                                                        </td>
                                                        <td>
                                                            <button className="b-btn">
                                                                <i className="fas fa-ellipsis-h" />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.place.all,
        fetching: state.tour.fetching,
        detail: state.place.detail,
        exists: state.login.exists,
        is_staff: state.login.is_staff,
        is_superuser: state.login.is_superuser,
        countTour: state.tour.count,
        countBlog: state.blog.count,
        countFeedback: state.blog.countFeedback,
        countBook: state.tour.countBook,
        fetching1: state.blog.fetching
    }
}
export default connect(mapStateToProps, { requestCheckStaff, requestGetTourCount, requestGetBlogCount, requestGetTourBookCount, requestGetFeedBackCount })(HomePage);