import React, { Component } from 'react';
import './SectionFive.css'

class SectionFive extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionFiveChange(event);
    }

    render() {
        return (
            <div className="section section-five">
                <div className="section-title">
                    <span className="title">第五部分</span>
                    <span>请详细描述既往使用的抗肿瘤药物 包括与肿瘤治疗有关的所有细胞毒药物、内分 药物、免疫增强剂和靶向药物</span>
                    <span>请列出从诊断开始，按照时间顺序，既往使用过的药物。当前正在使 的药物方案请直接填写在第7部分</span>
                    <span>请给出所填药物的商品名，通用名药物请标注产地或者厂家/国产/进口/合资;同一方案，但治疗目的不同，请分开填写在不同栏里；</span>
                </div>
                <div className="section-content">
                    <div className="section-row">
                        <div className="box box-1">
                            <div className="box box-1-1">
                                <div className="box box-1-1-1">
                                    <div className="box-title">方案开始日期</div>
                                    <div className="content">
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-start-date" />
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-start-date" />
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-start-date" />
                                    </div>
                                </div>
                                <div className="box box-1-1-2">
                                    <div className="box-title">方案结束日期</div>
                                    <div className="content">
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-end-date" />
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-end-date" />
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-end-date" />
                                    </div>
                                </div>
                                <div className="box box-1-1-3">
                                     <div className="box-title">治疗方案名称(如果是序贯 案，请标明序贯顺序)</div>
                                    <div className="content">
                                        <input onChange={this.handleInputChange} type="text" name="treatment-plan-name" />
                                    </div>
                                </div>
                                <div className="box box-1-1-4">
                                    <div className="box-col">对于 NHL，CLL，MM 本线治疗开始时, 该病人属于</div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 难治性的</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 复发的</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="" /> 两者都不误的</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-1-2">
                                <div className="box box-1-2-1">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>请列出做为一个治疗方案中的所有抗肿瘤药物(商品名)(含细胞毒药物，靶向药物、免疫增强剂、内分泌药物)</th>
                                                <th>维持药物</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text" name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="supporting-drugs-name"/></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text"  name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio"  name="supporting-drugs-name"/></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text"  name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio"  name="supporting-drugs-name"/></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text"  name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio"  name="supporting-drugs-name"/></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text"  name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="supporting-drugs-name"/></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="text"  name="anti-tumor-drugs-name"/></td>
                                                <td><input onChange={this.handleInputChange} type="radio"  name="supporting-drugs-name"/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box box-1-2-2">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>该药物是周期用药</th>
                                                <th>实际给药周期</th>
                                                <th >计划周期数</th>
                                                <th>每周期总天数(含间歇期)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />至进展</span>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />不知道</span>
                                                    </div>
                                                </td>
                                                <td className="week2"><input onChange={this.handleInputChange} type="text" name="period-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                                <td className="week2">
                                                    <div><input onChange={this.handleInputChange} type="text" name="period-length" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                                <td className="week2">
                                                    <div><input onChange={this.handleInputChange} type="text" name="period-length" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                                <td className="week2">
                                                    <div><input onChange={this.handleInputChange} type="text" name="period-length" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                                <td className="week2">
                                                    <div><input onChange={this.handleInputChange} type="text" name="period-length" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="period" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="actual-period" /></td>
                                                <td className="week">
                                                    <div><input onChange={this.handleInputChange} type="text" name="planned-period" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                                <td className="week2">
                                                    <div><input onChange={this.handleInputChange} type="text" name="period-length" /></div>
                                                    <div>
                                                        <span><input onChange={this.handleInputChange} type="radio" name="" />同上</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="box box-1-2-3">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>该药物持续用药</th>
                                                <th>持续总(天)数</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="continue" value="yes"/></td>
                                                <td><input onChange={this.handleInputChange} type="text" name="continuing-length" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="box box-1-3">
                                <div className="box box-1-3-1">
                                    <div className="box-col top">
                                        <div>疗效</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="efficacy" value="CR" /> 完全缓解 CR</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="efficacy" value="PR" /> 部分缓解 PR</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="efficacy" value="SD" /> 疾病稳定 SD</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="efficacy" value="PD" /> 疾病进展 PD</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="efficacy" value="unknown" /> 不知道</div>
                                    </div>
                                    <div className="box-col bottom">
                                        <div> 仅限前列腺癌填写</div>
                                        <div> 本次治疗前PSA水平(ng/ml)</div>
                                        <div><input onChange={this.handleInputChange} type="text" name="pas-current-state" /></div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="pas-current-state" value="unknown"/> 不知道</div>
                                    </div>
                                </div>
                                <div className="box box-1-3-2">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>CML治疗效果</td>
                                                <td>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 完全血液学缓解</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 完全细胞遗传学缓解</div>
                                                    <div><input onChange={this.handleInputChange} type="radio" name="" /> 完全分子遗传学缓解</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="box box-2">
                            <div className="box box-2-1">
                                <div className="box-title">仅限实体瘤---几线治疗药物</div>
                                <div className="box-content">
                                    <div className="box box-2-1-1">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 早期/初治病人(未手术)</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 新辅助治疗</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 辅助治疗</div>
                                    </div>
                                    <div className="box box-2-1-2">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 晚期/转移一线</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 晚期/转移二线</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 晚期/转移三线</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage" value=""/> 晚期/转移四线及以上</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box box-2-2">
                                <div className="box-title">病人病历卡上的副作用</div>
                                <div className="box-content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> ATE动脉血栓栓塞</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> VTE静脉血栓栓塞</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 体重变化</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 中性粒细胞减少</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 便秘</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 其他:请注明</td>

                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 厌食/ 欲减退</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 发热</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 口腔炎</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 性功能障碍</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 恶心和呕吐</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 心功不全</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 恶病质</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 感染</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 月经不调</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" />手-足综合征</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 水肿</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 潮热/热潮红</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 疼痛</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 皮疹</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 肠胃穿孔</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 神经病变</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 黏膜炎</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 肝功能障碍</td>
                                            </tr>
                                            <tr>
                                                 <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 脱发</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 男性乳头发育</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 腹泻</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 血小板减少</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 视力模糊或者其他视力变化</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 贫血</td>
                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 高尿酸血症</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 食欲增加</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 从病历中不可知</td>

                                            </tr>
                                            <tr>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 高血压</td>
                                                <td><input onChange={this.handleInputChange} type="radio" name="side-effect" value="" /> 无</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="box box-3">
                            <div className="box-3-1">
                                <div className="box-title">仅限血夜肿瘤</div>
                                <div className="box-title">
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />诱导</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />巩固</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />维持</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />不适用</div>
                                </div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />一线</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />三线</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />四线及以上</div>
                                    </div>
                                     <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />二线</div>
                                        <div className="special"><input onChange={this.handleInputChange} type="radio" name="derived-current-stage-for-blood-cancer" value="" />治疗线同时更换药物</div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-3-2">
                                <div className="box-title">该患者何时发生疾病进展或复发</div>
                                <div className="box-content">
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />该治疗期间内</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />该治疗结束后3个 内</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />该治疗结束后3-6个月内</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />该治疗结束后1 2个月内</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />该治疗结束后1 2个月后</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />未复发</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />从病人病历中不可知</div>
                                    <div><input onChange={this.handleInputChange} type="radio" name="disease-progression-or-relapse-time" value="" />无</div>

                                </div>
                            </div>
                            <div className="box-3-3">
                                <div className="box-title">停药或更换治疗方案的原因</div>
                                <div className="box-content">
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />治疗方案完成</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />身体状况差</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />远处进展或复发</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />副作用</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />局部进展或复发</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />疾病稳定</div>
                                    </div>
                                    <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />病人的选择</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />濒临死亡</div>
                                    </div>
                                     <div className="box-col">
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />无</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />其他：请注明</div>
                                        <div><input onChange={this.handleInputChange} type="radio" name="reason-for-ending" />从病人病历中不可知</div>
                                    </div>
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

export default SectionFive;
