import React, { Component } from 'react';
import './SectionSix.css'
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
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
        var obj = {
            name: "growth-factor-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };

        this.setState({
            'growth-factor-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange2(time) {
        var obj = {
            name: "growth-factor-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'growth-factor-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange3(time) {
        var obj = {
            name: "erythropoietin-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'erythropoietin-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange4(time) {
        var obj = {
            name: "erythropoietin-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'erythropoietin-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange5(time) {
        var obj = {
            name: "bone-metastasis-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'bone-metastasis-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange6(time) {
        var obj = {
            name: "bone-metastasis-end-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'bone-metastasis-end-date-2': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }
    timeSelectOnChange7(time) {
        var obj = {
            name: "growth-factor-start-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'growth-factor-start-date-2': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }

    timeSelectOnChange8(time) {
        var obj = {
            name: "growth-factor-end-date-2",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'growth-factor-end-date-2': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSixChange(false, obj);
    }


    render() {

        var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};
        
        var growthFactorStartDateDefault = states.hasOwnProperty('growth-factor-start-date') ? states['growth-factor-start-date'] : "";
        var growthFactorStartDate = this.states ? this.states['growth-factor-start-date'] : "";

        var growthFactorEndDateDefault = states.hasOwnProperty('growth-factor-end-date') ? states['growth-factor-end-date'] : "";
        var growthFactorEndDate = this.states ? this.states['growth-factor-end-date'] : "";
        
        var erythropoietinStartDateDefault = states.hasOwnProperty('erythropoietin-start-date') ? states['erythropoietin-start-date'] : "";
        var erythropoietinStartDate = this.states ? this.states['erythropoietin-start-date'] : "";

        var erythropoietinEndDateDefault = states.hasOwnProperty('erythropoietin-end-date') ? states['erythropoietin-end-date'] : "";
        var erythropoietinEndDate = this.states ? this.states['erythropoietin-end-date'] : "";

        var boneMetastasisStartDateDefault = states.hasOwnProperty('bone-metastasis-start-date') ? states['bone-metastasis-start-date'] : "";
        var boneMetastasisStartDate = this.states ? this.states['bone-metastasis-start-date'] : "";

        var boneMetastasisEndDate2Default = states.hasOwnProperty('bone-metastasis-end-date-2') ? states['bone-metastasis-end-date-2'] : "";
        var boneMetastasisEndDate2 = this.states ? this.states['bone-metastasis-end-date-2'] : "";

        var growthFactorStartDate2Default = states.hasOwnProperty('growth-factor-start-date-2') ? states['growth-factor-start-date-2'] : "";
        var growthFactorStartDate2 = this.states ? this.states['growth-factor-start-date-2'] : "";

        var growthFactorEndDate2Default = states.hasOwnProperty('growth-factor-end-date-2') ? states['growth-factor-end-date-2'] : "";
        var growthFactorEndDate2 = this.states ? this.states['growth-factor-end-date-2'] : ""; 


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
                                    <DateTimeField onChange={this.timeSelectOnChange1} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={growthFactorStartDateDefault} value={growthFactorStartDate} />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange2} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={growthFactorEndDateDefault} value={growthFactorEndDate} />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="checkbox" name="growth-factor-continuing-drug" value="yes" className="growth-factor-drug continued"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-planned-perid" className="growth-factor-drug cycle" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-actual-period" className="growth-factor-drug cycle" /></td>
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
                            <div className="box-title">请列出生因子类药物2(治疗中性粒细胞减少) 如果知道请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="growth-factor-name-2" placeholder="XXXXX"/>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange7} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={erythropoietinStartDateDefault} value={erythropoietinStartDate} />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange8} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={erythropoietinEndDateDefault} value={erythropoietinEndDate} />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="checkbox" name="growth-factor-continuing-drug-2" value="yes" className="growth-factor-drug-2 continued"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-planned-perid-2" className="growth-factor-drug-2 cycle"/></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-actual-period-2" className="growth-factor-drug-2 cycle"/></td>
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
                                    <DateTimeField onChange={this.timeSelectOnChange3} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={boneMetastasisStartDateDefault} value={boneMetastasisStartDate} />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange4} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={boneMetastasisEndDate2Default} value={boneMetastasisEndDate2} />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="checkbox" name="erythropoietin-continuing-drug" value="yes" className="erythropoietin-drug continued"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-planned-period"  className="erythropoietin-drug cycle"/></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-actual-period"  className="erythropoietin-drug cycle"/></td>
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
                                    <DateTimeField onChange={this.timeSelectOnChange5} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={growthFactorStartDate2Default} value={growthFactorStartDate2} />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange6} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={growthFactorEndDate2Default} value={growthFactorEndDate2} />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="checkbox" name="bone-metastasis-continuing-drug" value="yes" className="bone-metastasis-drug continued"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-planned-period" className="bone-metastasis-drug cycle"/></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-actual-period" className="bone-metastasis-drug cycle"/></td>
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
