import React, { Component } from 'react';
import './SectionEight.css'

class SectionEight extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionEightChange(event);
    }

    render() {
        return (
            <div>
                <div className="block"></div>
                <div className="section section-eight">
                    <div className="section-title">
                        <span className="title">第八部分</span>
                        <span>详细描述当前使用的与肿瘤治疗有关的支持药物</span>
                        <span>支持药物包括:双磷酸盐类药物，促红细胞生成素，生长因子，麻醉性镇痛药与 吐剂、辅助止吐的皮质醇类药物，以及治疗骨转移/骨损伤或因使用去势药物或芳 化酶抑制剂治疗癌症而诱发的骨质丢失(CTI BL) 的相关药物</span>
                    </div>
                    <div className="section-content">
                        <div className="section-row">
                            <div className="box box-1">
                                <div className="box box-1-1">
                                    <div className="box box-1-1-1">
                                        <div className="box-title">生长因子类药物(治疗中性粒细胞减少) (如果知道，请提供商品名;否则请提供通 名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="GF-Drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="GF-drug-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="GF-drug-start-month" />
                                             <input onChange={this.handleInputChange} type="text" name="GF-drug-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="GF-drug-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="GF-drug-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="GF-drug-end-day" />
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
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-start-month" />
                                             <input onChange={this.handleInputChange} type="text" name="EPO-drug-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="EPO-drug-end-day" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-content">
                                           <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-给药周期" value="持续给药"/> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-给药周期" value="周期给药"/> 周期给药</div>
                                        </div>

                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">如果持续给药</div>
                                        <div className="box-content-1">
                                            <div>每周 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每周给药次数" /> 次</div>
                                            <div>计划多少周 <input onChange={this.handleInputChange} type="text" name="-drug-EPO计划给药周数" /> 周</div>
                                            <div>每几 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每几周给药一次" /> 周1次</div>
                                            <div>不知道 <input onChange={this.handleInputChange} type="radio" name="EPO-drug-持续给药" value="unknown"/></div>
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
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-每周期给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="EPO-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="EPO-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="EPO-drug-周期给药" value="unknown" />不知道</div>
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
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-start-month" />
                                             <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="acute-anti-emetic-drug-end-day" />
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
                                        <div className="box-title">迟发性止吐药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-start-month" />
                                             <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="delayed-anti-emetic-drug-name-end-day" />
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
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">二磷酸盐类及其他治疗骨转移有关的药物 (如果知道，请提供商品名;否则请提供通用名及厂家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-start-month" />
                                             <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-name-end-day" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-title">治疗目的</div>
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="treatment-intent" value="bone-metastases-drug-treatment-cause" value="治疗"/> 治疗</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="treatment-intent" value="bone-metastases-drug-treatment-cause" value="预防"/> 预防</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-cause" value="Bone Pain"/> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-cause" value="Bone metastasis / Bone injury"/> 骨转移/骨损伤</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-cause" value="Tumor pain"/> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-treatment-cause" value="迟发性骨转移/骨损伤"/> 迟发性骨转移/骨损伤</div>
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
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-给药方式" /> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-给药方式" /> 周期给药</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10">
                                        <div>如果周期性给药</div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-每周期给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-给药周期" value="unknown"/>不知道</div>
                                    </div>
                                    <div className="box box-3-1-11">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-每天给药次数" /> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-计划给药月数" /> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="bone-metastases-drug-几周给药一次" /> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="bone-metastases-drug-持续给药" /></div>
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
                                        <div className="box-title">其它支持类药物(麻醉性镇痛剂、CTI BL、高钙血症、PBSC、BMT. . . ) (如果知道，请提供商品名;否则请提供通用名及商家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-name" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2 box-4-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-start-year" />
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-start-month" />
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-start-day" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3 box-4-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-end-year" />
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-end-month" />
                                            <input onChange={this.handleInputChange} type="text" name="other-drug-end-day" />
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
                                                <div><input onChange={this.handleInputChange} type="radio" name="other-drug-" /> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="other-drug-计划给药月数" /> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="other-drug-几周给药一次" /> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="other-drug-持续给药" value="unknown"/></div>
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
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="other-drug-每周期给药天数" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="other-drug-周期总天数" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="other-drug-当前周期数" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="other-drug-计划周期数" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="other-drug-周期给药" value="unknown"/>不知道</div>
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
                        <span>请您对该问卷填写的难易程度进行评分(7分为困难；1分为容易)</span>
                    </div>
                    <div className="section-content">
                        <div className="box box-5">
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="1"/> 1.容易</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="2"/> 2</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="3"/> 3</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="4"/> 4</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="5"/> 5</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="6"/> 6</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="7"/> 7.困难</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷难易程度" value="unknown"/> 不清楚</div>
                        </div>
                    </div>
                </div>
                <div className="block"></div>
                <div className="section section-eight">
                    <div className="section-title">
                        <span>请您对该问卷填写的完成速度进行评分(7分为慢;1分为快)</span>
                    </div>
                    <div className="section-content">
                        <div className="box box-5">
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="1"/> 1.快</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="2"/> 2</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="3"/> 3</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="4"/> 4</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="5"/> 5</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="6"/> 6</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="7"/> 7.慢</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="问卷完成速度" value="unknown"/> 不清楚</div>
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
