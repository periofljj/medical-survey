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
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">治疗目的</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 初次预防中性粒细胞减少:从化疗的第一个周期开始使 以降低中性粒细胞减少的风险</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 再次预防中性粒细胞减少:在发生过中性粒细胞减少的患者中使 以减少再次发生的风险</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 初次预防中性粒细胞减少:从化疗的第一个周期开始使 以降低中性粒细胞减少的风险</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 治疗发热性中性粒细胞减少:缩短发热性中性粒细胞减少的持续时间</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 初次预防中性粒细胞减少:从化疗的第一个周期开始使 以降低中性粒细胞减少的风险</div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">促红细胞生成素类药物(治疗贫血) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-content">
                                           <div><input onChange={this.handleInputChange} type="radio" name="" /> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 周期给药</div>
                                        </div>
                                        
                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content-1">
                                            <div>每周 <input onChange={this.handleInputChange} type="text" name="" /> 次</div>
                                            <div>计划多少周 <input onChange={this.handleInputChange} type="text" name="" /> 周</div>
                                            <div>每几 <input onChange={this.handleInputChange} type="text" name="" /> 周1次</div>
                                            <div>不知道 <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-6">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> IU单位</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg微克</div>
                                    </div>
                                    <div className="box box-3-1-7">
                                        <div>周期性给药 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
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
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />TACE</div>
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
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-1-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2">
                                    <div className="box box-1-2-1">
                                        <div>每日给药总剂量  <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg微克</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> mg</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> MU</div>
                                    </div>
                                    <div className="box box-1-2-2">
                                        <div>给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2">
                                <div className="box-title">给药途径</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />口服</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部用药</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />其他请指明</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />静脉推注</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />静脉输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />膀胱灌注</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />IM(肌肉注射)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />持续输液</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />瘤内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />腹膜/腹腔内注射</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />皮下注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />鞘内注射</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />TACE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="section-row">
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">二磷酸盐类及其他治疗 转移有关的药物 (如果知道，请提供商品名;否则请提供通 名及 家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-title">治疗目的</div>
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 治疗</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 预防</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 骨转移/骨损伤</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 迟发性骨转移/骨损伤</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-8">
                                        <div className="box-title">每日给药总剂量</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="" /></div>
                                    </div>
                                    <div className="box box-3-1-9">
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 周期给药</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10">
                                        <div>周期性给药 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                    <div className="box box-3-1-11">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="" /> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="" /> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-row">
                            <div className="box box-3">
                                <div>
                                    <div className="box box-3-1-1">
                                        <div className="box-title">二磷酸盐类及其他治疗 转移有关的药物 (如果知道，请提供商品名;否则请提供通 名及 家/或产地)</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                             <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                    <div className="box box-3-1-4">
                                        <div className="box-title">治疗目的</div>
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 治疗</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 预防</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 骨转移/骨损伤</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 迟发性骨转移/骨损伤</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-8">
                                        <div className="box-title">每日给药总剂量</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="" /></div>
                                    </div>
                                    <div className="box box-3-1-9">
                                        <div className="box-content">
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 持续给药</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 周期给药</div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10">
                                        <div>周期性给药 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                    <div className="box box-3-1-11">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="" /> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="" /> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="" /></div>
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
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-2 box-4-2">
                                        <div className="box-title">开始日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                        </div>
                                    </div>
                                    <div className="box box-3-1-3 box-4-3">
                                        <div className="box-title">结束日期</div>
                                        <div className="box-content">
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />
                                            <input onChange={this.handleInputChange} type="text" name="" />     
                                        </div>
                                    </div>
                                    <div className="box box-3-1-5 box-4-4">
                                        <div className="box-title">治疗原因</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 高钙血症</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 骨痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> PBSC/BMT</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 肿瘤痛</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> CTI BL</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 其他</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="box box-3-1-11  box-4-5">
                                        <div className="box-title">如果持续性给药</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 每天给药</div>
                                                <div>计划多少月<input onChange={this.handleInputChange} type="text" name="" /> 月</div>
                                            </div>
                                            <div className="box-col">
                                                <div>每<input onChange={this.handleInputChange} type="text" name="" /> 周1次</div>
                                                <div>不知道 <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="box box-3-1-8 box-4-9">
                                        <div className="box-title">每日给药总剂量</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="" /></div>
                                    </div>
                                    <div className="box box-3-1-9 box-4-6">
                                        <div className="box-title">剂量单位</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> mg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> mg/m</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg/hr</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> mcg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> mg/kg</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> IU</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box box-3-1-10 box-4-7">
                                        <div>周期性给药 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>每周期给药天数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>周期总天数(含间歇期) <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>当前周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div>计划周期数 <input onChange={this.handleInputChange} type="text" name="" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />不知道</div>
                                    </div>
                                    <div className="box box-3-1-11 box-4-8">
                                        <div className="box-title">治疗途径</div>
                                        <div className="box-content">
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 口服</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 静脉输液</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 局部用药</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 皮下注射</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 其他请指明</div>
                                            </div>
                                            <div className="box-col">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 静脉推注</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 持续输液</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> IM肌肉注射</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> PCA(自控止痛治疗)</div>
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 其他请指明</div>
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
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 1.容易</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 2</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 3</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 4</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 5</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 6</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 7.困难</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 不清楚</div>
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
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 1.快</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 2</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 3</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 4</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 5</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 6</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 7.慢</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 不清楚</div>
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
