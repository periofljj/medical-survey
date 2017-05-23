import React, { Component } from 'react';
import './PageTitle.css';
var DateTimeField = require('react-bootstrap-datetimepicker');

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionOneChange(event);
    }
    render() {
        return (
            <div className="page-title">
                <span>在完成此部分前，请先阅读前面的简介</span>
                <div className="finished-time">
                	<span>问卷完成日期(年/月/日)</span>
                    <DateTimeField />
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default PageTitle;
