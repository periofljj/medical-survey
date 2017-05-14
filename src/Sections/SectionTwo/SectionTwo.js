import React, { Component } from 'react';
import './SectionTwo.css'

class SectionTwo extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionTwoChange(event);
    }

    render() {
        return (
        <div>
            <div className="section section-two">
                <div className="section-title">
                    <span className="title">第二部分 首诊当前的分期</span>
                    <span>特别提示：肿瘤分期请一定提供，如果您的分期系统不在我们提供的范围内，请用文字说明；若您提供的分期只符合其中一种，请只填一种</span>
                </div>
                <div className="section-content">
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-type">实体瘤与骨肿瘤</div>
                            <div className="box-1-1">
                                <div className="box-title">首诊时的分期(含妇科FIGO分期，脑瘤WHO分级)</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="0"/>0</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅰ"/>Ⅰ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅰb"/>Ⅰb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅱ"/>Ⅱ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅱb"/>Ⅱb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅲ"/>Ⅲ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅲb"/>Ⅲb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅳ"/>Ⅳ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅳb"/>Ⅳb</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅰa"/>Ⅰa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅰc"/>Ⅰc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅱa"/>Ⅱa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅱc"/>Ⅱc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅲa"/>Ⅲa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅲc"/>Ⅲc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅳa"/>Ⅳa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-stage" value="Ⅳc"/>Ⅳc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-2">
                                <div className="box box-1-2-1">
                                    <div className="box-title">TNM分期</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div>T <input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="T"/></div>
                                            <div>N <input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="N"/></div>
                                            <div>M <input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="M"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2-2">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="Limited Stage"/>局限期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="Local Advanced"/>局部晚期</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="Advanced"/>晚期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-TNM" value="Metastasis"/>转移</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-1-3">
                                <div className="box-title">BCLC Stage - Liver cancer 巴塞罗那临床肝癌分期</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-BCLC-stage" value="0"/> 0</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-BCLC-stage" value="A"/> A</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-BCLC-stage" value="B"/> B</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-BCLC-stage" value="C"/> C</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-BCLC-stage" value="D"/> D</div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-4">
                                <div className="box-title">患者当前分期(含妇科FIGO分期，脑瘤WHO分级</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="0"/>0</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅰ"/>Ⅰ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅰb"/>Ⅰb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅱ"/>Ⅱ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅱb"/>Ⅱb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅲ"/>Ⅲ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅲb"/>Ⅲb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅳ"/>Ⅳ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅳb"/>Ⅳb</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅰa"/>Ⅰa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅰc"/>Ⅰc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅱa"/>Ⅱa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅱc"/>Ⅱc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅲa"/>Ⅲa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅲc"/>Ⅲc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅳa"/>Ⅳa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-stage" value="Ⅳc"/>Ⅳc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-2">
                                <div className="box box-1-2-1">
                                    <div className="box-title">TNM分期</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div>T <input onChange={this.handleInputChange} type="radio" name="current-TNM" value="T"/></div>
                                            <div>N <input onChange={this.handleInputChange} type="radio" name="current-TNM" value="N"/></div>
                                            <div>M <input onChange={this.handleInputChange} type="radio" name="current-TNM" value="M"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2-2">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-TNM" value="Limited Stage"/>局限期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-TNM" value="Local Advanced"/>局部晚期</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-TNM" value="Advanced"/>晚期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="current-TNM" value="Metastasis"/>转移</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-1-3">
                                <div className="box-title">BCLC Stage - Liver cancer 巴塞罗那临床肝癌分期</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="current-BCLC-stage" value="0"/> 0</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="current-BCLC-stage" value="A"/> A</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="current-BCLC-stage" value="B"/> B</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="current-BCLC-stage" value="C"/> C</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="current-BCLC-stage" value="D"/> D</div>
                                </div>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-type">淋巴瘤 非霍(NHL)/霍奇金病/浆细胞瘤</div>
                            <div className="box-2-1">
                                <div className="box-title">淋巴瘤 Ann Arbor分级</div>
                                <div className="box-content">
                                    <div className="box-content1">
                                        <div className="box-col">
                                            <div className="col-left">首诊</div>
                                            <div className="col-right">当前</div>
                                        </div>
                                    </div>
                                    <div className="box-content2">
                                        <div className="box-col">
                                            <div className="col-left">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅰ"/> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅰa"/> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅰb"/> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅱ"/> Ⅱ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅱa"/> Ⅱa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅱb"/> Ⅱb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅲ"/> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅲa"/> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅲb"/> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅳ"/> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅳa"/> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Ⅳb"/> Ⅳb</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅰ"/> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅰa"/> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅰb"/> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅱ"/> Ⅱ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅱa"/> Ⅱa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅱb"/> Ⅱb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅲ"/> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅲa"/> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅲb"/> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅳ"/> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅳa"/> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Ⅳb"/> Ⅳb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-content3">
                                        <div className="box-left">
                                            <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Low"/> 低度恶性/惰性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="Medium"/> 中度恶性/侵袭性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-first-diagnosis" value="High"/> 高度恶性/ 侵袭性</div>
                                        </div>
                                        <div className="box-right">
                                             <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Low"/> 低度恶性/惰性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="Medium"/> 中度恶性/侵袭性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor-current" value="High"/> 高度恶性/ 侵袭性</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-2-2">
                                <div className="box-title">浆细胞/多发性骨髓瘤Durie Salmon分期</div>
                                <div className="box-content">
                                    <div className="box-content1">
                                        <div className="box-col">
                                            <div className="col-left">首诊</div>
                                            <div className="col-right">当前</div>
                                        </div>
                                    </div>
                                    <div className="box-content2">
                                        <div className="box-col">
                                            <div className="col-left">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅰ"/> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅰa"/> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅰb"/> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅱ"/> Ⅱ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅱa"/> Ⅱa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅱb"/> Ⅱb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅲ"/> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅲa"/> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-first-diagnosis" value="Ⅲb"/> Ⅲb</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅰ"/> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅰa"/> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅰb"/> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅱ"/> Ⅱ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅱa"/> Ⅱa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅱb"/> Ⅱb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅲ"/> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅲa"/> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="durie-salmon-current" value="Ⅲb"/> Ⅲb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                             <div className="box-type">急性白血病</div>
                             <div className="box-col">
                                 <div className="box box-3-1">
                                     <div className="box-title">AML(急粒)FAB分型</div>
                                     <div className="box-content">
                                         <div className="box-content1">
                                        <div className="box-col">
                                            <div className="col-left">首诊</div>
                                            <div className="col-right">当前</div>
                                        </div>
                                    </div>
                                    <div className="box-content2">
                                        <div className="box-col">
                                            <div className="col-left">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M0"/> M0</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M1"/> M1</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M2"/> M2</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M3"/> M3</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M4"/> M4</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M5"/> M5</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M6"/>M6</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-first-diagnosis" value="M7"/> M7</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M0"/> M0</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M1"/> M1</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M2"/> M2</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M3"/> M3</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M4"/> M4</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M5"/> M5</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M6"/> M6</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-current" value="M7"/> M7</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 </div>
                                 <div className="box box-3-2">
                                      <div className="box-title">ALL(急淋)分期</div>
                                     <div className="box-content">
                                         <div className="box-content1">
                                        <div className="box-col">
                                            <div className="col-left">首诊</div>
                                            <div className="col-right">当前</div>
                                        </div>
                                    </div>
                                    <div className="box-content2">
                                        <div className="box-col">
                                            <div className="col-left">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-first-diagnosis" value="L1"/> L1期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-first-diagnosis" value="L2"/> L2期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-first-diagnosis" value="L3"/> L3期</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-current" value="L1"/> L1期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-current" value="L2"/> L2期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ALL-current" value="L3"/> L3期</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 </div>
                             </div>
                             <div className="box-type">慢性白血病</div>
                             <div className="box-col">
                                 <div className="box box-3-1 box-3-4">
                                     <div className="box-title">CLL(慢淋)Binet 分期</div>
                                     <div className="box-content">
                                         <div className="box-content1">
                                        <div className="box-col">
                                            <div className="col-left">首诊</div>
                                            <div className="col-right">当前</div>
                                        </div>
                                        </div>
                                        <div className="box-content2">
                                            <div className="box-col">
                                                <div className="col-left">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-first-diagnosis" value="A"/> A期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-first-diagnosis" value="B"/> B期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-first-diagnosis" value="C"/> C期</div>
                                                    </div>
                                                </div>
                                                <div className="col-right">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-current" value="A"/> A期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-current" value="B"/> B期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CLL-current" value="C"/> C期</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                 </div>
                                 <div className="box box-3-2 box-3-5">
                                    <div className="box-title">CML(慢粒)分期</div>
                                    <div className="box-content">
                                        <div className="box-content1">
                                            <div className="box-col">
                                                <div className="col-left">首诊</div>
                                                <div className="col-right">当前</div>
                                            </div>
                                        </div>
                                        <div className="box-content2">
                                            <div className="box-col">
                                                <div className="col-left">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-first-diagnosis" value="Chronic Phase"/> 慢性期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-first-diagnosis" value="Accelerated Phase"/> 加速期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-first-diagnosis" value="Scute Phase Change"/> 急性变期</div>
                                                    </div>
                                                </div>
                                                <div className="col-right">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-current" value="Chronic Phase"/> 慢性期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-current" value="Accelerated Phase"/> 加速期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="CML-current" value="Scute Phase Change"/> 急性变期</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="box box-4">
                            <div className="box-type">MDS</div>
                            <div className="box-title">MDS | PSS-R 评分</div>
                            <div className="box-content">
                                <div className="box-content1">
                                    <div className="box-col">
                                        <div className="col-left">首诊</div>
                                        <div className="col-right">当前</div>
                                    </div>
                                </div>
                                <div className="box-content2">
                                    <div className="box-col">
                                        <div className="col-left">
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-first-diagnosis" value="Very Low Risk"/> 极低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-first-diagnosis" value="Low Risk"/> 低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-first-diagnosis" value="Medium Risk"/> 中危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-first-diagnosis" value="High Risk"/> 高危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-first-diagnosis" value="Very High Risk"/> 极高危</div>
                                            </div>
                                        </div>
                                        <div className="col-right">
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-current" value="Very Low Risk"/> 极低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-current" value="Low Risk"/> 低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-current" value="Medium Risk"/> 中危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-current" value="High Risk"/> 高危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="MDS-current" value="Very High Risk"/> 极高危</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>
            </div>

            <div className="section section-two">
            <div className="part-2">
                <div className="section-title">
                    <span className="title">急性髓系白血病WHO分型</span>
                </div>
                <div className="section-content">
                    <div className="section-row">
                    <div className="box box-5">
                        <div className="box box-5-1">
                            <div className="box-title">首诊时AML WHO分型</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML with recurrent genetic abnormalities"/> 1.AML伴重现性染色体异常</div>
                                    <div>1.AML with recurrent genetic abnormalities</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML with myelodysplasia-related change"/> 2.AML伴骨髓增生异常相关改变</div>
                                    <div>2.AML with myelodysplasia-related change</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="Therapy-related myeloid neoplasms"/> 3. 治疗相关髓系肿瘤</div>
                                    <div>3.Therapy-related myeloid neoplasmse</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML with myelodysplasia-related change"/> 4.AML非特定类型(NOS)</div>
                                    <div>4.AML, not otherwise specified</div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML微分化型"/> AML微分化型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML不伴成熟型"/> AML不伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="AML伴成熟型"/> AML伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性粒单核细胞白血病"/> 急性粒单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性全髓增殖伴骨髓纤维化"/> 急性全髓增殖伴骨髓纤维化</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性原始单核细胞白血病/急性单核细胞白血病"/> 急性原始单核细胞白血病/急性单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="纯红系细胞白血病"/> 纯红系细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性原始巨核细胞白血病"/> 急性原始巨核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性嗜碱性粒细胞白血病"/> 急性嗜碱性粒细胞白血病</li>
                                    </ul>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="Myeloid sarcoma"/> 5. 髓样肉瘤</div>
                                    <div>5.Myeloid sarcoma</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="Myeloid proliferations related to Down syndrome"/> 6. 唐氏综合征相关的髓系增殖</div>
                                    <div>6.Myeloid proliferations related to Down syndrome</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="Blastic plasmacytoid dendritic cell neoplasm"/> 7.原始浆细胞样树突细胞肿瘤.</div>
                                    <div>7.Blastic plasmacytoid dendritic cell neoplasm</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="系列未明急性白血病"/> 系列未明急性白血病</div>
                                    <div></div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="急性未分化型白血病"/> 急性未分化型白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="混合表型急性白血病"/> 混合表型急性白血病</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box box-5-2">
                            <div className="box-title">当前AML WHO分型</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML with recurrent genetic abnormalities"/> 1.AML伴重现性染色体异常</div>
                                    <div>1.AML with recurrent genetic abnormalities</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML with myelodysplasia-related change"/> 2.AML伴 髓增生异常相关改变</div>
                                    <div>2.AML with myelodysplasia-related change</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-first-diagnosis" value="Therapy-related myeloid neoplasms"/> 3. 治疗相关髓系肿瘤</div>
                                    <div>3.Therapy-related myeloid neoplasmse</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML, not otherwise specified"/> 4.AML非特定类型(NOS)</div>
                                    <div>4.AML, not otherwise specified</div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML微分化型"/> AML微分化型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML不伴成熟型"/> AML不伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="AML伴成熟型"/> AML伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="急性粒单核细胞白血病"/> 急性粒单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="急性全髓增殖伴骨髓纤维化"/> 急性全髓增殖伴骨髓纤维化</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="急性原始单核细胞白血病/急性单核细胞白血病"/> 急性原始单核细胞白血病/急性单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="纯红系细胞白血病"/> 纯红系细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="急性原始巨核细胞白血病"/> 急性原始巨核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="急性嗜碱性粒细胞白血病"/> 急性嗜碱性粒细胞白血病</li>
                                    </ul>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="Myeloid sarcoma"/> 5. 髓样肉瘤</div>
                                    <div>5.Myeloid sarcoma</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="Myeloid proliferations related to Down syndrome"/> 6. 唐氏综合征相关的髓系增殖</div>
                                    <div>6.Myeloid proliferations related to Down syndrome</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value="Blastic plasmacytoid dendritic cell neoplasm"/> 7.原始浆细胞样树突细胞肿瘤.</div>
                                    <div>7.Blastic plasmacytoid dendritic cell neoplasm</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value=""/> 系列未明急性白血病</div>
                                    <div></div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value=""/> 急性未分化型白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="AML-WHO-type-current" value=""/> 混合表型急性白血病</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space"></div>
                    </div>
                </div>
                </div>
            </div>
            <div className="block"></div>
        </div>
        );
    }
}

export default SectionTwo;
