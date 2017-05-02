import React, { Component } from 'react';
import './SectionSix.css'

class SectionSix extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionOneChange(event);
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
                            <div className="box-title">请列出生因子类药物(治疗中性粒细胞减少) (如果知道，请提供商品名;否则请提供通用名及厂家/或产地</div>
                            <div className="box-content">
                                <input type="text" name="" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input type="radio" name="" /> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tr>
                                        <td>计划的周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                    <tr>
                                        <td>实际给药周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input type="radio" name="" />治疗</div>
                            <div><input type="radio" name="" />预防</div>
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
                                <input type="text" name="" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input type="radio" name="" /> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tr>
                                        <td>计划的周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                    <tr>
                                        <td>实际给药周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input type="radio" name="" />治疗</div>
                            <div><input type="radio" name="" />预防</div>
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
                                <input type="text" name="" />
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box-2-1">
                                <div className="box-title">开始日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                            <div className="space"></div>
                            <div className="box-2-1">
                                <div className="box-title">结束日期</div>
                                <div className="box-content">
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                    <input type="text" name="" />
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-title"><input type="radio" name="" /> 如果是持续用药请勾选</div>
                            <div className="space"></div>
                            <div className="box-3-content">
                                <table>
                                    <tr>
                                        <td>计划的周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                    <tr>
                                        <td>实际给药周期数</td>
                                        <td><input type="text" name="" /></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="box box-4">
                            <div>治疗目的</div>
                            <div><input type="radio" name="" />治疗</div>
                            <div><input type="radio" name="" />预防</div>
                        </div>
                    </div>
                    <div className="block"></div>
                </div>
            </div>
        );
    }
}

export default SectionSix;
