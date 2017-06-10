import React, { Component } from 'react';
import './pageTitle.css';
import logo from "../../../../public/logo.png";

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.props.pageTitleChange(event);
    }

    render() {
        return (
            <div className="page-title">
                <img className="logo" src={logo} alt="logo"/>
                <span className="key">医院编号</span>
                <input className="value" type="text" name="hospital-no" onChange={this.handleInputChange}/>

                <span className="key">医生编号</span>
                <input className="value" type="text" name="doctor-no" onChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default PageTitle;
