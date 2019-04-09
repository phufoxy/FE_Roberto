import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, BannerComponent, AboutComponent, ServiceComponent, KingComponent, TestimonialsComponent, FeatureComponent, BlogComponent } from '../../../shared/home';
import { connect } from 'react-redux';
import { requestGetSliderBanner } from '../../../../actions/tour';
class IndexPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [
                { id: '1', title: 'Transportion', src: './images/core-img/icon-1.png' },
                { id: '2', title: 'Transportion', src: './images/core-img/icon-2.png' },
                { id: '3', title: 'Transportion', src: './images/core-img/icon-3.png' },
                { id: '4', title: 'Transportion', src: './images/core-img/icon-4.png' },
                { id: '5', title: 'Transportion', src: './images/core-img/icon-1.png' }
            ]
        }
    }
    componentDidMount() {
        this.props.requestGetSliderBanner();
    }

    render() {
        return (
            <div className="wrapper">
                <HeaderLayout></HeaderLayout>
                <MenuLayout></MenuLayout>
                <BannerComponent data={this.props.slider}></BannerComponent>
                <main className="b-page-main">
                    <AboutComponent></AboutComponent>
                    <section className="b-page-service">
                        <div className="container">
                            <div className="b-block wow fadeInUp">
                                {this.state.service.map(data => (
                                    <ServiceComponent key={data.id} data={data}></ServiceComponent>
                                ))}
                            </div>
                        </div>
                    </section>
                    <KingComponent></KingComponent>
                    <TestimonialsComponent></TestimonialsComponent>
                    <FeatureComponent></FeatureComponent>
                    <BlogComponent></BlogComponent>
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
    return {
        slider: state.tour.slider,
        fetching: state.tour.fetching,
    }
}
export default connect(mapStateToProps, { requestGetSliderBanner })(IndexPage);