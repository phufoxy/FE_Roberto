import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../../layouts/home';
import { ContactComponent, RecentComponent, TagComponent, InstagramComponent } from '../../../../shared/home';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestGetBlogHomeDetails, requestGetBlogTopDate } from '../../../../../actions/blog';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
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
    render() {
        const body = () => {
            if (this.props.data.details && this.props.data.details.constructor === Array && this.props.data.details.length !== 0) {
                return (
                    <p className="b-text-norm" dangerouslySetInnerHTML={{ __html: this.props.data.details[0].body }}>
                    </p>
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
                                            <div className="b-total-comnent">
                                                <h3 className="b-text-total">
                                                    02 Comments
                                                </h3>
                                            </div>
                                            <div className="b-list-comment">
                                                <div className="b-comment-item">
                                                    <div className="b-comment-main">
                                                        <div className="b-images">
                                                            <div className="b-icon" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }}>
                                                            </div>
                                                        </div>
                                                        <div className="b-content">
                                                            <h3 className="b-text-time">
                                                                27 AUG 2016
                                                            </h3>
                                                            <h2 className="b-text-title">
                                                                Brandon Kelley
                                                            </h2>
                                                            <p className="b-text-norm">
                                                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                                consectetur, adipisci velit, sed quia non numquam eius modi.
                                                            </p>
                                                            <div className="b-button">
                                                                <div className="b-button-item">
                                                                    <button className="b-btn">
                                                                        LIKE
                                                                    </button>
                                                                </div>
                                                                <div className="b-button-item">
                                                                    <button className="b-btn">
                                                                        REPLY
                      </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="b-comment-extra">
                                                        <div className="b-comment-main">
                                                            <div className="b-images">
                                                                <div className="b-icon" style={{ backgroundImage: 'url("../../images/bg-img/1.jpg")' }}>
                                                                </div>
                                                            </div>
                                                            <div className="b-content">
                                                                <h3 className="b-text-time">
                                                                    27 AUG 2016
                    </h3>
                                                                <h2 className="b-text-title">
                                                                    Brandon Kelley
                    </h2>
                                                                <p className="b-text-norm">
                                                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                                                    amet,
                                                                    consectetur, adipisci velit, sed quia non numquam eius modi.
                    </p>
                                                                <div className="b-button">
                                                                    <div className="b-button-item">
                                                                        <button className="b-btn">
                                                                            LIKE
                        </button>
                                                                    </div>
                                                                    <div className="b-button-item">
                                                                        <button className="b-btn">
                                                                            REPLY
                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="b-leave-comment">
                                                <div className="b-heading">
                                                    <h2 className="b-text-title">
                                                        Leave A Comment
                                                    </h2>
                                                </div>
                                                <form className="b-form">
                                                    <div className="b-form-group">
                                                        <input type="text" className="b-input" placeholder="Your Name" />
                                                    </div>
                                                    <div className="b-form-group">
                                                        <input type="text" className="b-input" placeholder="Your Name" />
                                                    </div>
                                                    <div className="b-form-group">
                                                        <input type="text" className="b-input" placeholder="Your Name" />
                                                    </div>
                                                    <div className="b-form-group">
                                                        <input type="text" className="b-input" placeholder="Your Name" />
                                                    </div>
                                                    <button className="b-btn waves-effect waves-teal">Post Comment</button>
                                                </form>
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
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.blog.detail,
        blog: state.blog.blog,
        fetching: state.blog.fetching,
    }
}
export default connect(mapStateToProps, { requestGetBlogHomeDetails, requestGetBlogTopDate })(BlogDetailPage);