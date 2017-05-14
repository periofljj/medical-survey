import React, { Component } from 'react';
import './SectionFour.css'

class SectionFour extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionFourChange(event);
    }

    render() {
        return (
            <div className="section section-four">
                <div className="section-title">
                    <span className="title">第四部分 外科操作及放疗</span>
                </div>

                <div className="section-content">
                    <div className="left-container">
                        <div className="row-title">
                            <span>4.1 针对其肿瘤，该患者是否做过手术治疗</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="surgery" value="yes"/>
                                <span> 是</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="surgery" value="no"/>
                                <span> 否</span>
                            </label>
                        </div>
                        <div className="row-content">
                            <div className="hint">
                                <span>如果做过，请在4A填写治疗性手术名称；</span>
                                <span>4.1.1 另请评估当前病人肿瘤是否可切除</span>
                            </div>
                            <div className="box">
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="yes"/>
                                        <span>可以手术切除</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="no"/>
                                        <span>不能手术切除</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="maybe"/>
                                        <span>可能可以手术切除</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="resection-applicable" value="unknown"/>
                                        <span>不知道</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="row-title">
                            <span>4A- 请详细描述与肿瘤相关的外科治疗情况</span>
                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第一次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-name"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="first-surgery-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-surgery-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-surgery-date"/>
                                </div>
                            </div>
                            <div className="box-3">
                                <div className="box-title">
                                    <span>公司填写</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="first-surgery-company"/>
                                </div>
                            </div>
                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第二次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-name"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="second-surgery-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-surgery-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-surgery-date"/>
                                </div>
                            </div>
                            <div className="box-3">
                                <div className="box-title">
                                    <span>公司填写</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="second-surgery-company"/>
                                </div>
                            </div>
                        </div>
                        <div className="box-row">
                            <div className="box-1">
                                <div className="box-title">
                                    <span>第三次治疗性手术(名称、部位范围、方式等)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text"  name="third-surgery-name"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>手术日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="third-surgery-date"/>
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="third-surgery-date"/>
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="third-surgery-date"/>
                                </div>
                            </div>
                            <div className="box-3">
                                <div className="box-title">
                                    <span>公司填写</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} type="text" name="third-surgery-company"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="row-title">
                            <span>4.2 针对其肿瘤，该患者是否做过放射治疗</span>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="radical" value="yes"/>
                                <span> 是</span>
                            </label>
                            <label>
                                <input onChange={this.handleInputChange} type="radio" name="radical" value="no"/>
                                <span> 否</span>
                            </label>
                        </div>

                        <div className="row-content">
                            <span>4B-如果是， 请详细描述与肿瘤治疗有关的放射治疗</span>
                        </div>

                        <div className="box-row-1">
                            <div className="row-title"><span>第一个疗程</span></div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>开始日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-start-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-start-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-start-date"/>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>结束日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-end-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-end-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="first-radical-end-date"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>照射剂量</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="first-radical-irradiation-dosage-perDay"/>
                                        <span> 每日GY</span>
                                    </div>
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="first-radical-irradiation-dosage-total"/>
                                        <span> 总计GY</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-row-2">
                            <div className="box-3">
                                <div className="box-title">
                                    <span>放疗方式</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="first-radical-way" value="internal"/>
                                            <span> 内放疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="first-radical-way" value="external"/>
                                            <span> 外放疗</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box-4">
                                <div className="box-title">
                                    <span>何时给予放疗</span>
                                </div>
                                <div className="box-content">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 与化疗同步</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 与化疗序贯进⾏</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="first-radical-time"/>
                                        <span> 独⽴作为姑息或者单独治疗</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="box-row-1">
                            <div className="row-title"><span>第二个疗程</span></div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>开始日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-start-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-start-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-start-date"/>
                                </div>
                            </div>
                            <div className="box-1">
                                <div className="box-title">
                                    <span>结束日期(年/月/日)</span>
                                </div>
                                <div className="box-content">
                                    <input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-end-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-end-date"/><input onChange={this.handleInputChange} className="date-input" type="number" name="second-radical-end-date"/>
                                </div>
                            </div>
                            <div className="box-2">
                                <div className="box-title">
                                    <span>照射剂量</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="second-radical-irradiation-dosage-perDay"/>
                                        <span> 每日GY</span>
                                    </div>
                                    <div>
                                        <input onChange={this.handleInputChange} type="text" name="second-radical-irradiation-dosage-total"/>
                                        <span> 总计GY</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="box-row-2">
                            <div className="box-3">
                                <div className="box-title">
                                    <span>放疗方式</span>
                                </div>
                                <div className="box-content">
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="second-radical-way" value="internal"/>
                                            <span> 内放疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="second-radical-way" value="external"/>
                                            <span> 外放疗</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="box-4">
                                <div className="box-title">
                                    <span>何时给予放疗</span>
                                </div>
                                <div className="box-content">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 与化疗同步</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 与化疗序贯进⾏</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="second-radical-time"/>
                                        <span> 独⽴作为姑息或者单独治疗</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block"></div>
            </div>
        );
    }
}

export default SectionFour;
