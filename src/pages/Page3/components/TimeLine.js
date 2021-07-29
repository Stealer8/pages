import React, { Component } from 'react'
import '../timeLine.css'
import { Tooltip } from 'antd';
export default class TimeLine extends Component {
    render() {
        return (
            <div className="container">
                <div style={{display:'flex'}}>
                    <div style={{flex:1,display:'flex'}}>
                        <div style={{flex:1}}></div>
                        <div className="dot">
                            <p>07-23</p>
                            <p>起售</p>
                        </div>
                        <div className="item"></div>
                    </div>
                    <div style={{flex:1,display:'flex'}}>
                        <div className="item"></div>
                        <div className="dot">
                            <p>08-03</p>
                            <p>截止</p>
                        </div>
                        <div className="item"></div>
                    </div>
                    <div style={{flex:1,display:'flex'}}>
                        <div className="item"></div>
                            <Tooltip placement="top" title='封闭期' color='#db6f74'>
                            <div className="dot">
                                <p>08-04</p>
                                <p>计算利益</p>
                            </div>
                            </Tooltip>
                        <div className="item"></div>
                    </div>
                    <div style={{flex:1,display:'flex'}}>
                        <div className="item"></div>
                        <div className="dot">
                            <p>2022-07-23</p>

                        </div>
                        <Tooltip placement="top" title='可申购/预约赎回' color='#db6f74'>
                            <div className="item"></div>
                        </Tooltip>
                            
                    </div>
                    <div style={{flex:1,display:'flex'}}>
                        <div className="item"></div>
                        <div className="dot">
                            <p>05-05</p>
                            <p>本期结束</p>
                        </div>
                        <div style={{flex:1}}></div>
                    </div>
                </div>
            </div>
        )
    }
}
