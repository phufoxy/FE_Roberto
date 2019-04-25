import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent } from '../../../shared/home';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestAddFeedBack } from '../../../../actions/blog';
import Cookies from 'universal-cookie';
import { ToastContainer } from 'react-toastify';
import Page from 'react-page-loading';
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const cookies = new Cookies();
class ContactPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: '',
            body: '',
            title: '',
            formErrors: { email: '', body: '' },
            emailValid: false,
            bodyValid: false,
            login: false

        }
    }
    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let bodyValid = this.state.bodyValid;

        switch (fieldName) {
            case "email":
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' Your email is incorrect';
                break;
            case "body":
                bodyValid = value.length >= 6;
                fieldValidationErrors.body = bodyValid ? '' : ' Please enter long text on 6';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            bodyValid: bodyValid
        }, this.validateForm);
    }
    validateForm = () => {
        if (this.state.emailValid && this.state.bodyValid) {
            this.setState({ formValid: this.state.emailValid && this.state.bodyValid })
        }
    }
    onChanger = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            this.setState({
                login: !this.state.login
            })
        } else {
            this.props.requestAddFeedBack(this.state, cookies.get('data').id);
            this.onReset();
        }
    }
    onReset = () => {
        this.setState({
            email: '',
            body: ''
        })
    }
    render() {
        if (this.state.login) {
            return (
                <Redirect to='/login'></Redirect>
            )
        }
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <ToastContainer autoClose={5000} draggable={false} />
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
                        <section className="b-contact-us  text-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading">
                                            <h3 className="b-text-name">
                                                CONTACT US
                                        </h3>
                                            <h2 className="b-text-title">
                                                Leave Message
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <form className="b-form" onSubmit={this.onSubmit}>
                                        <div className="b-group">
                                            <div className="b-form-group">
                                                <input type="text" name="email" className="b-input" placeholder="Enter Email" onChange={this.onChanger} value={this.state.email} />
                                                <span className={this.state.formErrors.email ? 'b-note' : ''}>
                                                    {this.state.formErrors.email}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <input type="text" name="title" className="b-input" placeholder="Enter Title" onChange={this.onChanger} />
                                            </div>
                                        </div>
                                        <div className="b-form-group">
                                            <input type="text" name="body" className="b-input" placeholder="Enter Body" onChange={this.onChanger} value={this.state.body} />
                                            <span className={this.state.formErrors.body ? 'b-note' : ''}>
                                                {this.state.formErrors.body}
                                            </span>
                                        </div>
                                        <button disabled={!this.state.formValid} className="b-btn waves-effect waves-teal">Send Mesage</button>
                                    </form>
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
            </Page>
        );
    }
}

function mapStateToProps(state) {
    return {
        feedback: state.blog.feedback,
    }
}
export default connect(mapStateToProps, { requestAddFeedBack })(ContactPage);