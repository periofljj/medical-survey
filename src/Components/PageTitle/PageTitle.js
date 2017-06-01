import React, { Component } from 'react';
import './PageTitle.css';
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
var moment = require('moment');

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.timeSelectOnChange = this.timeSelectOnChange.bind(this);
    }

    handleInputChange(event) {
        this.props.pageTitleChange(event);
    }

    timeSelectOnChange(time) {
        var time = {
            name: "finished-time",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'finished-time': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.pageTitleChange(false, time);
    }


    render() {
        var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};
        var finishedTimeDefault = states.hasOwnProperty('finished-time') ? states['finished-time'] : "";
        var finishedTime = this.states ? this.states['finished-time'] : "";
        
        return (
            <div className="page-title">
                <span>在完成此部分前，请先阅读前面的简介</span>
                <div className="finished-time">
                	<span>问卷完成日期(年/月/日)</span>
                    <div style={{position: 'relative'}}>
                        <DateTimeField onChange={this.timeSelectOnChange} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={finishedTimeDefault} value={finishedTime} />
                    </div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default PageTitle;
