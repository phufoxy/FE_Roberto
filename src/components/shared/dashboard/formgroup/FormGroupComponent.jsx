import React, { Component } from 'react';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import axios from 'axios';
import { Editor } from 'react-draft-wysiwyg';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const initialState = {
    id: '',
    name: '',
    city: '',
    content: '',
    address: '',
    type: '',
    price: '',
    review: '',
    images: ''
};
class FormGroupComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            id: this.props.dataEdit && this.props.dataEdit.id ? this.props.dataEdit.id : '',
            name: this.props.dataEdit && this.props.dataEdit.name ? this.props.dataEdit.name : '',
            city: this.props.dataEdit && this.props.dataEdit.city ? this.props.dataEdit.city : '',
            content: this.props.dataEdit && this.props.dataEdit.content ? this.props.dataEdit.content : '',
            address: this.props.dataEdit && this.props.dataEdit.address ? this.props.dataEdit.address : '',
            type: this.props.dataEdit && this.props.dataEdit.type ? this.props.dataEdit.type : '',
            price: this.props.dataEdit && this.props.dataEdit.price ? this.props.dataEdit.price : '',
            review: this.props.dataEdit && this.props.dataEdit.review ? this.props.dataEdit.review : '',
            images: '',
            username: this.props.dataEdit && this.props.dataEdit.username ? this.props.dataEdit.username : '',
            password: this.props.dataEdit && this.props.dataEdit.password ? this.props.dataEdit.password : '',
            is_active: this.props.dataEdit && this.props.dataEdit.is_active ? this.props.dataEdit.is_active : false,
            is_staff: this.props.dataEdit && this.props.dataEdit.is_staff ? this.props.dataEdit.is_staff : false,
            is_superuser: this.props.dataEdit && this.props.dataEdit.is_superuser ? this.props.dataEdit.is_superuser : false,
            email: this.props.dataEdit && this.props.dataEdit.email ? this.props.dataEdit.email : '',
            last_name: this.props.dataEdit && this.props.dataEdit.last_name ? this.props.dataEdit.last_name : '',
            first_name: this.props.dataEdit && this.props.dataEdit.first_name ? this.props.dataEdit.first_name : '',
            type_tour: this.props.dataEdit && this.props.dataEdit.type_tour ? this.props.dataEdit.type_tour : '',
            date: this.props.dataEdit && this.props.dataEdit.date ? this.props.dataEdit.date : '',
            location: this.props.dataEdit && this.props.dataEdit.location ? this.props.dataEdit.location : '',
            total: this.props.dataEdit && this.props.dataEdit.total ? this.props.dataEdit.total : '',
            editorState: this.props.dataEdit && this.props.dataEdit.body ? this.convertHtmlToDraft(this.props.dataEdit.body) : EditorState.createEmpty(),
            body: this.props.dataEdit && this.props.dataEdit.body ? this.props.dataEdit.body : '',
            title: this.props.dataEdit && this.props.dataEdit.title ? this.props.dataEdit.title : '',
            tour: this.props.dataEdit && this.props.dataEdit.tour ? this.props.dataEdit.tour : '',
            blog: this.props.dataEdit && this.props.dataEdit.blog ? this.props.dataEdit.blog : '',
            person: this.props.dataEdit && this.props.dataEdit.person ? this.props.dataEdit.person : '',
            is_check: this.props.dataEdit && this.props.dataEdit.is_check ? this.props.dataEdit.is_check : false,
            is_sale: this.props.dataEdit && this.props.dataEdit.is_sale ? this.props.dataEdit.is_sale : false,
            formErrors: { name: '', price: '', total: '', email: '', title: '' },
            nameValid: false,
            titleValid: false,
            priceValid: false,
            totalValid: false,
            emailValid: false,
            date_start: this.props.dataEdit && this.props.dataEdit.date_start ? this.props.dataEdit.date_start : '',

        }
    }
    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let priceValid = this.state.priceValid;
        let totalValid = this.state.totalValid;
        let emailValid = this.state.emailValid;
        let titleValid = this.state.titleValid;

        switch (fieldName) {
            case 'name':
                nameValid = value.length >= 6;
                fieldValidationErrors.name = nameValid ? '' : ' Please enter long text on 6';
                break;
            case "price":
                priceValid = value.match(`^[0-9]+$`);
                fieldValidationErrors.price = priceValid ? '' : 'Please enter the correct number';
                break;
            case "total":
                totalValid = value.match(`^[0-9]+$`);
                fieldValidationErrors.total = totalValid ? '' : 'Please enter the correct number';
                break;
            case "email":
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case "title":
                titleValid = value.length >= 6;
                fieldValidationErrors.title = titleValid ? '' : ' Please enter long text on 6';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            priceValid: priceValid,
            totalValid: totalValid,
            emailValid: emailValid,
            titleValid: titleValid,

        }, this.validateForm);
    }
    validateForm = () => {
        if (this.state.emailValid) {
            this.setState({ formValid: this.state.emailValid })
        } else if (this.state.nameValid && this.state.totalValid && this.state.priceValid) {
            this.setState({ formValid: this.state.nameValid && this.state.totalValid && this.state.priceValid });
        } else if (this.state.titleValid) {
            this.setState({ formValid: this.state.titleValid })

        }
    }
    onChanger = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState: editorState
        })
    };
    convertHtmlToDraft = (data) => {
        const blocksFromHtml = htmlToDraft(data);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        return editorState
    }
    onChangerFile = (event) => {
        this.setState({
            images: event.target.files[0]
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (this.props.edit) {
            this.props.onUpdate(this.state)
        } else {
            this.props.onAdd(this.state);
        }
    }
    onSwitch = () => {
        this.props.onSwitch("LIST");
    }
    onReset = () => {
        this.setState(initialState);
    }
    uploadImage = (file) => {
        let formData = new FormData();
        formData.append('images', file);
        return axios.request({
            method: 'POST',
            url: `http://127.0.0.1:8000/api/admin/image/`,
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
                        resolve({ data: { link: `http://127.0.0.1:8000${response.data.images}` } });
                    }
                );
            }
        }).catch(function (error) {
            console.log(error);
        })
    }
    render() {
        const mainContent = () => {
            switch (this.props.choice) {
                case "PLACE":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Basic Example
                                </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                    </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                        </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Type</label>
                                                <div className="b-form-input">
                                                    <select name="type" className="b-input" defaultValue={this.state.type} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="Núi">Núi</option>
                                                        <option value="Sông">Sông</option>
                                                        <option value="Biển">Biển</option>
                                                        <option value="Đảo">Đảo</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Name</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="name" placeholder="Name" className="b-input" onChange={this.onChanger} value={this.state.name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your name
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>City </label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="City" name="city" className="b-input" onChange={this.onChanger} value={this.state.city} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-city"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes City
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Address</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="Address" name="address" className="b-input" onChange={this.onChanger} value={this.state.address} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-map-pin"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Review</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="Review" name="review" className="b-input" onChange={this.onChanger} value={this.state.review} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-street-view"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Price</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="Email" name="price" className="b-input" onChange={this.onChanger} value={this.state.price} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-invoice-dollar"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Content</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="Content" name="content" className="b-input" onChange={this.onChanger} value={this.state.content} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Images</label>
                                                <div className="b-form-input">
                                                    <input type="file" placeholder="Content" name="images" className="b-input" onChange={this.onChangerFile} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                        </span>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                            </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                            </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "USER":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            User Form
                                        </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                            </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                                </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Superuser</label>
                                                <div className="b-form-input">
                                                    <select name="is_superuser" className="b-input" defaultValue={this.state.is_superuser} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="true">true</option>
                                                        <option value="false">false</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Username</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="username" placeholder="Username" className="b-input" onChange={this.onChanger} value={this.state.username} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your name
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Password </label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="password" name="password" className="b-input" onChange={this.onChanger} value={this.state.password} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-city"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes City
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>LastName</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="last_name" name="last_name" className="b-input" onChange={this.onChanger} value={this.state.last_name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-map-pin"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>First Name</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="first_name" name="first_name" className="b-input" onChange={this.onChanger} value={this.state.first_name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-street-view"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Is Staff</label>
                                                <div className="b-form-input">
                                                    <select name="is_staff" className="b-input" defaultValue={this.state.is_staff} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="true">true</option>
                                                        <option value="false">false</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-invoice-dollar"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Is Active</label>
                                                <div className="b-form-input">
                                                    <select name="is_active" className="b-input" defaultValue={this.state.is_active} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="true">true</option>
                                                        <option value="false">false</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Email</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="Email" name="email" className="b-input" onChange={this.onChanger} value={this.state.email} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication is-current">
                                                    {this.state.formErrors.email}
                                                </span>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" disabled={!this.state.formValid} className="b-btn waves-effect waves-teal">
                                                    Submit
                                                </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "TOUR":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Basic Example
                                        </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                            </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                    </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Type</label>
                                                <div className="b-form-input">
                                                    <select name="type_tour" className="b-input" defaultValue={this.state.type_tour} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="Nước Ngoài">Nước Ngoài</option>
                                                        <option value="Trong Nước">Trong Nước</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                        </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Name</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="name" placeholder="Name" className="b-input" onChange={this.onChanger} value={this.state.name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className={this.state.formErrors.name ? "is-notication is-current" : "is-notication"} >
                                                    {this.state.formErrors.name}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Price </label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="price" name="price" className="b-input" onChange={this.onChanger} value={this.state.price} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-city"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication is-current">
                                                    {this.state.formErrors.price}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>total</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="total" name="total" className="b-input" onChange={this.onChanger} value={this.state.total} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-map-pin"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication is-current">
                                                    {this.state.formErrors.total}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>date</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" placeholder="date" name="date" className="b-input" onChange={this.onChanger} value={this.state.date} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-street-view"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                    </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>location</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="location" name="location" className="b-input" onChange={this.onChanger} value={this.state.location} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-invoice-dollar"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>

                                            <div className="b-form-group">
                                                <label>Images</label>
                                                <div className="b-form-input">
                                                    <input type="file" placeholder="Content" name="images" className="b-input" onChange={this.onChangerFile} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Date Start</label>
                                                <div className="b-form-input">
                                                    <input type="date" placeholder="Content" name="date_start" className="b-input" onChange={this.onChanger} value={this.state.date_start} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Sale</label>
                                                <div className="b-form-input is-right">
                                                    <select className="b-input" name="is_sale" defaultValue={this.state.is_sale} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="false">false</option>
                                                        <option value="true">true</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                        </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                        </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "TOUR_DETAIL":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Basic Example
                                        </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                        </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                                </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Tour</label>
                                                <div className="b-form-input">
                                                    <select name="tour" className="b-input" defaultValue={this.state.tour} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {
                                                            this.props.tour.map(data => (
                                                                <option key={data.id} value={data.id}>{data.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Title</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="title" placeholder="Title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your name
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Body</label>
                                                <div className="b-form-input is-right">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="b-input"
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
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                                </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "TOUR_IMAGES":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Basic Example
                                    </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                    </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                            </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Tour</label>
                                                <div className="b-form-input">
                                                    <select name="tour" className="b-input" defaultValue={this.state.tour} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {
                                                            this.props.tour.map(data => (
                                                                <option key={data.id} value={data.id}>{data.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Name</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="name" placeholder="Name" className="b-input" onChange={this.onChanger} value={this.state.name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your name
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Images</label>
                                                <div className="b-form-input is-right">
                                                    <input type="file" name="images" placeholder="Title" className="b-input" onChange={this.onChangerFile} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                            </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                            </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "BLOG":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Blog Form
                                        </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                    </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>

                                            <div className="b-form-group">
                                                <label>Title</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="title" placeholder="Enter Title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication is-current">
                                                    {this.state.formErrors.title}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Date </label>
                                                <div className="b-form-input is-right">
                                                    <input type="date" placeholder="date" name="date" className="b-input" onChange={this.onChanger} value={this.state.date} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-city"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes City
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Content</label>
                                                <div className="b-form-input">
                                                    <input type="text" placeholder="Content" name="content" className="b-input" onChange={this.onChanger} value={this.state.content} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-map-pin"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Images</label>
                                                <div className="b-form-input">
                                                    <input type="file" placeholder="Content" name="images" className="b-input" onChange={this.onChangerFile} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" disabled={!this.state.formValid} className="b-btn waves-effect waves-teal">
                                                    Submit
                                                </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "BLOG_DETAILS":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Basic Example
                                    </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                    </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                            </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Tour</label>
                                                <div className="b-form-input">
                                                    <select name="blog" className="b-input" defaultValue={this.state.blog} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {
                                                            this.props.blog.map(data => (
                                                                <option key={data.id} value={data.id}>{data.title}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Title</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="title" placeholder="Title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your name
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Body</label>
                                                <div className="b-form-input is-right">
                                                    <Editor
                                                        // readOnly={false}
                                                        editorState={this.state.editorState}
                                                        onEditorStateChange={this.onEditorStateChange}
                                                        wrapperClassName="b-input"
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
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                            </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                            </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "TOUR_BOOK":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Book Tour Example
                                        </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                            </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                        </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Tour</label>
                                                <div className="b-form-input">
                                                    <select name="tour" className="b-input" defaultValue={this.state.tour} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        {
                                                            this.props.tour.map(data => (
                                                                <option key={data.id} value={data.id}>{data.name}</option>
                                                            ))
                                                        }
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Price</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="price" placeholder="Price" className="b-input" onChange={this.onChanger} value={this.state.price} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className={this.state.formErrors.price ? 'is-notication is-current' : 'is-notication'}>
                                                    {this.state.formErrors.price}
                                                </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Person</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="person" placeholder="Title" className="b-input" onChange={this.onChanger} value={this.state.person} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-group">
                                                <label>Date</label>
                                                <div className="b-form-input is-right">
                                                    <input type="date" name="date" placeholder="Date" className="b-input" onChange={this.onChanger} value={this.state.date} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                        </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                        </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "FEEDBACK":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            FeedBack  Example
                                    </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                        </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                    </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>Email</label>
                                                <div className="b-form-input">
                                                    <input type="text" name="email" placeholder="Email" className="b-input" onChange={this.onChanger} value={this.state.email} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Title</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="title" placeholder="Title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Body</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="body" placeholder="Body" className="b-input" onChange={this.onChanger} value={this.state.body} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="b-form-group">
                                                <label>Check</label>
                                                <div className="b-form-input is-right">
                                                    <select className="b-input" name="is_check" defaultValue={this.state.is_check} onChange={this.onChanger}>
                                                        <option value="DEFAULT" disabled>Choose</option>
                                                        <option value="false">false</option>
                                                        <option value="true">true</option>
                                                    </select>
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                                </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                case "SLIDER":
                    return (
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="b-form-basic">
                                    <div className="b-heading">
                                        <h2 className="b-text-title">
                                            Slider  Example
                                    </h2>
                                        <div className="b-prev">
                                            <button className="b-btn" onClick={this.onSwitch}>
                                                <i className="fas fa-hand-point-left"></i> Prev
                                        </button>
                                        </div>
                                    </div>
                                    <div className="b-form-content">
                                        <div className="b-notication">
                                            <div className="b-icon">
                                                <i className="fas fa-exclamation-triangle"></i>
                                            </div>
                                            <div className="b-info">
                                                <p className="b-text-norm">
                                                    Use any icon in input group from Flaticon, Fontawesome 5, Lineawesome or
                                                    Socicons icons.
                                    </p>
                                            </div>
                                        </div>
                                        <form className="b-form" onSubmit={this.onSubmit}>
                                            <div className="b-form-group">
                                                <label>name</label>
                                                <div className="b-form-input">
                                                    <input type="text" name="name" placeholder="Name" className="b-input" onChange={this.onChanger} value={this.state.name} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-signature"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Title</label>
                                                <div className="b-form-input is-right">
                                                    <input type="text" name="title" placeholder="Title" className="b-input" onChange={this.onChanger} value={this.state.title} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-file-alt"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Please enter your type tour
                                            </span>
                                            </div>
                                            <div className="b-form-group">
                                                <label>Images</label>
                                                <div className="b-form-input">
                                                    <input type="file" placeholder="Image" name="images" className="b-input" onChange={this.onChangerFile} />
                                                    <div className="b-icon">
                                                        <i className="fas fa-question-circle"></i>
                                                    </div>
                                                </div>
                                                <span className="is-notication">
                                                    Some help content goes here
                                                </span>
                                            </div>
                                            <div className="b-form-submit">
                                                <button type="submit" className="b-btn waves-effect waves-teal">
                                                    Submit
                                                </button>
                                                <button type="Cancel" className="b-btn b-btn-cancel waves-effect waves-teal">
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                default:
                    return (<></>)
            }
        }
        return (
            mainContent()
        );
    }
}

export default FormGroupComponent;