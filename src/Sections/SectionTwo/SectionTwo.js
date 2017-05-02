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
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />0</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳb</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-2">
                                <div className="box box-1-2-1">
                                    <div className="box-title">TNM分期</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div>T <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            <div>N <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            <div>M <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2-2">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局限期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部晚期</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />晚期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部晚期</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-1-3">
                                <div className="box-title">BCLC Stage - Liver cancer 巴塞罗那临床肝癌分期</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 0</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> A</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> B</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> C</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> D</div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-4">
                                <div className="box-title">患者当前分期(含妇科FI GO分期，脑瘤WHO分级</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />0</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲb</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳ</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳb</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅰc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅱc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅲc</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳa</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />Ⅳc</div>
                                    </div>
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-1-2">
                                <div className="box box-1-2-1">
                                    <div className="box-title">TNM分期</div>
                                    <div className="box-content">
                                        <div className="box-col">
                                            <div>T <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            <div>N <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                            <div>M <input onChange={this.handleInputChange} type="radio" name="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box box-1-2-2">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局限期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部晚期</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />晚期</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" />局部晚期</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-1-3">
                                <div className="box-title">BCLC Stage - Liver cancer 巴塞罗那临床肝癌分期</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 0</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> A</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> B</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> C</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> D</div>
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
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅳb</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="ann-arbor" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳb</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-content3">
                                        <div className="box-left">
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 低度恶性/惰性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 中度恶性/侵袭性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" />  度恶性/ 侵袭性</div>
                                        </div>
                                        <div className="box-right">
                                             <div><input onChange={this.handleInputChange} type="radio" name="" /> 低度恶性/惰性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" /> 中度恶性/侵袭性</div>
                                            <div><input onChange={this.handleInputChange} type="radio" name="" />  度恶性/ 侵袭性</div>
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
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳb</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅰb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅲb</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳ</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳa</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> Ⅳb</div>
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
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M0</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M2</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M1</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M3</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M4</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M5</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" />M6</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M7</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M0</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M2</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M1</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M3</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M4</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M5</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M6</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> M7</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 </div>
                                 <div className="box box-3-2">
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
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L1期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L2期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L3期</div>
                                                </div>
                                            </div>
                                            <div className="col-right">
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L1期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L2期</div>
                                                </div>
                                                <div className="col-content">
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> L3期</div>
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
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> A期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> B期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> C期</div>
                                                    </div>
                                                </div>
                                                <div className="col-right">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> A期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> B期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> C期</div>
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
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 慢性期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 加速期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 急性变期</div>
                                                    </div>
                                                </div>
                                                <div className="col-right">
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 慢性期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 加速期</div>
                                                    </div>
                                                    <div className="col-content">
                                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 急性变期</div>
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
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 极低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 中危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 高危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 极高危</div>
                                            </div>
                                        </div>
                                        <div className="col-right">
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 极低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 低危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 中危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 高危</div>
                                            </div>
                                            <div className="col-content">
                                                <div><input onChange={this.handleInputChange} type="radio" name="" /> 极高危</div>
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
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 1.AML伴重现性染色体异常</div>
                                    <div>1.AML with recurrent genetic abnormalities</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 2.AML伴骨髓增生异常相关改变</div>
                                    <div>2.AML with myelodysplasia-related change</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 4.AML非特定类型(NOS)</div>
                                    <div>4.AML, not otherwise specified</div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 微分化型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 不伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性粒单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性全髓增殖伴骨髓纤维化</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性原始单核细胞白血病/急性单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 纯红系细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性原始巨核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性嗜碱性粒细胞白血病</li>
                                    </ul>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 5. 髓样肉瘤</div>
                                    <div>5.Myeloid sarcoma</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 6. 唐氏综合征相关的髓系增殖</div>
                                    <div>6.Myeloid proliferations related to Down syndrome</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 7.原始浆细胞样树突细胞肿瘤.</div>
                                    <div>7.Blastic plasmacytoid dendritic cell neoplasm</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 系列未明急性白血病</div>
                                    <div></div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性未分化型白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 混合表型急性白血病</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box box-5-2">
                            <div className="box-title">当前AML WHO分型</div>
                            <div className="box-content">
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 1.AML伴重现性染色体异常</div>
                                    <div>1.AML with recurrent genetic abnormalities</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 2.AML伴 髓增生异常相关改变</div>
                                    <div>2.AML with myelodysplasia-related change</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 4.AML非  特定类型(NOS)</div>
                                    <div>4.AML, not otherwise specified</div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 微分化型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 不伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> AML 伴成熟型</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性粒单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性全髓增殖伴骨髓纤维化</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性原始单核细胞白血病/急性单核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 纯红系细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性原始巨核细胞白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性嗜碱性粒细胞白血病</li>
                                    </ul>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 5. 髓样肉瘤</div>
                                    <div>5.Myeloid sarcoma</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 6. 唐氏综合征相关的髓系增殖</div>
                                    <div>6.Myeloid proliferations related to Down syndrome</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 7.原始浆细胞样树突细胞肿瘤.</div>
                                    <div>7.Blastic plasmacytoid dendritic cell neoplasm</div>
                                </div>
                                <div className="box-col">
                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 系列未明急性白血病</div>
                                    <div></div>
                                </div>
                                <div className="col-list">
                                    <ul>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 急性未分化型白血病</li>
                                        <li><input onChange={this.handleInputChange} type="radio" name="" /> 混合表型急性白血病</li>
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
