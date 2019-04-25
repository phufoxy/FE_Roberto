import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, BannerComponent, AboutComponent, ServiceComponent, KingComponent, TestimonialsComponent, FeatureComponent, BlogComponent } from '../../../shared/home';
import { connect } from 'react-redux';
import { requestGetSliderBanner, requestGetTourSale, requestGetTourTopReviews, requestAddReviews } from '../../../../actions/tour';
import { requestCheckStaff } from '../../../../actions/login';
import { requestGetFeedBackHome, requestGetViewTop, requestAddViews } from '../../../../actions/blog';
import ScrollUpButton from "react-scroll-up-button";
import Page from 'react-page-loading';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [
                { id: '1', title: 'Transportion', src: './images/core-img/icon-1.png' },
                { id: '2', title: 'Transportion', src: './images/core-img/icon-2.png' },
                { id: '3', title: 'Transportion', src: './images/core-img/icon-3.png' },
                { id: '4', title: 'Transportion', src: './images/core-img/icon-4.png' },
                { id: '5', title: 'Transportion', src: './images/core-img/icon-1.png' }
            ]
        }
    }
    componentDidMount() {
        this.onGetData();
        if (cookies.get('data') !== undefined) {
            this.props.requestCheckStaff(cookies.get('data').id);
        }
        this.interval = setInterval(() => (
            this.onGetData()
        ), 10000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onGetData = () => {
        this.props.requestGetSliderBanner();
        this.props.requestGetTourSale();
        this.props.requestGetFeedBackHome();
        this.props.requestGetTourTopReviews();
        this.props.requestGetViewTop();
    }
    onAddViews = (views, id) => {
        this.props.requestAddReviews(id, views)
    }
    onAddReview = (reviews, blog) => {
        this.props.requestAddViews(blog, reviews);
    }
    render() {
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <BannerComponent data={this.props.slider}></BannerComponent>
                    <main className="b-page-main">
                        <AboutComponent></AboutComponent>
                        <section className="b-page-service">
                            <div className="container">
                                <div className="b-block wow fadeInUp">
                                    {this.state.service.map(data => (
                                        <ServiceComponent key={data.id} data={data}></ServiceComponent>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <KingComponent data={this.props.sale}></KingComponent>
                        <TestimonialsComponent feedbackhome={this.props.feedbackhome}></TestimonialsComponent>
                        <FeatureComponent data={this.props.reviews} onAddViews={this.onAddViews}></FeatureComponent>
                        <BlogComponent data={this.props.blogviews} onAddReview={this.onAddReview}></BlogComponent>
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
        slider: state.tour.slider,
        sale: state.tour.sale,
        reviews: state.tour.reviews,
        fetching: state.tour.fetching,
        feedbackhome: state.blog.feedbackhome,
        blogviews: state.blog.blogviews

    }
}
export default connect(mapStateToProps, { requestAddViews, requestGetViewTop, requestAddReviews, requestGetTourTopReviews, requestGetFeedBackHome, requestCheckStaff, requestGetSliderBanner, requestGetTourSale })(IndexPage);