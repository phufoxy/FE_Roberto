import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../../layouts/home';
import { CommentItemComponent, ContactComponent, SliderDetailComponent, BookComponent, InfoComponent, ConfirmComponent, FormComment } from '../../../../shared/home';
import { connect } from 'react-redux';
import { requestAddBookTourHome, requestBookTourHome, requestCheckBook } from '../../../../../actions/booktour';
import { requestGetTourDetailHome, requestAddLike, requestAddComment } from '../../../../../actions/tour';
import ScrollUpButton from "react-scroll-up-button";
import { Parallax } from "react-parallax";
import { ToastContainer } from 'react-toastify';
import Page from 'react-page-loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
const cookies = new Cookies();

class TourDetailPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            views: "DETAILS",
            redirect: false,
        }
    }


    onViews = (views) => {
        this.setState({
            views: views
        })
    }
    componentDidMount() {
        this.props.requestGetTourDetailHome(this.props.match.params.tour);

    }
    onBookTour = (data) => {
        this.props.requestAddBookTourHome(data, cookies.get('data').id, this.props.data.id, this.props.data.price);
    }
    onAddLike = () => {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            toast.warning(`Vui Lòng Đăng Nhập Để được Like`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success-delete'
            });
        } else {
            this.props.requestAddLike(cookies.get('data').email, this.props.data.id, 1);
            this.props.requestGetTourDetailHome(this.props.match.params.tour);
        }
    }
    onBookTour = (data) => {
        this.props.requestBookTourHome(data, this.props.data.price, this.props.data.date_start, this.props.data.id, this.props.data.total);
        this.setState({
            views: "CONFIRM_TOUR"
        })
    }
    onCheckTour = (id, tour) => {
        this.props.requestCheckBook(id, tour);
        this.setState({
            views: "FINSHED_TOUR"
        })

    }
    onFinshed = () => {
        this.setState({
            redirect: true
        })
    }
    onComment = (data) => {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            toast.warning(`Vui Lòng Đăng Nhập Để được Bình Luận`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success-delete'
            });
        } else {
            this.props.requestAddComment(this.props.data.id, cookies.get('data'), data);
            this.props.requestGetTourDetailHome(this.props.match.params.tour);
        }

    }
    render() {
        if (this.props.data.rating !== undefined) {
            let number = 0;
            this.props.data.rating.forEach(element => {
                number += element.star

            });

            console.log(number/this.props.data.rating.length);

        }

        if (this.state.redirect) {
            return (
                <Redirect to='/tour'></Redirect>
            )
        }
        const Slider = () => {
            if (this.props.data.images_details && this.props.data.images_details.constructor === Array && this.props.data.images_details.length !== 0) {
                return (
                    <SliderDetailComponent data={this.props.data.images_details} onAddLike={this.onAddLike}></SliderDetailComponent>
                )
            }
        }
        const body = () => {
            if (this.props.data.details && this.props.data.details.constructor === Array && this.props.data.details.length !== 0) {
                return (
                    <div className="b-content" dangerouslySetInnerHTML={{ __html: this.props.data.details[0].body }}>
                    </div>
                )
            }
        }
        const contentMain = () => {

            switch (this.state.views) {
                case "DETAILS":


                    return (
                        <section className="b-page-room">
                            <div className="container-fluid">
                                <div className="b-room">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                    </div>
                                    <div className="b-room-top">
                                        {Slider()}
                                        <BookComponent data={this.props.data} onViews={this.onViews} views="BOOK"></BookComponent>
                                    </div>
                                    <InfoComponent data={this.props.data}></InfoComponent>
                                    <div className="b-content">
                                        {body()}
                                    </div>
                                    <div className="b-review">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="b-comments">
                                                        <FormComment onComment={this.onComment}></FormComment>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <CommentItemComponent data={this.props.data.comments}></CommentItemComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "DETAIL_BOOK":

                    return (
                        <section className="b-page-room">
                            <div className="b-book-pay">
                                <div className="b-block">
                                    <BookComponent data={this.props.data} onViews={this.onViews} views="DETAIL_BOOK"></BookComponent>
                                    <div className="b-block-content">
                                        <div className="b-heading">
                                            <h2 className="b-text-title">
                                                Thông tin liên lạc
                                             </h2>
                                        </div>
                                        <ConfirmComponent price={this.props.data.price} onBookTour={this.onBookTour} views="BOOK_TOUR"></ConfirmComponent>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "CONFIRM_TOUR":

                    return (
                        <section className="b-page-room">
                            <div className="b-book-pay">
                                <div className="b-block">
                                    <BookComponent data={this.props.data} onViews={this.onViews} views="DETAIL_BOOK"></BookComponent>
                                    <div className="b-block-content">
                                        <ConfirmComponent data={this.props.booktour} onCheckTour={this.onCheckTour} views="CONFIRM"></ConfirmComponent>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "FINSHED_TOUR":
                    return (
                        <section className="b-page-room">
                            <div className="b-book-pay">
                                <div className="b-block">
                                    <BookComponent data={this.props.data} onViews={this.onViews} views="DETAIL_BOOK"></BookComponent>
                                    <div className="b-block-content">

                                        <ConfirmComponent onFinshed={this.onFinshed} views="FINSHED_TOUR"></ConfirmComponent>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                default:
                    return (<></>)
            }
        }
        return (


            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <ToastContainer autoClose={2000} draggable={false} hideProgressBar newestOnTop closeOnClick={true} />
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">

                        <Parallax bgImage={(`https://fotour.herokuapp.com${this.props.data.images}`)} strength={500}>
                            <section className="b-page-hero" >
                                <div className="b-block">
                                    <div className="b-block-left">
                                        <h2 className="b-text-title">
                                            {this.props.data.name}
                                        </h2>
                                    </div>
                                    <div className="b-block-right">
                                        <h5 className="b-text-price">
                                            ${this.props.data.price} / <span className="is-current">day</span>
                                        </h5>
                                    </div>
                                </div>
                            </section>
                        </Parallax>
                        {contentMain()}
                        <ContactComponent></ContactComponent>
                        <section className="b-page-read">
                            <div className="container">
                                <div className="b-block">
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p1.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p2.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p3.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p4.png" alt="images" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p5.png" alt="images" />
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
        data: state.tour.tour,
        fecthing: state.tour.fetching,
        booktour: state.booktour.booktour
    }
}
export default connect(mapStateToProps, { requestAddComment, requestCheckBook, requestBookTourHome, requestAddLike, requestGetTourDetailHome, requestAddBookTourHome })(TourDetailPage);