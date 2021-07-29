import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Page2 from './pages/Page2'
import Page1 from './pages/Page1'
import Page3 from './pages/Page3'
import MyNavLink from './components/MyNavLink'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              {/* 路由链接 */}
              {/* <NavLink className="list-group-item" to='/about'>About</NavLink>
              <NavLink className="list-group-item" to='/home'>Home</NavLink> */}
              {/* MyNavLink封装 */}
              <ul className="Nav">
              
                <li>
                  <MyNavLink to="/page1">Page1</MyNavLink>
                </li>
                <li>
                  <MyNavLink to="/page2">Page2</MyNavLink>
                </li>
                <li>
                  <MyNavLink to="/page3">Page3</MyNavLink>
                </li>
              </ul>
              
              
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/page1" component={Page1}></Route>
                <Route path="/page2" component={Page2}></Route>
                <Route path="/page3" component={Page3}></Route>
                {/* 都没匹配上就重定向,写在最后 */}
                <Redirect to="/page1"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
