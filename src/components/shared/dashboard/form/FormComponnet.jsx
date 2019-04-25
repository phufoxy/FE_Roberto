import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, ContentState } from 'draft-js';
import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class FormComponnet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : '',
            name: this.props.dataEdit && this.props.dataEdit.name ? this.props.dataEdit.name : '',
            city: this.props.dataEdit && this.props.dataEdit.city ? this.props.dataEdit.city : '',
            content: this.props.dataEdit && this.props.dataEdit.content ? this.props.dataEdit.content : '',
            address: this.props.dataEdit && this.props.dataEdit.address ? this.props.dataEdit.address : '',
            type: this.props.dataEdit && this.props.dataEdit.type ? this.props.dataEdit.type : '',
            price: this.props.dataEdit && this.props.dataEdit.price ? this.props.dataEdit.price : '',
            total: this.props.dataEdit && this.props.dataEdit.total ? this.props.dataEdit.total : '',
            date: this.props.dataEdit && this.props.dataEdit.date ? this.props.dataEdit.date : '',
            review: this.props.dataEdit && this.props.dataEdit.review ? this.props.dataEdit.review : '',
            place: this.props.dataEdit && this.props.dataEdit.place ? this.props.dataEdit.place : '',
            house: this.props.dataEdit && this.props.dataEdit.house ? this.props.dataEdit.house : '',
            tour: this.props.dataEdit && this.props.dataEdit.tour ? this.props.dataEdit.tour : '',
            restaurant: this.props.dataEdit && this.props.dataEdit.restaurant ? this.props.dataEdit.restaurant : '',
            title: this.props.dataEdit && this.props.dataEdit.title ? this.props.dataEdit.title : '',
            body: this.props.dataEdit && this.props.dataEdit.body ? this.props.dataEdit.body : '',
            editorState: this.props.dataEdit && this.props.dataEdit.body ? this.convertHtmlToDraft(this.props.dataEdit.body) : EditorState.createEmpty(),
            imageEditor: '',
            images: '',
            type_tour: this.props.dataEdit && this.props.dataEdit.type_tour ? this.props.dataEdit.type_tour : '',
            location: this.props.dataEdit && this.props.dataEdit.location ? this.props.dataEdit.location : '',
            blog: this.props.dataEdit && this.props.dataEdit.blog ? this.props.dataEdit.blog : '',
        }
        this.onChanger = this.onChanger.bind(this);
        this.onChangerFile = this.onChangerFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onClickChanger = this.onClickChanger.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    convertHtmlToDraft(data) {
        const blocksFromHtml = htmlToDraft(data);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        return editorState
    }
    onChangerFile(event) {
        this.setState({
            images: event.target.files[0]
        })
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState
        })
    };

    onSubmit(event) {
        event.preventDefault();
        if (this.props.edit) {
            this.props.onUpdate(this.state)
            this.resetState();
        } else {
            this.props.onAdd(this.state);
            this.resetState();
        }
    }
    onClickChanger() {
        this.resetState();
        this.props.switchViews('VIEW_CARD');
    }
    resetState() {
        this.setState({
            id: '',
            name: '',
            city: '',
            content: '',
            address: '',
            type: '',
            price: 0,
            review: 0,
            images: '',
            place: '',
            title: '',
            body: '',
            house: '',
            tour: '',
            restaurant: ''
        })
    }
    uploadImage(file) {
        let formData = new FormData();
        formData.append('images', file);
        return axios.request({
            method: 'POST',
            url: `https://fotour.herokuapp.com/api/admin/image/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(response => {
            if (response && response.data) {
                return new Promise(
                    (resolve, reject) => {
                        resolve({ data: { link: `https://fotour.herokuapp.com${response.data.images}` } });
                    }
                );
            }
        }).catch(function (error) {
            console.log(error);
        })
    }

    render() {
        const MainForm = () => {
            switch (this.props.choice) {
                case "PLACE":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                </h2>
                                        </div>
                                    </div>
                                </div>`
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="name" placeholder="Enter Name" onChange={this.onChanger} value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="city" placeholder="Enter city" onChange={this.onChanger} value={this.state.city} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-pager"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="address" placeholder="Enter address" onChange={this.onChanger} value={this.state.address} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-pager"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="type" placeholder="Enter type" onChange={this.onChanger} value={this.state.type} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-pager"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="price" placeholder="Enter price" onChange={this.onChanger} value={this.state.price} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-pager"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="review" placeholder="Enter review" onChange={this.onChanger} value={this.state.review} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-pager"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="content" placeholder="Enter content" onChange={this.onChanger} value={this.state.content} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-camera-retro"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="file" name="images" placeholder="Enter Name" onChange={this.onChangerFile} />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "SLIDER":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Slider
                            </h2>
                                        </div>
                                    </div>
                                </div>`
                            <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                            </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="name" placeholder="Enter Name" onChange={this.onChanger} value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-camera-retro"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="file" name="images" placeholder="Enter Name" onChange={this.onChangerFile} />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "TOUR":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Tour
                            </h2>
                                        </div>
                                    </div>
                                </div>`
                            <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                        </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="name" placeholder="Enter Name" onChange={this.onChanger} value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-money-bill-alt"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="price" placeholder="Enter price" onChange={this.onChanger} value={this.state.price} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-sort-numeric-up"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="total" placeholder="Enter total" onChange={this.onChanger} value={this.state.total} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="number" name="date" placeholder="Enter date" onChange={this.onChanger} value={this.state.date} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-camera-retro"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="file" name="images" placeholder="Enter Name" onChange={this.onChangerFile} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="type_tour" placeholder="Enter type_tour" onChange={this.onChanger} value={this.state.type_tour} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-clock"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="location" placeholder="Enter location" onChange={this.onChanger} value={this.state.location} />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                case "PLACE_DETAIL":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="place" onChange={this.onChanger} defaultValue={'DEFAULT'} >
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.place.map(data => (
                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor"
                                                        toolbar={{
                                                            inline: { inDropdown: true },
                                                            list: { inDropdown: true },
                                                            textAlign: { inDropdown: true },
                                                            link: { inDropdown: true },
                                                            history: { inDropdown: true },
                                                            image: {
                                                                className: undefined,
                                                                component: undefined,
                                                                popupClassName: undefined,
                                                                urlEnabled: true,
                                                                uploadEnabled: true,
                                                                alignmentEnabled: true,
                                                                uploadCallback: this.uploadImage,
                                                                previewImage: true,
                                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                                alt: { present: false, mandatory: false },
                                                                defaultSize: {
                                                                    height: '400px',
                                                                    width: '400px',
                                                                },
                                                            },
                                                            fontFamily: {
                                                                options: ['Roboto', 'Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
                                                                className: undefined,
                                                                component: undefined,
                                                                dropdownClassName: undefined,
                                                            },
                                                            fontSize: {
                                                                icon: "fontSize",
                                                                options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
                                                                className: undefined,
                                                                component: undefined,
                                                                dropdownClassName: undefined,
                                                            },

                                                        }}
                                                        mention={{
                                                            separator: ' ',
                                                            trigger: '@',
                                                            suggestions: [
                                                                { text: 'APPLE', value: 'apple', url: 'apple' },
                                                                { text: 'BANANA', value: 'banana', url: 'banana' },
                                                                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                                                { text: 'DURIAN', value: 'durian', url: 'durian' },
                                                                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                                                { text: 'FIG', value: 'fig', url: 'fig' },
                                                                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                                                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                                            ],
                                                        }}
                                                        hashtag={{
                                                            separator: ' ',
                                                            trigger: '#',
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "HOUSE_DETAIL":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                        </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="house" onChange={this.onChanger} defaultValue={'DEFAULT'}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.house.map(data => (
                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor"
                                                        toolbar={{
                                                            inline: { inDropdown: true },
                                                            list: { inDropdown: true },
                                                            textAlign: { inDropdown: true },
                                                            link: { inDropdown: true },
                                                            history: { inDropdown: true },
                                                            image: {
                                                                className: undefined,
                                                                component: undefined,
                                                                popupClassName: undefined,
                                                                urlEnabled: true,
                                                                uploadEnabled: true,
                                                                alignmentEnabled: true,
                                                                uploadCallback: this.uploadImage,
                                                                previewImage: true,
                                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                                alt: { present: false, mandatory: false },
                                                                defaultSize: {
                                                                    height: '200px',
                                                                    width: '200px',
                                                                },
                                                            }

                                                        }}
                                                        mention={{
                                                            separator: ' ',
                                                            trigger: '@',
                                                            suggestions: [
                                                                { text: 'APPLE', value: 'apple', url: 'apple' },
                                                                { text: 'BANANA', value: 'banana', url: 'banana' },
                                                                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                                                { text: 'DURIAN', value: 'durian', url: 'durian' },
                                                                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                                                { text: 'FIG', value: 'fig', url: 'fig' },
                                                                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                                                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                                            ],
                                                        }}
                                                        hashtag={{
                                                            separator: ' ',
                                                            trigger: '#',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "RESTAURANT_DETAIL":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                    </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="restaurant" onChange={this.onChanger} defaultValue={'DEFAULT'}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.restaurant.map(data => (
                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor"
                                                        toolbar={{
                                                            inline: { inDropdown: true },
                                                            list: { inDropdown: true },
                                                            textAlign: { inDropdown: true },
                                                            link: { inDropdown: true },
                                                            history: { inDropdown: true },
                                                            image: {
                                                                className: undefined,
                                                                component: undefined,
                                                                popupClassName: undefined,
                                                                urlEnabled: true,
                                                                uploadEnabled: true,
                                                                alignmentEnabled: true,
                                                                uploadCallback: this.uploadImage,
                                                                previewImage: true,
                                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                                alt: { present: false, mandatory: false },
                                                                defaultSize: {
                                                                    height: '200px',
                                                                    width: '200px',
                                                                },
                                                            }

                                                        }}
                                                        mention={{
                                                            separator: ' ',
                                                            trigger: '@',
                                                            suggestions: [
                                                                { text: 'APPLE', value: 'apple', url: 'apple' },
                                                                { text: 'BANANA', value: 'banana', url: 'banana' },
                                                                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                                                { text: 'DURIAN', value: 'durian', url: 'durian' },
                                                                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                                                { text: 'FIG', value: 'fig', url: 'fig' },
                                                                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                                                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                                            ],
                                                        }}
                                                        hashtag={{
                                                            separator: ' ',
                                                            trigger: '#',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "TOUR_DETAIL":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                    </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="tour" onChange={this.onChanger} defaultValue={'DEFAULT'}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.tour.map(data => (
                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor"
                                                        toolbar={{
                                                            inline: { inDropdown: true },
                                                            list: { inDropdown: true },
                                                            textAlign: { inDropdown: true },
                                                            link: { inDropdown: true },
                                                            history: { inDropdown: true },
                                                            image: {
                                                                className: undefined,
                                                                component: undefined,
                                                                popupClassName: undefined,
                                                                urlEnabled: true,
                                                                uploadEnabled: true,
                                                                alignmentEnabled: true,
                                                                uploadCallback: this.uploadImage,
                                                                previewImage: true,
                                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                                alt: { present: false, mandatory: false },
                                                                defaultSize: {
                                                                    height: '400px',
                                                                    width: '400px',
                                                                },
                                                            }

                                                        }}
                                                        mention={{
                                                            separator: ' ',
                                                            trigger: '@',
                                                            suggestions: [
                                                                { text: 'APPLE', value: 'apple', url: 'apple' },
                                                                { text: 'BANANA', value: 'banana', url: 'banana' },
                                                                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                                                { text: 'DURIAN', value: 'durian', url: 'durian' },
                                                                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                                                { text: 'FIG', value: 'fig', url: 'fig' },
                                                                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                                                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                                            ],
                                                        }}
                                                        hashtag={{
                                                            separator: ' ',
                                                            trigger: '#',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "BLOG_DETAIL":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                            </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="blog" onChange={this.onChanger} defaultValue={'DEFAULT'}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.blog.map(data => (
                                                            <option key={data.id} value={data.id}>{data.title}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="demo-wrapper"
                                                        editorClassName="demo-editor"
                                                        toolbar={{
                                                            inline: { inDropdown: true },
                                                            list: { inDropdown: true },
                                                            textAlign: { inDropdown: true },
                                                            link: { inDropdown: true },
                                                            history: { inDropdown: true },
                                                            image: {
                                                                className: undefined,
                                                                component: undefined,
                                                                popupClassName: undefined,
                                                                urlEnabled: true,
                                                                uploadEnabled: true,
                                                                alignmentEnabled: true,
                                                                uploadCallback: this.uploadImage,
                                                                previewImage: true,
                                                                inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                                alt: { present: false, mandatory: false },
                                                                defaultSize: {
                                                                    height: '200px',
                                                                    width: '200px',
                                                                },
                                                            }

                                                        }}
                                                        mention={{
                                                            separator: ' ',
                                                            trigger: '@',
                                                            suggestions: [
                                                                { text: 'APPLE', value: 'apple', url: 'apple' },
                                                                { text: 'BANANA', value: 'banana', url: 'banana' },
                                                                { text: 'CHERRY', value: 'cherry', url: 'cherry' },
                                                                { text: 'DURIAN', value: 'durian', url: 'durian' },
                                                                { text: 'EGGFRUIT', value: 'eggfruit', url: 'eggfruit' },
                                                                { text: 'FIG', value: 'fig', url: 'fig' },
                                                                { text: 'GRAPEFRUIT', value: 'grapefruit', url: 'grapefruit' },
                                                                { text: 'HONEYDEW', value: 'honeydew', url: 'honeydew' },
                                                            ],
                                                        }}
                                                        hashtag={{
                                                            separator: ' ',
                                                            trigger: '#',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "BLOG":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                            </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="title" placeholder="Enter title" onChange={this.onChanger} value={this.state.title} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="date" name="date" placeholder="Enter title" onChange={this.onChanger} value={this.state.date} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="file" name="images" placeholder="Enter File" onChange={this.onChangerFile} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="content" placeholder="Enter content" onChange={this.onChanger} value={this.state.content} />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                case "TOUR_IMAGES":
                    return (
                        <section className="b-setting">
                            <div className="b-fix-add">
                                <button className="b-btn waves-effect waves-teal" onClick={this.onClickChanger}>
                                    <i className="fas fa-table"></i>
                                </button>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3">
                                        <div className="b-heading text-center">
                                            <h2 className="b-text-title">
                                                Settings
                                        </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="b-block-form">
                                    <div className="b-header">
                                        <h2 className="b-text-title">
                                            Inputs
                                    </h2>
                                    </div>
                                    <div className="b-form-main text-center">
                                        <form onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-home"></i>
                                                </div>
                                                <div className="b-input">
                                                    <select name="tour" onChange={this.onChanger} defaultValue={'DEFAULT'}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {this.props.tour.map(data => (
                                                            <option key={data.id} value={data.id}>{data.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="text" name="name" placeholder="Enter name" onChange={this.onChanger} value={this.state.name} />
                                                </div>
                                            </div>
                                            <div className="b-form-group">
                                                <div className="b-icon">
                                                    <i className="fas fa-envelope"></i>
                                                </div>
                                                <div className="b-input">
                                                    <input type="file" name="images" placeholder="Enter File" onChange={this.onChangerFile} />
                                                </div>
                                            </div>
                                            <input type="submit" value="submit" />
                                        </form>
                                        <button className="b-btn waves-effect waves-teal">Reset</button>

                                    </div>
                                </div>
                            </div>
                        </section >
                    )
                default:
                    return (
                        <>
                            <h1>Error</h1>
                        </>
                    )
            }
        }
        return (
            MainForm()
        )
    }
}

export default FormComponnet;