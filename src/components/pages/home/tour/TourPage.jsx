import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, TourItem } from '../../../shared/home';
import PaginationHome from '../../../function/pagination/PaginationHome';
import { requestGetTourHome } from '../../../../actions/tour';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class TourPage extends Component {
    constructor(props, context) {
        super(props, context);
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
        this.props.requestGetTourHome();
    }
    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-page-main">
                    <section
                        className="b-page-hero"
                        style={{
                            backgroundImage: 'url("./images/bg-img/1.jpg")'
                        }}
                        data-paroller-factor="0.8"
                        data-paroller-factor-xs="0.2">
                        <div className="b-content">
                            <h2 className="b-text-title wow fadeInDown">
                                Our Room
                            </h2>
                            <p className="b-text-norm wow fadeInDown">
                                <Link to="/" className="b-link">Home</Link>
                                <span className="is-current">
                                    Room</span>
                            </p>
                        </div>
                    </section>
                    <section className="b-page-rooms">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="b-rooms">
                                        {
                                            this.state.pageOfItems.map(data => (
                                                <TourItem key={data.id} data={data}></TourItem>
                                            ))
                                        }
                                        <PaginationHome items={this.props.data} onChangePage={this.onChangePage}></PaginationHome>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="b-form wow fadeInUp">
                                        <form className="b-form-content">
                                            <div className="b-form-group">
                                                <div className="b-header">
                                                    <h2 className="b-text-title">
                                                        Date
                                                    </h2>
                                                </div>
                                                <div className="b-content">
                                                    <input type="text" placeholder="name" />
                                                    <input type="text" placeholder="address" />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-header">
                                                    <h2 className="b-text-title">
                                                        Guests
                                                    </h2>
                                                </div>
                                                <div className="b-content">
                                                    <select name="name">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                    </select>
                                                    <select name="name">
                                                        <option value={1}>1</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <button type="submit" className="b-btn">Check Available</button>
                                            </div>
                                        </form>
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
                <FooterLayout></FooterLayout>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return { data: state.tour.all, fecthing: state.tour.fetching }
}
export default connect(mapStateToProps, { requestGetTourHome })(TourPage);