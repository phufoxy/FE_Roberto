import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../../layouts/home';
import { ContactComponent, RecentComponent, TagComponent, InstagramComponent, HeroComponent, FormComment, CommentItemComponent } from '../../../../shared/home';
import { connect } from 'react-redux';
import { requestGetBlogHomeDetails, requestGetBlogTopDate, requestGetBlogAcountComment, requestAddComment } from '../../../../../actions/blog';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page  from 'react-page-loading';
const cookies = new Cookies();

class BlogDetailPage extends Component {
    componentDidMount() {
        this.props.requestGetBlogHomeDetails(this.props.match.params.blog);
        this.props.requestGetBlogTopDate();

    }
    convertHtmlToDraft = (data) => {
        const blocksFromHtml = htmlToDraft(data);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        return editorState
    }
    onComment = (data) => {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            toast.warning(`Vui Lòng Đăng Nhập Để được Bình Luận`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success-delete'
            });
        } else {
            this.props.requestAddComment(this.props.data.id, cookies.get('data'), data);
            this.props.requestGetBlogHomeDetails(this.props.match.params.blog);

        }

    }
    render() {
        const body = () => {
            if (this.props.data.details && this.props.data.details.constructor === Array && this.props.data.details.length !== 0) {
                return (
                    <p className="b-text-norm" dangerouslySetInnerHTML={{ __html: this.props.data.details[0].body }}>
                    </p>
                )
            }
        }
        const comment = () => {
            if (this.props.data.comments && this.props.data.comments.constructor === Array && this.props.data.comments.length !== 0) {
                return (
                    <CommentItemComponent data={this.props.data.comments} views="BLOG"></CommentItemComponent>
                )
            }
        }
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">
                        <ToastContainer autoClose={2000} draggable={false} hideProgressBar newestOnTop closeOnClick={true} />
                        <HeroComponent></HeroComponent>
                        <section className="b-page-rooms">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="b-blog-detail">
                                            <div className="b-blog-content">
                                                <div className="b-images" style={{ backgroundImage: `url(http://127.0.0.1:8000${this.props.data.images})` }}>
                                                </div>
                                                <div className="b-content">
                                                    {body()}
                                                </div>
                                                <div className="b-blog-footer">
                                                    <div className="b-block-left">
                                                        <div className="b-tags">
                                                            <div className="b-item">
                                                                <a href="/" className="b-link">Bed</a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link">Travel</a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link">Hotel</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="b-block-right">
                                                        <div className="b-shared">
                                                            <div className="b-item">
                                                                <p className="b-text-norm">
                                                                    Shared:
                                                            </p>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                                            </div>
                                                            <div className="b-item">
                                                                <a href="/" className="b-link"><i className="fab fa-facebook-f" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="b-comment">
                                                {comment()}
                                                <div className="b-leave-comment">
                                                    <div className="b-heading">
                                                        <h2 className="b-text-title">
                                                            Leave A Comment
                                                    </h2>
                                                    </div>
                                                    <FormComment views="BLOG" onComment={this.onComment}></FormComment>
                                                </div>
                                            </div>
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
        data: state.blog.detail,
        accoutBlog: state.blog.accoutBlog,
        blog: state.blog.blog,
        fetching: state.blog.fetching,
    }
}
export default connect(mapStateToProps, { requestAddComment, requestGetBlogAcountComment, requestGetBlogHomeDetails, requestGetBlogTopDate })(BlogDetailPage);