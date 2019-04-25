import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, TourItem, HeroComponent, RecentComponent, TagComponent, InstagramComponent } from '../../../shared/home';
import PaginationHome from '../../../function/pagination/PaginationHome';
import { requestGetTourHome, requestAddLike, requestAddReviews, requestGetNewTour } from '../../../../actions/tour';
import { connect } from 'react-redux';
import ScrollUpButton from "react-scroll-up-button";
import Page from 'react-page-loading';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();
class TourPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            pageOfItems: [],
            is_login: false
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
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
        this.props.requestGetTourHome();
        this.props.requestGetNewTour();
        this.props.requestGetTourHome()
    }
    onAddLike = (id) => {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            toast.warning(`Vui Lòng Đăng Nhập Để được Like`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success-delete'
            });
        } else {
            this.props.requestAddLike(cookies.get('data').email, id, 1);
            this.props.requestGetTourHome();
        }

    }
    onAddViews = (views, id) => {
        this.props.requestAddReviews(id, views)
        this.onGetData();
    }
    render() {

        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={5} duration={1}>
                <div className="wrapper">
                    <ToastContainer autoClose={2000} draggable={false} hideProgressBar newestOnTop closeOnClick={true} />
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">
                        <HeroComponent title="TOUR" item="Tour"></HeroComponent>
                        <section className="b-page-rooms">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="b-rooms">
                                            {
                                                this.state.pageOfItems.map(data => (
                                                    <TourItem key={data.id} data={data} onAddLike={this.onAddLike} onAddViews={this.onAddViews}></TourItem>
                                                ))
                                            }
                                            <PaginationHome items={this.props.data} onChangePage={this.onChangePage}></PaginationHome>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="b-form wow fadeInUp">
                                            <form className="b-form-content">
                                                <div className="b-form-group">
                                                    <div className="b-header">
                                                        <h2 className="b-text-title">
                                                            Ngày
                                                    </h2>
                                                    </div>
                                                    <div className="b-content">
                                                        <input type="text" placeholder="name" />
                                                        <input type="text" placeholder="address" />
                                                    </div>
                                                </div>
                                                <div className="b-form-group">
                                                    <div className="b-header">
                                                        <h2 className="b-text-title">
                                                            Yêu Cầu
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
                                                    <button type="submit" className="b-btn">Tìm Kiếm</button>
                                                </div>
                                            </form>
                                        </div>
                                        <RecentComponent onAddViews={this.onAddViews} views="TOUR" data={this.props.tournew}></RecentComponent>
                                        <div className="b-tags">
                                            <div className="b-heading">
                                                <h2 className="b-text-title">
                                                    Tags
                                                </h2>
                                            </div>
                                            <div className="b-tags-list">
                                                <TagComponent></TagComponent>
                                            </div>
                                        </div>
                                        <div className="b-instagram">
                                            <div className="b-heading">
                                                <h2 className="b-text-title">Instagram</h2>
                                            </div>
                                            <div className="b-block">
                                                <InstagramComponent></InstagramComponent>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ContactComponent></ContactComponent>
                        <section className="b-page-read">
                            <div className="container">
                                <div className="b-block">
                                    <div className="b-block-item">
                                        <img src="./images/core-img/p1.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="./images/core-img/p2.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="./images/core-img/p3.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="./images/core-img/p4.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="./images/core-img/p5.png" alt="images" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <ScrollUpButton
                        StopPosition={0}
                        ShowAtPosition={150}
                        EasingType='easeOutCubic'
                        AnimationDuration={1000}
                        ContainerClassName='ScrollUpButton__Container'
                        TransitionClassName='ScrollUpButton__Toggled'
                        style={{}}
                        ToggledStyle={{}}
                    />
                    <FooterLayout></FooterLayout>
                </div>
            </Page>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.tour.all,
        tournew: state.tour.tournew,
        fecthing: state.tour.fetching
    }
}
export default connect(mapStateToProps, { requestGetNewTour, requestGetTourHome, requestAddLike, requestAddReviews })(TourPage);