import React, { Component } from 'react';
import './SectionFour.css';
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
var moment = require('moment');


class SectionFour extends Component {
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
    }

    handleInputChange(event) {
        this.props.sectionFourChange(event);
    }

    timeSelectOnChange1(time) {
        var time = {
            name: "first-surgery-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'first-surgery-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }

    timeSelectOnChange2(time) {
        var time = {
            name: "second-surgery-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'second-surgery-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }

    timeSelectOnChange3(time) {
        var time = {
            name: "third-surgery-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'third-surgery-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }
    timeSelectOnChange4(time) {
        var time = {
            name: "first-radical-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'first-radical-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }
    timeSelectOnChange5(time) {
        var time = {
            name: "first-radical-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'first-radical-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }
    timeSelectOnChange6(time) {
        var time = {
            name: "second-radical-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'second-radical-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }
    timeSelectOnChange7(time) {
        var time = {
            name: "second-radical-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'second-radical-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionFourChange(false, time);
    }

    render() {
        var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};
        var firstSurgeryDateDefault = states.hasOwnProperty('first-surgery-date') ? states['first-surgery-date'] : "";
        var firstSurgeryDate = this.states ? this.states['first-surgery-date'] : "";

        var secondSurgeryDateDefault = states.hasOwnProperty('second-surgery-date') ? states['second-surgery-date'] : "";
        var secondSurgeryDate = this.states ? this.states['second-surgery-date'] : "";

        var thirdSurgeryDateDefault = states.hasOwnProperty('third-surgery-date') ? states['third-surgery-date'] : "";
        var thirdSurgeryDate = this.states ? this.states['third-surgery-date'] : "";

        var firstRadicalStartDateDefault = states.hasOwnProperty('first-radical-start-date') ? states['first-radical-start-date'] : "";
        var firstRadicalStartDate = this.states ? this.states['first-radical-start-date'] : "";

        var firstRadicalEndDateDefault = states.hasOwnProperty('first-radical-end-date') ? states['first-radical-end-date'] : "";
        var firstRadicalEndDate = this.states ? this.states['first-radical-end-date'] : "";

        var secondRadicalStartDateDefault = states.hasOwnProperty('second-radical-start-date') ? states['second-radical-start-date'] : "";
        var secondRadicalStartDate = this.states ? this.states['second-radical-start-date'] : "";

        var secondRadicalEndDateDefault = states.hasOwnProperty('second-radical-end-date') ? states['second-radical-end-date'] : "";
        var secondRadicalEndDate = this.states ? this.states['second-radical-end-date'] : "";


        return (
            <div className="section section-four">
                <div className="section-title">
                    <span className="title">第四部分 外科操作及放疗</span>
                </div>

                <div className="section-content">
                    <div className="left-container">
                        <div className="row-title">
                            <span>4.1 针对其肿瘤，该患者是否做过手术治疗</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="surgery" value="yes"/>
                                <span> 是</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="surgery" value="no"/>
                                <span> 否</span>
                            </label>
                        </div>
                        <div className="row-content">
                            <div className="hint">
                                <span>如果做过，请在4A填写治疗性手术名称；</span>
                                <span>4.1.1 另请评估当前病人肿瘤是否可切除</span>
                            </div>
                            <div className="box">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="yes"/>
                                        <span>可以手术切除</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="no"/>
                                        <span>不能手术切除</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="maybe"/>
                                        <span>可能可以手术切除</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="unknown"/>
                                        <span>不知道</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="unknown"/>
                                        <span>不适用</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row-title">
                            <span>4A- 请详细描述与肿瘤相关的外科治疗情况</span>
                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第一次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-name-1" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-name-2" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-name-3" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-name-4" placeholder="XX.XX"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange1} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={firstSurgeryDateDefault} value={firstSurgeryDate}  />
                                </div>
                            </div>

                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第二次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-name-1" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-name-2" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-name-3" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-name-4" placeholder="XX.XX"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange2} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={secondSurgeryDateDefault} value={secondSurgeryDate}  />
                                </div>
                            </div>

                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第三次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="third-surgery-name-1" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="third-surgery-name-2" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="third-surgery-name-3" placeholder="XX.XX"/>
                                    <input onChange={this.handleInputChange} type="text" name="third-surgery-name-4" placeholder="XX.XX"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange3} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={thirdSurgeryDateDefault} value={thirdSurgeryDate}  />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="right-container">
                        <div className="row-title">
                            <span>4.2 针对其肿瘤，该患者是否做过放射治疗</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="radical" value="yes"/>
                                <span> 是</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="radical" value="no"/>
                                <span> 否</span>
                            </label>
                        </div>

                        <div className="row-content">
                            <span>4B-如果是， 请详细描述与肿瘤治疗有关的放射治疗</span>
                        </div>

                        <div className="box-row-1">
                            <div className="row-title"><span>第一个疗程</span></div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>开始日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange4} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={firstRadicalStartDateDefault} value={firstRadicalStartDate}  />
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>结束日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange5} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={firstRadicalEndDateDefault} value={firstRadicalEndDate}  />
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>照射剂量</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="first-radical-irradiation-dosage-perDay"/>
                                        <span> 每日GY</span>
                                    </div>
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="first-radical-irradiation-dosage-total"/>
                                        <span> 总计GY</span>
                                    </div>
                                    <div>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-irradiation-dosage-total"/>
                                        <span> 不详</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-row-2">
                            <div className="box-3">
                                <div className="box-title">
                                    <span>放疗方式</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="first-radical-way" value="internal"/>
                                            <span> 内放疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="first-radical-way" value="external"/>
                                            <span> 外放疗</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box-4">
                                <div className="box-title">
                                    <span>何时给予放疗</span>
                                </div>
                                <div className="box-content">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 与化疗同步</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 与化疗序贯进⾏</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 独⽴作为姑息或者单独治疗</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="box-row-1">
                            <div className="row-title"><span>第二个疗程</span></div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>开始日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange6} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={secondRadicalStartDateDefault} value={secondRadicalStartDate} />
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>结束日期(年/月/日)</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange7} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={secondRadicalEndDateDefault} value={secondRadicalEndDate}  />
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>照射剂量</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="second-radical-irradiation-dosage-perDay"/>
                                        <span> 每日GY</span>
                                    </div>
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="second-radical-irradiation-dosage-total"/>
                                        <span> 总计GY</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-row-2">
                            <div className="box-3">
                                <div className="box-title">
                                    <span>放疗方式</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="second-radical-way" value="internal"/>
                                            <span> 内放疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="second-radical-way" value="external"/>
                                            <span> 外放疗</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box-4">
                                <div className="box-title">
                                    <span>何时给予放疗</span>
                                </div>
                                <div className="box-content">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 与化疗同步</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 与化疗序贯进⾏</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 独⽴作为姑息或者单独治疗</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block"></div>
            </div>
        );
    }
}

export default SectionFour;
