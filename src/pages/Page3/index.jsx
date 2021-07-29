import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router'
import './index.css'
import QSPAN from '../../components/QSPAN'
import Trend from './components/Trend'
import Cell from './components/Cell'
import Add from './components/Add'
import MyNavLink from '../../components/MyNavLink'
import TimeLine from './components/TimeLine'
// import { Timeline } from 'antd';
export default class Page3 extends Component {
    render() {
        return (
            <div>
                <div className="box3">
                    <section>
                        <div>
                            <p style={{fontSize:25,fontWeight:'bold'}}>启航成长一年定开35号</p>
                            <span className="thirdNum">DIAX1960336 本行产品 &nbsp;</span>
                            <span style={{color:'red',fontSize:14}}>4541人购买</span>
                        </div>
                        <div className="first_second">
                            <div>
                                <p className="firstNum">3.20%-4.50%</p>
                                <span className="thirdNum">业绩比较基准</span>
                            </div>
                            <div>
                                <p className="secondNum">每一年可赎</p>
                                <span className="thirdNum">理财期限</span>
                            </div>
                            
                        </div>
                        <div className="first_third">
                            <span style={{ backgroundColor: '#e7d2d1', color:'red'}}>稳健投资</span>
                            <span style={{backgroundColor:'#d0d1d2'}}>封闭式</span>
                            <span style={{backgroundColor:'#d0d1d2'}}>5万元起购</span>
                        </div>
                    </section>

                    {/* 产品特色 */}
                    <section>
                        <QSPAN>产品特色</QSPAN>
                        <div className="second_div">
                            <p className="second_text">主投固收策略稳健</p>
                            <p className="second_color">80%-100%投资于固定收益类资产</p>
                        </div>
                        <div className="second_div">
                            <p className="second_text">明星团队管理</p>
                            <p className="second_color">团队管理产品总规模超1500亿</p>
                        </div>
                        <div className="second_div">
                            <p className="second_text">支持理财质押</p>
                            <p className="second_color">一键申请,收益、贷款两不误</p>
                        </div>
                    </section>
                </div>
                <div style={{display:'flex'}}>
                    {/* 业绩表现 */}
                    <section className="third_section">
                        <QSPAN>业绩表现</QSPAN>
                        <ul className="nav nav-tabs">
                            <li>
                                <MyNavLink to="/page3/trend">业绩走势</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to="/page3/cell">单位净值</MyNavLink>
                            </li>
                            <li>
                                <MyNavLink to="/page3/add">累计净值</MyNavLink>
                            </li>
                        </ul>
                        <div>
                            {/* 引入二级路由 */}
                            <Switch>
                                <Route path="/page3/trend" component={ Trend }></Route>
                                <Route path="/page3/cell" component={ Cell }></Route>
                                <Route path="/page3/add" component={ Add }></Route>
                                <Redirect to="/page3/trend"></Redirect>
                            </Switch>

                        </div>
                    </section>
                    {/* 交易规则 */}
                    <section style={{width:483}}>
                        <QSPAN>交易规则</QSPAN>
                        <TimeLine />
                        <div style={{paddingLeft:30}}>
                            <div>
                                <p style={{fontWeight:'bold'}}>投资说明</p>
                                <p style={{color:'#888'}}>2021-07-23至2021-08-03 22:00 开放申购及赎回。如未预约赎回,您的持有份额将自动滚投入下一投资周期</p>
                            </div>
                            <div>
                                <p style={{fontWeight:'bold'}}>购买规则</p>
                                <p style={{color:'#888'}}>1万元起购,1元递增,无申购赎回费</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
