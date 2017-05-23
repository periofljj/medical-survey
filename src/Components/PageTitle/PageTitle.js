import React, { Component } from 'react';
import './PageTitle.css';
var DateTimeField = require('react-bootstrap-datetimepicker');
var moment = require('moment');

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.timeSelectOnChange = this.timeSelectOnChange.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionOneChange(event);
    }

    timeSelectOnChange(time) {
        var time = {
            name: "finished-time",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionOneChange(false, time);
    }


    render() {
        return (
            <div className="page-title">
                <span>在完成此部分前，请先阅读前面的简介</span>
                <div className="finished-time">
                	<span>问卷完成日期(年/月/日)</span>
                    <DateTimeField onChange={this.timeSelectOnChange1} inputFormat="YYYY-MM-DD" mode="date" />
                    <DateTimeField onChange={this.timeSelectOnChange2} inputFormat="YYYY-MM-DD" mode="date" />
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default PageTitle;
