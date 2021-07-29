import React, { Component } from 'react'
import './index.css'
export default class Page2 extends Component {
    render() {
        return (
            <div>
                <div className="box2">  
                    <div className="top">
                        <p>2021年长吉稳健增强14期</p>
                        <div className="span1" style={{backgroundColor:'#f9a652'}}>封闭式</div>
                        <div className="span2" style={{backgroundColor:'#22aeef'}}>中低风险</div>
                        <div className="span3">非保本浮动收益类</div>
                    </div>
                    <div className="bottom">
                        <div>
                            <p className="firstNum">4.2500%</p>
                            <p className="thirdNum">业绩比较基准</p>
                        </div>
                        <div>
                            <p className="secondNum">365天</p>
                            <p className="thirdNum">理财期限</p>
                        </div>
                        <div>
                            <p className="secondNum">50000.00</p>
                            <p className="thirdNum">起购金额(元)</p>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="top">
                        <p>长旺现金管理</p>
                        <div className="span1" style={{backgroundColor:'#f9a652'}}>每日开放式</div>
                        <div className="span2" style={{backgroundColor:'#22aeef'}}>中低风险</div>
                        <div className="span3">非保本浮动收益类</div>
                    </div>
                    <div className="bottom">
                        <div>
                            <p className="firstNum">3.1300%</p>
                            <p className="thirdNum">近7天年化收益率</p>
                        </div>
                        <div>
                            <p className="secondNum">每个工作日</p>
                            <p className="thirdNum">交易时间</p>
                        </div>
                        <div>
                            <p className="secondNum">10000.00</p>
                            <p className="thirdNum">起购金额(元)</p>
                        </div>
                    </div>
                </div>
               
                <div className="box2">
                    <div className="top">
                        <p>长盈91天周期滚动</p>
                        <div className="span1" style={{backgroundColor:'#f9a652'}}>周期开放式</div>
                        <div className="span2" style={{backgroundColor:'#22aeef'}}>中低风险</div>
                        <div className="span3">非保本浮动收益类</div>
                    </div>
                    <div className="bottom">
                        <div>
                            <p className="firstNum">3.7200%</p>
                            <p className="thirdNum">近1年年化收益率</p>
                        </div>
                        <div>
                            <p className="secondNum">28天</p>
                            <p className="thirdNum">理财周期</p>
                        </div>
                        <div>
                            <p className="secondNum">10000.00</p>
                            <p className="thirdNum">起购金额(元)</p>
                        </div>
                    </div>
                </div>
                <div className="box2">
                    <div className="top">
                        <p>长盈91天周期滚动</p>
                        <div className="span1" style={{backgroundColor:'#f9a652'}}>周期滚动式</div>
                        <div className="span2" style={{backgroundColor:'#22aeef'}}>中低风险</div>
                        <div className="span3">非保本浮动收益类</div>
                    </div>
                    <div className="bottom">
                        <div>
                            <p className="firstNum">3.5500%</p>
                            <p className="thirdNum">业绩比较基准</p>
                        </div>
                        <div>
                            <p className="secondNum">91天</p>
                            <p className="thirdNum">理财周期</p>
                        </div>
                        <div>
                            <p className="secondNum">10000.00</p>
                            <p className="thirdNum">起购金额(元)</p>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}
