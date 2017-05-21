import React, { Component } from 'react';
import './SectionSix.css'

class SectionSix extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionSixChange(event);
    }

    render() {
        return (
            <div className="section section-six">
                <div className="section-title">
                    <span className="title">第六部分 既往支持药物</span>
                    <span>请填写最近期的既往支持药物，当前(2017. 1月-3月)仍在使用的 持药物请填写在第8部分</span>
                    <span>如果病人既往使用过治疗中性粒减少的生长因子类药物(升白药)，请完成下表:</span>
                </div>
                <div className="section-content">
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出生因子类药物(治疗中性粒细胞减少) 如果知道请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="growth-factor-name" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-start-year" />
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-start-month" />
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-start-day" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-end-year" />
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-end-month" />
                                    <input onChange={this.handleInputChange} type="text" name="growth-factor-end-day" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="growth-factor-continuing-drug" value="yes"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-planned-perid" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="growth-factor-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="growth-factor-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="section-title">
                        <span>如果病人既往使用过治疗贫血的促红细胞生成素类药物(促红素)，请完成下表:</span>
                    </div>
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出促红细胞生成素类药物(治疗贫血) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="erythropoietin-name" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-start-year" />
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-start-month" />
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-start-day" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-end-year" />
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-end-month" />
                                    <input onChange={this.handleInputChange} type="text" name="erythropoietin-end-day" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="erythropoietin-continuing-drug" value="yes"/> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-planned-period" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="erythropoietin-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="erythropoietin-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="erythropoietin-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="space"></div>
                    <div className="section-title">
                        <span>如果病人既往使用过骨转移相关的治疗药物，请完成下表:</span>
                    </div>
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box-title">请列出药物名称(如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input onChange={this.handleInputChange} type="text" name="bone-metastasis-name" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-start-year" />
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-start-month" />
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-start-day" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-end-year" />
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-end-month" />
                                    <input onChange={this.handleInputChange} type="text" name="bone-metastasis-end-day" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-continuing-drug" /> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>计划的周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-planned-period" /></td>
                                        </tr>
                                        <tr>
                                            <td>实际给药周期数</td>
                                            <td><input onChange={this.handleInputChange} type="text" name="bone-metastasis-actual-period" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-aim" value="治疗"/> 治疗</div>
                            <div><input onChange={this.handleInputChange} type="radio" name="bone-metastasis-aim" value="预防"/> 预防</div>
                        </div>
                    </div>
                    <div className="block"></div>
                </div>
            </div>
        );
    }
}

export default SectionSix;
