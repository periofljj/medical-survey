import React, { Component } from 'react';
import './SectionSeven.css';
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
var moment = require('moment');

class SectionSevenDrug extends Component {
	constructor(props) {
		super(props);
		this.handleInputChange = this.handleInputChange.bind(this);
        this.timeSelectOnChange3 = this.timeSelectOnChange3.bind(this);
        this.timeSelectOnChange4 = this.timeSelectOnChange4.bind(this);
	}

	handleInputChange(event) {
		this.props.sectionSevenChange(event);
	}

	timeSelectOnChange3(time) {
        var obj = {
            name: this.props.sectionId + "-drug-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            [this.props.sectionId + '-drug-start-date']: moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSevenChange(false, obj);
    }

    timeSelectOnChange4(time) {
        var obj = {
            name: this.props.sectionId + "-drug-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            [this.props.sectionId + '-drug-end-date']: moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSevenChange(false, obj);
    }

	render () {
		var sectionKey = this.props.sectionId;
        var id = sectionKey.split('-')[1];

		var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};

        var drugStartDateDefault = states.hasOwnProperty(sectionKey + '-drug-start-date') ? states[sectionKey + '-drug-start-date'] : "";
        var drugStartDate = this.states ? this.states[sectionKey + '-drug-start-date'] : "";

        var drugEndDateDefault = states.hasOwnProperty(sectionKey + '-drug-end-date') ? states[sectionKey + '-drug-end-date'] : "";
        var drugEndDate = this.states ? this.states[sectionKey + '-drug-end-date'] : "";

        return (
            <div>
                <div className="section-seven-drug">
                    <div className="left-container">
                        <div className="sub-box-row-1">
                            <div className="sub-box sub-box-1">
                                <div className="sub-box-title">
                                    <span>方案中药物{id}(商品名,否则请标注厂家或产地) 可以是细胞毒、内分泌、靶向、免疫增强剂</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-brand"}/>
                                    <div className="wrapper">
                                        <div>
                                            <span>给药方方式</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dosing-type"} value="Cycles" className="section-7-1 drug-way"/>
                                                <span>周期</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dosing-type"} value="Continued" className="section-7-1 drug-way"/>
                                                <span>持续</span>
                                            </label>
                                        </div>
                                        <div>
                                            <span>是否作为维持治疗</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-maintenance-therapy"} value="yes"/>
                                                <span>是</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-maintenance-therapy"} value="no"/>
                                                <span>否</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-box sub-box-2">
                                <div className="sub-box-title">
                                    <span>开始日期 如果开始日期与上面的不同 年/月/日</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange3} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={drugStartDateDefault} value={drugStartDate} />
                                </div>
                            </div>
                            <div className="sub-box sub-box-3">
                                <div className="sub-box-3-row-1">
                                    <span>每周期给药天数</span>
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-days-per-cycle"} className="section-7-1 cycle"/>
                                </div>
                                <div className="sub-box-3-row-2">
                                    <span>周期总天数(含间歇期)</span>
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-length-of-cycle"} className="section-7-1 cycle"/>
                                </div>
                            </div>
                        </div>
                        <siv className="sub-box-row-2">
                            <div className="sub-box sub-box-1">
                                <div className="sub-box-title">
                                    <span>每次给药剂量</span>
                                    <span>剂量如有变化请分栏填写</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-dose-quantity"}/>
                                </div>
                            </div>
                            <div className="sub-box sub-box-2">
                                <div className="sub-box-title">
                                    <span>剂量单位</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mg/m 2"/>
                                            <span>mg/m 2</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mg"/>
                                            <span>mg</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="MU"/>
                                            <span>MU</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="AUC"/>
                                            <span>AUC</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mcg/m2"/>
                                            <span>mcg/m2</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="kBq/kg"/>
                                            <span>kBq/kg</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mg/kg"/>
                                            <span>mg/kg</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mcg"/>
                                            <span>mcg</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="IU"/>
                                            <span>IU</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="ml"/>
                                            <span>ml</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="mcg/kg"/>
                                            <span>mcg/kg</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-dose-unit"} value="other"/>
                                            <span>其他</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-box sub-box-3">
                                <div className="sub-box-title">
                                    <span>每次给药次数</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-dose-per-day"}/>
                                </div>
                            </div>
                            <div className="sub-box sub-box-4">
                                <div className="sub-box-title">
                                    <span>结束日期 如果结束日期与上面的不同 年/月/日</span>
                                </div>
                                <div style={{position: 'relative'}}>
                                    <DateTimeField onChange={this.timeSelectOnChange4} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={drugEndDateDefault} value={drugEndDate} />
                                </div>
                            </div>
                            <div className="sub-box sub-box-5">
                                <div className="sub-box-5-row-1">
                                    <span>当前周期数</span>
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-given-cycles"} className="section-7-1 cycle"/>
                                </div>
                                <div className="sub-box-5-row-2">
                                    <span>计划周期数</span>
                                    <input onChange={this.handleInputChange} type="text" name={sectionKey + "-cycles-planned"} className="section-7-1 cycle"/>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-cycles-planned"} value="unknown" className="section-7-1 cycle"/>
                                        <span>不知道</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-cycles-planned"} value="至进展" className="section-7-1 cycle" />
                                        <span>至进展</span>
                                    </label>
                                </div>
                            </div>
                        </siv>
                    </div>
                    <div className="right-container">
                        <div className="sub-box sub-box-1">
                            <div className="sub-box-title">
                                <span>给药途径</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Oral"/>
                                        <span>口服</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intrathecal"/>
                                        <span>鞘内注射</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="IV Bolus"/>
                                        <span>静脉推注</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intratumoural"/>
                                        <span>瘤内注射</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intramuscular"/>
                                        <span>肌肉注射</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intravesical"/>
                                        <span>膀胱灌注</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Subcutaneous"/>
                                        <span>皮下注射</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intraperitoneal"/>
                                        <span>腹膜/腹腔内注射</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Topical"/>
                                        <span>局部</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="TACE"/>
                                        <span>TACE</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="IV  Infusion"/>
                                        <span>静脉输液</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Intra-arterial injection"/>
                                        <span>动脉注射</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="Cont IV Infusion"/>
                                        <span>持续静脉输液</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-product-route-of-administration"} value="other"/>
                                        <span>其他</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="sub-box-2-col">
                            <div className="sub-box sub-box-col-1">
                                <div className="sub-box-title">
                                    <span>持续治疗——用药频率</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <span>每几</span><input onChange={this.handleInputChange} type="number" name={sectionKey + "-admin-frequency-day"} className="section-7-1 continued"/><span>天</span>
                                    </div>
                                    <div>
                                        <span>每几</span><input onChange={this.handleInputChange} type="number" name={sectionKey + "-admin-frequency-week"} className="section-7-1 continued"/><span>周</span>
                                        <input onChange={this.handleInputChange} className="times" type="number" name={sectionKey + "-admin-frequency-time"} className="section-7-1 continued"/><span>次数</span>
                                    </div>
                                    <div>
                                        <span>每几</span><input onChange={this.handleInputChange} type="number" name={sectionKey + "-admin-frequency-month"} className="section-7-1 continued"/><span>个月</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-box sub-box-col-2">
                                <div className="sub-box-title">
                                    <span>持续治疗——计划多久?</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <input onChange={this.handleInputChange} type="number" name={sectionKey + "-duration-planned"} value="weeks" className="section-7-1 continued"/>
                                        <span>周</span>

                                        <span>或</span>

                                        <input onChange={this.handleInputChange} type="number" name={sectionKey + "-duration-planned"} value="years" className="section-7-1 continued"/>
                                        <span>年</span>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-duration-planned"} value="doing" className="section-7-1 continued"/>
                                            <span>直至进展</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name={sectionKey + "-duration-planned"} value="unknown" className="section-7-1 continued"/>
                                            <span>不知道</span>
                                        </label>
                                    </div>
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

export default SectionSevenDrug;