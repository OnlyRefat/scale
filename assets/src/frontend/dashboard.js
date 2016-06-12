import React from 'react';
import ReactDOM from 'react-dom';

export default class DashBoard extends React.Component {

  render() {
    const divStyle1 = {
        height: '210px',
    };
    const divStyle2 = {
        height: '240px',
    };
    return (
        <section id="content">
          <section className="hbox stretch">
            <section>
              <section className="vbox">
                <section className="scrollable padder">              
                  <section className="row m-b-md">
                    <div className="col-sm-6">
                      <h3 className="m-b-xs text-black">Dashboard</h3>
                      <small>Welcome back, John Smith, <i className="fa fa-map-marker fa-lg text-primary"></i> New York City</small>
                    </div>
                    <div className="col-sm-6 text-right text-left-xs m-t-md">
                      <div className="btn-group">
                        <a className="btn btn-rounded btn-default b-2x dropdown-toggle" data-toggle="dropdown">Widgets <span className="caret"></span></a>
                        <ul className="dropdown-menu text-left pull-right">
                          <li><a href="#">Notification</a></li>
                          <li><a href="#">Messages</a></li>
                          <li><a href="#">Analysis</a></li>
                          <li className="divider"></li>
                          <li><a href="#">More settings</a></li>
                        </ul>
                      </div>
                      <a href="#" className="btn btn-icon b-2x btn-default btn-rounded hover"><i className="i i-bars3 hover-rotate"></i></a>
                      <a href="#nav, #sidebar" className="btn btn-icon b-2x btn-info btn-rounded" data-toggle="class:nav-xs, show"><i className="fa fa-bars"></i></a>
                    </div>
                  </section>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="panel b-a">
                        <div className="row m-n">
                          <div className="col-md-6 b-b b-r">
                            <a href="#" className="block padder-v hover">
                              <span className="i-s i-s-2x pull-left m-r-sm">
                                <i className="i i-hexagon2 i-s-base text-danger hover-rotate"></i>
                                <i className="i i-plus2 i-1x text-white"></i>
                              </span>
                              <span className="clear">
                                <span className="h3 block m-t-xs text-danger">2,000</span>
                                <small className="text-muted text-u-c">New Visits</small>
                              </span>
                            </a>
                          </div>
                          <div className="col-md-6 b-b">
                            <a href="#" className="block padder-v hover">
                              <span className="i-s i-s-2x pull-left m-r-sm">
                                <i className="i i-hexagon2 i-s-base text-success-lt hover-rotate"></i>
                                <i className="i i-users2 i-sm text-white"></i>
                              </span>
                              <span className="clear">
                                <span className="h3 block m-t-xs text-success">75%</span>
                                <small className="text-muted text-u-c">Bounce rate</small>
                              </span>
                            </a>
                          </div>
                          <div className="col-md-6 b-b b-r">
                            <a href="#" className="block padder-v hover">
                              <span className="i-s i-s-2x pull-left m-r-sm">
                                <i className="i i-hexagon2 i-s-base text-info hover-rotate"></i>
                                <i className="i i-location i-sm text-white"></i>
                              </span>
                              <span className="clear">
                                <span className="h3 block m-t-xs text-info">25 <span className="text-sm">m</span></span>
                                <small className="text-muted text-u-c">location</small>
                              </span>
                            </a>
                          </div>
                          <div className="col-md-6 b-b">
                            <a href="#" className="block padder-v hover">
                              <span className="i-s i-s-2x pull-left m-r-sm">
                                <i className="i i-hexagon2 i-s-base text-primary hover-rotate"></i>
                                <i className="i i-alarm i-sm text-white"></i>
                              </span>
                              <span className="clear">
                                <span className="h3 block m-t-xs text-primary">9:30</span>
                                <small className="text-muted text-u-c">Meeting</small>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="panel b-a">
                        <div className="panel-heading no-border bg-primary lt text-center">
                          <a href="#">
                            <i className="fa fa-facebook fa fa-3x m-t m-b text-white"></i>
                          </a>
                        </div>
                        <div className="padder-v text-center clearfix">                            
                          <div className="col-xs-6 b-r">
                            <div className="h3 font-bold">42k</div>
                            <small className="text-muted">Friends</small>
                          </div>
                          <div className="col-xs-6">
                            <div className="h3 font-bold">90</div>
                            <small className="text-muted">Feeds</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="panel b-a">
                        <div className="panel-heading no-border bg-info lter text-center">
                          <a href="#">
                            <i className="fa fa-twitter fa fa-3x m-t m-b text-white"></i>
                          </a>
                        </div>
                        <div className="padder-v text-center clearfix">                            
                          <div className="col-xs-6 b-r">
                            <div className="h3 font-bold">27k</div>
                            <small className="text-muted">Tweets</small>
                          </div>
                          <div className="col-xs-6">
                            <div className="h3 font-bold">15k</div>
                            <small className="text-muted">Followers</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-3 hide">
                      <section className="panel b-a">
                        <header className="panel-heading b-b b-light">
                          <ul className="nav nav-pills pull-right">
                            <li>
                              <a href="ajax.pie.html" className="text-muted" data-bjax data-target="#b-c">
                                <i className="i i-cycle"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" className="panel-toggle text-muted">
                                <i className="i i-plus text-active"></i>
                                <i className="i i-minus text"></i>
                              </a>
                            </li>
                          </ul>
                          Connection
                        </header>
                        <div className="panel-body text-center bg-light lter" id="b-c">
                          <div className="easypiechart inline m-b m-t" data-percent="60" data-line-width="4" data-bar-color="#23aa8c" data-track-color="#c5d1da" data-color="#2a3844" data-scale-color="false" data-size="120" data-line-cap='butt' data-animate="2000">
                            <div>
                              <span className="h2 m-l-sm step"></span>%
                              <div className="text text-xs">completed</div>
                            </div>
                          </div>
                        </div>
                      </section>                      
                    </div>
                  </div>           
                  <div className="row bg-light dk m-b">
                    <div className="col-md-6 dker">
                      <section>
                        <header className="font-bold padder-v">
                          <div className="pull-right">
                            <div className="btn-group">
                              <button data-toggle="dropdown" className="btn btn-sm btn-rounded btn-default dropdown-toggle">
                                <span className="dropdown-label">Week</span> 
                                <span className="caret"></span>
                              </button>
                              <ul className="dropdown-menu dropdown-select">
                                  <li><a href="#"><input type="radio" name="b" />Month</a></li>
                                  <li><a href="#"><input type="radio" name="b" />Week</a></li>
                                  <li><a href="#"><input type="radio" name="b" />Day</a></li>
                              </ul>
                            </div>
                            <a href="#" className="btn btn-default btn-icon btn-rounded btn-sm">Go</a>
                          </div>
                          Statistics
                        </header>
                        <div className="panel-body">
                          <div id="flot-sp1ine" style={divStyle1}></div>
                        </div>
                        <div className="row text-center no-gutter">
                          <div className="col-xs-3">
                            <span className="h4 font-bold m-t block">5,860</span>
                            <small className="text-muted m-b block">Orders</small>
                          </div>
                          <div className="col-xs-3">
                            <span className="h4 font-bold m-t block">10,450</span>
                            <small className="text-muted m-b block">Sellings</small>
                          </div>
                          <div className="col-xs-3">
                            <span className="h4 font-bold m-t block">21,230</span>
                            <small className="text-muted m-b block">Items</small>
                          </div>
                          <div className="col-xs-3">
                            <span className="h4 font-bold m-t block">7,230</span>
                            <small className="text-muted m-b block">Customers</small>                        
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-md-6">
                      <section>
                        <header className="font-bold padder-v">
                          <div className="btn-group pull-right">
                            <button data-toggle="dropdown" className="btn btn-sm btn-rounded btn-default dropdown-toggle">
                              <span className="dropdown-label">Last 24 Hours</span> 
                              <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-select">
                                <li><a href="#"><input type="radio" name="a" />Today</a></li>
                                <li><a href="#"><input type="radio" name="a" />Yesterday</a></li>
                                <li><a href="#"><input type="radio" name="a" />Last 24 Hours</a></li>
                                <li><a href="#"><input type="radio" name="a" />Last 7 Days</a></li>
                                <li><a href="#"><input type="radio" name="a" />Last 30 days</a></li>
                                <li><a href="#"><input type="radio" name="a" />Last Month</a></li>
                                <li><a href="#"><input type="radio" name="a" />All Time</a></li>
                            </ul>
                          </div>
                          Analysis
                        </header>
                        <div className="panel-body flot-legend">
                            <div id="flot-pie-donut"  style={divStyle2}></div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <section className="panel b-a">
                        <div className="panel-heading b-b">
                          <span className="badge pull-right">12</span>
                          <span className="label bg-success">New</span> 
                          <a href="#" className="font-bold">HTML Courses</a>
                        </div>
                        <div className="panel-body">
                          <a href="#" className="block h4 font-bold m-b text-black">Get started with Bootstrap</a>                          
                          <div className="r b bg-warning-ltest wrapper m-b">
                            There are a few easy ways to quickly get started with Bootstrap...
                          </div>
                          <div className="m-b">
                            <a href="#" className="avatar thumb-sm">
                              <img src={"../../../../scale/assets/dist/img/a0.png"} alt="..." />
                              <i className="on b-white"></i>
                            </a>
                            <a href="#" className="avatar thumb-sm">
                              <img src={"../../../../scale/assets/dist/img/a1.png"} alt="..." />
                              <i className="busy b-white"></i>
                            </a>
                            <a href="#" className="avatar thumb-sm">
                              <img src={"../../../../scale/assets/dist/img/a2.png"} alt="..." />
                              <i className="away b-white"></i>
                            </a>
                            <a href="#" className="avatar thumb-sm">
                              <img src={"../../../../scale/assets/dist/img/a3.png"} alt="..." />
                              <i className="off b-white"></i>
                            </a>
                            <a href="#" className="btn btn-info btn-rounded font-bold">
                              +152
                            </a>
                          </div>
                          <p className="text-sm">Start at 2:00 PM, 12/5/2016</p>
                          <a href="#" className="btn btn-default btn-sm btn-rounded m-b-xs"><i className="fa fa-plus"></i> Take me in</a>
                        </div>
                        <div className="clearfix panel-footer">
                          <small className="text-muted pull-right">5m ago</small>
                          <a href="#" className="thumb-sm pull-left m-r">
                            <img src={"../../../../scale/assets/dist/img/a0.png"} alt="..." className="img-circle" />
                          </a>
                          <div className="clear">
                            <a href="#"><strong>Jonathan Omish</strong></a>
                            <small className="block text-muted">San Francisco, USA</small>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-md-4">
                      <section className="panel b-a">
                        <div className="panel-heading b-b">
                          <span className="badge bg-warning pull-right">10</span>
                          <a href="#" className="font-bold">Messages</a>
                        </div>
                        <ul className="list-group list-group-lg no-bg auto">                          
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src={"../../../../scale/assets/dist/img/a4.png"}alt="..." />
                              <i className="on b-white bottom"></i>
                            </span>
                            <span className="clear">
                              <span>Chris Fox</span>
                              <small className="text-muted clear text-ellipsis">What's up, buddy</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src={"../../../../scale/assets/dist/img/a5.png"} alt="..." />
                              <i className="on b-white bottom"></i>
                            </span>
                            <span className="clear">
                              <span>Amanda Conlan</span>
                              <small className="text-muted clear text-ellipsis">Come online and we need talk about the plans that we have discussed</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src={"../../../../scale/assets/dist/img/a6.png"} alt="..." />
                              <i className="busy b-white bottom"></i>
                            </span>
                            <span className="clear">
                              <span>Dan Doorack</span>
                              <small className="text-muted clear text-ellipsis">Hey, Some good news</small>
                            </span>
                          </a>
                          <a href="#" className="list-group-item clearfix">
                            <span className="pull-left thumb-sm avatar m-r">
                              <img src={"../../../../scale/assets/dist/img/a7.png"} alt="..." />
                              <i className="away b-white bottom"></i>
                            </span>
                            <span className="clear">
                              <span>Lauren Taylor</span>
                              <small className="text-muted clear text-ellipsis">Nice to talk with you.</small>
                            </span>
                          </a>
                        </ul>
                        <div className="clearfix panel-footer">
                          <div className="input-group">
                            <input type="text" className="form-control input-sm btn-rounded" placeholder="Search" />
                            <span className="input-group-btn">
                              <button type="submit" className="btn btn-default btn-sm btn-rounded"><i className="fa fa-search"></i></button>
                            </span>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-md-4">
                      <section className="panel b-light">
                        <header className="panel-heading"><strong>Calendar</strong></header>
                        <div id="calendar" className="bg-light dker m-l-n-xxs m-r-n-xxs"></div>
                        <div className="list-group">
                          <a href="#" className="list-group-item text-ellipsis">
                            <span className="badge bg-warning">7:30</span> 
                            Meet a friend
                          </a>
                          <a href="#" className="list-group-item text-ellipsis"> 
                            <span className="badge bg-success">9:30</span> 
                            Have a kick off meeting with .inc company
                          </a>
                        </div>
                      </section>                  
                    </div>
                  </div>
                </section>
              </section>
            </section>
            {/*<!-- side content --> */}
            <aside className="aside-md bg-black hide" id="sidebar">
              <section className="vbox animated fadeInRight">
                <section className="scrollable">
                  <div className="wrapper"><strong>Live feed</strong></div>
                  <ul className="list-group no-bg no-borders auto">
                    <li className="list-group-item">
                      <span className="fa-stack pull-left m-r-sm">
                        <i className="fa fa-circle fa-stack-2x text-success"></i>
                        <i className="fa fa-reply fa-stack-1x text-white"></i>
                      </span>
                      <span className="clear">
                        <a href="#">Goody@gmail.com</a> sent your email
                        <small className="icon-muted">13 minutes ago</small>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span className="fa-stack pull-left m-r-sm">
                        <i className="fa fa-circle fa-stack-2x text-danger"></i>
                        <i className="fa fa-file-o fa-stack-1x text-white"></i>
                      </span>
                      <span className="clear">
                        <a href="#">Mide@live.com</a> invite you to join a meeting
                        <small className="icon-muted">20 minutes ago</small>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span className="fa-stack pull-left m-r-sm">
                        <i className="fa fa-circle fa-stack-2x text-info"></i>
                        <i className="fa fa-map-marker fa-stack-1x text-white"></i>
                      </span>
                      <span className="clear">
                        <a href="#">Geoge@yahoo.com</a> is online
                        <small className="icon-muted">1 hour ago</small>
                      </span>
                    </li>
                    <li className="list-group-item">
                      <span className="fa-stack pull-left m-r-sm">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-info fa-stack-1x text-white"></i>
                      </span>
                      <span className="clear">
                        <a href="#"><strong>Admin</strong></a> post a info
                        <small className="icon-muted">1 day ago</small>
                      </span>
                    </li>
                  </ul>
                  <div className="wrapper"><strong>Friends</strong></div>
                  <ul className="list-group no-bg no-borders auto">
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-sm avatar">
                          <img src={"../../../../scale/assets/dist/img/a3.png"} alt="..." className="img-circle" />
                          <i className="on b-black bottom"></i>
                        </span>
                        <div className="media-body">
                          <div><a href="#">Chris Fox</a></div>
                          <small className="text-muted">about 2 minutes ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-sm avatar">
                          <img src={"../../../../scale/assets/dist/img/a2.png"} alt="..." />
                          <i className="on b-black bottom"></i>
                        </span>
                        <div className="media-body">
                          <div><a href="#">Amanda Conlan</a></div>
                          <small className="text-muted">about 2 hours ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-sm avatar">
                          <img src={"../../../../scale/assets/dist/img/a1.png"} alt="..." />
                          <i className="busy b-black bottom"></i>
                        </span>
                        <div className="media-body">
                          <div><a href="#">Dan Doorack</a></div>
                          <small className="text-muted">3 days ago</small>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media">
                        <span className="pull-left thumb-sm avatar">
                          <img src={"../../../../scale/assets/dist/img/a0.png"} alt="..." />
                          <i className="away b-black bottom"></i>
                        </span>
                        <div className="media-body">
                          <div><a href="#">Lauren Taylor</a></div>
                          <small className="text-muted">about 2 minutes ago</small>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </section>              
            </aside>
            {/*<!-- / side content -->*/}
          </section>
          <a href="#" className="hide nav-off-screen-block" data-toggle="class:nav-off-screen,open" data-target="#nav,html"></a>
        </section>        
    );
  }
}