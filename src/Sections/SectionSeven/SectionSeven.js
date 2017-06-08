import React, { Component } from 'react';
import './SectionSeven.css';
import DateTimeField from "react-datetime";
import 'react-datetime/css/react-datetime.css';
var moment = require('moment');

class SectionSeven extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.timeSelectOnChange1 = this.timeSelectOnChange1.bind(this);
        this.timeSelectOnChange2 = this.timeSelectOnChange2.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionSevenChange(event);
    }
    timeSelectOnChange1(time) {
        var obj = {
            name: "therapy-start-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'therapy-start-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSevenChange(false, obj);
    }

    timeSelectOnChange2(time) {
        var obj = {
            name: "therapy-end-date",
            value: moment(Number(time)).format('YYYY-MM-DD')
        };
        this.setState({
            'therapy-end-date': moment(Number(time)).format('YYYY-MM-DD')
        });
        this.props.sectionSevenChange(false, obj);
    }

    render() {

        var localStorage = window.localStorage;
        var states = localStorage['medical-survey'] ? JSON.parse(localStorage['medical-survey']) : {};

        var therapyStartDateDefault = states.hasOwnProperty('therapy-start-date') ? states['therapy-start-date'] : "";
        var therapyStartDate = this.states ? this.states['therapy-start-date'] : "";

        var therapyEndDateDefault = states.hasOwnProperty('therapy-end-date') ? states['therapy-end-date'] : "";
        var therapyEndDate = this.states ? this.states['therapy-end-date'] : "";

        return (
            <div className="section section-seven">
                <div className="section-title">
                    <div><span className="title">第七部分</span></div>
                    <div><span className="title">详细描述当前使用用的抗肿瘤药物 与肿瘤治疗相关的所有细胞毒药物、内分泌泌药物、免疫增强剂和靶向药物</span></div>
                </div>

                <div className="section-content">
                    <div className="box-row box-row-1">
                        <div className="box width-10 box-1">
                            <div className="box-title">
                                <div>方案第一次开始日期</div>
                                <div>(年/月/日)</div>
                            </div>
                            <div style={{position: 'relative'}}>
                                <DateTimeField onChange={this.timeSelectOnChange1} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={therapyStartDateDefault} value={therapyStartDate} />
                            </div>
                        </div>
                        <div className="box width-15 box-2">
                            <div className="box-title">
                                <div>方案结束日期</div>
                                <div>(年/月/日)</div>
                            </div>
                            <div className="box-content text-center">
                                <div className="box-content">
                                   <div style={{position: 'relative'}}>
                                        <DateTimeField onChange={this.timeSelectOnChange2} timeFormat={false} dateFormat="YYYY-MM-DD" defaultValue={therapyEndDateDefault} value={therapyEndDate} />
                                    </div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-end-date" value="doing"/>
                                        <span>进行中</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-10 box-3">
                            <div className="box-title">
                                <span>方案名称</span>
                            </div>
                            <div className="box-content text-center">
                                <input onChange={this.handleInputChange} type="text" name="cyto-regimen"/>
                            </div>
                        </div>
                        <div className="box width-15 box-4">
                            <div className="box-title">
                                <span>对于NHL,CLL,MM本线治疗开始时，该病人属于</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="therapy-NHL-CLL-MM" value="refractory"/>
                                        <span>难治性的 Refractory</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="therapy-NHL-CLL-MM" value="relapsed"/>
                                        <span>复发的 Relapsed</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="NHL-CLL-MM" value="none"/>
                                        <span>两者都不是</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-23 box-5">
                            <div className="box-title">
                                <span>仅限实体瘤——几线治疗药物(含血血液肿瘤)</span>
                            </div>
                            <div className="box-content">
                                <div className="sub-box">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="早期/初治病人(未手术)"/>
                                            <span>早期/初治病人(未手术)</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="新辅助治疗"/>
                                            <span>新辅助治疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="辅助治疗"/>
                                            <span>辅助治疗</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sub-box">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="一线"/>
                                            <span>晚期/转移一线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="二线"/>
                                            <span>晚期/转移二线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="三线"/>
                                            <span>晚期/转移三线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="therapy-Chemo-LOT" value="四线及以上"/>
                                            <span>晚期/转移四线及以上</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sub-box">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name=""/>
                                        <span>治疗线同前更换药物</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-15 box-6">
                            <div className="box-title">
                                <span>仅限血液肿瘤</span>
                            </div>
                            <div className="box-content text-center">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="Induction"/>
                                        <span>诱导</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="1st"/>
                                        <span>一线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="Consolidation"/>
                                        <span>巩固</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="2nd"/>
                                        <span>二线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="Maintenance"/>
                                        <span>维持</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="3rd"/>
                                        <span>三线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="Not suitable"/>
                                        <span>不适用</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="仅限血液肿瘤" value="4th"/>
                                        <span>四线及以上</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-10">
                            <div className="box-title">
                                <span>病人人医保状况</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="medical-insurance-status"  value="Medical Insurance"/>
                                        <span>医保/公费</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="medical-insurance-status" value="Private Treatment"/>
                                        <span>自费</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="medical-insurance-status" value="Don't know"/>
                                        <span>不知道</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="medical-insurance-status" value="XNH"/>
                                        <span>新农合(XNH)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-row box-row-2">
                        <div className="box">
                            <span>哪个科室医生制定了此方案</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator"  value="Medical Oncologist"/>
                                <span> 肿瘤内科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Radiotherapist"/>
                                <span> 放疗科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Haematologist"/>
                                <span> 血液科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Gastroenterologist"/>
                                <span> 消化科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Dermatologist"/>
                                <span> 皮肤科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Pulmonologist"/>
                                <span> 呼吸科/肺内科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Urologist"/>
                                <span> 泌尿科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Gynecologist"/>
                                <span> 妇科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="Surgeon"/>
                                <span> 外科</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="therapy-initiator" value="other"/>
                                <span> 其它科室医生(请注明)</span>
                            </label>
                            <input onChange={this.handleInputChange} className="other" type="text" name="therapy-initiator"/>
                        </div>
                    </div>

                    <div className="box-row box-row-3">
                        <div className="box">
                            <span>患者在开始本治疗时, 体能状态描述( ECOG评级)</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="ECOG-performance-status" value="Asymptomatic"/>
                                <span> 0.无症状</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="ECOG-performance-status" value="Symptomatic fully ambulatory"/>
                                <span> 1.有症状但完全可以活动</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="ECOG-performance-status" value="symptomatic in bed<50% of the day"/>
                                <span> 2.有症状, 每日日卧床时间&lt;50%</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="ECOG-performance-status" value="Symptomatic in bed>50% of the day"/>
                                <span> 3.有症状, 每日日卧床>50%, 但不不是卧床不不起</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="ECOG-performance-status" value="Bedridden"/>
                                <span> 4.卧床不不起</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-4">
                        <div className="box">
                            <span>这个是临床试验或病人准入方案的一部分吗?</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="Yes_ Phase II"/>
                                <span>临床试验II期</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="Yes_ Phase III"/>
                                <span>临床试验III期</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="Part of a Compassionate Program"/>
                                <span>爱心用药计划(特许使用)所用药物为仍在研发阶段尚未获批的药物</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="Patient Assistance Program"/>
                                <span>患者援助计划 所用用药物为已批准上市的药物,包括买赠等</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="No_ Neither Clinical Trial nor COMP"/>
                                <span>都不是</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="clinical-trials" value="N/APP"/>
                                <span>不知道</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-5">
                        <div className="box">
                            <span>仅限前列列腺癌填写</span>
                            <span>本次治疗前PSA水平</span>
                            <span>(ng/ml)</span>
                            <input onChange={this.handleInputChange} className="num-input" type="num" name="PSA-at-diag" placeholder="允许小数"/>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="PSA-at-diag"/>
                                <span>不知道</span>
                            </label>
                        </div>
                        <div className="box">
                            <span>治疗目的</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="treatment-intent" value="Radical cure"/>
                                <span>根治</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="treatment-intent" value="姑息"/>
                                <span>姑息</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="treatment-intent" value="不适用"/>
                                <span>不适用</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-6">
                        <div className="box">
                            <div className="box-title">
                                <span>方案的副作用(请只提供病人病历中的信息)</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="ATE"/>
                                        <span>ATE动脉血栓栓塞</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="VTE"/>
                                        <span>VTE 静脉血栓栓塞</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Neutropenia"/>
                                        <span>中性粒细胞减少</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Weight change"/>
                                        <span>体重变化</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Constipation"/>
                                        <span>便秘</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Anorexia"/>
                                        <span>厌食/食欲减退</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Fever"/>
                                        <span>发热</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Stomatitis"/>
                                        <span>口腔炎</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Cardiac insufficiency"/>
                                        <span>心功不全</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Sexual dysfunction"/>
                                        <span>性功能障碍</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="other"/>
                                        <span>其他</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Nausea and vomiting"/>
                                        <span>恶心呕吐</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Cachexia"/>
                                        <span>恶病质</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Infection"/>
                                        <span>感染</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Hand-foot syndrome"/>
                                        <span>手足综合症</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="abnormal menstruation"/>
                                        <span>月经不调</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="edema"/>
                                        <span>水肿</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Hot / hot flashes"/>
                                        <span>潮热/热潮红</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="pain"/>
                                        <span>疼痛</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="erythra"/>
                                        <span>皮疹</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Neuropathy"/>
                                        <span>神经病变</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Mucositis"/>
                                        <span>粘膜炎</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="hepatosis"/>
                                        <span>肝功能障碍</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="gastric-intestinal perforation"/>
                                        <span>胃肠穿孔</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Alopecia"/>
                                        <span>脱发</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="diarrhea"/>
                                        <span>腹泻</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Thrombocytopenia"/>
                                        <span>血小板减少</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Blurred vision or other visual changes"/>
                                        <span>视力模糊或其他视力变化</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="anemia"/>
                                        <span>贫血</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Increased appetite"/>
                                        <span>食欲增加</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="hyperuricemia"/>
                                        <span>高尿酸血症</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Hypertension"/>
                                        <span>高血压</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Gynaecomastia"/>
                                        <span>男性乳房发育</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="none" className="none"/>
                                        <span>无</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="checkbox" name="therapy-side-effects" value="Don't know" className="unknown"/>
                                        <span>从病人病历不可知</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-row box-row-7">
                        <div className="left-container">
                            <div className="box">
                                <div className="box-title">
                                    <span>请您对该患者当前治疗方案的满意程度评分(7分为最满意,1分为最不满意)</span>
                                </div>
                                <div className="box-content">
                                    <table className="table table-1 table-bordered">
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <div>1</div>
                                                    <div>最不满意</div>
                                                </td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>
                                                    <div>7</div>
                                                    <div>最满意</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>满意程度</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="1"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="2"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="3"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="4"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="5"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="6"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="satisfaction" value="7"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="box">
                                <div className="sub-box-row-1">
                                    <div className="sub-box-1">
                                        <span>该患者是否接受序贯治疗(仅限乳腺癌,肺癌)</span>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="sequential-therapy" value="yes"/>
                                            <span>是</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="sequential-therapy" value="no"/>
                                            <span>否</span>
                                        </label>
                                    </div>
                                    <div className="sub-box-2">
                                        <span>如果有尚未开始的序贯药物,请提供药名:</span>
                                        <input onChange={this.handleInputChange} type="text" name="sequential-drug-name"/>
                                    </div>
                                </div>
                                <div className="sub-box-row-2">
                                    <span>如果是序贯治疗,请提供药物的序贯顺序(填写下列药物序号即可):</span>
                                    <input onChange={this.handleInputChange} type="text" name="sequential-drug-order"/>
                                </div>
                            </div>
                        </div>
                        <div className="right-container">
                            <table className="table table-2 table-bordered">
                                <thead>
                                    <tr><th>请列举最多3种您认为可以代替该患者当前治疗方案的产品或方案</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>替换方案1</span>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-1" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-2" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-3" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-4" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-5" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-6" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-7" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案1-8" className="replace"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>替换方案2</span>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-1" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-2" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-3" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-4" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-5" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-6" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-7" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案2-8" className="replace"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>替换方案3</span>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-1" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-2" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-3" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-4" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-5" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-6" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-7" className="replace"/>
                                            <input onChange={this.handleInputChange} type="text" name="替换方案3-8" className="replace"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="没有替换方案" className="no-replace"/>
                                                <span> 没有可以替换的药物</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="替换方案不予回答" className="replace"/>
                                                <span> 不予回答</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="clear-both"></div>
                    <div className="box-row box-row-8">
                        <div className="box-title">
                            <span>请给出方案中药物的商品名,如果通用名请标注产地或者厂家/国产/进口/合资</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionSeven;
