import React, { Component } from 'react';
import './tablequestion.css';

class TableQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.props.newDoctorSurveyChange(event);
    }
    render() {
        return (
            <div className="table-question">
                 <table>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>在28天报告期内, 您亲自看的恶性肿瘤病人有多少位?(人数,不是人次)</td>
                            <td><input type="text" name="报告期间亲自看的" onChange={this.handleInputChange}/> 位</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>在上述肿瘤患者中，您亲自负责其抗肿瘤治疗的病人有多少位?</td>
                            <td><input type="text" name="亲自负责治疗的" onChange={this.handleInputChange}/> 位</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>接受治疗的这些患者中, 有多少人在28天报告期内是首次接受治疗的?</td>
                            <td><input type="text" name="首次接收治疗的" onChange={this.handleInputChange}/> 位</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>在28天报告期内，您积极参与肿瘤患者治疗的天数(不包括休假，病假或参与其他行政工作)</td>
                            <td><input type="text" name="积极参与肿瘤治疗的天数" onChange={this.handleInputChange}/> 天</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>一周内您治疗了多少位当前正接受细胞毒药物/靶向/和/或内分 药物或免疫治疗的癌症患者?</td>
                            <td><input type="text" name="治疗接收细胞毒/靶向/内分泌/免疫治疗的患者数" onChange={this.handleInputChange}/> 位，>=6位者请继续</td>
                        </tr>
                    </tbody>
                </table>
            </div>     
        );
    }
}

export default TableQuestion;
