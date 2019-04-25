import React, { Component } from 'react';
import { HeaderLayout, MenuLayout, FooterLayout } from '../../../layouts/home';
import { ContactComponent, HeroComponent } from '../../../shared/home';
import { Parallax } from "react-parallax";
import ModalVideo from 'react-modal-video'
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import Page from 'react-page-loading';

class AboutPage extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isOpen: false
        }
    }
    openModal = () => {
        this.setState({ isOpen: true })
    }
    render() {
        return (
            <Page loader={"bubble"} color={"#1cc3b2"} size={4} duration={1}>
                <div className="wrapper">
                    <HeaderLayout></HeaderLayout>
                    <MenuLayout></MenuLayout>
                    <main className="b-page-main">

                        <HeroComponent title="Về Chúng Tôi" item="About"></HeroComponent>
                        <section className="b-page-experience">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="b-images" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="b-content">
                                            <h3 className="b-text-name">
                                                Giới Thiệu
                                        </h3>
                                            <h2 className="b-text-title">
                                                Với Kinh nghiệp 20 năm về làm du lịch
                                        </h2>
                                            <p className="b-text-norm">
                                                Trang web chúng tôi được kế thừa những sự kiện, những điều tốt đẹp của thế hệ trước. Chúng tối phá
                                                t triển lên tầm cao mới. Gần gũi với người dùng hơn .Thực tế và tiện lợi.
                                                Chúng tôi đầu tư những cơ sở vật chất mới nhất, nhưng công nghệ hiện đại ... đưa Roberto lên tầm cao mới.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ayxzlROT7NY' onClose={() => this.setState({ isOpen: false })} />
                        <Parallax bgImage={("./images/bg-img/10.jpg")} strength={500}>
                            <section className="b-our-hotel">
                                <div className="b-overload">
                                    <div className="b-content">
                                        <h3 className="b-text-name">
                                            Video giới thiệu về Roberto
                                    </h3>
                                        <h2 className="b-text-title">
                                            Vòng Quanh Thế Giới
                                    </h2>
                                        <div className="b-play">
                                            <button className="b-btn" onClick={this.openModal}><i className="fas fa-play" /></button>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Parallax>
                        <section className="b-page-ultimate">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h3 className="b-text-name">
                                                Những Thành Viên Của Trang Web
                                        </h3>
                                            <h2 className="b-text-title">
                                               Kinh Nghiệm và Điềm Tỉnh
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                            <div className="b-content">
                                                <h2 className="b-text-title">
                                                    Trần Văn Phú
                                            </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                            <div className="b-content">
                                                <h2 className="b-text-title">
                                                    Nguyễn Văn A
                                            </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="b-card" style={{ backgroundImage: 'url("../../images/bg-img/11.jpg")' }}>
                                            <div className="b-content">
                                                <h2 className="b-text-title">
                                                    Lê Văn Luyện
                                            </h2>
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
                </div >
            </Page>
        );
    }
}

export default AboutPage;