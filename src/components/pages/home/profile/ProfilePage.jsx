import React, { Component } from 'react';
import { MenuLayout, HeaderLayout, FooterLayout } from '../../../layouts/home';
import { ProfileComponent } from '../../../shared/home';
import Page from 'react-page-loading';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { connect } from 'react-redux';
import { requestGetUserID, requestUpdateAvatar } from '../../../../actions/user';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();
class ProfilePage extends Component {

    componentDidMount() {
        this.onGetData();
        this.interval = setInterval(() => (
            this.onGetData()
        ), 20000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    onGetData = () => {
        this.props.requestGetUserID(this.props.match.params.username);

    }
    onUploadImage = (data) => {
        this.props.requestUpdateAvatar(data, this.props.user.username, this.props.match.params.username);
    }
    render() {
        if (cookies.get('data') === undefined && cookies.get('token') === undefined) {
            return (
                <Redirect to='/'></Redirect>
            )
        }
        const loading = () => {
            if (this.props.fetching) {
                return (
                    <h1>Loading ...</h1>
                )
            } else {
                return (
                    <ProfileComponent data={this.props.user} onUploadImage={this.onUploadImage}></ProfileComponent>
                )
            }
        }
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <ToastContainer autoClose={2000} draggable={false} hideProgressBar newestOnTop closeOnClick={true} />
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">
                        {loading()}
                    </main>
                    <FooterLayout></FooterLayout>
                </div>
            </Page>
        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.user.user,
        fetching: state.user.fetching,
        reviews: state.user.reviews,
    }
}
export default connect(mapStateToProps, { requestGetUserID, requestUpdateAvatar })(ProfilePage);