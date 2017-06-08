import React, { Component } from 'react';
import './SectionEight.css';
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
var moment = require('moment');

class SectionEight extends Component {
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
        this.timeSelectOnChange9 = this.timeSelectOnChange9.bind(this);
        this.timeSelectOnChange10 = this.timeSelectOnChange10.bind(this);
        this.timeSelectOnChange11 = this.timeSelectOnChange11.bind(this);
        this.timeSelectOnChange12 = this.timeSelectOnChange12.bind(this);
        this.timeSelectOnChange13 = this.timeSelectOnChange13.bind(this);
        this.timeSelectOnChange14 = this.timeSelectOnChange14.bind(this);
        this.timeSelectOnChange15 = this.timeSelectOnChange15.bind(this);
        this.timeSelectOnChange16 = this.timeSelectOnChange16.bind(this);
    }
    handleInputChange(event) {
        this.props.sectionEightChange(event);
    }
    
    timeSelectOnChange1(time) {
        var obj = {
            name: "GF-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'GF-drug-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange2(time) {
        var obj = {
            name: "GF-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'GF-drug-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange3(time) {
        var obj = {
            name: "EPO-drug-start-year",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'EPO-drug-start-year': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange4(time) {
        var obj = {
            name: "EPO-drug-end-year",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'EPO-drug-end-year': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange5(time) {
        var obj = {
            name: "acute-anti-emetic-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'acute-anti-emetic-drug-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange6(time) {
        var obj = {
            name: "acute-anti-emetic-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'acute-anti-emetic-drug-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }
    timeSelectOnChange7(time) {
        var obj = {
            name: "delayed-anti-emetic-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'delayed-anti-emetic-drug-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange8(time) {
        var obj = {
            name: "delayed-anti-emetic-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'delayed-anti-emetic-drug-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }
    timeSelectOnChange9(time) {
        var obj = {
            name: "bone-metastases-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'bone-metastases-drug-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange10(time) {
        var obj = {
            name: "bone-metastases-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'bone-metastases-drug-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange11(time) {
        var obj = {
            name: "other-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'other-drug-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange12(time) {
        var obj = {
            name: "other-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'other-drug-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }
    
    timeSelectOnChange13(time) {
        var obj = {
            name: "acute-anti-emetic-drug-2-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'acute-anti-emetic-drug-start-date-2': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange14(time) {
        var obj = {
            name: "acute-anti-emetic-drug-2-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'acute-anti-emetic-drug-end-date-2': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }
    timeSelectOnChange15(time) {
        var obj = {
            name: "delayed-anti-emetic-drug-2-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'delayed-anti-emetic-drug-2-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }

    timeSelectOnChange16(time) {
        var obj = {
            name: "delayed-anti-emetic-drug-2-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'delayed-anti-emetic-drug-2-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionEightChange(false, obj);
    }
    render() {

        var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};

        var GFDrugStartDateDefault = states.hasOwnProperty('GF-drug-start-date') ? states['GF-drug-start-date'] : "";
        var GFDrugStartDate = this.states ? this.states['GF-drug-start-date'] : "";

        var GFDrugEndDateDefault = states.hasOwnProperty('GF-drug-end-date') ? states['GF-drug-end-date'] : "";
        var GFDrugEndDate = this.states ? this.states['GF-drug-end-date'] : "";

        var EPODrugStartYearDefault = states.hasOwnProperty('EPO-drug-start-year') ? states['EPO-drug-start-year'] : "";
        var EPODrugStartYear = this.states ? this.states['EPO-drug-start-year'] : "";

        var EPODrugEndYearDefault = states.hasOwnProperty('EPO-drug-end-year') ? states['EPO-drug-end-year'] : "";
        var EPODrugEndYear = this.states ? this.states['EPO-drug-end-year'] : "";

        var acuteAntiEmeticDrugStartDateDefault = states.hasOwnProperty('acute-anti-emetic-drug-start-date') ? states['acute-anti-emetic-drug-start-date'] : "";
        var acuteAntiEmeticDrugStartDate = this.states ? this.states['acute-anti-emetic-drug-start-date'] : "";

        var acuteAntiEmeticDrugEndDateDefault = states.hasOwnProperty('acute-anti-emetic-drug-end-date') ? states['acute-anti-emetic-drug-end-date'] : "";
        var acuteAntiEmeticDrugEndDate = this.states ? this.states['acute-anti-emetic-drug-end-date'] : "";

        var acuteAntiEmeticDrugStartDateDefault2 = states.hasOwnProperty('acute-anti-emetic-drug-2-start-date') ? states['acute-anti-emetic-drug-2-start-date'] : "";
        var acuteAntiEmeticDrugStartDate2 = this.states ? this.states['acute-anti-emetic-drug-2-start-date'] : "";

        var acuteAntiEmeticDrugEndDateDefault2 = states.hasOwnProperty('acute-anti-emetic-drug-2-end-date') ? states['acute-anti-emetic-drug-2-end-date'] : "";
        var acuteAntiEmeticDrugEndDate2 = this.states ? this.states['acute-anti-emetic-drug-2-end-date'] : "";


        var delayedAntiEmeticDrugStartDateDefault = states.hasOwnProperty('delayed-anti-emetic-drug-start-date') ? states['delayed-anti-emetic-drug-start-date'] : "";
        var delayedAntiEmeticDrugStartDate = this.states ? this.states['delayed-anti-emetic-drug-start-date'] : "";

        var delayedAntiEmeticDrugEndDateDefault = states.hasOwnProperty('delayed-anti-emetic-drug-end-date') ? states['delayed-anti-emetic-drug-end-date'] : "";
        var delayedAntiEmeticDrugEndDate = this.states ? this.states['delayed-anti-emetic-drug-end-date'] : "";

        var delayedAntiEmeticDrugStartDateDefault2 = states.hasOwnProperty('delayed-anti-emetic-drug-2-start-date') ? states['delayed-anti-emetic-drug-2-start-date'] : "";
        var delayedAntiEmeticDrugStartDate2 = this.states ? this.states['delayed-anti-emetic-drug-2-start-date'] : "";

        var delayedAntiEmeticDrugEndDateDefault2 = states.hasOwnProperty('delayed-anti-emetic-drug-2-end-date') ? states['delayed-anti-emetic-drug-2-end-date'] : "";
        var delayedAntiEmeticDrugEndDate2 = this.states ? this.states['delayed-anti-emetic-drug-2-end-date'] : "";

        var boneMetastasesDrugStartDateDefault = states.hasOwnProperty('bone-metastases-drug-start-date') ? states['bone-metastases-drug-start-date'] : "";
        var boneMetastasesDrugStartDate = this.states ? this.states['bone-metastases-drug-start-date'] : "";

        var boneMetastasesDrugEndDateDefault = states.hasOwnProperty('bone-metastases-drug-end-date') ? states['bone-metastases-drug-end-date'] : "";
        var boneMetastasesDrugEndDate = this.states ? this.states['bone-metastases-drug-end-date'] : "";

        var otherDrugStartDateDefault = states.hasOwnProperty('other-drug-start-date') ? states['other-drug-start-date'] : "";
        var otherDrugStartDate = this.states ? this.states['other-drug-start-date'] : "";

        var otherDrugEndDateDefault = states.hasOwnProperty('other-drug-end-date') ? states['other-drug-end-date'] : "";
        var otherDrugEndDate = this.states ? this.states['other-drug-end-date'] : "";

        return (
            <div>
                <div className="block"></div>
                <div className="section section-eight">
                    <div className="section-title">
                        <span className="title">第八部分</span>
                        <label><input type="checkbox" className="history"/> 既往使用过与肿瘤治疗有关的支持药物</label>
                        <span>详细描述当前使用的与肿瘤治疗有关的支持药物</span>
                        <span>支持药物包括:双磷酸盐类药物，促红细胞生成素，生长因子，麻醉性镇痛药与 吐剂、辅助止吐的皮质醇类药物，以及治疗骨转移/骨损伤或因使用去势药物或芳 化酶抑制剂治疗癌症而诱发的骨质丢失(CTI BL) 的相关药物</span>
                    </div>
                    <div className="section-content">
                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">生长因子类药物(治疗中性粒细胞减少) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="GF-Drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange1} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={GFDrugStartDateDefault} value={GFDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange2} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={GFDrugEndDateDefault} value={GFDrugEndDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="GF-drug-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-doses-unit" value="mcg"/> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-doses-unit" value="mg"/> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-doses-unit" value="MU"/> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="GF-drug-给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="GF-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="GF-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="GF-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-周期给药" value="unknown"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">治疗目的</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-treatment-intent" value="初次预防中性粒细胞减少"/> 初次预防中性粒细胞减少:从化疗的第一个周期开始使 以降低中性粒细胞减少的风险</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-treatment-intent" value="再次预防中性粒细胞减少"/> 再次预防中性粒细胞减少:在发生过中性粒细胞减少的患者中使 以减少再次发生的风险</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-treatment-intent" value="治疗发热性中性粒细胞减少"/> 治疗发热性中性粒细胞减少:缩短发热性中性粒细胞减少的持续时间</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="GF-drug-treatment-intent" value="治疗非发热性中性粒细胞减少"/> 初次预防中性粒细胞减少:从化疗的第一个周期开始使 以降低中性粒细胞减少的风险</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">促红细胞生成素类药物(治疗贫血) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange3}inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={EPODrugStartYearDefault} value={EPODrugStartYear} />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange4} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={EPODrugEndYearDefault} value={EPODrugEndYear} />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-content">
                                           <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-dosing-type" value="Continued" className="EPO drug-way"/> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-dosing-type" value="Cycles" className="EPO drug-way"/> 周期给药</div>
                                        </div>

                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">如果持续给药</div>
                                        <div className="box-content-1">
                                            <div>每周 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每周给药次数"  className="EPO continued"/> 次</div>
                                            <div>计划多少周 <input onChange={this.handleInputChange} type="text" name="EPO-drug-计划给药周数"  className="EPO continued"/> 周</div>
                                            <div>每几 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每几周给药一次"  className="EPO continued"/> 周1次</div>
                                            <div>不知道 <input onChange={this.handleInputChange} type="radio" name="EPO-drug-持续给药" value="unknown" className="EPO continued"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-6">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="EPO-drug-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-doses-unit" value="IU"/> IU单位</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-doses-unit" value="mcg"/> mcg微克</div>
                                    </div>
                                    <div className="box box-3-1-7">
                                        <div>周期性给药: </div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每周期给药天数" className="EPO cycle"/></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="EPO-drug-周期总天数" className="EPO cycle"/></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-当前周期数" className="EPO cycle"/></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-计划周期数" className="EPO cycle"/></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-周期给药" value="unknown" className="EPO cycle"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">急性止吐药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange5} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={acuteAntiEmeticDrugStartDateDefault} value={acuteAntiEmeticDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                       <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange6} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={acuteAntiEmeticDrugEndDateDefault} value={acuteAntiEmeticDrugEndDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-doses-unit" value="mcg"/> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-doses-unit" value="mg"/> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-doses-unit" value="MU"/> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-周期给药" value="不知道"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Oral"/>口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Topical"/>局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Intratumoural"/>瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="other"/>其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="IV Bolus"/>静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="IV  Infusion"/>静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Intravesical"/>膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Intramuscular"/>IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Cont Infusion"/>持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Intraperitoneal"/>腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Subcutaneous"/>皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="Intrathecal"/>鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-route-of-administration" value="TACE"/>TACE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">急性止吐药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange13} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={acuteAntiEmeticDrugStartDateDefault2} value={acuteAntiEmeticDrugStartDate2} />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                       <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange14} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={acuteAntiEmeticDrugEndDateDefault2} value={acuteAntiEmeticDrugEndDate2} />
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-doses-unit" value="mcg"/> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-doses-unit" value="mg"/> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-doses-unit" value="MU"/> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-2-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-周期给药" value="不知道"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Oral"/>口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Topical"/>局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Intratumoural"/>瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="other"/>其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="IV Bolus"/>静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="IV  Infusion"/>静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Intravesical"/>膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Intramuscular"/>IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Cont Infusion"/>持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Intraperitoneal"/>腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Subcutaneous"/>皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="Intrathecal"/>鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="acute-anti-emetic-drug-2-route-of-administration" value="TACE"/>TACE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">迟发性止吐药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange7} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={delayedAntiEmeticDrugStartDateDefault} value={delayedAntiEmeticDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange8} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={delayedAntiEmeticDrugEndDateDefault} value={delayedAntiEmeticDrugEndDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-doses-unit" value="mcg"/> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-doses-unit" value="mg"/> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-doses-unit" value="MU"/> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-周期给药" value="unknown"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Oral"/>口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Topical"/>局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Intratumoural"/>瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="other"/>其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="IV Bolus"/>静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="V  Infusion"/>静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Intravesical"/>膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Intramuscular"/>IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Cont IV Infusion"/>持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Intraperitoneal"/>腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Subcutaneous"/>皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="Intrathecal"/>鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-route-of-administration" value="TACE"/>TACE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">迟发性止吐药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange15} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={delayedAntiEmeticDrugStartDateDefault} value={delayedAntiEmeticDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange16} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={delayedAntiEmeticDrugEndDateDefault} value={delayedAntiEmeticDrugEndDate} />
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-doses-quantity" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-doses-unit" value="mcg"/> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-doses-unit" value="mg"/> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-doses-unit" value="MU"/> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-2-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-周期给药" value="unknown"/>不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Oral"/>口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Topical"/>局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Intratumoural"/>瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="other"/>其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="IV Bolus"/>静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="V  Infusion"/>静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Intravesical"/>膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Intramuscular"/>IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Cont IV Infusion"/>持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Intraperitoneal"/>腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Subcutaneous"/>皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="Intrathecal"/>鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="delayed-anti-emetic-drug-2-route-of-administration" value="TACE"/>TACE</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">二磷酸盐类及其他治疗骨转移有关的药物(如果知道请提供商品名否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                       <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange9} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={boneMetastasesDrugStartDateDefault} value={boneMetastasesDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange10} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={boneMetastasesDrugEndDateDefault} value={boneMetastasesDrugEndDate} />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-title">治疗目的</div>
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-intent" value="治疗"/> 治疗</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-intent" value="预防"/> 预防</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="bone-metastases-drug-treatment-cause" value="Bone Pain"/> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="bone-metastases-drug-treatment-cause" value="Bone metastasis / Bone injury"/> 骨转移/骨损伤</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="bone-metastases-drug-treatment-cause" value="Tumor pain"/> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="bone-metastases-drug-treatment-cause" value="迟发性骨转移/骨损伤"/> 迟发性骨转移/骨损伤</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-8">
                                        <div className="box-title">每日给药总剂量</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-doses-quantity" /></div>
                                    </div>
                                    <div className="box box-3-1-9">
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-dosing-type" value="Continued" className="bone-metastases-drug drug-way"/> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-dosing-type" value="Cycles" className="bone-metastases-drug drug-way"/> 周期给药</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10">
                                        <div>如果周期性给药</div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-每周期给药天数"  className="bone-metastases-drug cycle"/></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-周期总天数"  className="bone-metastases-drug cycle"/></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-当前周期数"  className="bone-metastases-drug cycle"/></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-计划周期数"  className="bone-metastases-drug cycle"/></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-给药周期" value="unknown" className="bone-metastases-drug cycle"/>不知道</div>
                                    </div>
                                    <div className="box box-3-1-11">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="bone-metastases-drug-eveyday" value="yes" className="bone-metastases-drug continued byDay"/> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-计划给药月数" className="bone-metastases-drug continued"/> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-几周给药一次" className="bone-metastases-drug continued byWeek"/> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-持续给药" className="bone-metastases-drug continued"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-3 box-4">
                                <div>
                                    <div className="box box-3-1-1 box-4-1">
                                        <div className="box-title">其它支持类药物(麻醉性镇痛剂、CTI BL、高钙血症、PBSC、BMT) (如果知道，请提供商品名;否则请提供通用名及商家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-name" placeholder="XXXXX"/>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2 box-4-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="sm-date-field"style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange11} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={otherDrugStartDateDefault} value={otherDrugStartDate} />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3 box-4-3">
                                        <div className="box-title">结束日期</div>
                                       <div className="sm-date-field" style={{position: 'relative'}}>
                                            <DateTimeField onChange={this.timeSelectOnChange12} inputProps={{className: 'date-input'}} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={otherDrugEndDateDefault} value={otherDrugEndDate} />
                                        </div>
                                    </div>
                                     <div className="box box-3-1-9 box-4-3">
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="other-drug-drug-dosing-type" value="Continued" className="other-drug drug-way"/> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="other-drug-drug-dosing-type" value="Cycles" className="other-drug drug-way"/> 周期给药</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5 box-4-4">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-cause" value="Hypercalcemia"/> 高钙血症</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-caus" value="Bone Pain"/> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-caus" value="PBSC/BMT"/> PBSC/BMT</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-caus" value="Tumor pain"/> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-caus" value="CTI BL"/> CTI BL</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-treatment-caus" value="other"/> 其他</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-11  box-4-5">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="checkbox" name="other-drug-everyday"  value="yes" className="other-drug continued byDay"/> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="other-drug-计划给药月数"  className="other-drug continued"/> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="other-drug-几周给药一次"  className="other-drug continued byWeek"/> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="other-drug-持续给药" value="unknown" className="other-drug continued"/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-8 box-4-9">
                                        <div className="box-title">每日给药总剂量</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="other-drug-doses-quantity" /></div>
                                    </div>
                                    <div className="box box-3-1-9 box-4-6">
                                        <div className="box-title">剂量单位</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="mg"/> mg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="mg/m"/> mg/m</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="mcg/hr"/> mcg/hr</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="mcg"/> mcg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="mg/kg"/> mg/kg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-doses-unit" value="IU"/> IU</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10 box-4-7">
                                        <div>周期性给药: </div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="other-drug-每周期给药天数"  className="other-drug cycle"/></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="other-drug-周期总天数"  className="other-drug cycle"/></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="other-drug-当前周期数"  className="other-drug cycle"/></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="other-drug-计划周期数"  className="other-drug cycle"/></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="other-drug-周期给药" value="unknown" className="other-drug cycle"/>不知道</div>
                                    </div>
                                    <div className="box box-3-1-11 box-4-8">
                                        <div className="box-title">治疗途径</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="Oral"/> 口服</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="IV  Infusion"/> 静脉输液</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="Topical"/> 局部用药</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="Subcutaneous"/> 皮下注射</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="other"/> 其他请指明</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="IV Bolus"/> 静脉推注</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="Cont IV Infusion"/> 持续输液</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="Intramuscular"/> IM肌肉注射</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-route-of-administration" value="PCA"/> PCA(自控止痛治疗)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block"></div>

                <div className="section section-eight">
                    <div className="section-title">
                        <span>您还有其他建议吗?</span>
                    </div>
                    <div className="section-content">
                        <div className="box box-6">
                            <textarea></textarea>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionEight;
