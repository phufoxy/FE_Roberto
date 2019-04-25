import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, RecentComponent, BlogItemComponent, TagComponent, InstagramComponent, HeroComponent } from '../../../shared/home';
import { connect } from 'react-redux';
import { requestGetBlogHome, requestGetBlogTopDate, requestAddViews, requestAddLikes } from '../../../../actions/blog';
import PaginationHome from '../../../function/pagination/PaginationHome'
import ScrollUpButton from "react-scroll-up-button";
import Page from 'react-page-loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    sortDescending = () => {
        const { pageOfItems } = this.state;
        pageOfItems.sort((a, b) => a - b).reverse()
        this.setState({ pageOfItems })
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.props.requestGetBlogHome();
        this.props.requestGetBlogTopDate();
    }
    onAddReview = (reviews, blog) => {
        this.props.requestAddViews(blog, reviews);
    }
    onAddLike = (id) => {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            toast.warning(`Vui Lòng Đăng Nhập Để được Like`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success-delete'
            });
        } else {
            this.props.requestAddLikes(id, cookies.get('data').username);
            this.props.requestGetBlogHome();
        }

    }
    render() {
        // const loading = () => {
        //     if (this.props.fetching) {
        //         return (
        //             <div className="b-blog-loader">
        //                 <img src="/images/Pacman-1s-200px.svg" alt="Loader" />
        //             </div>
        //         )
        //     }
        // }
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <ToastContainer autoClose={2000} draggable={false} hideProgressBar newestOnTop closeOnClick={true} />
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">
                        <HeroComponent></HeroComponent>
                        <section className="b-page-rooms">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="b-blog">
                                            {
                                                this.state.pageOfItems.map(data => (
                                                    <BlogItemComponent onAddLike={this.onAddLike} onAddReview={this.onAddReview} key={data.id} data={data}></BlogItemComponent>
                                                ))
                                            }
                                            <PaginationHome items={this.props.data} onChangePage={this.onChangePage}></PaginationHome>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="b-blog-left">
                                            <form className="b-form">
                                                <h2 className="b-text-title">
                                                    Newsletter
                                            </h2>
                                                <p className="b-text-norm">
                                                    Subscribe our newsletter gor get notification new updates.
                                            </p>
                                                <div className="b-form-control">
                                                    <input type="text" className="b-input" placeholder="Enter your email" />
                                                </div>
                                                <button className="b-btn waves-effect waves-teal">
                                                    Subscribe
                                            </button>
                                            </form>
                                            <div className="b-recent">
                                                <div className="b-heading">
                                                    <h2 className="b-text-title">
                                                        Recent News
                                                 </h2>
                                                </div>
                                                <div className="b-recent-list">
                                                    {
                                                        this.props.blogtop.map(data => (
                                                            <RecentComponent onAddReview={this.onAddReview} key={data.id} data={data} views="BLOG"></RecentComponent>
                                                        ))
                                                    }
                                                </div>
                                            </div>
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
                            </div>
                        </section>
                        <ContactComponent></ContactComponent>
                        <section className="b-page-read">
                            <div className="container">
                                <div className="b-block">
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p1.png" alt="true" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p2.png" alt="true" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p3.png" alt="true" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p4.png" alt="true" />
                                    </div>
                                    <div className="b-block-item">
                                        <img src="/images/core-img/p5.png" alt="true" />
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
                </div >
            </Page>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.blog.all,
        blog: state.blog.blog,
        blogtop: state.blog.blogtop,
        fetching: state.blog.fetching,
    }
}
export default connect(mapStateToProps, { requestAddLikes, requestAddViews, requestGetBlogHome, requestGetBlogTopDate })(BlogPage);