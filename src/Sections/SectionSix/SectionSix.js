import React, { Component } from 'react';
import './SectionSix.css'
import DateTimeField from "react-bootstrap-datetimepicker";
var moment = require('moment');

class SectionSix extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.timeSelectOnChange1 = this.timeSelectOnChange1.bind(this);
        this.timeSelectOnChange2 = this.timeSelectOnChange2.bind(this);
        this.timeSelectOnChange3 = this.timeSelectOnChange3.bind(this);
        this.timeSelectOnChange4 = this.timeSelectOnChange4.bind(this);
        this.timeSelectOnChange5 = this.timeSelectOnChange5.bind(this);
        this.timeSelectOnChange6 = this.timeSelectOnChange6.bind(this);
        this.timeSelectOnChange7 = this.timeSelectOnChange7.bind(this);
        this.timeSelectOnChange8 = this.timeSelectOnChange8.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionSixChange(event);
    }

    timeSelectOnChange1(time) {
        var time = {
            name: "growth-factor-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange2(time) {
        var time = {
            name: "growth-factor-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange3(time) {
        var time = {
            name: "erythropoietin-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange4(time) {
        var time = {
            name: "erythropoietin-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange5(time) {
        var time = {
            name: "bone-metastasis-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange6(time) {
        var time = {
            name: "bone-metastasis-end-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }
    timeSelectOnChange7(time) {
        var time = {
            name: "growth-factor-start-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }

    timeSelectOnChange8(time) {
        var time = {
            name: "growth-factor-end-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.props.sectionSixChange(false, time);
    }


    render() {
        return (
            <div className="section section-six">
                <div className="section-title">
                    <span className="title">第六部分 既往支持药物</span>
                    <span>请填写最近期的既往支持药物，当前(2017. 1月-3月)仍在使用的 持药物请填写在第8部分</span>
                    <span>如果病人既往使用过治疗中性粒减少的生长因子类药物(升白药)，请完成下表:</span>
                </div>
                <div className="section-content">
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出生因子类药物(治疗中性粒细胞减少) 如果知道请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="growth-factor-name" placeholder="XXXXX"/>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange1} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange2} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="growth-factor-continuing-drug" value="yes"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-planned-perid" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出生因子类药物(治疗中性粒细胞减少) 如果知道请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="growth-factor-name-2" placeholder="XXXXX"/>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange7} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange8} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="growth-factor-continuing-drug-2" value="yes"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-planned-perid-2" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-actual-period-2" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim-2" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim-2" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="section-title">
                        <span>如果病人既往使用过治疗贫血的促红细胞生成素类药物(促红素)，请完成下表:</span>
                    </div>
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出促红细胞生成素类药物(治疗贫血) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="erythropoietin-name" placeholder="XXXXX"/>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange3} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange4} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="erythropoietin-continuing-drug" value="yes"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-planned-period" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="erythropoietin-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="erythropoietin-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="section-title">
                        <span>如果病人既往使用过骨转移相关的治疗药物，请完成下表:</span>
                    </div>
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出药物名称(如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="bone-metastasis-name" placeholder="XXXXX"/>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange5} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange6} inputFormat="YYYY-MM-DD" mode="date" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-continuing-drug" /> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-planned-period" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="block"></div>
                </div>
            </div>
        );
    }
}

export default SectionSix;
