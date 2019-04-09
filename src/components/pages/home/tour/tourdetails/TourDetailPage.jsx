import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../../layouts/home';
import { ContactComponent, SliderDetailComponent } from '../../../../shared/home';
import { connect } from 'react-redux';
import { requestGetTourDetailHome } from '../../../../../actions/tour';
class TourDetailPage extends Component {
    
    componentDidMount() {
        this.props.requestGetTourDetailHome(this.props.match.params.tour);
    }
    render() {
        const Slider = () => {
            if (this.props.data.images_details && this.props.data.images_details.constructor === Array && this.props.data.images_details.length !== 0) {
                return (
                    <SliderDetailComponent data={this.props.data.images_details}></SliderDetailComponent>
                )
            }
        }
        const body = () => {
            if (this.props.data.details && this.props.data.details.constructor === Array && this.props.data.details.length !== 0) {
                return (
                    <div className="b-content" dangerouslySetInnerHTML={{ __html: this.props.data.details[0].body }}>
                    </div>
                )
            }
        }
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <main className="b-page-main">
                    <section className="b-page-hero" style={{ backgroundImage: 'url("/images/bg-img/1.jpg")' }} data-paroller-factor="0.8" data-paroller-factor-xs="0.2">
                        <div className="b-block">
                            <div className="b-block-left">
                                <h2 className="b-text-title">
                                    Room View Sea
                                </h2>
                            </div>
                            <div className="b-block-right">
                                <h5 className="b-text-price">
                                    $180 / <span className="is-current">Per Night</span>
                                </h5>
                            </div>
                        </div>
                    </section>
                    <section className="b-page-room">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="b-room">
                                        {Slider()}
                                        <div className="b-information">
                                            <div className="b-item">
                                                <h3 className="b-text-name">
                                                    Price
                                                </h3>
                                                <p className="b-text-norm">
                                                    {this.props.data.price}$
                                                </p>
                                            </div>
                                            <div className="b-item">
                                                <h3 className="b-text-name">
                                                    Person
                                                </h3>
                                                <p className="b-text-norm">
                                                    {this.props.data.total}person
                                                </p>
                                            </div>
                                            <div className="b-item">
                                                <h3 className="b-text-name">
                                                    Date
                                                </h3>
                                                <p className="b-text-norm">
                                                    {this.props.data.date} Day
                                                </p>
                                            </div>
                                            <div className="b-item">
                                                <h3 className="b-text-name">
                                                    Location
                                                </h3>
                                                <p className="b-text-norm">
                                                   {this.props.data.location}
                                            </p>
                                            </div>
                                        </div>
                                        {body()}
                                        <div className="b-service">
                                            <div className="b-header">
                                                <h2 className="b-text-title">
                                                    Room Services
                                                </h2>
                                            </div>
                                            <div className="b-block">
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                    </p>
                                                </div>
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                    </p>
                                                </div>
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                </p>
                                                </div>
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                </p>
                                                </div>
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                    </p>
                                                </div>
                                                <div className="b-item">
                                                    <div className="b-images">
                                                        <img src="/images/core-img/icon1.png" alt="true" />
                                                    </div>
                                                    <p className="b-text-norm">
                                                        Air Conditioning
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b-review">
                                            <div className="b-header">
                                                <h2 className="b-text-title">
                                                    Room Review
                                                </h2>
                                            </div>
                                            <div className="b-block">
                                                <div className="b-block-item">
                                                    <div className="b-images">
                                                        <div className="b-icon" style={{ backgroundImage: 'url("/images/bg-img/10.jpg")' }}>
                                                        </div>
                                                    </div>
                                                    <div className="b-content">
                                                        <h4 className="b-text-time">
                                                            27 Aug 2019
                                                        </h4>
                                                        <h3 className="b-text-name">
                                                            Brandon Kelley
                                                        </h3>
                                                        <p className="b-text-norm">
                                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                                                        </p>
                                                    </div>
                                                    <div className="b-star">
                                                        <ul className="b-list-item">
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="b-block-item">
                                                    <div className="b-images">
                                                        <div className="b-icon" style={{ backgroundImage: 'url("/images/bg-img/10.jpg")' }}>
                                                        </div>
                                                    </div>
                                                    <div className="b-content">
                                                        <h4 className="b-text-time">
                                                            27 Aug 2019
                                                        </h4>
                                                        <h3 className="b-text-name">
                                                            Brandon Kelley
                                                        </h3>
                                                        <p className="b-text-norm">
                                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                                                        </p>
                                                    </div>
                                                    <div className="b-star">
                                                        <ul className="b-list-item">
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="b-block-item">
                                                    <div className="b-images">
                                                        <div className="b-icon" style={{ backgroundImage: 'url("/images/bg-img/10.jpg")' }}>
                                                        </div>
                                                    </div>
                                                    <div className="b-content">
                                                        <h4 className="b-text-time">
                                                            27 Aug 2019
                                                        </h4>
                                                        <h3 className="b-text-name">
                                                            Brandon Kelley
                                                        </h3>
                                                        <p className="b-text-norm">
                                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                                            consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                                                        </p>
                                                    </div>
                                                    <div className="b-star">
                                                        <ul className="b-list-item">
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                            <li className="b-item">
                                                                <i className="fas fa-star" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                    <img src="/images/core-img/p1.png" alt="images" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p2.png" alt="images" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p3.png" alt="images" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p4.png" alt="images" />
                                </div>
                                <div className="b-block-item">
                                    <img src="/images/core-img/p5.png" alt="images" />
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
        data: state.tour.tour,
        fecthing: state.tour.fetching
    }
}
export default connect(mapStateToProps, { requestGetTourDetailHome })(TourDetailPage);