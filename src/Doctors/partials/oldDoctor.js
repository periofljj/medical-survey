import React, { Component } from 'react';
import DoctorInfo from '../components/doctorInfo/doctorInfo';
import PageTitle from '../components/pageTitle/pageTitle';
import SixQuestions from '../components/sixQuestions/sixQuestions';
import TableQuestion from '../components/tablequestion/tablequestion';
import Button from '../components/button/button';
import './oldDoctor.css';


class OldDoctorSurvey extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.save = this.save.bind(this);
    }
    handleInputChange(event) {
        this.props.oldDoctorSurveyChange(event);
    }

    render() {
        return (
            <div>
                <PageTitle pageTitleChange={this.handleInputChange}></PageTitle>
                <DoctorInfo doctorInfoChange={this.handleInputChange}></DoctorInfo>
                <div className="reporter-info">
                    <div className="reporter-title">一、报告人基本信息</div>
                    <div className="reporter-content">
                         <div className="reporter-line">
                            <div className="reporter-line">
                                <span>A1.医院名称</span> <input type="text" className="input-text" name="医院名称" onChange={this.handleInputChange}/>
                            </div>
                            <div className="reporter-line">
                                <span>A2.医生姓名</span>
                                <input type="text" className="input-text" name="医生姓名" onChange={this.handleInputChange}/>
                                <span className="input-text">A3.目前所在科室</span>
                                <input type="text" className="input-text" name="科室" onChange={this.handleInputChange}/>
                            </div>
                            <div className="reporter-line">
                                <span>A4.您本季度是否出诊</span>
                                <label>
                                    <span className="input-text">1.是 </span>
                                    <input type="radio" name="本季度出诊" value="是" onChange={this.handleInputChange}/>
                                </label>
                                <label>
                                    <span className="input-text">2.否 </span>
                                    <input type="radio" name="本季度出诊" value="否" onChange={this.handleInputChange}/>
                                </label>
                                <label>
                                    <span className="input-text">3.从来不出诊 </span>
                                    <input type="radio" name="本季度出诊" value="从来不出诊" onChange={this.handleInputChange}/>
                                </label>
                            </div>
                            <div className="reporter-line">
                                <div>A5.如果您出门诊:</div>
                                <div>
                                    <ul>
                                        <li><span>A5.1每周出 </span><input type="text" name="出门诊频率" onChange={this.handleInputChange}/> <span>个半天</span></li>
                                        <li><span>A5.2每个半天看多少位 </span><input type="text" name="诊断恶性肿瘤病人(人/半天)" onChange={this.handleInputChange}/> <span>恶性肿瘤病人</span></li>
                                    </ul>  
                                </div>
                            </div>
                            <div className="reporter-line">
                                <span>A8.完成６份病例的日期是</span>
                                <input type="text" onChange={this.handleInputChange}/> 年 <input type="text" name="病例完成日期" onChange={this.handleInputChange}/> 月 <input type="text" onChange={this.handleInputChange}/> 日
                            </div>
                            <TableQuestion></TableQuestion>
                            <div className="reporter-line">
                                <span>A23.针对过去一年，您治疗的原发肿瘤患者(您接触较多或比较熟悉的)，请填写以下表格： (注：横向三栏合计 1）+2）+3）= 100%)</span>
                                <table className="talbe table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>原发肿瘤名称</th>
                                            <th>1) 最近一年新确诊的患者比例</th>
                                            <th>2) 确认超过一年以上复发和/或转诊患者比例 %</th>
                                            <th>3) 确认超过一年以上既未复发也未转诊患者比例 %</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>非小细胞癌(1)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>乳腺癌(2)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>肝癌(3)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>结直肠癌(4)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>卵巢癌(5)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>前列腺癌(6)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>胃癌(7)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>胰腺癌(8)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>急性髓性白血病(9)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>多发性骨髓瘤(10)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>非霍奇金淋巴瘤(11)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                        <tr>
                                            <td>非小细胞癌(12)</td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                            <td><input type="text"/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                         </div>
                    </div>
                </div>
                <SixQuestions sixQuestionsChange={this.handleInputChange}></SixQuestions>
            </div>
        );
    }
}

export default OldDoctorSurvey;
