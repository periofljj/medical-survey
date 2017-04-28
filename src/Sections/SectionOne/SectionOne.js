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
                                        <span>最近12个月的次数</span><input type="number" name=""/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name=""/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">
                                    包括您在内治疗该患者的医生数（含其他科室）
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <span>最近12个月的次数</span><input type="number" name=""/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近3个月的次数</span><input type="number" name=""/>
                                    </div>
                                    <div className="box-col">
                                        <span>最近1个月的次数</span><input type="number" name=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-3">
                                <div className="box-3-1">
                                    <div className="box-title">
                                       病人最近期就诊类型
                                    </div>
                                    <div className="box-content">
                                        <div><input type="radio" name="box-3-1-radio"/>门诊病人</div>
                                        <div><input type="radio" name="box-3-1-radio"/>住院病人</div>
                                        <div><input type="radio" name="box-3-1-radio"/>日间病人</div>
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
                                        <div><input type="radio" name="box-4-radio"/>小于1岁</div>
                                        <div><input type="radio" name="box-4-radio"/>1-5</div>
                                        <div><input type="radio" name="box-4-radio"/>6-10</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="box-4-radio"/>11-15</div>
                                        <div><input type="radio" name="box-4-radio"/>16-20</div>
                                        <div><input type="radio" name="box-4-radio"/>21-25</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="box-4-radio"/>26-30</div>
                                        <div><input type="radio" name="box-4-radio"/>31-35</div>
                                        <div><input type="radio" name="box-4-radio"/>36-40</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="box-4-radio"/>41-45</div>
                                        <div><input type="radio" name="box-4-radio"/>46-50</div>
                                        <div><input type="radio" name="box-4-radio"/>51-55</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="box-4-radio"/>56-60</div>
                                        <div><input type="radio" name="box-4-radio"/>61-65</div>
                                        <div><input type="radio" name="box-4-radio"/>66-70</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input type="radio" name="box-4-radio"/>71-75</div>
                                        <div><input type="radio" name="box-4-radio"/>76-80</div>
                                        <div><input type="radio" name="box-4-radio"/>大于80岁</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-5">
                                <div className="box-5-1">
                                    <div className="box-title">身高(cm)</div>
                                    <div className="box-content"><input type="text
                                    " name=""/></div>
                                </div>
                                <div className="space"></div>
                                <div className="box-5-2">
                                    <div className="box-title">体重(Kg)</div>
                                    <div className="box-content"><input type="text
                                    " name=""/></div>
                                </div>
                            </div>
                            <div className="box box-6">
                                <div className="box-6-1">
                                    <div className="box-title">首次确诊日期(年/月/日)</div>
                                    <div className="box-content"></div>
                                </div>
                                <div className="space"></div>
                                <div className="box-6-2">
                                    <div className="box-title">患者吸烟吗</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div><input type="radio" name="box"/>是</div>
                                            <div><input type="radio" name=""/>曾经吸烟</div>
                                          </div>
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>否</div>
                                            <div><input type="radio" name=""/>不知道</div>
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
                                    <input type="text" name=""/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-2">
                                <div className="box-title">原发肿瘤的组织学-请详细说明您所填写肿瘤的组织学分类</div>
                                <div className="box-content">
                                    <input type="text" name=""/>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-7-3">
                                <div className="box-title">当前正在指导该肿瘤病人所在的科室</div>
                                <div className="box-content">
                                    <input type="text" name=""/>
                                </div>
                            </div>
                        </div>
                        <div className="box box-8">
                            <div className="box-8-1">
                                <div className="box box-8-1-1">
                                    <div className="box-8-1-1-1">
                                        <div className="box-title">公司填写</div>
                                        <div className="box-content"><input type="text" name=""/></div>
                                    </div>
                                    <div className="space"></div>
                                    <div className="box-8-1-1-2">
                                       <div className="box-title">公司填写</div>
                                        <div className="box-content"><input type="text" name=""/></div>
                                    </div>
                                </div>
                                <div className="box box-8-1-2">
                                    <div className="box-title">如果是肺癌，请详细说明类型</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <input type="radio" name=""/> SCLC小细胞肺癌
                                        </div>
                                        <div className="box-col">
                                            <input type="radio" name=""/> NSCLC非小细胞肺癌
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-8-1-3">
                                    <div className="box-title">转移部位及淋巴结侵犯程度</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>局部淋巴结</div>
                                            <div><input type="radio" name=""/>子宫</div>
                                            <div><input type="radio" name=""/>肝</div>
                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>远端淋巴结</div>

                                            <div><input type="radio" name=""/>肾</div>
                                            <div><input type="radio" name=""/>肺</div>
                                        </div>
                                        <div className="box-col">

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>胸膜</div>
                                            <div><input type="radio" name=""/>胃</div>
                                             <div><input type="radio" name=""/>皮肤</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>腹膜/大网膜</div>
                                            <div><input type="radio" name=""/>骨</div>
                                            <div><input type="radio" name=""/>脑</div>

                                        </div>
                                        <div className="box-col">
                                            <div><input type="radio" name=""/>无</div>
                                            <div><input type="radio" name=""/>其他</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-8-2">
                                <div>家庭收入</div>
                                <div><input type="radio" name=""/>低</div>
                                <div><input type="radio" name=""/>中</div>
                                <div><input type="radio" name=""/>高</div>
                            </div>
                        </div>
                        <div className="box box-9">
                            <div className="box-title">影响癌症治疗的并发症</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input type="radio" name=""/>哮喘</div>
                                    <div><input type="radio" name=""/>房颤</div>
                                    <div><input type="radio" name=""/>自身免疫疾病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name=""/>骨病</div>
                                    <div><input type="radio" name=""/>心功不全</div>
                                    <div><input type="radio" name=""/>COPD</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name=""/>糖尿病</div>
                                    <div><input type="radio" name=""/>周围神经病变</div>
                                    <div><input type="radio" name=""/>肝功不全</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name=""/>人类乳头瘤病毒，HPV</div>
                                    <div><input type="radio" name=""/>静脉血栓栓塞，VTE</div>

                                    <div><input type="radio" name=""/>帕金森氏病</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name=""/>血小板减少症</div>
                                    <div><input type="radio" name=""/>肾功不全</div>
                                    <div><input type="radio" name=""/>其他</div>
                                </div>
                                 <div className="box-col">
                                    <div><input type="radio" name=""/>无</div>
                                    <div id="long"><input type="radio" name=""/>肠胃功能紊乱(例如，结肠炎，既往腹泻史，肠穿孔)</div>
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
