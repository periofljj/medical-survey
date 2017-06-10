import React, { Component } from 'react';
import './sixQuestions.css';

class SixQuestions extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.props.sixQuestionsChange(event);
    }

    render() {
        return (
            <div className="six-questions">
                <div className="question-ten">
                    <div className="questionTitle">
                        <div>Q10. 过去4周您亲自诊治的(包括看的及治疗的)诊及住院病人数。</div>
                        <div>适用的每一行都需要填写，不适用的请勾选没有此类病人。</div>
                    </div>
                    <div className="clear"></div>
                    <div className="table-list">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>ICD 10编码</th>
                                    <th>实体瘤</th>
                                    <th>过去1个月您看的原发肿瘤病人数(人数,不是人次)</th>
                                    <th>无此类病人</th>
                                     <th>ICD 10编码</th>
                                    <th>部分实体瘤及血液肿瘤</th>
                                    <th>过去1个月您看的原发肿瘤病人数(人数,不是人次)</th>
                                    <th>无此类病人</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="warning">
                                    <td>C60,63</td>
                                    <td>口,唇,舌,齿龈,腭的肿瘤</td>
                                    <td><input type="text" name="C60_C63" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C60_C63" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C00-C07</td>
                                    <td>阴茎肿瘤</td>
                                    <td><input type="text" name="C00-C07" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C00-C07" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C08-14</td>
                                    <td>咽部肿瘤(包括鼻咽癌)</td>
                                    <td><input type="text" name="C08-14" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C08-14" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C61</td>
                                    <td>前列腺肿瘤</td>
                                    <td><input type="text" name="C61" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C61" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C15</td>
                                    <td>食管肿瘤</td>
                                    <td><input type="text" name="C15" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C15" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C62</td>
                                    <td>睾丸肿瘤</td>
                                    <td><input type="text" name="C62" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C62" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C16</td>
                                    <td>胃部肿瘤</td>
                                    <td><input type="text" name="C16" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C16" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C64-66,68</td>
                                    <td>肾肿瘤(含肾、肾盂、输尿管恶性肿瘤等)</td>
                                    <td><input type="text" name="C64-66_C68" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C64-66_C68" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C18</td>
                                    <td>结肠肿瘤</td>
                                    <td><input type="text" name="C18" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C18" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C67</td>
                                    <td>膀胱肿瘤</td>
                                    <td><input type="text" name="C67" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C67" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C19-21</td>
                                    <td>直肠肿瘤</td>
                                    <td><input type="text" name="C19-21" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C19-21" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C71</td>
                                    <td>脑部恶性肿瘤</td>
                                    <td><input type="text" name="C71" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C71" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C22</td>
                                    <td>肝肿瘤</td>
                                    <td><input type="text" name="C22" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C22" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C73</td>
                                    <td>甲状腺恶性肿瘤</td>
                                    <td><input type="text" name="C73" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C73" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C25</td>
                                    <td>胰腺肿瘤</td>
                                    <td><input type="text" name="C25" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C25" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C81</td>
                                    <td>霍奇金氏淋巴瘤</td>
                                    <td><input type="text" name="C81" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C81" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C32</td>
                                    <td>喉肿瘤</td>
                                    <td><input type="text" name="C32" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C32" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C82-84</td>
                                    <td>非霍奇金氏淋巴瘤( </td>
                                    <td><input type="text" name="C82-84" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C82-84" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C33,34</td>
                                    <td>肺与气管、支气管肿瘤</td>
                                    <td><input type="text" name="C33_C34" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C33_C34" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C82-84</td>
                                    <td>其他或未指定的淋巴瘤</td>
                                    <td><input type="text" name="C82-C84" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C82-C84" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C40, 41</td>
                                    <td>骨与关节软节组织的肿瘤</td>
                                    <td><input type="text" name="C40_C41" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C40_C41" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C88</td>
                                    <td>恶性免疫增生性疾病</td>
                                    <td><input type="text" name="C88" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C88" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C43</td>
                                    <td>黑色素瘤</td>
                                    <td><input type="text" name="C43" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C43" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C90</td>
                                    <td>多发性骨髓瘤(MM)</td>
                                    <td><input type="text" name="C90" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C90" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C44</td>
                                    <td>其他类型的皮肤肿瘤</td>
                                    <td><input type="text" name="C44" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C44" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C91</td>
                                    <td>淋巴细胞白血病</td>
                                    <td><input type="text" name="C91" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C91" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C46</td>
                                    <td>Kaposi肉瘤(卡波西氏瘤)</td>
                                    <td><input type="text" name="C46" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C46" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C92</td>
                                    <td>粒细胞白血病(含M0, M1, M2, M3, M4)</td>
                                    <td><input type="text" name="C92" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C92" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C50</td>
                                    <td>乳腺肿瘤</td>
                                    <td><input type="text" name="C50" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C50" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C93</td>
                                    <td>单核细胞性白血病(含M5)</td>
                                    <td><input type="text" name="C93" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C93" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C53</td>
                                    <td>宫颈肿瘤</td>
                                    <td><input type="text" name="C53" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C53" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C94</td>
                                    <td>其他的指定细胞类型的白血病(含红白血病等)</td>
                                    <td><input type="text" name="C94" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C94" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C54</td>
                                    <td>子宫体肿瘤(含子宫体,子宫内膜,子宫肌层等)</td>
                                    <td><input type="text" name="C54" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C54" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td>C94</td>
                                    <td>其他的指定细胞类型的白血病(含红白血病等)</td>
                                    <td><input type="text" name="C94" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C94" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                                <tr>
                                    <td>C56</td>
                                    <td>卵巢肿瘤</td>
                                    <td><input type="text" name="C56" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C56" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td><input type="text" name=""/></td>
                                    <td><input type="text" name=""/></td>
                                    <td><input type="text" name=""/></td>
                                    <td><input type="radio" name="" value="no such patient"/></td>
                                </tr>
                                <tr className="warning">
                                    <td>C57,51,58</td>
                                    <td>其他女性生殖系统肿瘤(含外阴,附件等)</td>
                                    <td><input type="text" name="C57_C51_C58" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="C57_C51_C58" value="no such patient" onChange={this.handleInputChange}/></td>
                                    <td><input type="text" name="C57_C51_C58" onChange={this.handleInputChange}/></td>
                                    <td>其他的上述没有提及部位的实体瘤</td>
                                    <td><input type="text" name="not-mentioned" onChange={this.handleInputChange}/></td>
                                    <td><input type="radio" name="not-mentioned" value="no such patient" onChange={this.handleInputChange}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div className="section-left">
                        <div className="question-five">
                            <div className="question-title">Q5. 过去4周内，您认为最有帮助的与肿瘤治疗有关的信息来源是:(请选3个)</div>
                            <div className="question-content">
                                <div><input type="checkbox" name="有效信息来源" value="医学期刊和杂志" onChange={this.handleInputChange}/> 1. 医学期刊和杂志(纸质或电子均可)</div>
                                <div><input type="checkbox" name="有效信息来源" value="会议，研讨会或专科会议" onChange={this.handleInputChange}/> 2. 会议，研讨会或专科会议</div>
                                <div><input type="checkbox" name="有效信息来源" value="互联网" onChange={this.handleInputChange}/> 3. 互联网</div>
                                <div><input type="checkbox" name="有效信息来源" value="网络会议" onChange={this.handleInputChange}/> 4. 网络会议(实况或自动播送)</div>
                                <div><input type="checkbox" name="有效信息来源" value="邮件" onChange={this.handleInputChange}/> 5. 直接邮件(纸质或电 均可)</div>
                                <div><input type="checkbox" name="有效信息来源" value="电子医药信息" onChange={this.handleInputChange}/> 6. 电子医药信息(自动化电子演示或有演示人员)</div>
                                <div><input type="checkbox" name="有效信息来源" value="播客" onChange={this.handleInputChange}/> 7. 播客</div>
                                <div><input type="checkbox" name="有效信息来源" value="面对面的个人或团体拜访" onChange={this.handleInputChange}/> 8. 面对面的个人或团体拜访</div>
                                <div><input type="checkbox" name="有效信息来源" value="临床试验" onChange={this.handleInputChange}/> 9. 临床试验</div>
                                <div><input type="checkbox" name="有效信息来源" value="其他" onChange={this.handleInputChange}/> 10. 其他，请注明</div>
                                <div><input type="checkbox" name="有效信息来源" value="不知道" onChange={this.handleInputChange}/> 11. 不知道</div>
                            </div>
                        </div>
                        <div className="question-five">
                            <div className="question-title">Q6. 对于尝试新药治疗肿瘤，以下哪种描述最符合您的情况?</div>
                            <div className="question-content">
                            我倾向于使用一种肿瘤新药:
                                <div><input type="radio" name="" value="新药使用时间" onChange={this.handleInputChange}/> 1. 立即</div>
                                <div><input type="radio" name="" value="新药使用时间" onChange={this.handleInputChange}/> 2. 上市后不久</div>
                                <div><input type="radio" name="" value="新药使用时间" onChange={this.handleInputChange}/> 3. 在同行已经尝试后/相关指南发布后</div>
                                <div><input type="radio" name="" value="新药使用时间" onChange={this.handleInputChange}/> 4. 该药物得到广泛使用后)</div>
                                <div><input type="radio" name="" value="新药使用时间" onChange={this.handleInputChange}/> 5. 该药物成为标准后</div>
                            </div>
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="question-box">
                            <div className="question-title">Q7. 过去2周内您接触或阅读过的与您治疗相关的药物信息中，您能回忆起的药物有哪个/哪些?</div>
                            <div className="question-content">
                                <div className="drug-name">药物1 <input type="text" name="近期新药" onChange={this.handleInputChange}/></div>
                                <div className="drug-name">药物2 <input type="text" name="近期新药" onChange={this.handleInputChange}/></div>
                                <div><input type="radio" name="近期新药" value="不知道" onChange={this.handleInputChange}/> 1.不知道</div>
                                <div><input type="radio" name="近期新药" value="无" onChange={this.handleInputChange}/> 2.无</div>
                            </div>
                        </div>
                        <div className="question-box">
                            <div className="question-title">Q8. 您从哪些渠道接收或阅读到这些药物/治疗信息?</div>
                            <div className="question-content">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>药物1</th>
                                            <th>药物2</th>
                                            <th>药物3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.会议</td>
                                            <td><input type="radio" name="药物1-药物信息渠道" value="会议" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-药物信息渠道" value="会议" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物3-药物信息渠道" value="会议" onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>2. 医学期刊/新闻(纸质或电子均可)</td>
                                            <td><input type="radio" name="药物1-药物信息渠道" value="医学期刊/新闻" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-药物信息渠道" value="医学期刊/新闻" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物3-药物信息渠道" value="医学期刊/新闻" onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>3.医药代表</td>
                                            <td><input type="radio" name="药物1-药物信息渠道" value="医药代表" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-药物信息渠道" value="医药代表" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物3-药物信息渠道" value="医药代表" onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>4. 其他，请指明</td>
                                            <td><input type="radio" name="药物1-药物信息渠道" value="其他" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-药物信息渠道" value="其他" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物3-药物信息渠道" value="其他" onChange={this.handleInputChange}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="question-box">
                            <div className="question-title">Q9. 这些信息在多大程度上改变或影响了您的处方行为? 1 影响最小，7 影响最大</div>
                            <div className="question-content">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>药物1</td>
                                            <td><input type="radio" name="药物1-处方影响" value="1" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="2" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="3" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="4" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="5" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="6" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物1-处方影响" value="7" onChange={this.handleInputChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>药物2</td>
                                            <td><input type="radio" name="药物2-处方影响" value="1" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="2" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="3" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="4" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="5" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="6" onChange={this.handleInputChange}/></td>
                                            <td><input type="radio" name="药物2-处方影响" value="7" onChange={this.handleInputChange}/></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
}

export default SixQuestions;
