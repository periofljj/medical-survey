import React, { Component } from 'react';
import './SectionThree.css'

class SectionThree extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.props.sectionThreeChange(event);
    }

    render() {
        return (
            <div className="section section-three">
                <div className="section-title">
                    <span className="title">第三部分 关键的诊断试验/检测结果</span>
                    <label>
                        <span>该患者未做任何基因或染色体检测</span>
                        <input type="checkbox" />
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
                                            <span>PD1/PDL1/PDL2</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>HPV人乳头瘤病毒</span>
                                            <label>
                                                <input type="radio" name="hpv" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="hpv" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="hpv" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="hpv" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>CD20</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>CD30</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>CD38</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>雌激素受体ER</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>孕激素受体PR</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>HER2</span>
                                            <label>
                                                <input type="radio" name="her2" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" name="her2-tests" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2-tests" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2-tests" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="her2-tests" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>RET重排</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>ROS-1基因突变</span>
                                            <label>
                                                <input type="radio" />
                                                <span>阳性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>阴性</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>N-RAS</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>K-RAS</span>
                                            <label>
                                                <input type="radio" name="k-ras" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="k-ras" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="k-ras" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="k-ras" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>BRAF</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>ALK</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>C-MET</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>C-KIT</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr><tr>
                                        <td>
                                            <span>FGFR</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>ZAP-70</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>血清B2M</span>
                                            <label>
                                                <input type="radio" />
                                                <span>升高</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>降低</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>Mitotic Index</span>
                                            <label>
                                                <input type="radio" name="mitotic-index" />
                                                <span>高</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="mitotic-index" />
                                                <span>低</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="mitotic-index" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="mitotic-index" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>CTC循环肿瘤细胞</span>
                                            <label>
                                                <input type="radio" name="ctc" />
                                                <span>预后良好</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="ctc" />
                                                <span>预后不良</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="ctc" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="ctc" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>VEGF</span>
                                            <label>
                                                <input type="radio" name="vegf" />
                                                <span>升高</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="vegf" />
                                                <span>正常/低</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="vegf" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" name="vegf" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>FLT3</span>
                                            <label>
                                                <input type="radio" />
                                                <span>是-突变</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>否-野生型</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>正在等结果</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>KI-67抗体水平</span>
                                            <input className="input-text" type="text" />
                                            <label>
                                                <input type="radio" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="left-box-container">
                                <div className="box">
                                    <span>EGFR</span>
                                    <label>
                                        <input type="radio" name="egfr" />
                                        <span>是-突变</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="egfr" />
                                        <span>否-野生型</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="egfr" />
                                        <span>正在等结果</span>
                                    </label>
                                    <label>
                                        <input type="radio" name="egfr" />
                                        <span>未检测</span>
                                    </label>
                                </div>
                                <div className="box">
                                    <span>如果EGFR发生突变，请知名突变位点</span>
                                </div>
                                <div className="box">
                                    <label>
                                        <input type="radio" />
                                        <span>L858R</span>
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        <span>T790M</span>
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        <span>外显子19缺失</span>
                                    </label>
                                    <label>
                                        <input type="radio" />
                                        <span>其他</span>
                                    </label>
                                    <label>
                                        <input type="radio" />
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
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="right-box-container">
                                <div className="box">
                                    <div className="box-row">
                                        <span>BRCA1</span>
                                        <label>
                                            <input type="radio" />
                                            <span>是-突变</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>否-野生型</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>正在等结果</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>未检测</span>
                                        </label>
                                    </div>
                                    <div className="box-row">
                                        <span>BRCA2</span>
                                        <label>
                                            <input type="radio" />
                                            <span>是-突变</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>否-野生型</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>正在等结果</span>
                                        </label>
                                        <label>
                                            <input type="radio" />
                                            <span>未检测</span>
                                        </label>
                                    </div>
                                    <div className="box-row">
                                        <div>
                                            <span>如果BRAF1和/或BRAF2发生突变，请指明突变的起源</span>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" />
                                                <span>遗传性的(生殖系细胞来源的)</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" />
                                                <span>Denovo(体细胞来源的)</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" />
                                                <span>两者都有</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>不知道</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="radio" />
                                                <span>前一次治疗之前</span>
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
                                        <input type="radio" name="sct-eligible" />
                                        已做过
                                    </label>
                                    <label>
                                        <input type="radio" name="sct-eligible" />
                                        适合做但没做过, 也不计划做
                                    </label>
                                    <label>
                                        <input type="radio" name="sct-eligible" />
                                        适合做但没做过, 计划做
                                    </label>
                                    <label>
                                        <input type="radio" name="sct-eligible" />
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
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>Del 11q</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>Del 17p</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>Trisomy12</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>Del 13q</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>TP53</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>lGvh</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="chromosomal-abnormalities-in-cll" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                        <th>CML染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>Ph</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>T315i</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                        <th>MM染色体异常</th>
                                        <th>最近一次监测时间</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>Del 13q</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>T(4;14)</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>无变异</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>Del 5q</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                                    <input type="radio" />
                                                    <span>T(8;21)</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>T(15;17)</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>inv(3)</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>inv(6)</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>无</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>Del 11q23</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>其他</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                                    <input type="radio" />
                                                    <span>高 (至少2/5的特定微卫星标记物显示不稳定)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>低</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>正在等结果</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                                    <input type="radio" />
                                                    <span>EGFR-扩增(没有EGFR VIII重排)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>EGFR-VIII重排 (没有扩增)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>EGFR-既有扩增,也有VIII重排</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>未检测</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>确诊时</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗之前</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>当前治疗期间</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
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
                                                    <input type="radio" name="castration-resistant" />
                                                    <span>是</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="castration-resistant" />
                                                    <span>不知道</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" name="castration-resistant" />
                                                    <span>否</span>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="col-2">
                                            <div>
                                                <label>
                                                    <input type="radio" name="platinum-tatus" />
                                                    <span>铂类难控制</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="platinum-tatus" />
                                                    <span>铂类敏感</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name="platinum-tatus" />
                                                    <span>不知道(一线铂类治疗中)</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" />
                                                    <span>铂类耐受</span>
                                                </label>
                                                <label>
                                                    <input type="radio" />
                                                    <span>不知道</span>
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
                                            <input type="text" name="psa-current" />
                                            <label>
                                                <input type="checkbox" name="psa-current" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>前一次治疗之前</span>
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
                                            <input type="text" name="gleasonscore" />
                                            <label>
                                                <input type="checkbox" name="gleasonscore" />
                                                <span>未检测</span>
                                            </label>
                                        </td>
                                        <td>
                                            <label>
                                                <input type="checkbox" />
                                                <span>确诊时</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>当前治疗期间</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>当前治疗之前</span>
                                            </label>
                                            <label>
                                                <input type="checkbox" />
                                                <span>前一次治疗之前</span>
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
