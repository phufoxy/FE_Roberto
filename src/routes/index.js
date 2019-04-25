import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FeedBackPage, BookTourPage, UserPage, TourImages, BlogDetailPage, BlogPage, SliderPage, TourDetailPage, TourPage, HomePage, PlacePage, PlaceDetailPage, HousePage, HouseDetailPage, RestaurantPage, RestaurantDetailPage } from '../components/pages/dashboard';
import { LoginPage, RegisterPage, ForgotPassword } from '../components/pages/login';
import { ProfilePage, ContactPage, AboutPage, IndexPage, TourPage as TourPageHome, TourDetailPage as TourDetailHome, BlogPage as BlogPageHome, BlogDetailPage as BlogDetailPageHome } from '../components/pages/home';
import ErrorPage from '../components/pages/error/ErrorPage';
const Routes = () => (
    <Switch>
        {/* {routesConfig.map(route => (
            <Route {...route} />
        ))} */}
        <Route path="/login" exact={true} component={LoginPage}></Route>
        <Route path="/register" exact={true} component={RegisterPage}></Route>
        <Route path="/forgot" exact={true} component={ForgotPassword}></Route>
        <Route path='/dashboard' exact={true} component={HomePage} />
        <Route path="/dashboard/place" exact={true} component={PlacePage} />
        <Route path="/dashboard/place/details" exact={true} component={PlaceDetailPage} />
        <Route path="/dashboard/house" exact={true} component={HouseDetailPage} />
        <Route path="/dashboard/house/details" exact={true} component={HousePage} />
        <Route path="/dashboard/restaurants" exact={true} component={RestaurantPage} />
        <Route path="/dashboard/restaurants/details" exact={true} component={RestaurantDetailPage} />
        <Route path="/dashboard/tour" exact={true} component={TourPage} />
        <Route path="/dashboard/tour/details" exact={true} component={TourDetailPage} />
        <Route path="/dashboard/tour/book" exact={true} component={BookTourPage} />
        <Route path="/dashboard/slider" exact={true} component={SliderPage} />
        <Route path="/dashboard/blog" exact={true} component={BlogPage} />
        <Route path="/dashboard/blog/details" exact={true} component={BlogDetailPage} />
        <Route path="/dashboard/tour/images" exact={true} component={TourImages} />
        <Route path="/dashboard/user/" exact={true} component={UserPage} />
        <Route path="/dashboard/feedback/" exact={true} component={FeedBackPage} />
        <Route path='/' exact={true} component={IndexPage} />
        <Route path='/tour' exact={true} component={TourPageHome} />
        <Route path='/tour/:tour' exact={false} component={TourDetailHome} />
        <Route path="/blog" exact={true} component={BlogPageHome}></Route>
        <Route path="/blog/:blog" exact={false} component={BlogDetailPageHome}></Route>
        <Route path="/about" exact={true} component={AboutPage}></Route>
        <Route path="/contact" exact={true} component={ContactPage}></Route>
        <Route path="/profile/:username" exact={true} component={ProfilePage}></Route>
        <Route component={ErrorPage} />
    </Switch >
);
export default Routes;