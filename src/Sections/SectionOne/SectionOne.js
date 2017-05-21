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
                        <label><input type="radio" value="true" name="hasAnswered" onChange={this.handleInputChange} /><span> 是</span></label>
                        <label><input type="radio" value="false" name="hasAnswered" onChange={this.handleInputChange} /><span> 否</span></label>
                    </div>
                    <div className="section-content">
                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box-title">
                                    您对该患者的独立治疗次数
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <span>最近12个月的次数</span><input type="number" name="therapy-times-in-twelveMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name="therapy-times-in-threeMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name="therapy-times-in-oneMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">
                                    包括您在内治疗该患者的医生数（含其他科室）
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <span>最近12个月的次数</span><input type="number" name="doctor-numbers-in-twelveMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name="doctor-numbers-in-threeMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name="doctor-numbers-in-oneMonthes" onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-3">
                                <div className="box-3-1">
                                    <div className="box-title">
                                       病人最近期就诊类型
                                    </div>
                                    <div className="box-content">
                                        <div><input type="radio" name="patientType" value="Out Patient" onChange={this.handleInputChange}/>门诊病人</div>
                                        <div><input type="radio" name="patientType" value="In Patient" onChange={this.handleInputChange}/>住院病人</div>
                                        <div><input type="radio" name="patientType" value="Day Case" onChange={this.handleInputChange}/>日间病人</div>
                                    </div>
                                </div>
                                <div className="space"></div>
                                <div className="box-3-2">
                                    <div className="box-title">
                                       病人性别
                                    </div>
                                    <div className="box-content">
                                        <div><input type="radio" name="sex" value="Male" onChange={this.handleInputChange}　/>男性</div>
                                        <div><input type="radio" name="sex" value="Female" onChange={this.handleInputChange}　/>女性</div>
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
                                    " name="tall" onChange={this.handleInputChange}/> cm</div>
                                </div>
                                <div className="space"></div>
                                <div className="box-5-2">
                                    <div className="box-title">体重(Kg)</div>
                                    <div className="box-content"><input type="text
                                    " name="weight" onChange={this.handleInputChange}/> kg</div>
                                </div>
                            </div>
                            <div className="box box-6">
                                <div className="box-6-1">
                                    <div className="box-title">首次确诊日期(年/月/日)</div>
                                    <div className="box-content" >
                                        <input type="text" name="date-of-diagnosis" onChange={this.handleInputChange}/>
                                        <input type="text" name="date-of-diagnosis" onChange={this.handleInputChange}/>
                                        <input type="text" name="date-of-diagnosis" onChange={this.handleInputChange}/>
                                    </div>
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
                                    <input type="text" name="key-cancer" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-2">
                                <div className="box-title">原发肿瘤的组织学-请详细说明您所填写肿瘤的组织学分类</div>
                                <div className="box-content">
                                    <input type="text" name="组织学分类" onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-3">
                                <div className="box-title">当前正在指导该肿瘤病人所在的科室</div>
                                <div className="box-content">
                                    <input type="text" name="overseeing-physician" onChange={this.handleInputChange}/>
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
                                            <input type="radio" name="lung-cancer-type" value="SCLC" onChange={this.handleInputChange}/> SCLC小细胞肺癌
                                        </div>
                                        <div className="box-col">
                                            <input type="radio" name="lung-cancer-type" value="NSCLC" onChange={this.handleInputChange}/> NSCLC非小细胞肺癌
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-8-1-3">
                                    <div className="box-title">转移部位及淋巴结侵犯程度</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div><input type="radio" name="site-of-mets" value="Local Lymph Node" onChange={this.handleInputChange}/>局部淋巴结</div>
                                            <div><input type="radio" name="site-of-mets" value="Uterus" onChange={this.handleInputChange}/>子宫</div>
                                            <div><input type="radio" name="site-of-mets" value="Liver" onChange={this.handleInputChange}/>肝</div>
                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="site-of-mets" value="Remote Lymph Node" onChange={this.handleInputChange}/>远端淋巴结</div>

                                            <div><input type="radio" name="site-of-mets" value="Kidney" onChange={this.handleInputChange}/>肾</div>
                                            <div><input type="radio" name="site-of-mets" value="Lung" onChange={this.handleInputChange}/>肺</div>
                                        </div>
                                        <div className="box-col">

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="site-of-mets" value="Pleura" onChange={this.handleInputChange}/>胸膜</div>
                                            <div><input type="radio" name="site-of-mets" value="Stomach" onChange={this.handleInputChange}/>胃</div>
                                             <div><input type="radio" name="site-of-mets" value="Skin" onChange={this.handleInputChange}/>皮肤</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="site-of-mets" value="Peritoneum" onChange={this.handleInputChange}/>腹膜/大网膜</div>
                                            <div><input type="radio" name="site-of-mets" value="Bone" onChange={this.handleInputChange}/>骨</div>
                                            <div><input type="radio" name="site-of-mets" value="Brain" onChange={this.handleInputChange}/>脑</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name="site-of-mets" value="None" onChange={this.handleInputChange}/>无</div>
                                            <div><input type="radio" name="site-of-mets" value="Other" onChange={this.handleInputChange}/>其他</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-8-2">
                                <div>家庭收入</div>
                                <div><input type="radio" name="household-income" value="low" onChange={this.handleInputChange}/>低</div>
                                <div><input type="radio" name="household-income" value="medium" onChange={this.handleInputChange}/>中</div>
                                <div><input type="radio" name="household-income" value="high" onChange={this.handleInputChange}/>高</div>
                            </div>
                        </div>
                        <div className="box box-9">
                            <div className="box-title">影响癌症治疗的并发症</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="ASTHM" onChange={this.handleInputChange}/>哮喘</div>
                                    <div><input type="radio" name="co-morbidities" value="Atrial Fibrillation" onChange={this.handleInputChange}/>房颤</div>
                                    <div><input type="radio" name="co-morbidities" value="Autoimmune Diseases" onChange={this.handleInputChange}/>自身免疫疾病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="BONE" onChange={this.handleInputChange}/>骨病</div>
                                    <div><input type="radio" name="co-morbidities" value="Cardiac Insufficiency" onChange={this.handleInputChange}/>心功不全</div>
                                    <div><input type="radio" name="co-morbidities" value="COPD" onChange={this.handleInputChange}/>COPD</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="DIAB" onChange={this.handleInputChange}/>糖尿病</div>
                                    <div><input type="radio" name="co-morbidities" value="Peripheral Neuropathy" onChange={this.handleInputChange}/>周围神经病变</div>
                                    <div><input type="radio" name="co-morbidities" value="Hepatic Insufficiency" onChange={this.handleInputChange}/>肝功不全</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="HPV" onChange={this.handleInputChange}/>人类乳头瘤病毒，HPV</div>
                                    <div><input type="radio" name="co-morbidities" value="VTE" onChange={this.handleInputChange}/>静脉血栓栓塞，VTE</div>

                                    <div><input type="radio" name="co-morbidities" value="Parkinsons Disease" onChange={this.handleInputChange}/>帕金森氏病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="Thrombocytopenia" onChange={this.handleInputChange}/>血小板减少症</div>
                                    <div><input type="radio" name="co-morbidities" value="Renal Insufficiency" onChange={this.handleInputChange}/>肾功不全</div>
                                    <div><input type="radio" name="co-morbidities" value="Other" onChange={this.handleInputChange}/>其他</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name="co-morbidities" value="None" onChange={this.handleInputChange}/>无</div>
                                    <div id="long"><input type="radio" name="co-morbidities" value="Gastrointestinal Dysfunction" onChange={this.handleInputChange} />肠胃功能紊乱(例如，结肠炎，既往腹泻史，肠穿孔)</div>
                                </div>
                            </div>
                        </div>
                        <div className="box box-10">
                            <div>患者当前体能状态描述</div>
                            <div>
                                <label><input type="radio" onChange={this.handleInputChange} name="ECOG-performance-Status" value="Asymptomatic"/> 0.无症状</label>
                                <label><input type="radio" onChange={this.handleInputChange} name="ECOG-performance-Status" value="Symptomatic fully ambulatory"/> 1.有症状但完全可以活动</label>
                                <label><input type="radio" onChange={this.handleInputChange} name="ECOG-performance-Status" value="Symptomatic in bed<50% of the day"/> 2.有症状，每日卧床时间&lt;50%</label>
                                <label><input type="radio" onChange={this.handleInputChange} name="ECOG-performance-Status" value="Symptomatic in bed>50% of the day"/> 3.有症状，每日卧床时间&gt;50%,但不是卧床不起</label>
                                <label><input type="radio" onChange={this.handleInputChange} name="ECOG-performance-Status" value="Bedridden"/> 4.卧床不起</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clear-both"></div>
                <div className="block"></div>
            </div>
        );
    }
}

export default SectionOne;
