import React, { Component } from 'react';

class ProfileComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            avatar: ''
        }
    }
    onChangerFile = (event) => {
        this.props.onUploadImage(event.target.files[0]);
    }
    render() {
        const data = this.props.data;
        return (
            <section className="b-page-profile">
                <div className="container">
                    <div className="b-heading">
                        <div className="b-block-left">
                            <div className="b-images" style={{ backgroundImage: `url(http://127.0.0.1:8000${data.avatar})` }}>
                                <label className="b-btn text-center" htmlFor="avatar">
                                    <i className="fas fa-camera-retro" />
                                    Cập Nhật
                                </label>
                                <input type="file" name="avatar" id="avatar" className="b-hidden" onChange={this.onChangerFile} />
                            </div>
                        </div>
                        <div className="b-block-right">
                            <h2 className="b-text-name">
                                {data.username} <span className="b-current">
                                    {data.is_staff === 'true' ? "Admin" : "User"}
                                </span>
                            </h2>
                            <p className="b-text-norm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nostrum odio cum repellat
                                veniam eligendi rem cumque magnam autem delectus qui.
                            </p>
                            <h3 className="b-text-email">
                                {data.email}
                            </h3>
                        </div>
                    </div>
                    <div className="b-info">
                        <div className="h-header">
                            <h2 className="b-text-title">
                                Thông tin cá nhân
                            </h2>
                        </div>
                        <div className="b-content">
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Tên <span className="b-current">
                                        {data.last_name} {data.first_name}
                                    </span>
                                </h2>
                            </div>
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Company <span className="b-current">
                                        Simpleqode.com
                                </span>
                                </h2>
                            </div>
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Position <span className="b-current">
                                        Front-end developer
                                </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="b-community">
                        <div className="b-header">
                            <h2 className="b-text-title">
                                Community
                        </h2>
                        </div>
                        <div className="b-content">
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Name <span className="b-current">
                                        Trần Văn Phú
                                    </span>
                                </h2>
                            </div>
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Company <span className="b-current">
                                        Simpleqode.com
                                    </span>
                                </h2>
                            </div>
                            <div className="b-item">
                                <h2 className="b-text-title">
                                    Position <span className="b-current">
                                        Front-end developer
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProfileComponent;