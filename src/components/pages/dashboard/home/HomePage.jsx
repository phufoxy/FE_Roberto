import React, { Component } from 'react';
import { SideBar, HeaderLayout, FooterLayout } from '../../../layouts/dashboard';
import { HeaderComponent, CardCompnent } from '../../../shared/dashboard';
import { connect } from 'react-redux';
import { requestCountPlace } from '../../../../actions/place';
import { requestCountHouse } from '../../../../actions/house';
import { requestCountRestaurant } from '../../../../actions/restaurant';
import { requestExistToken, requestLogout } from '../../../../actions/login';
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
// import loadjs from 'loadjs';
class HomePage extends Component {
    componentDidMount() {
        this.props.requestCountPlace();
        this.props.requestCountHouse();
        this.props.requestCountRestaurant();
    }
    onLogout() {
        this.props.requestLogout();
    }
    render() {
        if (typeof (cookies.get('token')) === 'undefined' && this.props.exists === false) {
            return (
                <Redirect to="/login" />
            )
        }
        return (
            <div className="b-wrapper">
                <HeaderLayout></HeaderLayout>
                <main className="b-dashboard-main">
                    <div className="b-dashboard">
                        <div className="b-block-left">
                            <SideBar onLogout={this.onLogout}></SideBar>
                        </div>
                        <div className="b-block-right">
                            <HeaderComponent></HeaderComponent>
                            <CardCompnent countPlace={this.props.countPlace} countHouse={this.props.countHouse} countRestaurant={this.props.countRestaurant}></CardCompnent>
                            <FooterLayout></FooterLayout>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        countPlace: state.place.count,
        countHouse: state.house.count,
        countRestaurant: state.restaurant.count,
        exists: state.login.exists

    }
}
export default connect(mapStateToProps, { requestCountRestaurant, requestCountHouse, requestCountPlace, requestExistToken, requestLogout })(HomePage);