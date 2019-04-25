import React, { Component } from 'react';

class AboutComponent extends Component {
    render() {
        return (
            <section className="b-page-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="b-about wow fadeInUp">
                                <h3 className="b-text-name">
                                    GIỚI THIỆU VỀ CHÚNG TÔI
                                    </h3>
                                <h2 className="b-text-title">
                                    XIN CHÀO, Chúng tôi là Roberto
                                    </h2>
                                <p className="b-text-norm">
                                    Chúng tôi là trang web chuyên cung cấp tour du lịch và đặt tour.Trang web chúng tôi đã hoạt động được hơn 1 năm. Và được người dùng tin cậy.
                                    </p>
                                <p className="b-text-norm">
                                    Người Sáng Lập: <span className="is-current"> Trần Văn Phú </span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="b-block">
                                <div className="b-block-left wow fadeInUp">
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/1.jpg")' }}>
                                    </div>
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/2.jpg")' }}>
                                    </div>
                                </div>
                                <div className="b-block-right">
                                    <div className="b-images" style={{ backgroundImage: 'url("./images/bg-img/3.jpg")' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutComponent;