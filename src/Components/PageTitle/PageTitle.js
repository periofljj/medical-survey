import React, { Component } from 'react';
import './PageTitle.css';

class PageTitle extends Component {
    render() {
        return (
            <div className="page-title">
                <span>在完成此部分前，请先阅读前面的简介</span>
                <div className="finished-time">
                	<span>问卷完成日期(年/月/日)</span>
                	<div className="time-input">
                		<div><input type="text"/></div>
	                	<div><input type="text"/></div>
	                	<div><input type="text"/></div>
                	</div>
                </div>
                <div className="clear"></div>
            </div>
        );
    }
}

export default PageTitle;
