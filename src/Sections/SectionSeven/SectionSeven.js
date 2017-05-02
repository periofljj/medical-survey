import React, { Component } from 'react';
import './SectionSeven.css'

class SectionSeven extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {

        this.props.sectionOneChange(event);
    }

    render() {
        return (
            <div className="section section-seven">
                <div className="section-title">
                    <div><span className="title">第七部分</span></div>
                    <div><span className="title">详细描述当前使用用的抗肿瘤药物 与肿瘤治疗相关的所有细胞毒药物、内分泌泌药物、免疫增强剂和靶向药物</span></div>
                </div>

                <div className="section-content">
                    <div className="box-row box-row-1">
                        <div className="box width-10 box-1">
                            <div className="box-title">
                                <div>方案第一次开始日期</div>
                                <div>(年/月/日)</div>
                            </div>
                            <div className="box-content text-center">
                                <input className="date-input" type="number" name=""/><input className="date-input" type="number" name=""/><input className="date-input" type="number" name=""/>
                            </div>
                        </div>
                        <div className="box width-15 box-2">
                            <div className="box-title">
                                <div>方案结束日期</div>
                                <div>(年/月/日)</div>
                            </div>
                            <div className="box-content text-center">
                                <div className="box-content">
                                    <input className="date-input" type="number" name=""/><input className="date-input" type="number" name=""/><input className="date-input" type="number" name=""/>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>进行中</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-10 box-3">
                            <div className="box-title">
                                <span>方案名称</span>
                            </div>
                            <div className="box-content text-center">
                                <input type="text" name=""/>
                            </div>
                        </div>
                        <div className="box width-15 box-4">
                            <div className="box-title">
                                <span>对于 NHL,CLL,MM本线治疗开始时，该病人属于</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>难治性的 Refractory</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>复发的 Relapsed</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>两者都不是</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-23 box-5">
                            <div className="box-title">
                                <span>仅限实体瘤——几线治疗药物(含血血液肿瘤)</span>
                            </div>
                            <div className="box-content">
                                <div className="sub-box">
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>早期/初治病人(未手术)</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>新辅助治疗</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>辅助治疗</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sub-box">
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>晚期/转移一线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>晚期/转移二线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>晚期/转移三线</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>晚期/转移四线及以上</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="sub-box">
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>治疗线同前更换药物</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-15 box-6">
                            <div className="box-title">
                                <span>仅限血血液肿瘤</span>
                            </div>
                            <div className="box-content text-center">
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>诱导</span>
                                    </label>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>一线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>巩固</span>
                                    </label>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>二线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>维持</span>
                                    </label>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>三线</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>不适用</span>
                                    </label>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>四线及以上</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box width-10">
                            <div className="box-title">
                                <span>病人人医保状况</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>医保/公费</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>自费</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>不知道</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="radio" name=""/>
                                        <span>新农合(XNH)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-row box-row-2">
                        <div className="box">
                            <span>哪个科室医生制定了此方案</span>
                            <label>
                                <input type="radio" name=""/>
                                <span>肿瘤内科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>放疗科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>血液科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>消化科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>皮肤科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>呼吸科/肺内科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>泌尿科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>妇科</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>外科</span>
                            </label>
                            <label>
                                <input type="radio" />
                                <span>其它科室医生(请注明)</span>
                            </label>
                            <input className="other" type="text" name=""/>
                        </div>
                    </div>

                    <div className="box-row box-row-3">
                        <div className="box">
                            <span>患者在开始本治疗时, 体能状态描述( ECOG评级)</span>
                            <label>
                                <input type="radio" name="meno-status" />
                                <span>0.无症状</span>
                            </label>
                            <label>
                                <input type="radio" name="meno-status" />
                                <span>1.有症状但完全可以活动</span>
                            </label>
                            <label>
                                <input type="radio" name="meno-status" />
                                <span>2.有症状, 每日日卧床时间&lt;50%</span>
                            </label>
                            <label>
                                <input type="radio" name="meno-status" />
                                <span>3.有症状, 每日日卧床>50%, 但不不是卧床不不起</span>
                            </label>
                            <label>
                                <input type="radio" name="meno-status" />
                                <span>4.卧床不不起</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-4">
                        <div className="box">
                            <span>这个是临床试验或病人准入方案的一部分吗?</span>
                            <label>
                                <input type="radio" name=""/>
                                <span>临床试验II期</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>临床试验III期</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>爱心用药计划(特许使用)所用药物为仍在研发阶段尚未获批的药物</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>患者援助计划 所用用药物为已批准上市的药物,包括买赠等</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>都不是</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>不知道</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-5">
                        <div className="box">
                            <span>仅限前列列腺癌填写</span>
                            <span>本次治疗前PSA水平</span>
                            <span>(ng/ml)</span>
                            <input className="num-input" type="num" />
                            <label>
                                <input type="radio" name=""/>
                                <span>不知道</span>
                            </label>
                        </div>
                        <div className="box">
                            <span>治疗目的</span>
                            <label>
                                <input type="radio" name=""/>
                                <span>根治</span>
                            </label>
                            <label>
                                <input type="radio" name=""/>
                                <span>姑息</span>
                            </label>
                        </div>
                    </div>

                    <div className="box-row box-row-6">
                        <div className="box">
                            <div className="box-title">
                                <span>方案的副作用(请只提供病人病历中的信息)</span>
                            </div>
                            <div className="box-content">
                                <div>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>ATE动脉血栓栓塞</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>VTE 静脉血栓栓塞</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>中性粒细胞减少</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>体重变化</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>便秘</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>厌食/食欲减退</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>发热</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>口腔炎</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>心功不全</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>性功能障碍</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>其他</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>恶心呕吐</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>恶病质</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>感染</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>手足综合症</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>月经不调</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>水肿</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>潮热/热潮红</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>疼痛</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>皮疹</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>神经病变</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>粘膜炎</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>肝功能障碍</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>胃肠穿孔</span>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>脱发</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>腹泻</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>血小板减少</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>视力模糊或其他视力变化</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>贫血</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>食欲增加</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>高尿酸血症</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>高血压</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>男性乳房发育</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>无</span>
                                    </label>
                                    <label>
                                        <input type="checkbox" name=""/>
                                        <span>从病人病历不可知</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-row box-row-7">
                        <div className="left-container">
                            <div className="box">
                                <div className="box-title">
                                    <span>请您对该患者当前治疗方案的满意程度评分(7分为最满意,1分为最不满意)</span>
                                </div>
                                <div className="box-content">
                                    <table className="table table-1 table-bordered">
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <div>1</div>
                                                    <div>最不满意</div>
                                                </td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>
                                                    <div>7</div>
                                                    <div>最满意</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>满意程度</td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                                <td><input type="radio" name=""/></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="box">
                                <div className="sub-box-row-1">
                                    <div className="sub-box-1">
                                        <span>该患者是否接受序贯治疗(仅限乳腺癌,肺癌)</span>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>是</span>
                                        </label>
                                        <label>
                                            <input type="radio" name=""/>
                                            <span>否</span>
                                        </label>
                                    </div>
                                    <div className="sub-box-2">
                                        <span>如果有尚未开始的序贯药物,请提供药名:</span>
                                        <input type="text" name=""/>
                                    </div>
                                </div>
                                <div className="sub-box-row-2">
                                    <span>如果是序贯治疗,请提供药物的序贯顺序(填写下列药物序号即可):</span>
                                    <input type="text" name=""/>
                                </div>
                            </div>
                        </div>
                        <div className="right-container">
                            <table className="table table-2 table-bordered">
                                <thead>
                                    <tr><th>请列举最多3种您认为可以代替该患者当前治疗方案的产品或方案</th></tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span>替换方案1</span>
                                            <input type="text" name=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>替换方案2</span>
                                            <input type="text" name=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span>替换方案3</span>
                                            <input type="text" name=""/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>没有可以替换的药物</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>不予回答</span>
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="clear-both"></div>
                    <div className="box-row box-row-8">
                        <div className="box-title">
                            <span>请给出方案中药物的商品名,如果通用名请标注产地或者厂家/国产/进口/合资</span>
                        </div>
                        <div className="box-content">
                            <div className="left-container">
                                <div className="sub-box-row-1">
                                    <div className="sub-box sub-box-1">
                                        <div className="sub-box-title">
                                            <span>方案中药物1(商品名,否则请标注厂家或产地) 可以是细胞毒、内分泌、靶向、免疫增强剂</span>
                                        </div>
                                        <div className="box-content">
                                            <input type="text" name=""/>
                                            <div className="wrapper">
                                                <div>
                                                    <span>给药方方式</span>
                                                    <label>
                                                        <input type="radio" name=""/>
                                                        <span>周期</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name=""/>
                                                        <span>持续</span>
                                                    </label>
                                                </div>
                                                <div>
                                                    <span>是否作为维持治疗</span>
                                                    <label>
                                                        <input type="radio" name=""/>
                                                        <span>是</span>
                                                    </label>
                                                    <label>
                                                        <input type="radio" name=""/>
                                                        <span>否</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-2">
                                        <div className="sub-box-title">
                                            <span>开始日期 如果开始日期与上面的不同 年/月/日</span>
                                        </div>
                                        <div className="box-content">
                                            <input className="date-input" type="text" name=""/><input className="date-input" type="text" name=""/><input className="date-input" type="text" name=""/>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-3">
                                        <div className="sub-box-3-row-1">
                                            <span>每周期给药天数</span>
                                            <input type="text" name=""/>
                                        </div>
                                        <div className="sub-box-3-row-2">
                                            <span>周期总天数(含间歇期)</span>
                                            <input type="text" name="" />
                                        </div>
                                    </div>
                                </div>
                                <siv className="sub-box-row-2">
                                    <div className="sub-box sub-box-1">
                                        <div className="sub-box-title">
                                            <span>每次给药剂量</span>
                                            <span>剂量如有变化请分栏填写</span>
                                        </div>
                                        <div className="box-content">
                                            <input type="text" name=""/>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-2">
                                        <div className="sub-box-title">
                                            <span>剂量单位</span>
                                        </div>
                                        <div className="box-content">
                                            <div>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mg/m 2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mg</span>
                                                </label>
                                                <label>
                                                    <input type="radio"name=""/>
                                                    <span>MU</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>AUC</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mcg/m2</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>kBq/kg</span>
                                                </label>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mg/kg</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mcg</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>IU</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>ml</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>mcg/kg</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>其他</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-3">
                                        <div className="sub-box-title">
                                            <span>每次给药次数</span>
                                        </div>
                                        <div className="box-content">
                                            <input type="text" name=""/>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-4">
                                        <div className="sub-box-title">
                                            <span>结束日期 如果结束日期与上面的不同 年/月/日</span>
                                        </div>
                                        <div className="box-content">
                                            <input className="date-input" type="text" name=""/><input className="date-input" type="text" name=""/><input className="date-input" type="text" name=""/>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-5">
                                        <div className="sub-box-5-row-1">
                                            <span>当前周期数</span>
                                            <input type="text" name=""/>
                                        </div>
                                        <div className="sub-box-5-row-2">
                                            <span>计划周期数</span>
                                            <input type="text" name=""/>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>不知道</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>至进展</span>
                                            </label>
                                        </div>
                                    </div>
                                </siv>
                            </div>
                            <div className="right-container">
                                <div className="sub-box sub-box-1">
                                    <div className="sub-box-title">
                                        <span>给药途径</span>
                                    </div>
                                    <div className="box-content">
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>口服</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>鞘内注射</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>静脉推注</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>瘤内注射</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>肌肉注射</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>膀胱灌注</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>皮下注射</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>腹膜/腹腔内注射</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>局部</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>TACE</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>静脉输液</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>动脉注射</span>
                                            </label>
                                        </div>
                                        <div>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>持续静脉输液</span>
                                            </label>
                                            <label>
                                                <input type="radio" name=""/>
                                                <span>其他</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="sub-box-2-col">
                                    <div className="sub-box sub-box-col-1">
                                        <div className="sub-box-title">
                                            <span>持续治疗——用药频率</span>
                                        </div>
                                        <div className="box-content">
                                            <div>
                                                <span>每几</span><input type="number" name=""/><span>天</span>
                                            </div>
                                            <div>
                                                <span>每几</span><input type="number" name=""/><span>周</span>
                                                <input className="times" type="number" name=""/><span>次数</span>
                                            </div>
                                            <div>
                                                <span>每几</span><input type="number" name=""/><span>个月</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sub-box sub-box-col-2">
                                        <div className="sub-box-title">
                                            <span>持续治疗——计划多久?</span>
                                        </div>
                                        <div className="box-content">
                                            <div>
                                                <input type="number" name=""/>
                                                <span>周</span>

                                                <span>或</span>

                                                <input type="number" name=""/>
                                                <span>年</span>
                                            </div>
                                            <div>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>直至进展</span>
                                                </label>
                                                <label>
                                                    <input type="radio" name=""/>
                                                    <span>不知道</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionSeven;
