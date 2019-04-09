import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, RecentComponent, BlogItemComponent, TagComponent, InstagramComponent } from '../../../shared/home';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { requestGetBlogHome, requestGetBlogTopDate } from '../../../../actions/blog';
import PaginationHome from '../../../function/pagination/PaginationHome'
class BlogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {
        this.props.requestGetBlogHome();
        this.props.requestGetBlogTopDate();
    }
    render() {
        const loading = () => {
            if (this.props.fetching) {
                return (
                    <div className="b-blog-loader">
                        <img src="/images/Pacman-1s-200px.svg" alt="Loader" />
                    </div>
                )
            }
        }
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-page-main">
                    <section className="b-page-hero" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }} data-paroller-factor="0.8" data-paroller-factor-xs="0.2">
                        <div className="b-content">
                            <h2 className="b-text-title wow fadeInDown">
                                Our Blog
                            </h2>
                            <p className="b-text-norm wow fadeInDown">
                                <Link to="/" className="b-link">Home</Link> <span className="is-current"> Blog</span>
                            </p>
                        </div>
                    </section>
                    <section className="b-page-rooms">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="b-blog">
                                        {loading()}
                                        {
                                            this.state.pageOfItems.map(data => (
                                                <BlogItemComponent key={data.id} data={data}></BlogItemComponent>
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
                                                    this.props.blog.map(data => (
                                                        <RecentComponent key={data.id} data={data}></RecentComponent>
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
                <FooterLayout></FooterLayout>
            </div >
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.blog.all,
        blog: state.blog.blog,
        fetching: state.blog.fetching,
    }
}
export default connect(mapStateToProps, { requestGetBlogHome, requestGetBlogTopDate })(BlogPage);