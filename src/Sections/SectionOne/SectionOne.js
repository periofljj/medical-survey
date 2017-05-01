import React, { Component } from 'react';
import './SectionOne.css'

class SectionOne extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionOneChange(event);
    }

    render() {
        return (
            <div>
                <div className="section section-one">
                    <div className="section-title">
                        <span className="title">第一部分 患者基本信息</span>
                        <span>在本报告期内，您是否已经填写过该病人？</span>
                        <label><input type="radio" value="true" name="hasAnswered" onChange={this.handleInputChange} /><span>是</span></label>
                        <label><input type="radio" value="false" name="hasAnswered" onChange={this.handleInputChange} /><span>否</span></label>
                    </div>
                    <div className="section-content">
                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box-title">
                                    您对该患者的独立治疗次数
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <span>最近12个月的次数</span><input type="number" name="therapyTimesInTwelveMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name="therapyTimesInThreeMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name="therapyTimesInOneMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">
                                    包括您在内治疗该患者的医生数（含其他科室）
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <span>最近12个月的次数</span><input type="number" name="" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name="" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name="" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-3">
                                <div className="box-3-1">
                                    <div className="box-title">
                                       病人最近期就诊类型
                                    </div>
                                    <div className="box-content">
                                        <div><input type="radio" name="patientType" onChange={this.handleInputChange}/>门诊病人</div>
                                        <div><input type="radio" name="patientType" onChange={this.handleInputChange}/>住院病人</div>
                                        <div><input type="radio" name="patientType" onChange={this.handleInputChange}/>日间病人</div>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <div className="box-3-2">
                                    <div className="box-title">
                                       病人性别
                                    </div>
                                    <div className="box-content">
                                        <div><input type="radio" name="sex" value="male" onChange={this.handleInputChange}　/>男性</div>
                                        <div><input type="radio" name="sex" value="female" onChange={this.handleInputChange}　/>女性</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-4">
                                <div className="box-title">
                                   病人当前年龄
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="<1" onChange={this.handleInputChange}/>小于1岁</div>
                                        <div><input type="radio" name="age" value="1-5" onChange={this.handleInputChange}/>1-5</div>
                                        <div><input type="radio" name="age" value="6-10" onChange={this.handleInputChange}/>6-10</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="11-15" onChange={this.handleInputChange}/>11-15</div>
                                        <div><input type="radio" name="age" value="16-20" onChange={this.handleInputChange}/>16-20</div>
                                        <div><input type="radio" name="age" value="21-25" onChange={this.handleInputChange}/>21-25</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="26-30" onChange={this.handleInputChange}/>26-30</div>
                                        <div><input type="radio" name="age" value="31-35" onChange={this.handleInputChange}/>31-35</div>
                                        <div><input type="radio" name="age" value="36-40" onChange={this.handleInputChange}/>36-40</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="41-45" onChange={this.handleInputChange}/>41-45</div>
                                        <div><input type="radio" name="age" value="46-50" onChange={this.handleInputChange}/>46-50</div>
                                        <div><input type="radio" name="age" value="51-55" onChange={this.handleInputChange}/>51-55</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="56-60" onChange={this.handleInputChange}/>56-60</div>
                                        <div><input type="radio" name="age" value="61-65" onChange={this.handleInputChange}/>61-65</div>
                                        <div><input type="radio" name="age" value="66-70" onChange={this.handleInputChange}/>66-70</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="age" value="71-75" onChange={this.handleInputChange}/>71-75</div>
                                        <div><input type="radio" name="age" value="76-80" onChange={this.handleInputChange}/>76-80</div>
                                        <div><input type="radio" name="age" value=">80" onChange={this.handleInputChange}/>大于80岁</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-5">
                                <div className="box-5-1">
                                    <div className="box-title">身高(cm)</div>
                                    <div className="box-content"><input type="text
                                    " name="tall" onChange={this.handleInputChange}/></div>
                                </div>
                                <div className="space"></div>
                                <div className="box-5-2">
                                    <div className="box-title">体重(Kg)</div>
                                    <div className="box-content"><input type="text
                                    " name="weight" onChange={this.handleInputChange}/></div>
                                </div>
                            </div>
                            <div className="box box-6">
                                <div className="box-6-1">
                                    <div className="box-title">首次确诊日期(年/月/日)</div>
                                    <div className="box-content" ></div>
                                </div>
                                <div className="space"></div>
                                <div className="box-6-2">
                                    <div className="box-title">患者吸烟吗</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div><input type="radio" name="smokeStatus" value="yes" onChange={this.handleInputChange}/>是</div>
                                            <div><input type="radio" name="smokeStatus" value="was" onChange={this.handleInputChange}/>曾经吸烟</div>
                                          </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="smokeStatus" value="no" onChange={this.handleInputChange}/>否</div>
                                            <div><input type="radio" name="smokeStatus" value="unknow" onChange={this.handleInputChange}/>不知道</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section section-one">
                    <div className="section-content">
                        <div className="box box-7">
                            <div className="box-7-1">
                                <div className="box-title">原发肿瘤部位(部位尽可能具体),如果是脑肿瘤,请详细说明脑肿瘤的位置</div>
                                <div className="box-content">
                                    <input type="text" name="originalPosition" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-2">
                                <div className="box-title">原发肿瘤的组织学-请详细说明您所填写肿瘤的组织学分类</div>
                                <div className="box-content">
                                    <input type="text" name="histology" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-3">
                                <div className="box-title">当前正在指导该肿瘤病人所在的科室</div>
                                <div className="box-content">
                                    <input type="text" name="doctorId" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                        </div>
                        <div className="box box-8">
                            <div className="box-8-1">
                                <div className="box box-8-1-1">
                                    <div className="box-8-1-1-1">
                                        <div className="box-title">公司填写</div>
                                        <div className="box-content"><input type="text" name="company1" onChange={this.handleInputChange}/></div>
                                    </div>
                                    <div className="space"></div>
                                    <div className="box-8-1-1-2">
                                       <div className="box-title">公司填写</div>
                                        <div className="box-content"><input type="text" name="company2" onChange={this.handleInputChange}/></div>
                                    </div>
                                </div>
                                <div className="box box-8-1-2">
                                    <div className="box-title">如果是肺癌，请详细说明类型</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <input type="radio" name="keyCancer" value="SCLC" onChange={this.handleInputChange}/> SCLC小细胞肺癌
                                        </div>
                                        <div className="box-col">
                                            <input type="radio" name="keyCancer" value="NSCLC" onChange={this.handleInputChange}/> NSCLC非小细胞肺癌
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-8-1-3">
                                    <div className="box-title">转移部位及淋巴结侵犯程度</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div><input type="radio" name="derivedCancerStage" value="局部淋巴结" onChange={this.handleInputChange}/>局部淋巴结</div>
                                            <div><input type="radio" name="derivedCancerStage" value="子宫" onChange={this.handleInputChange}/>子宫</div>
                                            <div><input type="radio" name="derivedCancerStage" value="肝" onChange={this.handleInputChange}/>肝</div>
                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="derivedCancerStage" value="远端淋巴结" onChange={this.handleInputChange}/>远端淋巴结</div>

                                            <div><input type="radio" name="derivedCancerStage" value="肾" onChange={this.handleInputChange}/>肾</div>
                                            <div><input type="radio" name="derivedCancerStage" value="肺" onChange={this.handleInputChange}/>肺</div>
                                        </div>
                                        <div className="box-col">

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="derivedCancerStage" value="胸膜" onChange={this.handleInputChange}/>胸膜</div>
                                            <div><input type="radio" name="derivedCancerStage" value="胃" onChange={this.handleInputChange}/>胃</div>
                                             <div><input type="radio" name="derivedCancerStage" value="皮肤" onChange={this.handleInputChange}/>皮肤</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="derivedCancerStage" value="腹膜/大网膜" onChange={this.handleInputChange}/>腹膜/大网膜</div>
                                            <div><input type="radio" name="derivedCancerStage" value="骨" onChange={this.handleInputChange}/>骨</div>
                                            <div><input type="radio" name="derivedCancerStage" value="脑" onChange={this.handleInputChange}/>脑</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="derivedCancerStage" value="无" onChange={this.handleInputChange}/>无</div>
                                            <div><input type="radio" name="derivedCancerStage" value="其他" onChange={this.handleInputChange}/>其他</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-8-2">
                                <div>家庭收入</div>
                                <div><input type="radio" name="familyIncome" value="low" onChange={this.handleInputChange}/>低</div>
                                <div><input type="radio" name="familyIncome" value="medium" onChange={this.handleInputChange}/>中</div>
                                <div><input type="radio" name="familyIncome" value="high" onChange={this.handleInputChange}/>高</div>
                            </div>
                        </div>
                        <div className="box box-9">
                            <div className="box-title">影响癌症治疗的并发症</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="哮喘" onChange={this.handleInputChange}/>哮喘</div>
                                    <div><input type="radio" name="co-morbidities" value="房颤" onChange={this.handleInputChange}/>房颤</div>
                                    <div><input type="radio" name="co-morbidities" value="自身免疫疾病" onChange={this.handleInputChange}/>自身免疫疾病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="骨病" onChange={this.handleInputChange}/>骨病</div>
                                    <div><input type="radio" name="co-morbidities" value="心功不全" onChange={this.handleInputChange}/>心功不全</div>
                                    <div><input type="radio" name="co-morbidities" value="COPD" onChange={this.handleInputChange}/>COPD</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="糖尿病" onChange={this.handleInputChange}/>糖尿病</div>
                                    <div><input type="radio" name="co-morbidities" value="周围神经病变" onChange={this.handleInputChange}/>周围神经病变</div>
                                    <div><input type="radio" name="co-morbidities" value="肝功不全" onChange={this.handleInputChange}/>肝功不全</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="人类乳头瘤病毒，HPV" onChange={this.handleInputChange}/>人类乳头瘤病毒，HPV</div>
                                    <div><input type="radio" name="co-morbidities" value="静脉血栓栓塞，VTE" onChange={this.handleInputChange}/>静脉血栓栓塞，VTE</div>

                                    <div><input type="radio" name="co-morbidities" value="帕金森氏病" onChange={this.handleInputChange}/>帕金森氏病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="血小板减少症" onChange={this.handleInputChange}/>血小板减少症</div>
                                    <div><input type="radio" name="co-morbidities" value="肾功不全" onChange={this.handleInputChange}/>肾功不全</div>
                                    <div><input type="radio" name="co-morbidities" value="其他" onChange={this.handleInputChange}/>其他</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="无" onChange={this.handleInputChange}/>无</div>
                                    <div id="long"><input type="radio" name="co-morbidities" value="肠胃功能紊乱(例如，结肠炎，既往腹泻史，肠穿孔)" onChange={this.handleInputChange} />肠胃功能紊乱(例如，结肠炎，既往腹泻史，肠穿孔)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear-both"></div>
            </div>
        );
    }
}

export default SectionOne;