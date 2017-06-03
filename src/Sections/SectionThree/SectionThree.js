import React, { Component } from 'react';
import './SectionThree.css'

class SectionThree extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.chooseAllNotInspect = this.chooseAllNotInspect.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionThreeChange(event);
    }

    chooseAllNotInspect(event) {
        var value = event.target.checked;
        var elements = document.getElementsByClassName('section-3-not-inspected');
        var obj;
        if (value) {
            for (var i = 0; i < elements.length; i++) {
                elements[i].checked = true;
                obj = {
                    target: {
                        type: 'radio',
                        value: elements[i].value,
                        name: elements[i].name
                    }
                }
                this.props.sectionThreeChange(obj);
            }
        }
        else {
            for (var j = 0; j < elements.length; j++) {
                elements[j].checked = false;
                obj = {
                    target: {
                        type: 'radio',
                        value: elements[j].value,
                        name: elements[j].name
                    }
                }
                this.props.sectionThreeChange(obj);
            }
        }
    }

    render() {
        return (
            <div className="section section-three">
                <div className="section-title">
                    <span className="title">第三部分 关键的诊断试验/检测结果</span>
                    <label>
                        <span>该患者未做任何基因或染色体检测</span>
                        <input onChange={this.chooseAllNotInspect} type="checkbox" name="none-gene-test" value="yes"/>
                    </label>
                </div>

                <div className="section-content">
                    <div className="container-wrapper">
                        <div className="left-container">
                            <table className="table-1 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>基因突变检测及结果</th>
                                        <th>最近一次检查结果</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="test-name">PD1/PDL1/PDL2</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="PD-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PD-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">HPV人乳头瘤病毒</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="HPV-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HPV-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">CD20</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="CD20-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD20-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">CD30</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="CD30-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD30-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">CD38</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="CD38-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="CD38-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">雌激素受体ER</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="ER-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ER-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">孕激素受体PR</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="PR-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="PR-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">HER2</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="HER2-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="HER2-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">RET重排</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="RET-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="RET-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">ROS-1基因突变</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-gene-mutation-test" value="Positive"/>
                                                <span> 阳性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-gene-mutation-test" value="Negative"/>
                                                <span> 阴性</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="ROS-1-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ROS-1-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">N-RAS</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="N-RAS-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="N-RAS-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">K-RAS</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="K-RAS-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="K-RAS-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">BRAF</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="BRAF-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">ALK</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="ALK-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ALK-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">C-MET</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="C-MET-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-MET-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">C-KIT</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="C-KIT-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="C-KIT-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr><tr>
                                        <td>
                                            <span className="test-name">FGFR</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="FGFR-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FGFR-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">ZAP-70</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="ZAP-70-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ZAP-70-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">血清B2M</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-mutation-test" value="Rise"/>
                                                <span> 升高</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-mutation-test" value="Reduce"/>
                                                <span> 降低</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="B2M-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="B2M-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">Mitotic Index</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-mutation-test" value="High"/>
                                                <span> 高</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-mutation-test" value="Low"/>
                                                <span> 低</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="mitotic-index-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="mitotic-index-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">CTC循环肿瘤细胞</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-mutation-test" value="Good"/>
                                                <span> 预后良好</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-mutation-test" value="Not Good"/>
                                                <span> 预后不良</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="ctc-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="ctc-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">VEGF</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-mutation-test" value="Rise"/>
                                                <span> 升高</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-mutation-test" value="Low"/>
                                                <span> 正常/低</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="vegf-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="vegf-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">FLT3</span>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-mutation-test" value="yes"/>
                                                <span> 是-突变</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-mutation-test" value="no"/>
                                                <span> 否-野生型</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-mutation-test" value="Wait for result"/>
                                                <span> 正在等结果</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="FLT3-gene-mutation-test" value="Not detected"/>
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="FLT3-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">KI-67抗体水平</span>
                                            <input onChange={this.handleInputChange} className="input-test" type="test" name="KI-67-gene-mutation-test"/>&nbsp;&nbsp;
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="KI-67-gene-mutation-test" value="Not detected"/>
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="KI-67-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="KI-67-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="KI-67-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="KI-67-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="test-name">其它</span>
                                            <input onChange={this.handleInputChange} className="input-test" type="test" name="-gene-mutation-test"/>&nbsp;&nbsp;
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="left-box-container">
                                <div className="box">
                                    <span className="test-name">EGFR</span>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-test" value="yes"/>
                                        <span> 是-突变</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-test" value="no"/>
                                        <span> 否-野生型</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-test" value="Wait for result"/>
                                        <span> 正在等结果</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="EGFR-gene-mutation-test" value="Not detected"/>
                                        <span> 未检测</span>
                                    </label>
                                </div>
                                <div className="box">
                                    <span>如果EGFR发生突变，请指明突变位点</span>
                                </div>
                                <div className="box">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-locus" value="L858R"/>
                                        <span> L858R</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-locus" value="T790M"/>
                                        <span> T790M</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-locus" value="Lost Exon19"/>
                                        <span> 外显子19缺失</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-locus" value="Other"/>
                                        <span> 其他</span>
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-mutation-locus" value="Unknow"/>
                                        <span>不知道</span>
                                    </label>
                                </div>
                                <div className="box">
                                    <div className="box-title">
                                        <span>最近一次检测时间</span>
                                    </div>
                                    <div className="box-row">
                                        <div>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="EGFR-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-box-container">
                                <div className="box">
                                    <div className="box-row">
                                        <span className="test-name">BRCA1</span>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA1-gene-mutation-test" value="yes"/>
                                            <span> 是-突变</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA1-gene-mutation-test" value="no"/>
                                            <span> 否-野生型</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA1-gene-mutation-test" value="Wait for result"/>
                                            <span> 正在等结果</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="BRCA1-gene-mutation-test" value="Not detected"/>
                                            <span> 未检测</span>
                                        </label>
                                    </div>
                                    <div className="box-row">
                                        <span className="test-name">BRCA2</span>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA2-gene-mutation-test" value="yes"/>
                                            <span> 是-突变</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA2-gene-mutation-test" value="no"/>
                                            <span> 否-野生型</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" name="BRCA2-gene-mutation-test" value="Wait for result"/>
                                            <span> 正在等结果</span>
                                        </label>
                                        <label>
                                            <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="BRCA2-gene-mutation-test" value="Not detected"/>
                                            <span> 未检测</span>
                                        </label>
                                    </div>
                                    <div className="box-row">
                                        <div>
                                            <span>如果BRAF1和/或BRAF2发生突变，请指明突变的起源</span>
                                        </div>
                                        <div>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-mutation-origin" value="Hereditary"/>
                                                <span>遗传性的(生殖系细胞来源的)</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-mutation-origin" value="Denovo"/>
                                                <span>Denovo(体细胞来源的)</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-mutation-origin" value="Both"/>
                                                <span>两者都有</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-mutation-origin" value="Unknow"/>
                                                <span>不知道</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-recent-inspection-time" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-recent-inspection-time" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-recent-inspection-time" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="radio" name="BRAF1orBRAF2-gene-recent-inspection-time" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="right-container">
                            <div className="box">
                                <div className="box-title">
                                    患者是否接受过⻣髓或⼲细胞移植？（仅限⾎液肿瘤）
                                </div>
                                <div className="box-content">
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="asct" value="Did"/>
                                        已做过
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="asct" value="Suitable,didn't do,don't plan to"/>
                                        适合做但没做过, 也不计划做
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="asct" value="Suitable,didn't do,plan to"/>
                                        适合做但没做过, 计划做
                                    </label>
                                    <label>
                                        <input onChange={this.handleInputChange} type="radio" name="asct" value="Not suitable"/>
                                        未做, 因为不适合
                                    </label>
                                </div>
                            </div>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>CLL染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="Del 11q"/>
                                                    <span> Del 11q</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="Del 17p"/>
                                                    <span> Del 17p</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="Trisomy12"/>
                                                    <span> Trisomy12</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="other"/>
                                                    <span> 其他</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="no-abnormalities"/>
                                                    <span> 无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="Del 13q"/>
                                                    <span> Del 13q</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="TP53"/>
                                                    <span> TP53</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="lgVH"/>
                                                    <span> lgVH</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cll" value="Wait for result"/>
                                                    <span> 正在等结果</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="chromosomal-abnormalities-in-cll" value="Not detected"/>
                                                    <span> 未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cll-recent-inspection" value="确诊时"/>
                                                    <span> 确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cll-recent-inspection" value="当前治疗之前"/>
                                                    <span> 当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cll-recent-inspection" value="当前治疗期间"/>
                                                    <span> 当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cll-recent-inspection" value="前一次治疗之前"/>
                                                    <span> 前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>CML染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cml" value="Ph"/>
                                                    <span> Ph</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cml" value="other"/>
                                                    <span> 其他</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cml" value="no-abnormalities"/>
                                                    <span> 无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cml" value="T315i"/>
                                                    <span> T315i</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-cml" value="Wait for result"/>
                                                    <span> 正在等结果</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="chromosomal-abnormalities-in-cml" value="Not detected"/>
                                                    <span> 未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cml-recent-inspection"  value="确诊时"/>
                                                    <span> 确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cml-recent-inspection" value="当前治疗之前"/>
                                                    <span> 当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cml-recent-inspection" value="当前治疗期间"/>
                                                    <span> 当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="cml-recent-inspection" value="前一次治疗之前"/>
                                                    <span> 前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>MM染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>Del 13q</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>T(4;14)</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>Del 5q</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="chromosomal-abnormalities-in-mm"/>
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="mm-recent-inspection" value="确诊时"/>
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="mm-recent-inspection" value="当前治疗之前"/>
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="mm-recent-inspection" value="当前治疗期间"/>
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="mm-recent-inspection" value="前一次治疗之前"/>
                                                    <span>前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>AML染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>T(8;21)</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>T(15;17)</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>inv(3)</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>inv(6)</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>无</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>Del 11q23</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="chromosomal-abnormalities-in-aml" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="chromosomal-abnormalities-in-aml" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="aml-recent-inspection" value="确诊时"/>
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="aml-recent-inspection" value="当前治疗之前"/>
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="aml-recent-inspection" value="当前治疗期间"/>
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="aml-recent-inspection" value="前一次治疗之前"/>
                                                    <span>前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>微卫星不稳定性(仅限结直肠癌)</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI" />
                                                    <span>高 (至少2/5的特定微卫星标记物显示不稳定)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI" />
                                                    <span>低</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="CRC-MSI" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI-recent-inspection" value="确诊时" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI-recent-inspection" value="当前治疗之前" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI-recent-inspection" value="当前治疗期间" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="CRC-MSI-recent-inspection" value="前一次治疗之前" />
                                                    <span>前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-2 table table-bordered">
                                <thead>
                                    <tr>
                                        <th>EGFR扩增检测(仅限脑胶质瘤)</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EGFR扩增检测" />
                                                    <span>EGFR-扩增(没有EGFR VIII重排)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EGFR扩增检测" />
                                                    <span>EGFR-VIII重排 (没有扩增)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EGFR扩增检测" />
                                                    <span>EGFR-既有扩增,也有VIII重排</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" className="section-3-not-inspected" name="EGFR扩增检测" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EFGR-amplification-recent-inspection" value="确诊时" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EFGR-amplification-recent-inspection" value="当前治疗之前" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EFGR-amplification-recent-inspection" value="当前治疗期间"/>
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="EFGR-amplification-recent-inspection" value="前一次治疗之前"/>
                                                    <span>前一次治疗之前</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-3 table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="col-1 text-center">以下检测仅限前列腺癌</th>
                                        <th className="col-2 text-center">以下检测仅限妇科肿瘤</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="col-1 text-center">是否为去势抵抗性肿瘤</td>
                                        <td className="col-2 text-center">该患者对铂类药物敏感性</td>
                                    </tr>
                                    <tr>
                                        <td className="col-1">
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="castration-resistant" />
                                                    <span>是</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="castration-resistant" />
                                                    <span>不知道</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="castration-resistant" />
                                                    <span>否</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="col-2">
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="platinum-sensitive" />
                                                    <span> 铂类难控制</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="platinum-sensitive" />
                                                    <span> 铂类敏感</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="platinum-sensitive" />
                                                    <span> 不知道(一线铂类治疗中)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="platinum-sensitive" />
                                                    <span> 铂类耐受</span>
                                                </label>
                                                <label>
                                                    <input onChange={this.handleInputChange} type="radio" name="platinum-sensitive" />
                                                    <span> 不知道</span>
                                                </label>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="table-4 table table-bordered">
                                <thead>
                                    <tr>
                                        <th className="text-center">当前的PSA水平(ng/ml)</th>
                                        <th className="text-center">最近一次检测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input onChange={this.handleInputChange} type="test" name="psa-level" />
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" className="section-3-not-inspected" name="psa-level" />
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="psa-recent-inspection" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="psa-recent-inspection" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="psa-recent-inspection" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="psa-recent-inspection" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="text-center">
                                            Gleason评分-评分分值合计(2-10)
                                        </td>
                                        <td className="text-center">
                                            最近一次监测时间
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input onChange={this.handleInputChange} type="number" name="gleason-grade" min="2" max="10"/>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" className="section-3-not-inspected" name="gleason-grade" />
                                                <span> 未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="gleason-grade-recent-inspection" value="确诊时"/>
                                                <span> 确诊时</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="gleason-grade-recent-inspection" value="当前治疗期间"/>
                                                <span> 当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="gleason-grade-recent-inspection" value="当前治疗之前"/>
                                                <span> 当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input onChange={this.handleInputChange} type="checkbox" name="gleason-grade-recent-inspection" value="前一次治疗之前"/>
                                                <span> 前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="block"></div>
            </div>
        );
    }
}

export default SectionThree;
